import React from "react";
import styles from "./Menu.module.css";

export default function Menu({
  name,
  handleSetName,
  handleSortNew,
  handleSortOld,
  handleSortAlphabet,
  isSort
}) {
  return (
    <div className={styles.menu}>
      <input
        type="radio"
        id="cheape"
        onClick={handleSortNew}
        className={styles.radio}
      />
      <label
        htmlFor="cheape"
        className={isSort === 1 ? styles.sortDone : styles.sort}
      >
        Сначала дешевые
      </label>
      <input
        type="radio"
        id="expensive"
        onClick={handleSortOld}
        className={styles.radio}
      />
      <label
        htmlFor="expensive"
        className={isSort === 2 ? styles.sortDone : styles.sort}
      >
        Сначала дорогие
      </label>
      <input
        type="radio"
        id="popular"
        onClick={handleSortAlphabet}
        className={styles.radio}
      />
      <label
        htmlFor="popular"
        className={isSort === 3 ? styles.sortDone : styles.sort}
      >
        Сначала популярные
      </label>

      <input
        value={name}
        onChange={handleSetName}
        className={styles.sort_inout}
      />
    </div>
  );
}
