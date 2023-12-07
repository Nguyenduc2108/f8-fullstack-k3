"use client";
import { useState } from "react";

//Client components
// import Demo2 from "./Demo2";

const Demo = ({ children }) => {
  const [show, setShow] = useState(true);
  return (
    <div>
      <h1>Demo</h1>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && children}
    </div>
  );
};
export default Demo;
