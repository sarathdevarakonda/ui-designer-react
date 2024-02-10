import * as React from "react";
import {produce} from "immer";
import { call, put } from "redux-saga/effects";
import { connect } from "react-redux";
import { DynamicModuleLoader } from "redux-dynamic-modules-react";

const WeatherLoaded = "weather/athens";
const LayoutChanged = "mainlayout/changed"

const weatherLoaded = weather => {
    return {
        type: WeatherLoaded,
        payload: weather,
    };
};

const layoutChanged = layoutId => {
    return {
        type : LayoutChanged,
        payload : layoutId
    }
}

function getWeatherModule() {
    return {
        // Unique id of the module
        id: "athens_weather",
        // Maps the Store key to the reducer
        reducerMap: {
            athensWeather: weatherReducer,
        },
        // This module uses redux-saga middleware
        // This property will be be used by the SagaExtension
        // to run sagas for the moduleD
        sagas: [weatherSaga],
    };
}

const weatherReducer = (state, action) => {
    return produce(state || {
        layout : window.coreObj.layout 
    }, draft => {
        switch (action.type) {
            case WeatherLoaded: {
                draft.weather = action.payload;
                break;
            }
            case LayoutChanged: {
                draft.layout = action.payload.layoutId
                break;
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
        "https://api.openweathermap.org/data/2.5/weather?q=athens&APPID=1362c34423375d167d694489b1c74080";

    const response = yield call(fetch, url);
    const json = yield call([response, response.json]);

    yield put(weatherLoaded(json));
}

const Weather = ({ loading, name, temperature, description }) => {
    if (loading) {
        return <div className="weather-root widget">Loading Weather...</div>;
    }

    return (
       <div></div>
    );
};

const mapStateToProps = state => {
    if (!state.athensWeather) {
        return {
            loading: true,
        };
    }

    return {
        layout: state.athensWeather.layout
    };
};

const ConnectedWeather = connect(mapStateToProps)(Weather);

export default function MainView() {
    return (
        <DynamicModuleLoader modules={[getWeatherModule()]}>
            <ConnectedWeather />
        </DynamicModuleLoader>
    );
}
