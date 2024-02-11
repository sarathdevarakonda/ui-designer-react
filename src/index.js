import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './App';
import reportWebVitals from './reportWebVitals';
import { offline } from "@redux-offline/redux-offline";
import offlineConfig from "@redux-offline/redux-offline/lib/defaults";
import { createStore } from "redux-dynamic-modules-core";
import { getSagaExtension } from "redux-dynamic-modules-saga";
import { getThunkExtension } from "redux-dynamic-modules-thunk";
import { Provider } from 'react-redux';
import MainView from './widgets/athens_weather';

const commonLoggerMiddleware = (store) => (next) => (action) => {
  console.log('Action:', action);
  return next(action);
};
const commonExtension = {
  middleware: [commonLoggerMiddleware],
};

const store = createStore({
  enhancements: [offline(offlineConfig)],
  extensions: [getThunkExtension(), getSagaExtension(), commonExtension],
  
});

const root = ReactDOM.createRoot(document.getElementById('root'));


const coreObj = {
  _layout: "dynamicchunk31", // Internal property to store the layout value
  _widgetIdToHash: {31:"31",43:"43",150:"150",187:"187",543:"543"},
  // Getter method for layout
  get layout() {
    return this._layout; // Access the internal property
  },

  get widgetIdToHash() {
    return this._widgetIdToHash
  },

  set widgetIdToHash(val) {
    this._widgetIdToHash = val
  },
  // Setter method for layout
  set layout(val) {
    this._layout = val; // Update the internal property
    this.layoutChangeListener(val); // Call the listener function
  },

  // Listener function for layout changes
  layoutChangeListener: function(val) {},

  // Method to register layout change listener
  registerLayoutChangeListener: function(externalListenerFunction) {
    this.layoutChangeListener = externalListenerFunction; // Assign the listener function
  },
};





window.coreObj = coreObj
root.render(
  <React.StrictMode>
    <Provider store={store}> {/* Wrap your Root component with Provider */}
           <MainView/>
           <Root loadableWidgets={window.loadableWidgets}/>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
