import React from "react";
import { getWeatherIcon, getDayName, formatShortDate } from "../utils/helpers";

const ForecastCard = ({ day, index, onClick }) => {
  return (
    <div className="forecast-card" onClick={onClick}>
      <div className="forecast-date">
        <div className="day-name">{getDayName(day.dt, index)}</div>
        <div className="date-str">{formatShortDate(day.dt)}</div>
      </div>
      <div className="forecast-icon">
        <img
          src={getWeatherIcon(day.weather[0].icon)}
          alt={day.weather[0].description}
        />
      </div>
      <div className="forecast-temp">
        <span className="temp-max">{Math.round(day.temp.max)}°</span>
        <span className="temp-min">{Math.round(day.temp.min)}°</span>
      </div>
      <div className="forecast-desc">{day.weather[0].description}</div>
      <div className="forecast-details">
        <span>💧 {day.humidity}%</span>
        <span>🌬️ {day.wind_speed.toFixed(1)} m/s</span>
      </div>
    </div>
  );
};

export default ForecastCard;
