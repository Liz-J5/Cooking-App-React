import React from "react";

const Card = ({ meals }) => {
  // const leng = document.getElementsByTagName("li");
  // console.log(leng.length);
  // const meal = Object.values(meals);
  if (meals !== undefined) {
    return (
      <div className={meals.strMeal}>
        <li className={meals.strMeal}>
          <h2> {meals.strMeal}</h2>
          <br />
          Origin: {meals.strArea}
          <br />
          <br />
          <img src={meals.strMealThumb} height="270px" width="270px" alt="" />
          <br />
          <br />
          <p>{meals.strInstructions.slice(0, 300) + "..."}</p>
        </li>
      </div>
    );
  }
};

export default Card;
