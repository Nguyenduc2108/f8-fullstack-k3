export const ProductDetail = ({ data }) => {
  const id = data.id;

  const navigate = () => {
    window.navigate("/san-pham");
  };

  return `
  <h1>Chi tiết sản phẩm: ${id}</h1>
  <button onclick="navigate()">Back</button>
  `;
};
