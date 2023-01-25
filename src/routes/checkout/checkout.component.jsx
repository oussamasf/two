import React, { useState, useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import "./checkout.styles.css";

function Checkout() {
  const { cartItems } = useContext(CartContext);
  const [cartData, setCartData] = useState(cartItems);

  function handleIncrementClick(index) {
    const nextCounters = cartData.map((c, i) => {
      if (i === index) {
        let { quantity, ...restOfC } = c;
        quantity += 1;
        return { quantity, ...restOfC };
      } else {
        return c;
      }
    });

    setCartData(nextCounters);
    console.log(nextCounters);
  }

  function handleDecrementClick(index) {
    const nextCounters = cartData.map((c, i) => {
      if (i === index) {
        let { quantity, ...restOfC } = c;
        quantity === 0 ? (quantity = 0) : (quantity -= 1);
        return { quantity, ...restOfC };
      } else {
        return c;
      }
    });

    setCartData(nextCounters);
    console.log(nextCounters);
  }
  return (
    <div className="checkout-container">
      <table>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Remove</th>
        </tr>
        {cartData.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.id}</td>
              <td>{val.name}</td>
              <td>{val.price}</td>
              <td>
                <button
                  onClick={() => {
                    handleDecrementClick(key);
                  }}
                >
                  -
                </button>
                {val.quantity}
                <button
                  onClick={() => {
                    handleIncrementClick(key);
                  }}
                >
                  +
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    setCartData(cartData.filter((a) => a.id !== val.id));
                  }}
                >
                  X
                </button>
              </td>
            </tr>
          );
        })}
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>
            Total ={" "}
            {cartData.reduce(
              (acc, item) => acc + item.price * item.quantity,
              0
            )}
          </td>
        </tr>
      </table>
    </div>
  );
}

export default Checkout;
