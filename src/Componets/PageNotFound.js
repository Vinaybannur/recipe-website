import React from "react";

export default function PageNotFound() {
  return (
    <div className="no-recipes">
      <img
        className="no-recipes-img"
        src="https://norecipes.com/wp-content/uploads/2019/10/nr-logo.png"
        alt="No-recipes-availabel"
      />
      <p className="no-recipes-content">No Recpies available</p>
    </div>
  );
}
