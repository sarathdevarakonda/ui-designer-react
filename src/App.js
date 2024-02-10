import React, { useState } from "react";

import { Provider, useDispatch, useSelector } from "react-redux";
import { Checkbox, InputNumber } from "antd";
import { getWidget } from "./widgest";
import "./App.css";
import { useEffect } from "react";

const ComponentSpaces = () => {
  const [widgetValues, setWidgetValues] = useState({
    sydney: 0,
    tokyo: 0,
    doha: 0
  });

  const dispatch = useDispatch(); // Get the dispatch function

  const handleInputChange = (city) => (value) => {
    setWidgetValues((prevState) => ({
      ...prevState,
      [city]: value
    }));

    dispatch({
      type: "layout/attachspace",
      payload: {
        id: city,
        spaceId: value
      }
    });
  };

  return (
    <div>
      <h2>City Inputs</h2>
      {Object.entries(widgetValues).map(([city, value]) => (
        <div key={city}>
          <span>{city}</span>
          <InputNumber
            min={0}
            max={4}
            value={value}
            onChange={handleInputChange(city)}
          />
        </div>
      ))}
    </div>
    
  );
}



const MyComponent = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    window.coreObj.registerLayoutChangeListener((val) => {
      dispatch({
        type: "mainlayout/changed",
        payload: {
          // Include any relevant data about the change
          layoutId: val
        }
      });
    })
    


    // Remove the event listener when the component is unmounted
    return () => {
      
    };
  }, [dispatch]); // Ensure the effect runs only once

  return null; // This component doesn't render anything visible
};



const App = () => {
  
  const layout = useSelector(state => state.athensWeather.layout);
  
  return (
    <div>
      <ComponentSpaces/>
      <MyComponent/>
      <>
        {getWidget(layout)}
      </>
    </div>
    
  );
};


export default App;

