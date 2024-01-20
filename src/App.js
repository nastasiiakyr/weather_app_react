import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";

import { CurrentLocation } from "./CurrentLocation";
import Search from "./Search";
import FastSearch from "./FastSearch";
import CurWeatherCity from "./CurWeatherCity";
import ForecastDayCard from "./ForecastDayCard";
import Footer from "./Footer";

import "./App.css";

export default function App() {
  const currentCity = CurrentLocation();
  const [city, setCity] = useState("");

  useEffect(() => {
    currentCity ? setCity(currentCity) : setCity("Odesa");
  }, [currentCity]);

  function handleNewCity(newCity) {
    setCity(newCity);
  }

  return (
    <div className="App">
      {/* Weater card area */}

      <div className="container">
        {/* Current weather */}
        <div className="currentWeather">
          <div className="overlay" />

          {/* Search */}
          <Search searchNewCity={handleNewCity} />
          <FastSearch fastSearchCity={handleNewCity} />

          {/* Current weather in the chosen city */}
          <CurWeatherCity city={city} />
        </div>

        {/* Weather forecast */}
        <div id="forecast">
          <div className="forecast">
            <ForecastDayCard
              image="./img/icon-snow.png"
              temperatureMax={12}
              temperatureMin={4}
              day="Saturday"
            />
            <ForecastDayCard
              image="./img/icon-snow.png"
              temperatureMax={12}
              temperatureMin={4}
              day="Sunday"
            />
            <ForecastDayCard
              image="./img/icon-snow.png"
              temperatureMax={12}
              temperatureMin={4}
              day="Monday"
            />
            <ForecastDayCard
              image="./img/icon-snow.png"
              temperatureMax={12}
              temperatureMin={4}
              day="Tuesday"
            />
            <ForecastDayCard
              image="./img/icon-snow.png"
              temperatureMax={12}
              temperatureMin={4}
              day="Wednesday"
            />
          </div>
        </div>

        {/* Link to the code */}
        <Footer />
      </div>
    </div>
  );
}
