import "../Assets/style.scss";
export const DefaultLayout = function ({ body }) {
  return `<header>
        <a href="/" data-navigo>Header</a>
    </header>
    <main>
        <h2>Menu</h2>
        <ul>
            <li><a href="/" data-navigo>Trang chủ</a></li>
            <li><a href="/gioi-thieu" data-navigo>Giới thiệu</a></li>
            <li><a href="/san-pham" data-navigo>Sản phẩm</a></li>
        </ul>
        <div>${body}</div>
    </main>
    <footer>
        <h1>Footer</h1>
    </footer>
    `;
};
