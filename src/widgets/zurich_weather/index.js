import * as React from "react";
import {produce} from "immer";
import { call, put } from "redux-saga/effects";
import { connect } from "react-redux";
import { DynamicModuleLoader } from "redux-dynamic-modules-react";
import  { getWidget } from "../../widgest";
import { Layout, Menu } from 'antd';

import { Row, Col } from 'antd';

const WeatherLoaded = "weather/zurich";
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
        id: "zurich_weather",
        // Maps the Store key to the reducer
        reducerMap: {
            zurichWeather: weatherReducer,
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
        space4 : null
    }, draft => {
        switch (action.type) {
            case WeatherLoaded: {
                draft.weather = action.payload;
                break;
            }
            case AttachSpace: {
                draft["space" + action.payload.spaceId] = action.payload
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
        "https://api.openweathermap.org/data/2.5/weather?q=zurich&APPID=1362c34423375d167d694489b1c74080";

    const response = yield call(fetch, url);
    const json = yield call([response, response.json]);

    yield put(weatherLoaded(json));
}


const MainLayout = ({space1, space2, space3, space4}) => {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <h1>Weather Views</h1>
        <Layout className="site-layout">
          <Content style={{ margin: '0 16px' }}>
          <div className="container">
            <Row gutter={16}>
                <Col span={12}>
                <div className="item">
                    {space1 && getWidget(space1.id)}
                 </div>
                </Col>
                <Col span={12}>
                <div className="item">
                    {space2 && getWidget(space2.id)}
                </div>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={12}>
                <div className="item">
                    {space3 && getWidget(space3.id)}
                </div>
                </Col>
                <Col span={12}>
                <div className="item">
                    {space4 && getWidget(space4.id)}
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
    if (!state.zurichWeather) {
        return {
            loading: true,
        };
    }

    return {
        space1: state.zurichWeather.space1,
        space2: state.zurichWeather.space2,
        space3: state.zurichWeather.space3,
        space4: state.zurichWeather.space4
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
