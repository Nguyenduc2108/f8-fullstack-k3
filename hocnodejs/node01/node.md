## Sesstion

- Phiên làm việc của trình duyệt
- Dữ liệu của sesstion nằm ở Server

Để Server biết được phên làm việc => Dùng cookie chứa sessionId

Request => Cookie(sessionId) => Server đọc cookie => lấy nội dung của session
=> Trả về Response

# Cách làm việc với Request Response

- View(Giao diện) => thêm vào http get
- Logic cần xử lý => thêm vào post,put,path,delete => Redirect về get

Ví dụ:

- Xử lý login => Logic login (viết ở post) => Redirect về trang chủ (GET)
- Xử lý validate => Failed => Redurect về form ban đầu( Bắt về Request trước)

# Cách gửi thông báo giữa các request

- Cách 1 : Dùng search params
- Cách 2: Dùng Flash Session(Session chỉ hiển thị 1 lần)
