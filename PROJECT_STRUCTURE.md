# Cấu trúc dự án Weather App - Đà Nẵng

## 📁 Cấu trúc thư mục

```
src/
├── components/          # Các component tái sử dụng
│   ├── LocationHeader.js
│   ├── WeatherCard.js
│   ├── WeatherStats.js
│   ├── AdditionalInfo.js
│   ├── ForecastCard.js
│   ├── LoadingSpinner.js
│   └── ErrorMessage.js
├── pages/              # Các trang chính
│   ├── HomePage.js
│   └── ForecastPage.js
├── services/           # API services
│   └── weatherAPI.js
├── utils/              # Utilities và helpers
│   ├── helpers.js
│   └── weatherTheme.js
├── App.js              # Router chính
├── App.css             # Styles
└── index.js            # Entry point
```

## 🧩 Components

### LocationHeader

- Hiển thị tên thành phố và thời gian
- Props: `city`

### WeatherCard

- Card chính hiển thị nhiệt độ và icon thời tiết
- Props: `weather`

### WeatherStats

- 3 cards thống kê: độ ẩm, gió, cảm giác
- Props: `weather`

### AdditionalInfo

- Thông tin bổ sung: áp suất, tầm nhìn, mây
- Props: `weather`

### ForecastCard

- Card hiển thị dự báo cho 1 ngày
- Props: `day`, `index`

### LoadingSpinner

- Component loading khi fetch data

### ErrorMessage

- Component hiển thị lỗi
- Props: `error`, `onRetry`

## 📄 Pages

### HomePage (`/`)

- Trang chính hiển thị thời tiết hiện tại
- Có nút "Dự báo 5 ngày" để chuyển sang ForecastPage

### ForecastPage (`/forecast`)

- Trang dự báo 5 ngày
- Có nút "Quay lại" để về HomePage

## 🔧 Services

### weatherAPI

- `getCurrentWeather(city, country)` - Lấy thời tiết hiện tại
- `getForecast(city, country)` - Lấy dự báo 5 ngày

## 🛠️ Utils

### helpers.js

- `getWeatherIcon(iconCode)` - Lấy URL icon thời tiết
- `formatDate()` - Format ngày giờ đầy đủ
- `formatShortDate(timestamp)` - Format ngày ngắn
- `getDayName(timestamp, index)` - Lấy tên ngày

### weatherTheme.js

- `getWeatherTheme(weather)` - Xác định theme màu dựa vào thời tiết

## 🚀 Routing

- `/` - Trang chủ (HomePage)
- `/forecast` - Trang dự báo (ForecastPage)

## 💡 Ưu điểm cấu trúc mới

1. **Dễ maintain**: Mỗi component có trách nhiệm riêng
2. **Tái sử dụng**: Components có thể dùng ở nhiều nơi
3. **Dễ test**: Mỗi component/service có thể test riêng
4. **Clean code**: Logic tách biệt rõ ràng
5. **Scalable**: Dễ mở rộng thêm tính năng mới
6. **Routing**: URL riêng cho mỗi page, hỗ trợ browser history

## 🔄 Migration từ code cũ

Code cũ: 1 file App.js ~400 dòng
Code mới: Nhiều files nhỏ, mỗi file ~50-100 dòng

Tất cả tính năng giữ nguyên, chỉ refactor cấu trúc!
