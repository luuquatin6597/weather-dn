const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const weatherAPI = {
  // Lấy vị trí người dùng
  getUserLocation: () => {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error("Trình duyệt không hỗ trợ Geolocation"));
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (error) => {
          let message = "Không thể lấy vị trí";
          switch (error.code) {
            case error.PERMISSION_DENIED:
              message = "Người dùng từ chối chia sẻ vị trí";
              break;
            case error.POSITION_UNAVAILABLE:
              message = "Thông tin vị trí không khả dụng";
              break;
            case error.TIMEOUT:
              message = "Hết thời gian chờ lấy vị trí";
              break;
            default:
              message = "Lỗi không xác định khi lấy vị trí";
          }
          reject(new Error(message));
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0,
        }
      );
    });
  },

  // Lấy thời tiết theo tọa độ
  getCurrentWeatherByCoords: async (lat, lon) => {
    const response = await fetch(
      `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=vi`
    );

    if (!response.ok) {
      throw new Error("Không thể lấy dữ liệu thời tiết");
    }

    return await response.json();
  },

  // Lấy dự báo theo tọa độ
  getForecastByCoords: async (lat, lon) => {
    const response = await fetch(
      `${BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=vi`
    );

    if (!response.ok) {
      throw new Error("Không thể lấy dữ liệu dự báo");
    }

    const data = await response.json();

    // Xử lý dữ liệu: Lấy 1 dự báo mỗi ngày (12:00 PM)
    const dailyData = [];
    const processedDates = new Set();

    data.list.forEach((item) => {
      const date = new Date(item.dt * 1000);
      const dateString = date.toDateString();

      if (!processedDates.has(dateString)) {
        const hour = date.getHours();
        if (hour >= 12 && hour <= 15) {
          dailyData.push({
            dt: item.dt,
            temp: {
              max: item.main.temp_max,
              min: item.main.temp_min,
            },
            weather: item.weather,
            humidity: item.main.humidity,
            wind_speed: item.wind.speed,
          });
          processedDates.add(dateString);
        }
      }
    });

    if (dailyData.length < 5) {
      dailyData.length = 0;
      processedDates.clear();

      data.list.forEach((item) => {
        const date = new Date(item.dt * 1000);
        const dateString = date.toDateString();

        if (!processedDates.has(dateString) && dailyData.length < 5) {
          dailyData.push({
            dt: item.dt,
            temp: {
              max: item.main.temp_max,
              min: item.main.temp_min,
            },
            weather: item.weather,
            humidity: item.main.humidity,
            wind_speed: item.wind.speed,
          });
          processedDates.add(dateString);
        }
      });
    }

    return dailyData;
  },

  // Lấy thời tiết hiện tại theo tên thành phố
  getCurrentWeather: async (city, country) => {
    const response = await fetch(
      `${BASE_URL}/weather?q=${encodeURIComponent(
        city
      )},${country}&appid=${API_KEY}&units=metric&lang=vi`
    );

    if (!response.ok) {
      throw new Error("Không thể lấy dữ liệu thời tiết");
    }

    return await response.json();
  },

  // Lấy dự báo 5 ngày
  getForecast: async (city, country) => {
    const response = await fetch(
      `${BASE_URL}/forecast?q=${encodeURIComponent(
        city
      )},${country}&appid=${API_KEY}&units=metric&lang=vi`
    );

    if (!response.ok) {
      throw new Error("Không thể lấy dữ liệu dự báo");
    }

    const data = await response.json();

    // Xử lý dữ liệu: Lấy 1 dự báo mỗi ngày (12:00 PM)
    const dailyData = [];
    const processedDates = new Set();

    data.list.forEach((item) => {
      const date = new Date(item.dt * 1000);
      const dateString = date.toDateString();

      // Lấy dữ liệu vào giữa trưa (12:00) hoặc dữ liệu đầu tiên của ngày
      if (!processedDates.has(dateString)) {
        const hour = date.getHours();
        if (hour >= 12 && hour <= 15) {
          dailyData.push({
            dt: item.dt,
            temp: {
              max: item.main.temp_max,
              min: item.main.temp_min,
            },
            weather: item.weather,
            humidity: item.main.humidity,
            wind_speed: item.wind.speed,
          });
          processedDates.add(dateString);
        }
      }
    });

    // Nếu không đủ dữ liệu giữa trưa, lấy dữ liệu đầu tiên của mỗi ngày
    if (dailyData.length < 5) {
      dailyData.length = 0;
      processedDates.clear();

      data.list.forEach((item) => {
        const date = new Date(item.dt * 1000);
        const dateString = date.toDateString();

        if (!processedDates.has(dateString) && dailyData.length < 5) {
          dailyData.push({
            dt: item.dt,
            temp: {
              max: item.main.temp_max,
              min: item.main.temp_min,
            },
            weather: item.weather,
            humidity: item.main.humidity,
            wind_speed: item.wind.speed,
          });
          processedDates.add(dateString);
        }
      });
    }

    return dailyData;
  },
};
