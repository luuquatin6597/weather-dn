# Ứng dụng Thời tiết Đà Nẵng

Ứng dụng React single page hiển thị thông tin thời tiết thực tế của thành phố Đà Nẵng, Việt Nam.

## Cách lấy API Key miễn phí

1. Truy cập: https://openweathermap.org/api
2. Nhấn "Sign Up" để tạo tài khoản miễn phí
3. Sau khi đăng ký, vào trang "API keys" trong dashboard
4. Copy API key của bạn
5. Mở file `src/App.js` và thay thế `YOUR_API_KEY` bằng API key của bạn

## Cách chạy ứng dụng

```bash
npm start
```

Ứng dụng sẽ mở tại: http://localhost:3000

## Tính năng

- ✅ Hiển thị nhiệt độ hiện tại tại Đà Nẵng
- ✅ Mô tả thời tiết bằng tiếng Việt
- ✅ Icon thời tiết động
- ✅ Các thông tin chi tiết: độ ẩm, tốc độ gió, áp suất, tầm nhìn
- ✅ Tự động cập nhật mỗi 10 phút
- ✅ Nút làm mới thủ công
- ✅ Giao diện đẹp, responsive trên mobile
- ✅ Hiển thị ngày giờ theo định dạng Việt Nam

## Công nghệ sử dụng

- React 18
- OpenWeatherMap API
- CSS3 (Gradient, Flexbox, Grid)
