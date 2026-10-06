import React, { useEffect, useState } from "react";
import Home from "./Home.jsx";
import Recipe from "./Recipe.jsx";

function Api() {
  const [carts, setCarts] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [toggle, setToggle] = useState(false);

  const handleData1 = (data) => {
    setCarts(data);
  };

  const handleData2 = (data) => {
    setRecipes(data);
  };

  const mergeData = () => {
    const merged = [];

    for (let i = 0; i < carts.length; i++) {
      const cart = carts[i];

      const cartProducts = [];

      for (let j = 0; j < cart.products.length; j++) {
        cartProducts.push({
          name: cart.products[j].title,
          price: cart.products[j].price,
          quantity: cart.products[j].quantity,
        });
      }

      merged.push({
        type: "cart",

        cartId: cart.id,
        totalProducts: cart.totalProducts,
        totalQuantity: cart.totalQuantity,
        total: cart.total,

        cartProducts: cartProducts,

        recipeId: null,
        recipeName: null,
        cuisine: null,
        difficulty: null,
        rating: null,
        image: null,
      });
    }

    for (let i = 0; i < recipes.length; i++) {
      merged.push({
        type: "recipe",
        cartId: null,
        totalProducts: null,
        totalQuantity: null,
        total: null,

        recipeId: recipes[i].id,
        recipeName: recipes[i].name,
        cuisine: recipes[i].cuisine,
        difficulty: recipes[i].difficulty,
        rating: recipes[i].rating,
        image: recipes[i].image,
      });
    }

    return merged;
  };

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  useEffect(() => {
    if (toggle) {
      const data = mergeData();

      console.log("Merged Data:", data);
      console.log("Total Data:", data.length);
    } else {
      console.log("Data Unmerged");
    }
  }, [toggle, carts, recipes]);

  const data = toggle ? mergeData() : [];

  const cards = [];

  if (toggle) {
    for (let i = 0; i < data.length; i++) {
      const item = data[i];

      cards.push(
        <div
          key={`${item.type}-${item.cartId || item.recipeId}`}
          className="overflow-hidden rounded-xl bg-white p-5 shadow-lg"
        >
          {item.type === "cart" ? (
            <>
              <h3 className="mb-4 text-xl font-bold text-blue-600">
                Cart Details
              </h3>

              <p>
                <b>Cart ID:</b> {item.cartId}
              </p>

              <p>
                <b>Total Products:</b> {item.totalProducts}
              </p>

              <p>
                <b>Total Quantity:</b> {item.totalQuantity}
              </p>

              <p>
                <b>Total:</b> ${item.total}
              </p>
            </>
          ) : (
            <>
              <img
                src={item.image}
                alt={item.recipeName}
                className="mb-4 h-48 w-full rounded-lg object-cover"
              />

              <h3 className="mb-4 text-xl font-bold text-green-600">
                Recipe Details
              </h3>

              <p>
                <b>Recipe ID:</b> {item.recipeId}
              </p>

              <p>
                <b>Name:</b> {item.recipeName}
              </p>

              <p>
                <b>Cuisine:</b> {item.cuisine}
              </p>

              <p>
                <b>Difficulty:</b> {item.difficulty}
              </p>

              <p>
                <b>Rating:</b> ⭐ {item.rating}
              </p>
            </>
          )}
        </div>,
      );
    }
  } else {
    cards.push(
      <div
        key="unmerged"
        className="col-span-full rounded-xl bg-white p-10 text-center shadow"
      >
        <p className="text-xl font-semibold text-gray-600">Data is Unmerged</p>

        <p className="mt-2 text-gray-500">
          Click the Merge button to merge the data.
        </p>
      </div>,
    );
  }

  return (
    <div className="min-h-screen bg-gray-200 p-8">
      <h1 className="mb-8 text-center text-4xl font-bold">Carts + Recipes</h1>

      {/* Home + Recipe */}
      <div className="mb-10 grid gap-6 md:grid-cols-2">
        <Home sendData={handleData1} />

        <Recipe callBack={handleData2} />
      </div>

      {/* Merge / Unmerge Button */}
      <div className="mb-8 flex justify-center">
        <button
          onClick={handleToggle}
          className={`rounded-lg px-8 py-3 text-lg font-bold text-white shadow-lg ${
            toggle
              ? "bg-red-600 hover:bg-red-700"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {toggle ? "Unmerge" : "Merge"}
        </button>
      </div>

      {/* Heading */}
      <h2 className="mb-6 p-6 text-center text-3xl font-bold text-purple-600">
        {toggle ? "Merged Data" : "Unmerged Data"}
      </h2>

      {/* Data */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{cards}</div>
    </div>
  );
}

export default Api;
