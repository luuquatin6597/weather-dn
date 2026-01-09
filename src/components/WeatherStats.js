import React from "react";

const WeatherStats = ({ weather }) => {
  return (
    <div className="weather-stats">
      <div className="stat-card">
        <div className="stat-icon">💧</div>
        <div className="stat-info">
          <div className="stat-value">{weather.main.humidity}%</div>
          <div className="stat-label">Độ ẩm</div>
        </div>
      </div>
      <div className="stat-card">
        <div className="stat-icon">🌬️</div>
        <div className="stat-info">
          <div className="stat-value">{weather.wind.speed} m/s</div>
          <div className="stat-label">Tốc độ gió</div>
        </div>
      </div>
      <div className="stat-card">
        <div className="stat-icon">🌡️</div>
        <div className="stat-info">
          <div className="stat-value">
            {Math.round(weather.main.feels_like)}°
          </div>
          <div className="stat-label">Cảm nhận</div>
        </div>
      </div>
    </div>
  );
};

export default WeatherStats;
