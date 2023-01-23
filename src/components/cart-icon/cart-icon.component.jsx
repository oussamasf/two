import React, { useContext } from "react";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";
import "./cart-icon.styles.scss";

function CartIcon() {
  const { setIsCartOpen, quantityAccum } = useContext(CartContext);
  const toggle = () => {
    setIsCartOpen((isCartOpen) => !isCartOpen);
  };
  return (
    <div className="cart-icon-container" onClick={toggle}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{quantityAccum}</span>
    </div>
  );
}

export default CartIcon;
