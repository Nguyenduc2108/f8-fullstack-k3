import { Fragment, useState } from "react";
import "../assets/style.scss";

export default function Products({ products, onAddToCart }) {
  const [loadedImages, setLoadedImages] = useState({});

  const handleImageLoaded = (id) => {
    setLoadedImages((prevLoadedImages) => ({
      ...prevLoadedImages,
      [id]: true,
    }));
  };

  return (
    <Fragment>
      <div className="products-item">
        {products.map((item) => (
          <div key={item._id} className="product">
            <div className="image-item">
              <img
                loading="lazy"
                src={item.image}
                alt=""
                onLoad={() => handleImageLoaded(item._id)}
              />
            </div>
            {loadedImages[item._id] && (
              <div>
                <div className="name-item">
                  <h4>{item.name}</h4>
                </div>
                <div className="money-cart">
                  <div className="money">${item.price}</div>
                  <div className="cart">
                    <button
                      onClick={() => onAddToCart(item)}
                      className="btn-cart"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </Fragment>
  );
}
