import React, { Fragment, useContext } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import { CategoriesContext } from "../../contexts/categories.context";
import "./shop.style.scss";

function Shop() {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        return (
          <>
            <h2>{title}</h2>
            <div className="products-container">
              {categoriesMap[title].map((element) => {
                return <ProductCard product={element} key={element.id} />;
              })}
            </div>
          </>
        );
      })}
    </>
  );
}

export default Shop;
