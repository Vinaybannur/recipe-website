import React from "react";
import { useState, useEffect } from "react";


export default function Quotes() {
  // const [num, setNum] = useState(1);
  // const randomNumberInRange = (min, max) => {
  //     return Math.floor(Math.random()
  //         * (max - min + 1)) + min;
  // };

  // console.log(num);

  const url = `https://dummyjson.com/quotes/`;

  const [data, setData] = useState([]);

  const fetchInfo = async () => {
    
    const res = await fetch(url);
    const d = await res.json();

    let dataQuotes = d.quotes;
    let randomNum = Math.floor(Math.random() * dataQuotes.length);
    let randomQuote = dataQuotes[randomNum];

    setData(randomQuote);
  };

  useEffect(() => {
    fetchInfo();
    
  }, 
  // eslint-disable-next-line
  []);

  const handleClick = () => {
    fetchInfo();
  };

    // console.log(data);

  return (
    <div className="quote">
      <div className="quote-container">
        <h2 className="quote-title"> Quote Of The Day</h2>
        <p className="quote-content">{data.quote}</p>
        <div className="quote-athor">
          <span className="material-symbols-outlined" onClick={handleClick}>
            refresh
          </span>
          <h4>- {data.author}</h4>
        </div>
      </div>
    </div>
  );
}
