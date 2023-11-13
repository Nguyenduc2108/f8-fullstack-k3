import React from "react";

function Button(props, ref) {
  return <button ref={ref}>Click me</button>;
}

export default React.forwardRef(Button);
