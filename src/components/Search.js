import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import "../styles/components/card.css";
import "../styles/components/search.css";

const Search = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [selection, setSelection] = useState("");
  const allMeals = data.map((element) => element.strMeal);
  const [details, setDetails] = useState(false);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((res) => setData(Object.values(res.data)[0]));
  }, []);

  const clear = () => {
    setInput("");
    if (document.getElementById("input") != null) {
      document.getElementById("input").value = "";
    }
  };

  document.addEventListener("click", (e) => {
    if (e.target.parentNode !== null && allMeals.includes(e.target.parentNode.className)) {
      setSelection(e.target.parentNode.className);
      setDetails(true);
      clear();
    }
  });

  return (
    <div>
      {details === false && (
        <div className="search-bar">
          <input
            id="input"
            type="text"
            placeholder="Type here to search"
            onKeyDown={(e) => {
              if (e.code === "Enter") setInput(e.target.value);
            }}
          />
          <br />

          <button type="button" onClick={() => setInput(document.getElementById("input").value)}>
            Search
          </button>

          {input && (
            <button type="button" onClick={() => clear()}>
              Cancel
            </button>
          )}
        </div>
      )}

      {details === true && (
        <div className="return-btn-container">
          <button
            id="return-btn"
            type="button"
            onClick={() => {
              setSelection("");
              setDetails(false);
            }}
          >
            Return
          </button>
        </div>
      )}

      <ul>
        {data
          .filter((meals) =>
            input
              ? JSON.stringify(meals).includes(input)
              : selection
              ? selection === meals.strMeal
              : meals
          )
          .map((meals) => (
            <Card key={meals.idMeal} meals={meals} details={details} />
          ))}
      </ul>
    </div>
  );
};

export default Search;
