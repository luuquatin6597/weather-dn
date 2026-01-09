export const getWeatherTheme = (weather) => {
  if (!weather) {
    return { primary: "#667eea", secondary: "#764ba2", name: "default" };
  }

  const weatherId = weather.weather[0].id;
  const icon = weather.weather[0].icon;
  const isNight = icon.includes("n");

  // Ban đêm
  if (isNight) {
    return {
      primary: "#1a1a2e",
      secondary: "#16213e",
      gradient:
        "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",
      name: "night",
    };
  }

  // Thunderstorm (200-232)
  if (weatherId >= 200 && weatherId < 300) {
    return {
      primary: "#4a5568",
      secondary: "#2d3748",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      name: "thunderstorm",
    };
  }

  // Drizzle (300-321) hoặc Rain (500-531)
  if (
    (weatherId >= 300 && weatherId < 400) ||
    (weatherId >= 500 && weatherId < 600)
  ) {
    return {
      primary: "#4299e1",
      secondary: "#3182ce",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      name: "rain",
    };
  }

  // Snow (600-622)
  if (weatherId >= 600 && weatherId < 700) {
    return {
      primary: "#90cdf4",
      secondary: "#63b3ed",
      gradient: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)",
      name: "snow",
    };
  }

  // Atmosphere: Mist, Smoke, Haze, Fog (700-781)
  if (weatherId >= 700 && weatherId < 800) {
    return {
      primary: "#a0aec0",
      secondary: "#718096",
      gradient: "linear-gradient(135deg, #bdc3c7 0%, #8e9eab 100%)",
      name: "fog",
    };
  }

  // Clear (800)
  if (weatherId === 800) {
    return {
      primary: "#f6ad55",
      secondary: "#ed8936",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      name: "clear",
    };
  }

  // Clouds (801-804)
  if (weatherId > 800) {
    return {
      primary: "#a0aec0",
      secondary: "#718096",
      gradient: "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)",
      name: "clouds",
    };
  }

  return {
    primary: "#667eea",
    secondary: "#764ba2",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    name: "default",
  };
};
