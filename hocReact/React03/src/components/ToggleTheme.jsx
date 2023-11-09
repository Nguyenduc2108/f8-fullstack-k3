import { MyContext } from "../App";
import { useContext } from "react";

function ToggleTheme() {
  const { theme, toggleTheme } = useContext(MyContext);

  return (
    <div>
      <button
        onClick={() => {
          toggleTheme(theme === "light" ? "dark" : "light");
        }}
      >
        {theme === "light" ? "Dark" : "Light"}
      </button>
    </div>
  );
}

export default ToggleTheme;
/*
Toggle => App => ShowCounter
*/
