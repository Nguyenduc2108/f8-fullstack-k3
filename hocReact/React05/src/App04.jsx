import moment from "moment/moment";
import React, { useCallback, useMemo, useState } from "react";
import Histories from "./components/Histories";

function App() {
  const [amount, setAmount] = useState(0);
  const [histories, setHistories] = useState([]);
  const handleChange = (e) => {
    setAmount(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setHistories([
      ...histories,
      {
        amount: +amount,
        createdAt: moment().format("DD/MM/YYYY HH:mm:ss"),
      },
    ]);
    setAmount(0);
  };

  //   const total = histories.reduce((prev, current) => {
  //     console.log(`Tinh tong`);
  //     return prev + current.amount;
  //   }, 0);
  //useMemo
  const total = useMemo(() => {
    return histories.reduce((prev, current) => {
      console.log(`Tinh tong`);
      return prev + current.amount;
    }, 0);
    //Callback phải có return
  }, [histories]);
  //useCallback(callback,deps)
  // -> Không cần return trong callback
  const handleClearHistories = useCallback(() => {
    setHistories([]);
  }, []);
  return (
    <div>
      {/* {console.log(`re-render`)} */}
      <form action="" onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Nhập số tiền..."
          onChange={handleChange}
          value={amount}
        />
        <button>Add</button>
      </form>
      <Histories
        histories={histories}
        total={total}
        onClearHistories={handleClearHistories}
      />
    </div>
  );
}

export default App;
