export const ProductDetail = ({ data }) => {
  const id = data.id;

  return `
  <h1>Chi tiết sản phẩm: ${id}</h1>
  <button onclick= "navigate('/san-pham')" >Back</button>
  `;
};
