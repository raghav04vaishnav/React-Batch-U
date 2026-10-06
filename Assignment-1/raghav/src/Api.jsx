import React, { useEffect, useState } from "react";
import Home from "./Home.jsx";
import Recipe from "./Recipe.jsx";

function Api() {
  const [carts, setCarts] = useState([]);
  const [recipes, setRecipes] = useState([]);

  const handleData1 = (data) => {
    setCarts(data);
  };

  const handleData2 = (data) => {
    setRecipes(data);
  };

  const mergeData = () => {
    return carts.map((item, index) => {
      const recipe = recipes[index];

      return {
        cartId: item.id,
        totalProducts: item.totalProducts,
        totalQuantity: item.totalQuantity,
        total: item.total,

        recipeId: recipe?.id,
        recipeName: recipe?.name,
        cuisine: recipe?.cuisine,
        difficulty: recipe?.difficulty,
        rating: recipe?.rating,
        image: recipe?.image,
      };
    });
  };
  useEffect(() => {
    const data = mergeData();

    if (data.length > 0) {
      console.log("Merged Data:", data);
    }
  }, [carts, recipes]);
  const data = mergeData();
  console.log(">>>>>>mergedata", data);
  

  return (
    <div className="min-h-screen bg-gray-200 p-8">

      <h1 className="mb-8 text-center text-4xl font-bold">
        Carts + Recipes
      </h1>

      <div className="mb-10 grid gap-6 md:grid-cols-2">

        <Home sendData={handleData1} />
        <Recipe callBack={handleData2} />

      </div>

      <h2 className="mb-6 p-6 text-center text-3xl font-bold text-purple-600">
        Merged Data
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        {data.map((item) => (
          <div
            key={`${item.cartId}-${item.recipeId}`}
            className="overflow-hidden rounded-xl bg-white shadow-lg"
          >

            <img
              src={item.image}
              alt={item.recipeName}
              className="h-48 w-95 object-cover"
            />

            <div className="p-5">

              <h3 className="mb-3 text-xl font-bold text-blue-600">
                Cart Details
              </h3>

              <p>
                <b>Cart ID:</b> {item.cartId}
              </p>

              <p>
                <b>Total Products:</b>{" "}
                {item.totalProducts}
              </p>

              <p>
                <b>Total Quantity:</b>{" "}
                {item.totalQuantity}
              </p>

              <p>
                <b>Total:</b> ${item.total}
              </p>

              <div className="mt-4 border-t pt-4">

                <h3 className="mb-3 text-xl font-bold text-green-600">
                  Recipe Details
                </h3>

                <p>
                  <b>Recipe ID:</b>{" "}
                  {item.recipeId}
                </p>

                <p>
                  <b>Name:</b>{" "}
                  {item.recipeName}
                </p>

                <p>
                  <b>Cuisine:</b>{" "}
                  {item.cuisine}
                </p>

                <p>
                  <b>Difficulty:</b>{" "}
                  {item.difficulty}
                </p>

                <p>
                  <b>Rating:</b> ⭐{" "}
                  {item.rating}
                </p>

              </div>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Api;