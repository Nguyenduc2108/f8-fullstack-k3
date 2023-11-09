import { ConvertContext } from "./Convert";
import { useContext } from "react";

function Usd() {
  const { data, dispatch } = useContext(ConvertContext);

  return (
    <div>
      Usd:{" "}
      <input
        type="number"
        placeholder="Usd..."
        value={data.usd}
        onInput={(e) => {
          dispatch({
            type: "usd",
            payload: e.target.value,
          });
        }}
      />
    </div>
  );
}

export default Usd;
