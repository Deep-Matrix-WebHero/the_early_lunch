import React from "react";
import "./Meal.css";

const Meal = (props) => {
  const {strInstructions, strMeal, strMealThumb, strArea} = props.meal;
  return (
    <div className="meal">
      <img src={strMealThumb} alt="" />
      <h2>{strMeal}</h2>
      <p>{strInstructions.slice(0, 100)}</p>
      <h4>{strArea}</h4>
      <button>Show Details</button>
    </div>
  );
};

export default Meal;
