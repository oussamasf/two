import React, { useContext } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import { productsContext } from "../../contexts/products.context";
import "./shop.style.scss";

function Shop() {
  const { products } = useContext(productsContext);
  return (
    <div className="products-container">
      {products.map((element) => {
        return <ProductCard product={element} key={element.id} />;
      })}
    </div>
  );
}

export default Shop;
