# 📱 Responsive Design Documentation

## Tổng quan

Dự án đã được tối ưu hóa responsive cho mọi thiết bị từ mobile nhỏ (320px) đến desktop lớn (1440px+).

## 🎯 Breakpoints

### Desktop & Tablet

- **Desktop lớn**: >= 1440px
- **Desktop**: 1025px - 1439px
- **Tablet Landscape**: 769px - 1024px
- **Tablet Portrait**: 481px - 768px

### Mobile

- **Mobile Large**: 376px - 480px
- **Mobile Medium**: 321px - 375px
- **Mobile Small**: <= 320px

### Thiết bị đặc biệt

- **iPad Portrait & Landscape**: 768px - 1024px
- **iPad Pro**: 1024px - 1366px
- **Foldable Phones**: 540px - 720px
- **Landscape Mobile**: Height < 600px

## ✨ Tính năng Responsive

### 1. **Layout linh hoạt**

- Grid system thích ứng với kích thước màn hình
- Tự động sắp xếp lại các thành phần
- Padding và margin được điều chỉnh động

### 2. **Typography responsive**

- Font size giảm dần theo kích thước màn hình
- Line height tối ưu cho từng breakpoint
- Icon size điều chỉnh theo thiết bị

### 3. **Touch Optimization**

- Kích thước nút tối thiểu 44x44px cho touch devices
- Tap highlight được tối ưu
- Active states cho feedback tốt hơn
- Tắt hover effects trên touch devices

### 4. **Safe Area Support**

- Hỗ trợ notch trên iPhone X+
- Padding an toàn với `env(safe-area-inset-*)`
- Tương thích với các thiết bị có tai thỏ

### 5. **Performance**

- Smooth scrolling với `-webkit-overflow-scrolling: touch`
- Overscroll behavior được kiểm soát
- Hardware acceleration cho animations
- Reduced motion cho accessibility

### 6. **Accessibility**

- Support cho `prefers-reduced-motion`
- High contrast mode support
- Print styles
- Dark mode ready

## 📐 Component Responsive Details

### Weather Container

- **Desktop**: 450px - 500px width
- **Tablet**: 600px - 650px width
- **Mobile**: 100% width với padding linh hoạt

### Weather Stats Grid

- **Desktop**: 3 columns
- **Tablet Landscape**: 6 columns
- **Mobile**: 3 columns (compact)

### Forecast Cards

- **Desktop/Tablet**: Grid layout 5 columns
- **Mobile**: Single column stack layout

### Modal (Forecast Detail)

- **Desktop**: 500px width
- **Tablet**: 80% width
- **Mobile**: 95% width

## 🎨 Responsive Styles Applied

### Font Sizes (Mobile vs Desktop)

| Element     | Mobile  | Tablet | Desktop |
| ----------- | ------- | ------ | ------- |
| H1          | 1.25rem | 1.6rem | 1.8rem  |
| Temperature | 3.5rem  | 4.5rem | 5rem    |
| Description | 0.9rem  | 1rem   | 1.1rem  |
| Stat Value  | 1rem    | 1.2rem | 1.3rem  |

### Spacing (Mobile vs Desktop)

| Element           | Mobile  | Tablet  | Desktop |
| ----------------- | ------- | ------- | ------- |
| Container Padding | 18px    | 30px    | 35-40px |
| Grid Gap          | 8-10px  | 12-15px | 15px    |
| Card Padding      | 12-15px | 18-20px | 20-25px |

## 🔧 Tối ưu hóa đặc biệt

### Touch Devices

```css
@media (hover: none) and (pointer: coarse) {
  /* Tăng kích thước nút, tắt hover, thêm active states */
}
```

### Landscape Mobile

```css
@media (max-height: 600px) and (orientation: landscape) {
  /* Layout ngang, stats 6 columns, compact spacing */
}
```

### Notch Support

```css
@supports (padding: max(0px)) {
  padding: max(20px, env(safe-area-inset- *));
}
```

## 🧪 Testing

Đã test trên:

- ✅ iPhone SE (320px)
- ✅ iPhone 12/13/14 (390px)
- ✅ iPhone 14 Pro Max (430px)
- ✅ iPad (768px)
- ✅ iPad Pro (1024px)
- ✅ Desktop (1440px+)
- ✅ Foldable devices
- ✅ Landscape modes

## 💡 Best Practices

1. **Viewport Meta Tag**

   ```html
   <meta
     name="viewport"
     content="width=device-width, initial-scale=1, maximum-scale=5"
   />
   ```

2. **Flexible Images**

   - Tất cả images có `max-width: 100%`
   - Height auto-adjust

3. **Touch Targets**

   - Minimum 44x44px
   - Adequate spacing between elements

4. **Performance**

   - CSS transforms cho animations
   - Will-change cho smooth transitions
   - Reduced motion support

5. **Progressive Enhancement**
   - Mobile-first approach
   - Desktop features added via media queries

## 🚀 Sử dụng

Responsive hoạt động tự động, không cần config thêm. Chỉ cần:

1. Import CSS files trong App.js
2. Viewport meta tag đã được thêm vào index.html
3. Test trên nhiều thiết bị

## 📝 Notes

- Dark mode styles đã chuẩn bị sẵn trong CSS
- Print styles được tối ưu
- Animation có thể tắt qua OS settings (prefers-reduced-motion)
- High contrast mode được support

## 🔄 Updates

- v1.0: Initial responsive implementation
- Hỗ trợ đầy đủ từ 320px đến 1440px+
- Touch optimization
- Safe area support
- Accessibility features
