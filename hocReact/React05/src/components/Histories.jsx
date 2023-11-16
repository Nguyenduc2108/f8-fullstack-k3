import React from "react";
import { memo } from "react";
function Histories({ histories, total, onClearHistories }) {
  console.log("history render");

  return (
    <div>
      <h2>Lịch sử nạp tiền</h2>
      {histories.map((item, index) => (
        <h3 key={index}>
          {" "}
          {item.amount.toLocaleString()}- {item.createdAt}
        </h3>
      ))}
      <h2>Tổng {total.toLocaleString()}</h2>
      <button onClick={onClearHistories}>Xóa lịch sử</button>
    </div>
  );
}

export default memo(Histories);
