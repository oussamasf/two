import React, { useContext } from "react";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { CartContext } from "../../contexts/cart.context";
import { useNavigate } from "react-router-dom";

import "./cart-dropdown.styles.scss";

function CartDropdown() {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const getToCheckoutHandler = () => {
    navigate("/checkout");
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={getToCheckoutHandler}>Checkout</Button>
    </div>
  );
}

export default CartDropdown;

/*
 *if (object.keys.includes(item)) { object ["item"] +=1 }
else ()
 */
