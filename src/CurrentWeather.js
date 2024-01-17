import React from "react";

import Search from "./Search";
import FastSearch from "./FastSearch";
import CurWeatherCity from "./CurWeatherCity";

import "./CurrentWeather.css";

export default function CurrentWeather() {
  return (
    <div className="CurrentWeather">
      <div className="overlay" />

      {/* Search */}
      <Search />
      <div class="fast_search">
        <FastSearch id="currentLoc" city="Current location" />
        <FastSearch city="Kyiv" />
        <FastSearch city="Odesa" />
        <FastSearch city="Kharkiv" />
        <FastSearch city="Lviv" />
        <FastSearch city="Dnipro" />
      </div>

      {/* Current weather in the chosen city */}
      <CurWeatherCity city="Odesa"/>
    </div>
  );
}
