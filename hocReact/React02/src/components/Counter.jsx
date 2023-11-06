import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = React.useState(0);
  const handleIncrement = () => {
    // setCount(count + 1);
    setCount((count) => count + 1);
  };
  const handleDecrement = () => {
    //Khong the goi hook

    // setCount(count - 1);
    setCount((count) => count - 1);
  };
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick="{handleIncrement}">+</button>
      <button onClick="{handleDecrement}">-</button>
    </div>
  );
};

export default Couter;
