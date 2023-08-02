import React from 'react';

function ItemCard({ product }) {
  const {
    product_name: title,
    unit_price: price,
    product_full_image: image,
    ranking,
  } = product;

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(value);
  };

  return (
    <div className="item-card">
      <div className="product-images">
        <img src={image} alt={title} />
        {ranking > 3 && (
          <div className="badge_outer">
            <span>new</span>
          </div>
        )}
      </div>
      <div className="grid-meta">
        <div className="pro_content">
          <div className="top_content">
            <h5>
              <a href="/collections/all/products/black-hame-bag">{title}</a>
            </h5>
            <ul className="grid-colorlist"></ul>
          </div>
          <div className="bottom_content">
            <p>
              <span className="normal-price">
                <span className="money">{formatCurrency(price)}</span>
              </span>
            </p>
            <button
              className="button"
              onClick={() => alert('Add to cart clicked')}
            >
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
