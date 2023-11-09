import { createContext, useState } from "react";
import Usd from "./Usd";
import Vnd from "./Vnd";

export const ConvertContext = createContext();
function Convert() {
  const [data, setData] = useState({
    vnd: 0,
    usd: 0,
  });

  const handleDispatch = (action) => {
    let vnd, usd;
    if (action.type === "vnd") {
      // chuyen doi tygia tu vnd => usd
      vnd = action.payload;
      usd = vnd / 24500;
    } else {
      usd = action.payload;
      vnd = usd * 24500;
    }

    setData({
      vnd,
      usd,
    });

    // setData({ ...data, [action.type]: action.payload });
  };
  console.log(data);

  return (
    <ConvertContext.Provider
      value={{
        data,
        dispatch: handleDispatch,
      }}
    >
      <Vnd />
      <hr />
      <Usd />
    </ConvertContext.Provider>
  );
}

export default Convert;
