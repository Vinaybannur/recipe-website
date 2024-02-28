import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    // <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    //   <div className="container-fluid">
    //     <Link className="navbar-brand" to="/">
    //       🇮🇳
    //     </Link>
    //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //         <li className="nav-item">
    //           <Link className="nav-link active" aria-current="page" to="/">
    //             Movies
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link className="nav-link active" aria-current="page" to="/recipes">
    //             Recipes
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link className="nav-link active" aria-current="page" to="/quotes">
    //             Quotes
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>

    <nav>
      {/* <Link className="nav-item" to="/recipes">
        <img
          className="logo"
          src="https://t3.ftcdn.net/jpg/03/28/50/20/360_F_328502048_7aT17h0Y4MmuGU63qqQBTaB7dRmleS7c.jpg"
          alt="Vinay"
        />
      </Link> */}
      <Link className="nav-item" to="/">
        <img
          className="logo"
          src="https://t3.ftcdn.net/jpg/03/28/50/20/360_F_328502048_7aT17h0Y4MmuGU63qqQBTaB7dRmleS7c.jpg"
          alt="Vinay"
        />
      </Link>
      {/* <Link className="nav-item" aria-current="page" to="/">
        Movies
      </Link> */}
      {/* <Link className="nav-item" aria-current="page" to="/recipes">
        Recipes
      </Link> */}
      <Link className="nav-item" aria-current="page" to="/">
        Recipes
      </Link>
      <Link className="nav-item" aria-current="page" to="/quotes">
        Quotes
      </Link>
    </nav>
  );
}
