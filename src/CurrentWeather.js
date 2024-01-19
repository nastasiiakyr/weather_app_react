import React, { useEffect, useState } from "react";

import { CurrentLocation } from "./CurrentLocation";
import Search from "./Search";
import FastSearch from "./FastSearch";
import CurWeatherCity from "./CurWeatherCity";

import "./CurrentWeather.css";

export default function CurrentWeather() {
  const currentCity = CurrentLocation();
  const [city, setCity] = useState("");

  useEffect(() => {
    (currentCity)?setCity(currentCity):setCity("Odesa")
  }, [currentCity]);

  function handleNewCity(newCity) {
    setCity(newCity);
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
