// Regular Expression , Regex = Biểu thức chính quy

/*
- Các quy tắc dùng để xử lý chuỗi nâng cao
- Tạo bởi các ký hiệu đại diện cho các ký tự

Tác dụng:
- So khớp: kiểm tra chuỗi thỏa mãn điều kiện
-> trong js test()

- Cắt chuỗi
-> match()

- Thay thế
-> replace()

-> pattern: /regex/modifier(cấu trúc 1 pattern)

Website test: https://regex101.com/

Các ký hiệu cơ bản: 
- string: khớp với chuỗi cố định
- ^: Khớp đầu chuỗi
- $: Khớp cuỗi chuỗi
- [a-z] : chữ thường
- [A-Z]: chữ hoa
- [0-9]: số
- [charList]: Các ký tự
=> Lưu ý: Các ký tự trong cặp ngoặc [] sẽ kết hợp với nhau theo điều kiện hoặc

Mặc định các biểu thức sẽ có độ dài = 1

Các ký hiệu độ dài:
- {min, max} -> độ dài từ min đến max
- {value} -> độ dài cố định
- {min, } -> độ dài >= min

Các ký hiệu viết tắt của độ dài:
- {0,} -> *
- {1,} -> +
- {0,1} -> ?

-> thực hành: Kiểm tra 1 username hợp lệ
+ bắt đầu bằng 1 chữ thường
+ có thể chứa chữ thường, dấu gạch dưới, gạch ngang, số
+ độ dài: từ 6 ký tự trở lên
+ kết thúc bắt buộc là 1 số hoặc 1 chữ

Nếu gặp các ký tự đặc biệt thuộc biểu thức chính quy, cần thêm ký tự \ phía trước: / [] . ,+, *, ?, =,...

Các ký hiệu viết tắt khác:
- \d -> [0-9]
- \D -> ngược lại của \d
- \s -> khoẳng trắng
- \S -> ngược lại của \s
- \w -> đại diện cho: chữ thường, chữ hoa, số, dâu gạch dưới
- \W - > ngược lại của \w

Ký hiệu phủ định: ^
ký hiệu hoặc: | (nên bọc điều kiện hoặc trong cặp nngoặc tròn
    so viet nam: /^(0|\+84)\d{9}$/

ký hiệu đại diện cho tất cả các ký tự: .

*/
// const pattern = /^[a-z][a-z0-9-_]{4,}[a-zA-Z0-9]$/;
// const str = "hoanganit19";
// const pattern = /^https:\/\/[a-z-_0-9\.]+\.[a-z]{2,}$/;
// const str = "https://fullstack.edu.vn";

// const pattern =
//   /^(http|https):\/\/[a-z0-9-_\.]+[a-z]{2,}(\/?|\/[a-z0-9-_\.\/]+)$/;
// const str = "https://fullstack.edu.vn/khoa-hoc/fullstack-offline/index.html";

const pattern = /^<[a-z\d-]+.*>.+<\/[a-z\d-]>$/;
const str = `<a title="hello F8" href="https://fullstack.edu.vn">F8</a>`;
const check = pattern.test(str);
console.log(check); // true -> tìm được chữ hoangan trong str
