import Menu from "./compones/Menu.js";
import MenuFilter from "./compones/MenuFilter.js";
import Product from "./compones/Product.js";
import { Filter } from "./utils/filter.js";
import { generateProducts, colors, categorys } from "./utils/generate-todos.js";
import React, { useState } from "react";
import styles from "./App.module.css";

export default function App() {
  const [products] = useState(generateProducts);
  const [isSort, setIsSort] = useState(1);

  const [isFilterColor, setIsFilterColor] = useState(false);
  const [isFilterCategory, setIsFilterCategory] = useState(false);

  const [nameprod, setName] = useState("");

  const handleSortCheap = () => setIsSort(1);
  const handleSortExppensive = () => setIsSort(2);
  const handleSortPopular = () => setIsSort(3);

  const handleSetName = (e) => setName(e.target.value);

  const hadlesetIsFilterColorDone = (e) => {
    setFilterColor(
      FilterColor.map((color) => {
        if (color.name === e.target.value) {
          color.done = !color.done;
        }
        return color;
      })
    );
    setIsFilterColor(() => {
      let filter = false;
      FilterColor.forEach((color) => {
        if (color.done) {
          filter = true;
        }
      });
      return filter;
    });
  };
  const hadlesetisFilterCategory = (e) => {
    setFilterCategory(
      FilterCategory.map((category) => {
        if (category.name === e.target.value) {
          category.done = !category.done;
        }
        return category;
      })
    );
    setIsFilterCategory(() => {
      let filter = false;
      FilterCategory.forEach((category) => {
        if (category.done) {
          filter = true;
        }
      });
      return filter;
    });
  };

  const handleFilterColor = () => {
    const FilterColor = [];
    colors.forEach((color) => {
      if (products.map((todo) => todo.color).includes(color)) {
        const color_f = {
          name: color,
          done: false
        };
        FilterColor.push(color_f);
      }
    });
    return FilterColor;
  };

  const handleFilterCategory = () => {
    const FilterCategory = [];
    categorys.forEach((category) => {
      if (products.map((todo) => todo.category).includes(category)) {
        const color_f = {
          name: category,
          done: false
        };
        FilterCategory.push(color_f);
      }
    });
    return FilterCategory;
  };

  const [FilterColor, setFilterColor] = useState(handleFilterColor);
  const [FilterCategory, setFilterCategory] = useState(handleFilterCategory);

  return (
    <div className={styles.conteiner}>
      <div className={styles.heder}>LAMODA</div>

      <Menu
        name={nameprod}
        handleSetName={handleSetName}
        handleSortNew={handleSortCheap}
        handleSortOld={handleSortExppensive}
        handleSortAlphabet={handleSortPopular}
        isSort={isSort}
      />

      <div className={styles.filter_and_catalog}>
        <MenuFilter
          hadlesetIsFilterColorDone={hadlesetIsFilterColorDone}
          hadlesetisFilterCategory={hadlesetisFilterCategory}
          FilterColor={FilterColor}
          FilterCategory={FilterCategory}
        />
        <div className={styles.products}>
          {products
            .sort(function (a, b) {
              switch (isSort) {
                case 2:
                  return b.price - a.price;
                case 3:
                  return b.rating - a.rating;
                default:
                  return a.price - b.price;
              }
            })
            .filter((product) =>
              Filter(
                product,
                isFilterColor,
                isFilterCategory,
                nameprod,
                FilterColor,
                FilterCategory
              )
            )
            .map((product) => (
              <Product
                key={product.id}
                img_prod={product.img_prod}
                id={product.id}
                name={product.name}
                description={product.description}
                color={product.color}
                category={product.category}
                price={product.price}
                rating={product.rating}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
