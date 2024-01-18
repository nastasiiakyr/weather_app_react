import React from "react";

import "./FastSearch.css";

export default function FastSearch({ fastSearchCity }) {
  let fastSearchCities = [
    "Current location",
    "Kyiv",
    "Odesa",
    "Kharkiv",
    "Lviv",
    "Dnipro",
  ];

  return (
    <div className="FastSearch">
      {fastSearchCities.map((city, index) => {
        return (
          <a
            key={index}
            href="/"
            onClick={(event) => {
              event.preventDefault();
              fastSearchCity(city);
            }}
            className="city"
          >
            {city}
          </a>
        );
      })}
    </div>
  );
}
