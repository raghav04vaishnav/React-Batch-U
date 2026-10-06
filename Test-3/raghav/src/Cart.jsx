import React from "react";

function Cart({ cart, setCart }) {
  const total = cart.reduce((sum, item) => {
    return sum + item.price;
  }, 0);

  return (
    <div>
      <h1>Cart</h1>
      <h2>Cart Items: {cart.length}</h2>
      {cart.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>Price: ${item.price}</p>
        </div>
      ))}
      <hr />
      <h2>Total Price: ${total.toFixed(2)}</h2>
    </div>
  );
}

export default Cart;
