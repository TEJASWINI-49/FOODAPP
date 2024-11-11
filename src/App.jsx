import { useState } from "react";
import Search from "./Search";
import FoodList from "./FoodList";
import Nav from "./Nav";
import "./app.css";
import Container from "./Container";
import InnerContainer from "./InnerContainer";
import FoodDetails from "./FoodDetails";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("656329");
  return (
    <div className="App">
      <Nav></Nav>
      <Search foodData={foodData} setFoodData={setFoodData}></Search>
      <Container>
        <InnerContainer>
          <FoodList foodData={foodData} setFoodId={setFoodId} />
        </InnerContainer>
        <InnerContainer></InnerContainer>
        <FoodDetails foodId={foodId}></FoodDetails>
      </Container>
    </div>
  );
}

export default App;
