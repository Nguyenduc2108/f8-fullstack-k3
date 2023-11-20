/* eslint-disable react/prop-types */
import { Fragment } from "react";
import "../assets/style.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../slice/cartSlice";
import showToast from "../Toastify";
import ReactPaginate from "react-paginate";

export default function Product({ products, pageCount, handlePageClick }) {
  console.log(products.listProduct);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    showToast("success", "Thêm sản phẩm vào giỏ thành công");
  };

  return (
    <Fragment>
      <div className="products-container">
        <div className="title">
          <h1>PRODUCTS</h1>
        </div>
        <div className="product-list">
          {Array.isArray(products.listProduct) &&
            products.listProduct.map((item) => (
              <div key={item._id} className="product-item">
                <Link to={`/details/${item._id}`}>
                  <div className="image">
                    <img src={item.image} alt={item.name} />
                  </div>
                </Link>
                <div className="name-product">{item.name}</div>
                <div className="footer-product">
                  <div className="price">
                    <span>$</span>
                    <span className="cost">{item.price}</span>
                  </div>
                  <button
                    onClick={() => handleAddToCart(item)}
                    style={{ border: "none", backgroundColor: "#fff" }}
                    className="cart"
                  >
                    <i className="fi fi-rr-shopping-cart"></i>
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </Fragment>
  );
}
