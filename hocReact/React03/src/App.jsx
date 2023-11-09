import React, { useState } from "react";
import "./assets/style.css";
import ShowCounter from "./components/ShowCounter";
import ToggleTheme from "./components/ToggleTheme";
export const MyContext = React.createContext();

function App() {
  const step1 = 10;
  const step2 = 5;
  const [theme, setTheme] = useState("light");
  const toggleTheme = (theme) => {
    setTheme(theme);
  };
  const data = {
    message: "Hello F8",
    theme,
    toggleTheme,
  };

  return (
    <MyContext.Provider value={data}>
      <ToggleTheme />
      <ShowCounter step1={step1} step2={step2} />
    </MyContext.Provider>
  );
}

export default App;

/*
Đối tượng context : 
1. React.createContext
2. Provider -> Gửi dữ liệu
3. Consumer -> nhận dữ liệu(useContext -> react-hook)

App => ShowCOunter => Counter
*/
