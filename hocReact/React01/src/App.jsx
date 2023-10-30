import React from "react";

export const App = () => {
  return (
    <div className="content" id="content">
      <h1 className="content">học react khong kho</h1>
      <h2>hello</h2>
      <ul className="menu">
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
        <li>item 4</li>
        <li>item 5</li>
        <li>item 6</li>
        <li>item 7</li>
        <li>item 8</li>
        <li>item 9</li>
        <li>item 10</li>
      </ul>
      <button
        onClick={() => {
          console.log("xin chao f8");
        }}
      >
        click me
      </button>
    </div>
  );
};
