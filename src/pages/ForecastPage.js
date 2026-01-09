import React, { useState, useEffect } from "react";
import { weatherAPI } from "../services/weatherAPI";
import { getWeatherTheme } from "../utils/weatherTheme";
import ForecastCard from "../components/ForecastCard";
import ForecastDetail from "../components/ForecastDetail";
import LoadingSpinner from "../components/LoadingSpinner";

const ForecastPage = ({ onBack }) => {
  const [forecast, setForecast] = useState(null);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [locationError, setLocationError] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      setLocationError(false);

      // Thử lấy vị trí người dùng
      try {
        const { lat, lon } = await weatherAPI.getUserLocation();
        const [weatherData, forecastData] = await Promise.all([
          weatherAPI.getCurrentWeatherByCoords(lat, lon),
          weatherAPI.getForecastByCoords(lat, lon),
        ]);
        setWeather(weatherData);
        setForecast(forecastData);
      } catch (locationErr) {
        console.warn(
          "Không thể lấy vị trí, sử dụng Đà Nẵng mặc định:",
          locationErr
        );
        setLocationError(true);

        // Fallback về Đà Nẵng nếu không lấy được vị trí
        const [weatherData, forecastData] = await Promise.all([
          weatherAPI.getCurrentWeather("Da Nang", "VN"),
          weatherAPI.getForecast("Da Nang", "VN"),
        ]);
        setWeather(weatherData);
        setForecast(forecastData);
      }
    } catch (err) {
      console.error("Lỗi khi lấy dữ liệu:", err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <LoadingSpinner />;

  const theme = getWeatherTheme(weather);

  return (
    <div className="App" style={{ background: theme.gradient }}>
      <div className={`weather-container forecast-view ${theme.name}`}>
        <div className="forecast-header">
          <button className="back-button" onClick={onBack}>
            ← Quay lại
          </button>
          <h2>Dự báo 5 ngày</h2>
        </div>

        {forecast && forecast.length > 0 ? (
          <div className="forecast-list">
            {forecast.slice(0, 5).map((day, index) => (
              <ForecastCard
                key={day.dt}
                day={day}
                index={index}
                onClick={() => {
                  setSelectedDay(day);
                  setSelectedIndex(index);
                }}
              />
            ))}
          </div>
        ) : (
          <div className="no-forecast">
            <p>Không thể tải dữ liệu dự báo</p>
            <p className="note-small">
              Vui lòng kiểm tra API key hoặc thử lại sau
            </p>
          </div>
        )}
      </div>

      {selectedDay && (
        <ForecastDetail
          day={selectedDay}
          index={selectedIndex}
          onClose={() => {
            setSelectedDay(null);
            setSelectedIndex(null);
          }}
        />
      )}
    </div>
  );
};

export default ForecastPage;
