import Items from "./Items.jsx";
import foodDetails from "./FoodDetails.jsx";
export default function ItemList({ foodDetails, isLoading }) {
  return (
    <div>
      {isLoading ? (
        <p>wait</p>
      ) : (
        foodDetails.extendedIngredients.map((item) => (
          <Items item={item} key={item.id}></Items>
        ))
      )}
    </div>
  );
}
