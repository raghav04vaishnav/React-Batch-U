import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useTheme from "./useTheme";
import useView from "./useView";

function OrderHistory() {
  const navigate = useNavigate();
  const orderHistory = useSelector((state) => state.orderHistory);
  const { theme, toggleTheme } = useTheme("orderHistoryTheme");
  const { view, viewToggle } = useView("orderHistoryView");
  const grandTotal = orderHistory.reduce(
    (total, order) => total + Number(order.total || 0),
    0,
  );

  return (
    <div
      className={`min-h-screen px-6 py-10 ${
        theme === "dark"
          ? "bg-slate-950 text-white"
          : "bg-slate-100 text-slate-900"
      }`}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">📦 Order History</h1>

            <p className="mt-2 text-slate-500">{orderHistory.length} Orders</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={toggleTheme}
              className="rounded-xl bg-slate-900 px-4 py-2.5 font-semibold text-white"
            >
              {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
            </button>

            <button
              onClick={viewToggle}
              className="rounded-xl bg-blue-600 px-4 py-2.5 font-semibold text-white"
            >
              {view === "card" ? "☷ List View" : "▦ Card View"}
            </button>

            <button
              onClick={() => navigate("/product/wishlist")}
              className="rounded-xl bg-blue-600 px-5 py-2.5 font-semibold text-white"
            >
              ← Wishlist
            </button>
          </div>
        </div>

        {orderHistory.length === 0 ? (
          <div
            className={`rounded-2xl p-12 text-center shadow-xl ${
              theme === "dark" ? "bg-slate-800" : "bg-white"
            }`}
          >
            <div className="text-6xl">📦</div>

            <h2 className="mt-5 text-2xl font-bold">No Orders Yet</h2>

            <p className="mt-2 text-slate-500">
              Your placed orders will appear here.
            </p>

            <button
              onClick={() => navigate("/product")}
              className="mt-6 rounded-xl bg-green-600 px-6 py-3 font-semibold text-white"
            >
              🛍️ Shop Now
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {orderHistory.map((order, index) => (
              <div
                key={order.id}
                className={`rounded-2xl p-6 shadow-xl ${
                  theme === "dark" ? "bg-slate-800" : "bg-white"
                }`}
              >
                <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-slate-300 pb-4">
                  <div>
                    <h2 className="text-xl font-bold">Order #{index + 1}</h2>

                    <p className="mt-1 text-sm text-slate-500">{order.date}</p>
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">Order Total</p>

                    <p className="text-2xl font-bold text-green-500">
                      ${Number(order.total).toFixed(2)}
                    </p>
                  </div>
                </div>

                <div
                  className={
                    view === "card"
                      ? "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
                      : "space-y-3"
                  }
                >
                  {order.products.map((product) => (
                    <div
                      key={product.id}
                      className={`rounded-xl bg-slate-100 p-4 ${
                        view === "card"
                          ? "text-center"
                          : "flex items-center gap-4"
                      }`}
                    >
                      <img
                        src={product.thumbnail}
                        alt={product.title}
                        className={
                          view === "card"
                            ? "mx-auto h-32 w-32 object-contain"
                            : "h-20 w-20 object-contain"
                        }
                      />

                      <div className={view === "card" ? "mt-3" : "flex-1"}>
                        <h3 className="font-bold">{product.title}</h3>

                        <p className="mt-1 font-semibold text-green-500">
                          ${Number(product.price).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div
              className={`rounded-2xl p-7 shadow-xl ${
                theme === "dark" ? "bg-slate-800" : "bg-white"
              }`}
            >
              <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                <div>
                  <p className="text-sm text-slate-500">Total Orders</p>

                  <h2 className="text-2xl font-bold">{orderHistory.length}</h2>
                </div>

                <div className="text-center sm:text-right">
                  <p className="text-sm text-slate-500">Grand Total</p>

                  <h2 className="text-4xl font-extrabold text-green-500">
                    ${grandTotal.toFixed(2)}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default OrderHistory;
