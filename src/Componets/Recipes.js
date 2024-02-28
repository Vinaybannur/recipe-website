import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

export default function Recipes() {
  const url = "https://dummyjson.com/recipes";

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchInfo = async () => {
    setIsLoading(true);
    const res = await fetch(url);
    const d = await res.json();
    setData(d.recipes);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchInfo();
  }, []);
    // console.log(data);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="recipes">
          <div className="recipe-heading">
            <h1>
              Easy <span className="highlight">Recipes</span> For Any Occasion!!
            </h1>
          </div>

          <div className="recipe-card">
            {data.map((recipe) => {
              return (
                <div className="card" key={recipe.id}>
                  <img
                    src={recipe.image}
                    className="card-img-top "
                    alt={recipe.name}
                  />
                  <div className="card-body">
                    <div className="content">
                      <h5 className="card-title">{recipe.name}</h5>
                      <h5>{recipe.rating}⭐️</h5>
                    </div>
                  </div>
                  <div className="btn-conatiner">
                    <Link className="outline btn" to={`/recipes/${recipe.id}`}>
                      View Recipes
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
