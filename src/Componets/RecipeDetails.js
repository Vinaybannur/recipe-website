import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";
import PageNotFound from "./PageNotFound";

export default function RecipeDetails() {
  const navigate = useNavigate();

  let { id } = useParams();

  const url = `https://dummyjson.com/recipes/${id}`;

  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchInfo = async () => {
      const res = await fetch(url);
      const d = await res.json();
      setData(d);
      setIsLoading(false);
    };
    fetchInfo();
  }, [url]);

  // console.log(data);

  var parsedId = parseInt(id);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : parsedId === data.id ? (
        <div className="details-container">
          <div className="details-card">
            <img className="details-img" src={data.image} alt={data.name} />

            <h2 className="details-tiltle">{data.name} | Ingredients</h2>
            <h4 className="details-content">
              {data.ingredients &&
                data.ingredients.map((item, index) => {
                  return (
                    <p className="list" key={index}>
                      {item}
                    </p>
                  );
                })}
            </h4>
            <button className="details-button" onClick={() => navigate("/")} >
              <i className="fa fa-arrow-circle-left"></i> Back
            </button>
            <Link to={`/recipes/${data.id}/viewpreparation`}>
              <button className="details-button"  >View Preparation</button>
            </Link>
          </div>
        </div>
      ) : (
        <PageNotFound />
      )}
    </>
  );
}
