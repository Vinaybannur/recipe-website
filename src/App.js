import "./App.css";
import Navbar from "./Componets/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Movies from "./Componets/Movies";
import Recipes from "./Componets/Recipes";
import Quotes from "./Componets/Quotes";
import RecipeDetails from "./Componets/RecipeDetails";
import ViewRecipe from "./Componets/ViewPreparation";
import PageNotFound from "./Componets/PageNotFound";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Movies />} /> */}
          {/* <Route path="/recipes" element={<Recipes />} /> */}
          <Route path="/" element={<Recipes />} />
          <Route path="/quotes" element={<Quotes />} />
          <Route path='/recipes/:id' element={<RecipeDetails />} />
          <Route path='/recipes/:id/viewpreparation' element={<ViewRecipe />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
