import React, { useState, useEffect } from "react";
import axios from "axios";

import FormatedDate from "./FormatedDate";

import "./CurWeatherCity.css";

export default function CurWeatherCity(props) {
  const [curWeatheData, setCurWeatherData] = useState({ loaded: false });

  useEffect(() => {
    let apiKeyWeather = "8cd9be374c7c96c39a9fe73f4bf2f055";
    let apiUrlCity = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKeyWeather}&units=metric`;

    axios.get(apiUrlCity).then(handleResponse);
  }, [props.city]);

  function handleResponse(response) {
    setCurWeatherData({
      loaded: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      lat: response.data.coord.lat,
      lon: response.data.coord.lon,
      temperature: response.data.main.temp,
      condition: response.data.weather[0].main,
      wind: response.data.wind.speed * 3.6,
    });
  }

  if (curWeatheData.loaded) {
    return (
      <div className="CurWeatherCity">
        {/* Current city and date */}
        <div className="current_city_date">
          <h1 className="current_city">{curWeatheData.city}</h1>

          {/* <FormatedDate lat={curWeatheData.lat} lon={curWeatheData.lon} /> */}
        </div>

        {/* Current temperature and condition */}
        <div className="current_temperature">
          <div className="weather_type">
            <img
              src="./img/icon-sunny-day.png"
              alt=""
              className="weather_type_icon weather_icon_js"
            />
            <div className="weather_type_text">
              <h3>
                Sky:
                <span id="weather_condition">{curWeatheData.condition}</span>
              </h3>
              <h3>
                Wind:
                <span id="wind_speed">
                  {Math.round(curWeatheData.wind * 10) / 10}
                </span>
                km/h
              </h3>
            </div>
          </div>

          <div className="vertical_line">|</div>

          <div className="temperature">
            <h2 className="cur_temp_number" id="cur_temp_number">
              {Math.round(curWeatheData.temperature)}
            </h2>
            <p className="degrees">
              <a
                href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md"
                className="celsius focused"
                id="celsius"
              >
                °C
              </a>
              <a
                href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md"
                className="fahrenheit active"
                id="fahrenheit"
              >
                °F
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    return "";
  }
}
