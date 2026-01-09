import React, { useState, useEffect } from "react";
import { weatherAPI } from "../services/weatherAPI";
import { getWeatherTheme } from "../utils/weatherTheme";
import LocationHeader from "../components/LocationHeader";
import WeatherCard from "../components/WeatherCard";
import WeatherStats from "../components/WeatherStats";
import AdditionalInfo from "../components/AdditionalInfo";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";
import { getWeatherIcon } from "../utils/helpers";

const HomePage = ({ onShowForecast }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [locationError, setLocationError] = useState(false);

  useEffect(() => {
    fetchWeather();
    const interval = setInterval(fetchWeather, 600000); // Cập nhật mỗi 10 phút
    return () => clearInterval(interval);
  }, []);

  const fetchWeather = async () => {
    try {
      setLoading(true);
      setLocationError(false);

      // Thử lấy vị trí người dùng
      try {
        const { lat, lon } = await weatherAPI.getUserLocation();
        const data = await weatherAPI.getCurrentWeatherByCoords(lat, lon);
        setWeather(data);
        setError(null);
      } catch (locationErr) {
        console.warn(
          "Không thể lấy vị trí, sử dụng Đà Nẵng mặc định:",
          locationErr
        );
        setLocationError(true);

        // Fallback về Đà Nẵng nếu không lấy được vị trí
        const data = await weatherAPI.getCurrentWeather("Da Nang", "VN");
        setWeather(data);
        setError(null);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage error={error} onRetry={fetchWeather} />;

  const theme = getWeatherTheme(weather);

  return (
    <div className="App" style={{ background: theme.gradient }}>
      <div className={`weather-container ${theme.name}`}>
        <div className="weather-icon">
          <img
            src={getWeatherIcon(weather.weather[0].icon)}
            alt={weather.weather[0].description}
          />
        </div>
        <LocationHeader city="Đà Nẵng" />

        {weather && (
          <>
            <WeatherCard weather={weather} />
            <WeatherStats weather={weather} />
            <AdditionalInfo weather={weather} />

            <button className="refresh-button" onClick={fetchWeather}>
              <span className="refresh-icon">🔄</span> Làm mới
            </button>

            <button className="forecast-button" onClick={onShowForecast}>
              📅 Dự báo 5 ngày
            </button>
          </>
        )}
      </div>
      {/* <div class="bg">
        <div class="mountain">
          <div class="mountain-top">
            <div class="mountain-cap-1"></div>
            <div class="mountain-cap-2"></div>
            <div class="mountain-cap-3"></div>
          </div>
        </div>
        <div class="mountain-two">
          <div class="mountain-top">
            <div class="mountain-cap-1"></div>
            <div class="mountain-cap-2"></div>
            <div class="mountain-cap-3"></div>
          </div>
        </div>
        <div class="mountain-three">
          <div class="mountain-top">
            <div class="mountain-cap-1"></div>
            <div class="mountain-cap-2"></div>
            <div class="mountain-cap-3"></div>
          </div>
        </div>
        <div class="cloud"></div>
      </div> */}
    </div>
  );
};

export default HomePage;
