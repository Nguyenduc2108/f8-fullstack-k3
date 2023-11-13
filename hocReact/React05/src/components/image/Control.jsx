import React, { useEffect, useRef } from "react";
import Image from "./Image";

function Control() {
  const imageRef = useRef();
  useEffect(() => {
    console.dir(imageRef.current);
    // imageRef.current.remove();
  }, []);
  const handleZoomIn = () => {
    imageRef.current.zoomIn();
  };
  const handleZoomOut = () => {
    imageRef.current.zoomOut();
  };
  return (
    <div>
      <Image ref={imageRef} />
      <button onClick={handleZoomIn}>ZoomIn</button>
      <button onClick={handleZoomOut}>ZoomOut</button>
    </div>
  );
}

export default Control;

/*
xây dựng 1 ref chỉ cho phép component cha sử dụng các phương thức của DOM mà nó cho phép
*/
