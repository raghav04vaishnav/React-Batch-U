import React, { useEffect, useState } from "react";
import axios from "axios";

function Recipe({ callBack }) {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/recipes");
      setRecipes(res.data.recipes);
      callBack(res.data.recipes);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <div className="mx-auto mt-10 rounded-xl bg-green-600 p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-white">This is 2nd Component</h2>

      <p className="mt-2 text-green-100">Total Recipes: {recipes.length}</p>
    </div>
  );
}

export default Recipe;
