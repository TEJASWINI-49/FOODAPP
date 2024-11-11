import styles from "./Item.module.css";
import ItemList from "./ItemList";
export default function Item({ foodDetails, isLoading }) {
  return (
    <div>
      <div className={styles.recipeCard}>
        {" "}
        <h1 className={styles.recipeName}>{foodDetails.title}</h1>
        <img className={styles.recipeImage} src={foodDetails.image}></img>
        <div className={styles.recipeDetails}>
          <span>
            <strong>⏰{foodDetails.readyInMinutes} Minutes</strong>
          </span>
          <span>
            <strong>👪Serves:{foodDetails.servings}</strong>
          </span>
          <span>
            <strong>
              {foodDetails.vegetarian ? "🥕vegetarian" : "🍗-Non-Vegetarian"}{" "}
            </strong>
          </span>
          <span>
            <strong>{foodDetails.vegan ? "🐄Vegan" : ""}</strong>
          </span>
        </div>
        <div>
          <span>
            $<strong>{foodDetails.pricePerServing / 100}Per Serving</strong>
          </span>
          <h2>Ingredients</h2>
          <ItemList foodDetails={foodDetails} isLoading={isLoading}></ItemList>

          <h2>Instructions</h2>
          <div className={styles.recipeInstructions}>
            <ol>
              {isLoading ? (
                <p>data is loading.....</p>
              ) : (
                foodDetails.analyzedInstructions[0].steps.map((step) => (
                  <li>{step.step}</li>
                ))
              )}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
