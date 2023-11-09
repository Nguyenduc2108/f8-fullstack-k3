import { ConvertContext } from "./Convert";
import { useContext } from "react";

function Vnd() {
  const { data, dispatch } = useContext(ConvertContext);
  return (
    <div>
      Vnd:{" "}
      <input
        type="number"
        placeholder="Vnd..."
        value={data.vnd}
        onInput={(e) => {
          dispatch({
            type: "vnd",
            payload: e.target.value,
          });
        }}
      />
    </div>
  );
}

export default Vnd;
