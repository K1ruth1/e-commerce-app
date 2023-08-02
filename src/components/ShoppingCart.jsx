import React, { useState } from 'react';
import axios from 'axios';

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [items, setItems] = useState([]);

  // Fetch product information from the API using Axios and update the items state
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          'http://ecommerce.muersolutions.com/api/v1/products'
        );
        setItems(response.data);
      } catch (error) {
        console.error('Failed to fetch product information:', error);
        // Handle error by showing an error message to the user or retry the request.
      }
    };
    fetchProducts();
  }, []);

  // Add item to cart
  const addToCart = (item) => {
    const itemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    if (itemInCart) {
      const updatedCartItems = cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  // Calculate total quantity of items in cart
  const totalQuantity = cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity,
    0
  );

  // Calculate total price of items in cart
  const totalPrice = cartItems.reduce(
    (total, cartItem) => total + cartItem.unit_price * cartItem.quantity,
    0
  );

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.unit_price}
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </li>
        ))}
      </ul>
      <h3>Cart Summary</h3>
      <p>Total Quantity: {totalQuantity}</p>
      <p>Total Price: ${totalPrice}</p>
      <h3>Cart Items</h3>
      <ul>
        {cartItems.map((cartItem) => (
          <li key={cartItem.id}>
            {cartItem.name} - Quantity: {cartItem.quantity} - Total Price: $
            {cartItem.price * cartItem.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
