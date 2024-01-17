import React from "react";

import CurWeatherCity from "./CurWeatherCity";

import "./FastSearch.css";

export default function FastSearch(props) {
  function seeForecast(event) {
    event.preventDefault();
    return <CurWeatherCity city={props.city} />;
  }
  return (
    <a href="/" onClick={seeForecast} className="city">
      {props.city}
    </a>
  );
}
