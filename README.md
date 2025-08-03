# ARATA JEWELRY - Website Bán Trang Sức

## Mô tả
Website bán trang sức với chức năng đăng ký, đăng nhập, giỏ hàng và thanh toán. Chỉ người dùng đã đăng nhập mới có thể thêm sản phẩm vào giỏ hàng và tiến hành thanh toán.

## Các chức năng chính

### 1. Xác thực người dùng
- **Đăng ký tài khoản**: Tạo tài khoản mới với email và mật khẩu
- **Đăng nhập**: Đăng nhập vào hệ thống
- **Đăng xuất**: Đăng xuất và xóa dữ liệu giỏ hàng
- **Bảo vệ tài khoản**: Chỉ người dùng đã đăng nhập mới có thể truy cập một số chức năng

### 2. Quản lý sản phẩm
- **Xem sản phẩm**: Tất cả người dùng có thể xem danh sách sản phẩm
- **Tìm kiếm sản phẩm**: Tìm kiếm theo tên, chất liệu, kiểu dáng
- **Lọc sản phẩm**: Lọc theo giá, chất liệu, kiểu dáng
- **Chi tiết sản phẩm**: Xem thông tin chi tiết và hình ảnh sản phẩm

### 3. Giỏ hàng (Yêu cầu đăng nhập)
- **Thêm vào giỏ hàng**: Chỉ người dùng đã đăng nhập mới có thể thêm sản phẩm
- **Xem giỏ hàng**: Quản lý sản phẩm trong giỏ hàng
- **Cập nhật số lượng**: Tăng/giảm số lượng sản phẩm
- **Xóa sản phẩm**: Xóa sản phẩm khỏi giỏ hàng
- **Xóa tất cả**: Xóa toàn bộ giỏ hàng

### 4. Thanh toán (Yêu cầu đăng nhập)
- **Trang thanh toán**: Chỉ người dùng đã đăng nhập mới có thể truy cập
- **Thông tin giao hàng**: Tự động điền thông tin người dùng
- **Phương thức thanh toán**: COD, chuyển khoản, thẻ tín dụng, ví điện tử
- **Xác nhận đơn hàng**: Hiển thị thông tin đơn hàng và tổng tiền

## Cách sử dụng

### Đăng ký tài khoản
1. Truy cập trang "Register"
2. Điền thông tin: Họ tên, Email, Mật khẩu, Xác nhận mật khẩu
3. Nhấn "Register" để tạo tài khoản

### Đăng nhập
1. Truy cập trang "Login"
2. Nhập Email và Mật khẩu
3. Nhấn "Login" để đăng nhập

### Mua sản phẩm
1. **Xem sản phẩm**: Duyệt qua danh sách sản phẩm
2. **Thêm vào giỏ hàng**: 
   - Nếu chưa đăng nhập: Hiển thị popup yêu cầu đăng nhập
   - Nếu đã đăng nhập: Thêm sản phẩm vào giỏ hàng
3. **Xem giỏ hàng**: Kiểm tra sản phẩm đã thêm
4. **Thanh toán**: 
   - Nếu chưa đăng nhập: Hiển thị popup yêu cầu đăng nhập
   - Nếu đã đăng nhập: Tiến hành thanh toán

### Quản lý tài khoản
1. Nhấn vào tên tài khoản trên header
2. Xem thông tin cá nhân
3. Nhấn "Đăng xuất" để thoát khỏi hệ thống

## Tính năng bảo mật

### Kiểm tra đăng nhập
- Tất cả chức năng liên quan đến giỏ hàng và thanh toán đều yêu cầu đăng nhập
- Popup thông báo hiển thị khi người dùng chưa đăng nhập
- Tự động chuyển hướng đến trang đăng nhập

### Bảo vệ dữ liệu
- Dữ liệu người dùng được lưu trong localStorage
- Giỏ hàng được xóa khi đăng xuất
- Thông tin đơn hàng được lưu trữ an toàn

## Cấu trúc file

```
Arata_jewery/
├── index.html              # Trang chủ
├── login.html              # Trang đăng nhập
├── register.html           # Trang đăng ký
├── account.html            # Trang tài khoản
├── products.html           # Trang sản phẩm
├── product-detail.html     # Trang chi tiết sản phẩm
├── cart.html              # Trang giỏ hàng
├── checkout.html          # Trang thanh toán
├── components/
│   ├── header.html        # Header chung
│   └── footer.html        # Footer chung
├── assets/
│   ├── css/
│   │   └── style.css      # CSS chính
│   ├── js/
│   │   └── main.js        # JavaScript chính
│   └── images/            # Hình ảnh sản phẩm
└── README.md              # Hướng dẫn sử dụng
```

## Công nghệ sử dụng
- HTML5
- CSS3
- JavaScript (ES6+)
- LocalStorage để lưu trữ dữ liệu
- Responsive Design

## Lưu ý
- Website sử dụng localStorage để lưu trữ dữ liệu, dữ liệu sẽ bị mất khi xóa cache trình duyệt
- Chức năng thanh toán chỉ là mô phỏng, không thực hiện giao dịch thật
- Hình ảnh sản phẩm được sử dụng cho mục đích demo

## Hướng dẫn chạy
1. Tải xuống toàn bộ file
2. Mở file `index.html` bằng trình duyệt web
3. Bắt đầu sử dụng các chức năng của website 