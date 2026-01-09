import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="App loading-screen">
      <div className="loading">
        <div className="spinner"></div>
        <p>Đang tải dữ liệu thời tiết...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
