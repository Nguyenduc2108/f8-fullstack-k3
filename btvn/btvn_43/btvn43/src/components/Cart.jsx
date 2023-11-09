/* eslint-disable react/prop-types */
import { Fragment } from "react";

import "../assets/style.scss";

export default function Cart({ cartItems }) {
  return (
    <Fragment>
      <table>
        <thead>
          <tr>
            <td>Tên sản phẩm</td>
            <td>Số lượng</td>
            <td>Còn lại</td>
            <td>Tổng tiền</td>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.quantityItem}</td>
              <td>{item.quantity}</td>
              <td>${item.price * item.quantityItem}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
}
