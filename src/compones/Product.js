import React from "react";
import styles from "./Product.module.css";

function Product({
  description,
  name,
  id,
  color,
  category,
  price,
  rating,
  img_prod
}) {
  return (
    <div className={styles.product}>
      <img src={img_prod} alt="" />
      <div className={styles.name_product}>{name}</div>
      <div className={styles.description_product}>{description}</div>
      <div className={styles.features}>
        <div>Цвет: </div>
        <div>{color}</div>
      </div>
      <div className={styles.features}>
        <div>Категория:</div>
        <div>{category}</div>
      </div>
      <div className={styles.features}>
        <div>Цена:</div>
        <div> {price} BYN</div>
      </div>
      <div className={styles.features}>
        <div>Рэйтинг:</div>
        <div>☆{rating}</div>
      </div>
    </div>
  );
}

export default React.memo(Product);
