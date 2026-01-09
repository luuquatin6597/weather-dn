import React from "react";
import { getWeatherIcon, getDayName, formatShortDate } from "../utils/helpers";

const ForecastDetail = ({ day, index, onClose }) => {
  if (!day) return null;

  return (
    <div className="forecast-detail-overlay" onClick={onClose}>
      <div
        className="forecast-detail-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-button" onClick={onClose}>
          ✕
        </button>

        <div className="detail-header">
          <h2>{getDayName(day.dt, index)}</h2>
          <p className="detail-date">{formatShortDate(day.dt)}</p>
        </div>

        <div className="detail-main">
          <img
            src={getWeatherIcon(day.weather[0].icon)}
            alt={day.weather[0].description}
            className="detail-icon"
          />
          <div className="detail-temp-main">
            <span className="detail-temp-value">
              {Math.round(day.temp.max)}°
            </span>
            <p className="detail-description">{day.weather[0].description}</p>
          </div>
        </div>

        <div className="detail-temp-range">
          <div className="temp-item">
            <span className="temp-label">Cao nhất</span>
            <span className="temp-value-large">
              {Math.round(day.temp.max)}°C
            </span>
          </div>
          <div className="temp-item">
            <span className="temp-label">Thấp nhất</span>
            <span className="temp-value-large">
              {Math.round(day.temp.min)}°C
            </span>
          </div>
        </div>

        <div className="detail-stats-grid">
          <div className="detail-stat-item">
            <div className="stat-icon-large">🌡️</div>
            <div className="stat-content">
              <div className="stat-label">Nhiệt độ sáng</div>
              <div className="stat-value">
                {Math.round(day.temp.morn || day.temp.min)}°C
              </div>
            </div>
          </div>

          <div className="detail-stat-item">
            <div className="stat-icon-large">☀️</div>
            <div className="stat-content">
              <div className="stat-label">Nhiệt độ trưa</div>
              <div className="stat-value">
                {Math.round(day.temp.day || day.temp.max)}°C
              </div>
            </div>
          </div>

          <div className="detail-stat-item">
            <div className="stat-icon-large">🌙</div>
            <div className="stat-content">
              <div className="stat-label">Nhiệt độ đêm</div>
              <div className="stat-value">
                {Math.round(day.temp.night || day.temp.min)}°C
              </div>
            </div>
          </div>

          <div className="detail-stat-item">
            <div className="stat-icon-large">💧</div>
            <div className="stat-content">
              <div className="stat-label">Độ ẩm</div>
              <div className="stat-value">{day.humidity}%</div>
            </div>
          </div>

          <div className="detail-stat-item">
            <div className="stat-icon-large">🌬️</div>
            <div className="stat-content">
              <div className="stat-label">Tốc độ gió</div>
              <div className="stat-value">{day.wind_speed.toFixed(1)} m/s</div>
            </div>
          </div>

          <div className="detail-stat-item">
            <div className="stat-icon-large">🔽</div>
            <div className="stat-content">
              <div className="stat-label">Áp suất</div>
              <div className="stat-value">{day.pressure || "N/A"} hPa</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForecastDetail;
