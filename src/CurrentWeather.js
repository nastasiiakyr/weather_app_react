import React, { useState } from "react";

import Search from "./Search";
import FastSearch from "./FastSearch";
import CurWeatherCity from "./CurWeatherCity";

import "./CurrentWeather.css";

export default function CurrentWeather() {
  const [city, setCity] = useState("Kyiv");

  function handleNewCity(newCity) {
    setCity(newCity);
    console.log(city);
  }

  return (
    <div className="CurrentWeather">
      <div className="overlay" />

      {/* Search */}
      <Search searchNewCity={handleNewCity} />
      <FastSearch fastSearchCity={handleNewCity} />

      {/* Current weather in the chosen city */}
      <CurWeatherCity city={city} />
    </div>
  );
}
