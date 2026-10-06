import React from "react";
import useTheme from "./useTheme";
import useView from "./useView";

function Cart({ cart, setCart }) {
  const { theme, toggleTheme } = useTheme();
  const { view, viewToggle } = useView();
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };
  return (
    <div
      className={`min-h-screen px-5 py-10 transition-colors duration-300 ${
        theme ? "bg-slate-950 text-white" : "bg-slate-100 text-slate-800"
      }`}
    >
      {/* Buttons */}
      <div className="mb-6 flex justify-end gap-3">
        {/* Theme */}
        <button
          onClick={toggleTheme}
          className={`rounded-lg px-5 py-2 font-semibold ${
            theme ? "bg-white text-black" : "bg-slate-900 text-white"
          }`}
        >
          {theme ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>

        {/* View */}
        <button
          onClick={viewToggle}
          className="rounded-lg bg-blue-600 px-5 py-2 font-semibold text-white"
        >
          {view === "card" ? "📋 Show Table" : "🃏 Show Cards"}
        </button>
      </div>

      <h1 className="mb-10 text-center text-4xl font-bold">🛒 My Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center">
          <h2 className="text-2xl font-semibold">Cart is empty 😕</h2>
        </div>
      ) : view === "card" ? (
        /*  CARD FORMET  */
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className={`rounded-2xl p-6 text-center shadow-lg ${
                theme ? "bg-slate-800" : "bg-white"
              }`}
            >
              <img
                src={item.image}
                alt={`${item.firstName} ${item.lastName}`}
                className="mx-auto mb-5 h-32 w-32 rounded-full object-cover"
              />

              <h2 className="text-xl font-bold">
                {item.firstName} {item.lastName}
              </h2>

              <p className="mt-2">Age: {item.age}</p>

              <p className="mt-2 text-sm">{item.email}</p>

              <button
                onClick={() => removeFromCart(item.id)}
                className="mt-5 w-full rounded-xl bg-red-600 px-4 py-3 font-semibold text-white"
              >
                Remove From Cart
              </button>
            </div>
          ))}
        </div>
      ) : (
        /*  TABLE FORMET */
        <div className="mx-auto max-w-7xl overflow-x-auto">
          <table
            className={`w-full rounded-xl shadow-lg ${
              theme ? "bg-slate-800" : "bg-white"
            }`}
          >
            <thead>
              <tr className={theme ? "bg-slate-700" : "bg-slate-200"}>
                <th className="px-6 py-4">Name</th>

                <th className="px-6 py-4">Age</th>

                <th className="px-6 py-4">Email</th>

                <th className="px-6 py-4">Action</th>
              </tr>
            </thead>

            <tbody>
              {cart.map((item) => (
                <tr
                  key={item.id}
                  className={`border-t ${
                    theme ? "border-slate-700" : "border-slate-200"
                  }`}
                >
                  <td className="px-6 py-4 text-center">
                    {item.firstName} {item.lastName}
                  </td>

                  <td className="px-6 py-4 text-center">{item.age}</td>

                  <td className="px-6 py-4 text-center">{item.email}</td>

                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="rounded-lg bg-red-600 px-4 py-2 text-white"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Cart;
