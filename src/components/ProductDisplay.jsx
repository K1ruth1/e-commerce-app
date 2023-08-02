import React from 'react';

function ProductDetails({ product, onClose }) {
  const {
    product_name: title,
    unit_price: price,
    product_description: description,
    product_full_image: image,
  } = product;

  return (
    <div className="product-details">
      <div className="media-grid-inner">
        <img
          src={image}
          alt={title}
          loading="lazy"
          width="1400"
          height="2625"
        />
      </div>
      <div className="quickview-inr">
        <div className="quickview_header">
          <p>Select options</p>
          <a href="#" className="close_quickview" onClick={onClose}>
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="1.06066"
                y1="1"
                x2="18"
                y2="17.9393"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></line>
              <line
                x1="18"
                y1="1.06066"
                x2="1.06066"
                y2="18"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></line>
            </svg>
          </a>
        </div>
        <div className="quickview-htmldata">
          <div className="quickview_html">
            <div className="qv-product-media">
              <div className="qv-media-grid-column">
                <div className="media-grid-inner">
                  <img
                    src={image}
                    alt={title}
                    loading="lazy"
                    width="1400"
                    height="2625"
                  />
                </div>
              </div>
              {/* Add more images here if needed */}
            </div>
            <div className="qv-product-description">
              <p className="product-subtitle">All</p>
              <div className="qv-product-title">
                <h3>{title}</h3>
                <p>
                  <span className="money">{price}</span>
                </p>
              </div>
              {/* Add the product description here */}
              <p>{description}</p>
              {/* Add size variants and other details if needed */}
              <div className="qv-cart-btn">
                <a href="#" className="qv-static-cart button button-full">
                  <span>Add to cart</span>
                </a>
                {/* Add the variant list if needed */}
              </div>
              <p className="qv-cartpage_error"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
