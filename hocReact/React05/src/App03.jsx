import React from "react";
import Input from "./components/Input";

function App() {
  return (
    <div>
      <Input name="Tên" type="text" />
      <Input name="Email" type="Email" />
      <Input name="Điện thoại" type="number" />
    </div>
  );
}

export default App;
