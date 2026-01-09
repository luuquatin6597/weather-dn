import React from "react";
import { getWeatherIcon } from "../utils/helpers";

const WeatherCard = ({ weather }) => {
  return (
    <div className="main-weather-card">
      <div className="weather-icon-large">
        <img
          src={getWeatherIcon(weather.weather[0].icon)}
          alt={weather.weather[0].description}
        />
      </div>
      <div className="temperature-display">
        <span className="temp-value">{Math.round(weather.main.temp)}°</span>
        <div className="weather-status">
          <p className="description">{weather.weather[0].description}</p>
          <div className="temp-range">
            <span>↑ {Math.round(weather.main.temp_max)}°</span>
            <span>↓ {Math.round(weather.main.temp_min)}°</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
