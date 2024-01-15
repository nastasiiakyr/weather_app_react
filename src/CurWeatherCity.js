import React from "react";

import "./CurWeatherCity.css";

export default function CurWeatherCity() {
  return (
    <div className="CurWeatherCity">
      {/* Current city and date */}
      <div className="current_city_date">
        <h1 className="current_city" id="current_city">
          Odesa
        </h1>

        <div className="current_date">
          <h3 className="current_day" id="current_day">
            Friday
          </h3>

          <h3 className="divider">|</h3>

          <h3 className="current_month">
            <span id="current_month">December </span>
            <span id="current_date">29</span>
          </h3>

          <h3 className="divider">|</h3>

          <h3 className="current_time">
            <span id="current_hours">15</span>:
            <span id="current_minutes">48</span>
          </h3>
        </div>
      </div>

      {/* Current temperature and condition */}
      <div className="current_temperature">
        <div class="weather_type">
          <img
            src="./img/icon-sunny-day.png"
            alt=""
            className="weather_type_icon weather_icon_js"
          />
          <div className="weather_type_text">
            <h3>
              Sky:
              <span id="weather_condition">Clear</span>
            </h3>
            <h3>
              Wind:
              <span id="wind_speed">4</span>
              km/h
            </h3>
          </div>
        </div>

        <div className="vertical_line">|</div>

        <div className="temperature">
          <h2 className="cur_temp_number" id="cur_temp_number">
            11
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
}
