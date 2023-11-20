import { useDispatch, useSelector } from "react-redux";
import { counterSilce } from "../slice/counterSlice";
const { increment, decrement } = counterSilce.actions; // Trả về danh sách actionCreator

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button
        onClick={() => {
          dispatch(decrement(5));
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatch(increment(10));
        }}
      >
        +
      </button>
    </div>
  );
}

export default Counter;

//Component --> Action Creator -> Action -> reducer
