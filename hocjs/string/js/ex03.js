var keyword = "lorem";
var content = `aaaaa Lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, provident quaerat illum neque voluptas natus dicta repellendus lorem atque. Consequatur architecto eius libero nihil lorem veritatis. Vel  lorem fugit quasi similique lorem ipsam in.`;

var position = content.toLowerCase().indexOf(keyword.toLowerCase());
var result = "";
var count = 0;
while (position !== -1) {
  result +=
    content.slice(0, position) +
    `<span>${content.slice(position, position + keyword.length)}</span>`;

  content = content.slice(position + keyword.length);
  position = content.toLowerCase().indexOf(keyword.toLowerCase());
  count++;
}
result = result + content;

var title = ` <p> Tìm kiếm từ khóa với <b>${keyword}</b></p>`;

var bottom = `<p>Đã tìm thấy <b>${count}</b>kết quả với từ khóa <b>${keyword}</b></p>`;

document.write(title + result + bottom);
