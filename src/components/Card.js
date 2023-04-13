import React from "react";

const Card = ({ meals, details }) => {
  let ingredientList = [];

  if (meals !== undefined) {
    for (let i = 0; i < 20; i++) {
      if (meals["strIngredient" + i] !== undefined && meals["strIngredient" + i] !== "") {
        ingredientList.push(meals["strIngredient" + i] + ": " + meals["strMeasure" + i]);
      }
    }

    if (details === false) {
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
    } else if (details === true) {
      return (
        <div className={meals.strMeal} id="details">
          <li className={meals.strMeal}>
            <br />
            <h2> {meals.strMeal}</h2>
            <br />
            Origin: {meals.strArea}
            <br />
            <br />
            <img src={meals.strMealThumb} height="300px" width="300px" alt="" />
            <br />
            <br />
            <h3>Ingredients:</h3>
            <br />
            {ingredientList.map((el) => (
              <p key={el}>{el}</p>
            ))}
            <br />
            <h3>Instructions:</h3>
            <br />
            {JSON.stringify(meals.strInstructions)
              .replaceAll('"', "")
              .split("\\r\\n")
              .map((ele) => (
                <p key={ele}>{ele}</p>
              ))}
            <br />
            <h3>Recipe video:</h3>
            <br />
            <iframe
              width="100%"
              height="350"
              src={meals.strYoutube.replace("/watch?v=", "/embed/")}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <br />
            <br />
          </li>
        </div>
      );
    }
  }
};

export default Card;
