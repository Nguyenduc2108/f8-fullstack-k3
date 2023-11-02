import React from "react";

export const Products = ({ name, price, attrName, attrValue, onGetData }) => {
  //   console.log(props);
  //   props.name = "abc";
  console.log(name, price);
  console.log(attrName, attrValue);
  return (
    <div>
      <h2 style={{ color: "red" }}>Products</h2>
      <button
        onClick={() => {
          onGetData("Hello F8");
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default Products;
