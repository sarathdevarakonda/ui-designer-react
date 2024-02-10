import * as React from "react";
import {produce} from "immer";
import { call, put } from "redux-saga/effects";
import { connect } from "react-redux";
import { DynamicModuleLoader } from "redux-dynamic-modules-react";

const WeatherLoaded = "weather/manila";

const weatherLoaded = weather => {
    return {
        type: WeatherLoaded,
        payload: weather,
    };
};

function getWeatherModule() {
    return {
        // Unique id of the module
        id: "manila_weather",
        // Maps the Store key to the reducer
        reducerMap: {
            manilaWeather: weatherReducer,
        },
        // This module uses redux-saga middleware
        // This property will be be used by the SagaExtension
        // to run sagas for the moduleD
        sagas: [weatherSaga],
    };
}

const weatherReducer = (state, action) => {
    return produce(state || {}, draft => {
        switch (action.type) {
            case WeatherLoaded: {
                draft.weather = action.payload;
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
        "https://api.openweathermap.org/data/2.5/weather?q=manila&APPID=1362c34423375d167d694489b1c74080";

    const response = yield call(fetch, url);
    const json = yield call([response, response.json]);

    yield put(weatherLoaded(json));
}

const Weather = ({ loading, name, temperature, description }) => {
    if (loading) {
        return <div className="weather-root widget">Loading Weather...</div>;
    }

    return (
        <div className="weather-root widget">
            <h2>{name}</h2>
            <div>{description}</div>
            <div>{temperature} °C</div>
        </div>
    );
};

const mapStateToProps = state => {
    if (!state.manilaWeather || !state.manilaWeather.weather) {
        return {
            loading: true,
        };
    }

    return {
        name: state.manilaWeather.weather.name,
        temperature: Math.round(state.manilaWeather.weather.main.temp - 273),
        description: state.manilaWeather.weather.weather[0].description,
    };
};

const ConnectedWeather = connect(mapStateToProps)(Weather);

export default function Dynamic() {
    return (
        <DynamicModuleLoader modules={[getWeatherModule()]}>
            <ConnectedWeather />
        </DynamicModuleLoader>
    );
}
