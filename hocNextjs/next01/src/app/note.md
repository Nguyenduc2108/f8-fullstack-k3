# NextJS

## Layout

- Bố cục của trang web
- Có 2 loại layout
  - RootLayout --> Tạo bố cục ban đầu cho trang web
  - Custom Layout --> Tạo bố cục riêng cho từng nhóm route

Ví dụ:
/admin --> Layout: AdminLayout
/ --> ClientLayout

## Page

- Nội dung chính tương ứng với route
- 1 route tương ứng với 1 page

Ví dụ:
/ --> Page Home
/san-pham --> Page Products

## Luồng Chạy

Route --> RootLayout --> Custom Layout --> Page --> Render JSX

## Middleware

Request => Middleware => Route => RootLayout => Custom Layout => Page => Render JSX
