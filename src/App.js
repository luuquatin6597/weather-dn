import React, { useState } from "react";
import HomePage from "./pages/HomePage";
import ForecastPage from "./pages/ForecastPage";
import "./App.css";
import "./responsive-enhancements.css";

function App() {
  const [showForecast, setShowForecast] = useState(false);

  if (showForecast) {
    return <ForecastPage onBack={() => setShowForecast(false)} />;
  }

  return <HomePage onShowForecast={() => setShowForecast(true)} />;
}

export default App;
