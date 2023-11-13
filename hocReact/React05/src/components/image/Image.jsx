import React, { forwardRef, useImperativeHandle, useRef } from "react";

function Image(props, ref) {
  const imageRef = useRef();
  // Thông qua 1 bộ lọc -> Trạng thái ref
  useImperativeHandle(ref, () => {
    return {
      zoomIn: () => {
        imageRef.current.style.width = "300px";
      },
      zooOut: () => {
        imageRef.current.style.width = "";
      },
    };
  });
  return (
    <div>
      <img ref={imageRef} src="https://picsum.photos/200" alt="" />
    </div>
  );
}

export default forwardRef(Image);
