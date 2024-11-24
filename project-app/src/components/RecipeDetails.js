import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchRecipeById } from "../services/api";

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetchRecipeById(id).then(setRecipe);
  }, [id]);

  if (!recipe) return <p>Loading...</p>;

  return (
    <div className="details-rec">
      <h1>{recipe.name}</h1>
      <div className="image-id"><img src={recipe.image} alt={recipe.name} /></div>
      <p><strong>Ingredients:</strong></p>
      <p>{recipe.ingredients}</p>
      <p><strong>Instructions:</strong></p>
      <p>{recipe.instructions}</p>
      <Link to="/">Back to List</Link>
    </div>
  );
};

export default RecipeDetails;
