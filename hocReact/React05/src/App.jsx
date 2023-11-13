import moment from "moment/moment";
import React, { useMemo, useState } from "react";

function App() {
  const [amount, setAmount] = useState(0);
  const [histories, setHistories] = useState([]);
  const handleChange = (e) => {
    setAmount(e.target.value);
  };
  const hanleSubmit = (e) => {
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
  return (
    <div>
      {/* {console.log(`re-render`)} */}
      <form action="" onSubmit={hanleSubmit}>
        <input
          type="number"
          placeholder="Nhập số tiền..."
          onChange={handleChange}
          value={amount}
        />
        <button>Add</button>
      </form>
      <h2>Lịch sử nạp tiền</h2>
      {histories.map((item, index) => (
        <h3 key={index}>
          {" "}
          {item.amount.toLocaleString()}- {item.createdAt}
        </h3>
      ))}
      <h2>Tổng {total.toLocaleString()}</h2>
    </div>
  );
}

export default App;
