import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addRecipe, updateRecipe, fetchRecipeById } from "../services/api";

const RecipeForm = () => {
  const [form, setForm] = useState({ name: "", ingredients: "", image: "" });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetchRecipeById(id).then((data) => setForm(data));
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await updateRecipe(id, form);
    } else {
      await addRecipe(form);
    }
    navigate("/");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Ingredients:
        <textarea
          name="ingredients"
          value={form.ingredients}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Description:
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Image URL:
        <input
          type="text"
          name="image"
          value={form.image}
          onChange={handleChange}
        />
      </label>
      {form.image && (
        <div>
          <p>Preview:</p>
          <img src={form.image} alt="Preview" style={{ maxWidth: "200px" }} />
        </div>
      )}
      <button type="submit">Save</button>
    </form>
  );
};

export default RecipeForm;
