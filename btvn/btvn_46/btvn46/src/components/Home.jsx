/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Fragment, useEffect, useState } from "react";
import clients from "../config/clients";
import showToast from "../Toastify";
import "../assets/style.scss";
import Product from "./Product";
import { Routes, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const client = new clients();

export default function Home({ profile }) {
  const [products, setProducts] = useState([]);

  const [pageTotal, setTotal] = useState();

  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  const fetchProducts = async (pageNumber) => {
    const page = pageNumber;

    try {
      const { data, res } = await client.get(
        "/products",
        { page, limit: itemsPerPage },
        profile
      );

      if (res.ok) {
        setTotal(data.data.totalPage);
        setProducts(data.data);
      }
    } catch {
      console.log("Có lỗi xảy ra");
    }
  };

  let pageCount = Math.floor(pageTotal / itemsPerPage);

  const handlePageClick = (event) => {
    const newPage = event.selected + 1;
    setCurrentPage(newPage);
    fetchProducts(newPage);
  };

  useEffect(() => {
    checkLogin();
  }, [profile]);

  return (
    <Fragment>
      <header>
        <div className="container-shop">
          <Link to="/">
            <div className="title">
              <h1>Welcome to shop</h1>
            </div>
          </Link>
          <div className="icon-cart">
            <Link to="/cart">
              <i className="fi fi-rr-shopping-cart"></i>
            </Link>
            <span className="quantity">{totalQuantity}</span>
          </div>
        </div>
      </header>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Product
                products={products}
                pageCount={pageCount}
                handlePageClick={handlePageClick}
              />
            }
          />
        </Routes>
      </main>
    </Fragment>
  );
}
