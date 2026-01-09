import React from "react";

const AdditionalInfo = ({ weather }) => {
  return (
    <div className="additional-info">
      <div className="info-row">
        <span className="info-label">Áp suất</span>
        <span className="info-value">{weather.main.pressure} hPa</span>
      </div>
      <div className="info-row">
        <span className="info-label">Tầm nhìn</span>
        <span className="info-value">
          {(weather.visibility / 1000).toFixed(1)} km
        </span>
      </div>
      <div className="info-row">
        <span className="info-label">Mây</span>
        <span className="info-value">{weather.clouds.all}%</span>
      </div>
    </div>
  );
};

export default AdditionalInfo;
