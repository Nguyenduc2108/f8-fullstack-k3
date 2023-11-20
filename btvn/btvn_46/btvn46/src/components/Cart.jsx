import { Fragment } from "react";
import "../assets/style.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  deleteFromCart,
  clearCart,
} from "../slice/cartSlice";
import { useNavigate } from "react-router-dom";
import showToast from "../Toastify";

export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  console.log(cartItems);

  const handleIncrease = (itemId) => {
    dispatch(increaseQuantity(itemId));
  };

  const handleDecrease = (itemId) => {
    dispatch(decreaseQuantity(itemId));
  };

  const handleDelete = (itemId) => {
    showToast("warn", "Bạn có chắc chắn muốn xóa không? Confirm", () => {
      dispatch(deleteFromCart(itemId));
      showToast("success", "Xóa sản phẩm thành công");
    });
  };

  const handleClear = () => {
    dispatch(clearCart());
    showToast("success", "Đặt hàng thành công");
  };

  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <Fragment>
      <div className="cart-shopping">
        <div className="title">
          <h1>SHOPPING CART</h1>
        </div>
        {Object.values(cartItems).map((item) => (
          <div className="single-product" key={item._id}>
            <div className="info-single-product">
              <div className="image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="details">
                <div>
                  <span style={{ marginRight: 10, color: "rgb(157, 23, 77)" }}>
                    {item.brand}
                  </span>
                  <span>{item.name}</span>
                </div>
                <p className="price">
                  <span>$</span>
                  {item.price}
                </p>
                <p>Còn lại: {item.quantity}</p>
              </div>
            </div>
            <div className="footer">
              <div className="edit">
                <button
                  className="decrement"
                  onClick={() => handleDecrease(item._id)}
                >
                  -
                </button>
                <div className="quantity">{item.quantityItem}</div>
                <button
                  className="increment"
                  onClick={() => handleIncrease(item._id)}
                >
                  +
                </button>
              </div>
              <div className="total">
                <div className="total-price">
                  <span>$</span>
                  {item.price * item.quantityItem}
                </div>
                <button
                  style={{
                    backgroundColor: "#fff",
                    border: "none",
                    cursor: "pointer",
                  }}
                  onClick={() => handleDelete(item._id)}
                >
                  <i className="fi fi-rs-trash"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
        <h2 style={{ fontSize: "2rem" }}>
          Total Price: <span style={{ color: "#9d174d" }}>$</span>
          {totalPrice}
        </h2>
        <div className="button-list">
          <button className="home" onClick={handleGoHome}>
            Go home
          </button>
          <button className="pay" onClick={handleClear}>
            Checkout
          </button>
        </div>
      </div>
    </Fragment>
  );
}
