import styles from "./foodItem.module.css";

export default function FoodItem({ food, setFoodId }) {
  return (
    <div className={styles.fooditem}>
      <img className={styles.foodImage} src={food.image} alt="" />
      <div className={styles.ItemContent}>
        <p className={styles.itemName}>{food.title}</p>
      </div>
      <div className={styles.buttonContainer}>
        <button
          onClick={() => {
            setFoodId(food.id);
            console.log(food.id);
          }}
          className={styles.itemButton}
        >
          View Recipe{" "}
        </button>
      </div>
    </div>
  );
}
