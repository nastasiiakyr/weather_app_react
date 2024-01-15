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
        <FastSearch id="kyiv" city="Kyiv" />
        <FastSearch id="odesa" city="Odesa" />
        <FastSearch id="kharkiv" city="Kharkiv" />
        <FastSearch id="lviv" city="Lviv" />
        <FastSearch id="dnipro" city="Dnipro" />
      </div>

      {/* Current weather in the chosen city */}
      <CurWeatherCity />
    </div>
  );
}
