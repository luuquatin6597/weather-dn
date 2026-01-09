import React from "react";
import { formatDate } from "../utils/helpers";

const LocationHeader = ({ city = "Đà Nẵng" }) => {
  return (
    <div className="location-header">
      <div className="location-icon">📍</div>
      <div className="location-info">
        <h1>{city}</h1>
        <p className="date">{formatDate()}</p>
      </div>
    </div>
  );
};

export default LocationHeader;
