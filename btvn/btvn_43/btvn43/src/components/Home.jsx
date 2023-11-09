import { Fragment, useEffect, useState } from "react";
import "../assets/style.scss";
import client from "../api/client";
import showToast from "./Toastify";
import Products from "./Product";
import Cart from "./Cart";

export default function Home({ profile }) {
  const [products, setProducts] = useState([]);

  const [cartItems, setCartItems] = useState([]);

  const fetchProducts = async () => {
    try {
      const { data, res } = await client.get("/Product", {}, profile);
      if (res.ok) {
        setProducts(data.data);
      }
    } catch {
      console.log("Có lỗi xảy ra");
    }
  };

  const handleAddToCart = async (product) => {
    try {
      const response = await client.post(
        "/order",
        { productId: product._id, quantity: 1 },
        {},
        profile
      );

      console.log(response);

      if (response.res.ok) {
        showToast("success", "Thêm sản phẩm vào giỏ hàng thành công");
        setCartItems((prevItems) => {
          const itemIndex = prevItems.findIndex(
            (item) => item._id === product._id
          );
          if (itemIndex > -1) {
            const newItems = [...prevItems];
            newItems[itemIndex] = {
              ...newItems[itemIndex],
              quantityItem: newItems[itemIndex].quantityItem + 1,
              quantity: newItems[itemIndex].quantity - 1,
            };
            localStorage.setItem("cartItems", JSON.stringify(newItems));
            return newItems;
          } else {
            const newItems = [...prevItems, { ...product, quantityItem: 1 }];
            localStorage.setItem("cartItems", JSON.stringify(newItems));
            return newItems;
          }
        });
      } else {
        showToast("error", "Không thể thêm sản phẩm vào giỏ hàng.");
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
      showToast("error", "Có lỗi xảy ra khi thêm vào giỏ hàng.");
    }
  };

  const handleBuyProducts = async () => {
    const savedCartItems = localStorage.getItem("cartItems");

    if (savedCartItems) {
      try {
        const validApiKey = await client.get("/users/profile", {}, profile);

        if (!validApiKey.res.ok) {
          showToast("error", "Unauthorize");
          return;
        }
      } catch (error) {
        showToast("error", "Có lỗi xảy ra khi xác thực apiKey.");
        console.error("Error validating apiKey:", error);
        return;
      }

      const cartItems = JSON.parse(savedCartItems);

      const purchasePayload = cartItems.map((item) => ({
        productId: item._id,
        quantity: item.quantityItem,
      }));

      try {
        const response = await client.post(
          "/order",
          purchasePayload,
          {},
          profile
        );

        if (response.res.ok) {
          showToast("success", "Đơn hàng đã được đặt thành công.");

          localStorage.removeItem("cartItems");

          setCartItems([]);
        } else {
          showToast("error", "Đặt hàng thất bại huhu hichic.");
        }
      } catch (error) {
        console.error("Có lỗi xảy ra", error);
        showToast("error", "Có lỗi xảy ra khi đặt hàng.");
      }
    } else {
      showToast("error", "Không có sản phẩm nào trong giỏ hàng.");
    }
  };

  const checkLogin = async () => {
    try {
      const response = await client.get("/users/profile", {}, profile);
      if (response.res.ok) {
        fetchProducts();
      } else {
        showToast(
          "error",
          "Phiên đăng nhập không hợp lệ. Vui lòng đăng nhập lại."
        );
        localStorage.removeItem("email");
        localStorage.removeItem("apiKey");
        window.location.reload();
      }
    } catch (e) {
      console.log("Có lỗi xảy ra");
      showToast("error", "Có lỗi xảy ra");
    }
  };

  useEffect(() => {
    document.body.style.backgroundColor = "white";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  useEffect(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    if (savedCartItems) {
      setCartItems(JSON.parse(savedCartItems));
    }
    checkLogin();
  }, [profile]);

  return (
    <Fragment>
      <div className="container-shop">
        <div className="title">
          <h1>Welcome to shop</h1>
        </div>
        <Products products={products} onAddToCart={handleAddToCart} />
        <Cart cartItems={cartItems} />
        <button onClick={handleBuyProducts} className="buy-products">
          Thanh toán
        </button>
      </div>
    </Fragment>
  );
}
