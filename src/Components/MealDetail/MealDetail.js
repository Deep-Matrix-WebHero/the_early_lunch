import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import {useParams} from "react-router-dom";

const MealDetail = () => {
  const {idMeal} = useParams();
  const [meal, setMeal] = useState({});
  const history = useHistory();
  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMeal(data));
  }, [meal]);
  const handleClick = () => {
    history.push("/restaurant");
  };

  return (
    <div>
      <h2>meal details:{idMeal}</h2>
      <button onClick={handleClick}>See all meals.</button>
    </div>
  );
};

export default MealDetail;
