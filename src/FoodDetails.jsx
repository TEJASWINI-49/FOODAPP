import React, { useEffect, useState } from "react";
import Item from "./Item";
export default function FoodDetails({ foodId }) {
  const [foodDetails, setFoodDetails] = useState({}); //get the recipe ingormation obj
  const [isLoading, setIsLoading] = useState(true);
  const apiKey = "*****";
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;

  useEffect(() => {
    async function getinfo() {
      const res = await fetch(`${URL}?apiKey=${apiKey}`);
      const data = await res.json();
      setFoodDetails(data);
      console.log(data);
      setIsLoading(false);
    }
    getinfo();
  }, [foodId]);
  return (
    <div>
      <Item foodDetails={foodDetails} isLoading={isLoading}></Item>
    </div>
  );
}
