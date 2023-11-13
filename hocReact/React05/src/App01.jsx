// import HelloWorld from "./HelloWorld";
import Counter from "./components/Counter";
import { createContext, useContext, useState } from "react";
import Control from "./components/image/Control";

export const MyContext = createContext();

function App() {
  // return <Counter title="Abc" />;
  // const [title, setTitle] = useState();
  // return (
  //   <MyContext.Provider value="hello">
  //     <HelloWorld />
  //   </MyContext.Provider>
  // );
  // return <Counter />;
  return <Control />;
}

export default App;
