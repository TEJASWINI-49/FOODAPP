import styles from "./Item.module.css";
export default function Items({ item }) {
  return (
    <div>
      <div className={styles.ItemContainer}>
        <div class={styles.ImageContainer}>
          <div>
            <img
              class={styles.image}
              src={
                `https://spoonacular.com/cdn/ingredients_100x100/` + item.image
              }
              alt=""
            ></img>
          </div>
        </div>
        <div className={styles.nameContainer}>
          <div className={styles.name}>{item.name}</div>
          <div className={styles.amount}>{item.amount}</div>
          <div className={styles.unit}>{item.unit}</div>
        </div>
      </div>
    </div>
  );
}
