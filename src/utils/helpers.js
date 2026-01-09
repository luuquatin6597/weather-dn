export const getWeatherIcon = (iconCode) => {
  return `https://openweathermap.org/img/wn/${iconCode}@4x.png`;
};

export const formatDate = () => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  return new Date().toLocaleDateString("vi-VN", options);
};

export const formatShortDate = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleDateString("vi-VN", {
    day: "numeric",
    month: "numeric",
  });
};

export const getDayName = (timestamp, index) => {
  if (index === 0) return "Hôm nay";
  const date = new Date(timestamp * 1000);
  return date.toLocaleDateString("vi-VN", { weekday: "long" });
};
