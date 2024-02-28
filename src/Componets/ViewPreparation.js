import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

export default function ViewRecipe() {
  const navigate = useNavigate();
  let param = useParams();

  const url = `https://dummyjson.com/recipes/${param.id}`;

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

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="details-container">
          <div className="details-card">
            <h2 className="viewRecipe-tiltle">Preparation</h2>
            <h4 className="viewRecipe-content">
              {data.ingredients &&
                data.instructions.map((item, index) => {
                  return (
                    <ul key={index}>
                      <li className="list">{item}</li>
                    </ul>
                  );
                })}
            </h4>
            <br />
            <br />
            <br />
            
            <button className="details-button" onClick={() => navigate(`/recipes/${param.id}`)}>
              View Ingredients
            </button>
          </div>
        </div>
      )}
    </>
  );
}
