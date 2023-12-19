import React from "react";
import styles from "./MenuFilter.module.css";

let k = 1;
export default function MenuFilter({
  hadlesetIsFilterColorDone,
  hadlesetisFilterCategory,
  FilterColor,
  FilterCategory
}) {
  return (
    <div className={styles.filter}>
      <div className={styles.heder}>По цвету</div>
      {FilterColor.map((color) => (
        <div key={k++}>
          <input
            type="checkbox"
            value={color.name}
            onClick={hadlesetIsFilterColorDone}
            defaultChecked={color.done}
          />
          {color.name}
        </div>
      ))}
      <div className={styles.heder}>По категории</div>
      {FilterCategory.map((category) => (
        <div key={k++}>
          <input
            type="checkbox"
            value={category.name}
            onClick={hadlesetisFilterCategory}
            defaultChecked={category.done}
          />
          {category.name}
        </div>
      ))}
    </div>
  );
}
