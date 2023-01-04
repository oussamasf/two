import React from 'react'
import CategoryItem from "../category-item/category-item.component";
import "./directory.styles.css"

function Directory({elements}) {
  return (
    <div className="categories-container">
      {elements.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>  )
}

export default Directory