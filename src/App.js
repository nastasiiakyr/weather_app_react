import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import CurrentWeather from "./CurrentWeather";
import ForecastDayCard from "./ForecastDayCard";
import Footer from "./Footer";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      {/* Weater card area */}

      <div className="container">
        {/* Current weather */}
        <CurrentWeather />

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
