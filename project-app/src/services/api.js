import axios from "axios";

const API_URL = "http://localhost:4000/recipes";

export const fetchRecipes = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching recipes:", error.message);
    throw error;
  }
};

export const fetchRecipeById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching recipe:", error.message);
    throw error;
  }
};

export const addRecipe = async (recipe) => {
  try {
    const response = await axios.post(API_URL, recipe);
    return response.data;
  } catch (error) {
    console.error("Error adding recipe:", error.message);
    throw error;
  }
};

export const updateRecipe = async (id, recipe) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, recipe);
    return response.data;
  } catch (error) {
    console.error("Error updating recipe:", error.message);
    throw error;
  }
};

export const deleteRecipe = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error("Error deleting recipe:", error.message);
    throw error;
  }
};
