import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchRecipes, deleteRecipe } from "../services/api";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes().then(setRecipes);
  }, []);

  const handleDelete = async (id) => {
    await deleteRecipe(id);
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  };

  return (
    <div>
      <h1><p>RecipeNest.com</p>
      </h1>
      <div className="recipe-grid">
        {recipes.map((recipe) => (
          <div className="recipe-card" key={recipe.id}>
            <img src={recipe.image} alt={recipe.name} />
            <h3>{recipe.name}</h3>
            <p>{recipe.description}</p>
            <div className="button-group">
              <button><Link to={`/recipe/${recipe.id}`}>Details</Link></button>
              <button><Link to={`/edit/${recipe.id}`}>Edit</Link></button>
              <button onClick={() => handleDelete(recipe.id)}>Delete</button>
              
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
