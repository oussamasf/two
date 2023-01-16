import React, { useContext } from "react";
import { productsContext } from "../../contexts/products.context";

function Shop() {
  const { products } = useContext(productsContext);
  return (
    <div>
      {products.map((element) => {
        return <div key={element.id}>{element.name}</div>;
      })}
    </div>
  );
}

export default Shop;
