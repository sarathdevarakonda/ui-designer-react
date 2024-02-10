import * as React from "react";
import {produce} from "immer";
import { call, put } from "redux-saga/effects";
import { connect } from "react-redux";
import { DynamicModuleLoader } from "redux-dynamic-modules-react";
import  { getWidget } from "../../widgest";
import { Layout, Menu } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Row, Col } from 'antd';

const WeatherLoaded = "weather/amsterdam";
const AttachSpace = "layout/attachspace";


const { Sider, Content } = Layout;
const { SubMenu } = Menu;
const weatherLoaded = weather => {
    return {
        type: WeatherLoaded,
        payload: weather,
    };
};

function getWeatherModule() {
    return {
        // Unique id of the module
        id: "amsterdam_weather",
        // Maps the Store key to the reducer
        reducerMap: {
            amsterdamWeather: weatherReducer,
        },
        // This module uses redux-saga middleware
        // This property will be be used by the SagaExtension
        // to run sagas for the moduleD
        sagas: [weatherSaga],
    };
}

const weatherReducer = (state, action) => {
    return produce(state || {
        space1 : null,
        space2 : null,
        space3 : null,
        space4 : null,
        spaces : []
    }, draft => {
        switch (action.type) {
            case WeatherLoaded: {
                draft.weather = action.payload;
                break;
            }
            case AttachSpace: {
                draft.spaces[action.payload.spaceId] = action.payload
            }

            default: {
                //do nothing
            }
        }
    });
};



 function* weatherSaga() {
    yield call(loadWeatherData);
}

function* loadWeatherData() {
    const url =
        "https://api.openweathermap.org/data/2.5/weather?q=amsterdam&APPID=1362c34423375d167d694489b1c74080";

    const response = yield call(fetch, url);
    const json = yield call([response, response.json]);

    yield put(weatherLoaded(json));
}


const MainLayout = ({space1, space2, space3, space4, spaces}) => {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Option 1
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />} />
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Content style={{ margin: '0 16px' }}>
          <div className="container">
            <Row gutter={16}>
                <Col span={12}>
                <div className="item">
                    {spaces[1] && getWidget(spaces[1].id)}
                 </div>
                </Col>
                <Col span={12}>
                <div className="item">
                    {spaces[2] && getWidget(spaces[2].id)}
                </div>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={12}>
                <div className="item">
                    {spaces[3] && getWidget(spaces[3].id)}
                </div>
                </Col>
                <Col span={12}>
                <div className="item">
                    {spaces[4] && getWidget(spaces[4].id)}
                </div>
                </Col>
            </Row>
    </div>
            
          </Content>
        </Layout>
      </Layout>
    );
  };

const mapStateToProps = state => {
    if (!state.amsterdamWeather) {
        return {
            loading: true,
        };
    }

    return {
        space1: state.amsterdamWeather.space1,
        space2: state.amsterdamWeather.space2,
        space3: state.amsterdamWeather.space3,
        space4: state.amsterdamWeather.space4,
        spaces : state.amsterdamWeather.spaces
    };
};

const ConnectedWeather = connect(mapStateToProps)(MainLayout);

export default function Dynamic() {
    return (
        <DynamicModuleLoader modules={[getWeatherModule()]}>
            <ConnectedWeather />
        </DynamicModuleLoader>
    );
}
