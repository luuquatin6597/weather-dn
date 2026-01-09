import React from "react";

const ErrorMessage = ({ error, onRetry }) => {
  return (
    <div className="App error-screen">
      <div className="error">
        <h2>⚠️ Lỗi</h2>
        <p>{error}</p>
        <p className="note">
          💡 Lưu ý: Bạn cần đăng ký API key miễn phí tại{" "}
          <a
            href="https://openweathermap.org/api"
            target="_blank"
            rel="noopener noreferrer"
          >
            OpenWeatherMap
          </a>{" "}
          và thay thế vào file .env
        </p>
        <button onClick={onRetry}>Thử lại</button>
      </div>
    </div>
  );
};

export default ErrorMessage;
