import React, { useId } from "react";

function Input({ name, type = "text" }) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id}>
        {name}
        <input type={type} placeholder={name} id={id} />
      </label>
    </div>
  );
}

export default Input;
