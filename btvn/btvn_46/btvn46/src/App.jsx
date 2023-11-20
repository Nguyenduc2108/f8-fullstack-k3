/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Product from "./components/Product";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export default function App() {
  return (
    <>
      <Home />
      <Cart />
      <Product />
    </>
  );
}
