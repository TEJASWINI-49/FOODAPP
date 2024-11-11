import React, { useEffect, useState } from "react";
import FoodList from "./FoodList";
import styles from "./search.module.css";
const apiKey = "*************";
const URL = "https://api.spoonacular.com/recipes/complexSearch";

export default function Search({ foodData, setFoodData }) {
  const [query, setFood] = useState("pizza");
  //const [food1, foodvalue] = useState("");
  useEffect(() => {
    async function fetchFood() {
      const a = await fetch(`${URL}?query=${query}&apiKey=${apiKey}`);
      const b = await a.json();
      setFoodData(b.results);
      //console.log(b.results);
    }
    fetchFood();
  }, [query]);
  return (
    <div className={styles.itemContainer}>
      <input
        className={styles.item}
        type="text"
        value={query}
        onChange={(e) => {
          setFood(e.target.value);
          console.log(query);
        }}
      ></input>
    </div>
  );
}
