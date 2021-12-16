import React from "react";
import {useHistory} from "react-router-dom/cjs/react-router-dom.min";
import "./Meal.css";

const Meal = (props) => {
  const {strInstructions, strMeal, strMealThumb, strArea, idMeal} = props.meal;
  const history = useHistory();
  const style = {
    border: "10px solid goldenrod",
    padding: "10px",
    borderRadius: "10px",
  };
  const handleClick = () => {
    history.push(`/meal/${idMeal}`);
  };

  return (
    <div className="meal" style={style}>
      <img src={strMealThumb} alt="" />
      <h2>{strMeal}</h2>
      <h3>{strArea}</h3>
      {/* <h3>{strMealThumb}</h3> */}
      <p>{strInstructions.slice(0, 50)}</p>
      <button onClick={handleClick}>Show Details</button>
    </div>
  );
};

export default Meal;
