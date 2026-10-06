import React from "react";
import { Link } from "react-router-dom";
import useTheme from "./useTheme";

function Home() {
  const { theme, toggleTheme } = useTheme("homeTheme");

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        theme === "dark"
          ? "bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white"
          : "bg-gradient-to-br from-slate-100 via-white to-blue-100 text-slate-900"
      }`}
    >
      {/* Theme Button */}
      <div className="fixed right-5 top-20 z-50">
        <button
          onClick={toggleTheme}
          className={`rounded-xl px-4 py-2 font-semibold shadow-lg transition ${
            theme === "dark"
              ? "bg-white text-slate-900 hover:bg-slate-200"
              : "bg-slate-900 text-white hover:bg-slate-700"
          }`}
        >
          {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>

      {/* Hero */}
      <section className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 py-16">
        <div className="grid w-full items-center gap-12 md:grid-cols-2">
          <div>
            <span
              className={`inline-block rounded-full border px-4 py-2 text-sm font-semibold ${
                theme === "dark"
                  ? "border-blue-500/30 bg-blue-500/10 text-blue-400"
                  : "border-blue-300 bg-blue-100 text-blue-600"
              }`}
            >
              ✨ Welcome to MyStore
            </span>

            <h1
              className={`mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl ${
                theme === "dark" ? "text-white" : "text-slate-900"
              }`}
            >
              Shop Smart.
              <br />
              <span className="text-blue-500">Live Better.</span>
            </h1>

            <p
              className={`mt-6 max-w-xl text-lg leading-8 ${
                theme === "dark" ? "text-slate-400" : "text-slate-600"
              }`}
            >
              Discover amazing products at great prices. Explore our collection,
              find your favorites, and enjoy a simple and convenient shopping
              experience.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/product"
                className="rounded-xl bg-blue-600 px-7 py-3.5 font-bold text-white shadow-lg transition hover:scale-105 hover:bg-blue-700"
              >
                🛍️ Shop Now
              </Link>

              <Link
                to="/product"
                className={`rounded-xl border px-7 py-3.5 font-bold transition ${
                  theme === "dark"
                    ? "border-slate-600 bg-slate-800 text-white hover:bg-slate-700"
                    : "border-slate-300 bg-white text-slate-800 hover:bg-slate-100"
                }`}
              >
                Explore Products →
              </Link>
            </div>

            <div className="mt-10 grid max-w-lg grid-cols-3 gap-4">
              <div>
                <h3
                  className={`text-2xl font-bold ${
                    theme === "dark" ? "text-white" : "text-slate-900"
                  }`}
                >
                  100+
                </h3>
                <p className="text-sm text-slate-500">Products</p>
              </div>

              <div>
                <h3
                  className={`text-2xl font-bold ${
                    theme === "dark" ? "text-white" : "text-slate-900"
                  }`}
                >
                  24/7
                </h3>
                <p className="text-sm text-slate-500">Support</p>
              </div>

              <div>
                <h3
                  className={`text-2xl font-bold ${
                    theme === "dark" ? "text-white" : "text-slate-900"
                  }`}
                >
                  ⭐ 4.8
                </h3>
                <p className="text-sm text-slate-500">Rating</p>
              </div>
            </div>
          </div>

          {/* Featured Card */}
          <div className="relative flex justify-center">
            <div
              className={`relative w-full max-w-md rounded-3xl border p-6 shadow-2xl ${
                theme === "dark"
                  ? "border-slate-700 bg-slate-800/80"
                  : "border-slate-200 bg-white"
              }`}
            >
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p
                    className={`text-sm ${
                      theme === "dark" ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    Featured Product
                  </p>

                  <h2
                    className={`text-xl font-bold ${
                      theme === "dark" ? "text-white" : "text-slate-900"
                    }`}
                  >
                    Premium Collection
                  </h2>
                </div>

                <span className="rounded-full bg-green-500/10 px-3 py-1 text-sm font-semibold text-green-500">
                  New
                </span>
              </div>

              <div
                className={`flex h-64 items-center justify-center rounded-2xl ${
                  theme === "dark"
                    ? "bg-gradient-to-br from-slate-900 to-indigo-950"
                    : "bg-gradient-to-br from-blue-50 to-indigo-100"
                }`}
              >
                <div className="text-center">
                  <div className="text-8xl">🛍️</div>

                  <p
                    className={`mt-4 ${
                      theme === "dark" ? "text-slate-400" : "text-slate-600"
                    }`}
                  >
                    Discover Something Amazing
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between">
                <div>
                  <p
                    className={`text-lg font-bold ${
                      theme === "dark" ? "text-white" : "text-slate-900"
                    }`}
                  >
                    Best Products
                  </p>

                  <p className="text-sm text-slate-500">Quality & Affordable</p>
                </div>

                <div className="text-right">
                  <p className="text-2xl font-bold text-green-500">🏷️</p>

                  <p className="text-xs text-slate-500">Great Deals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        className={`border-t px-6 py-16 ${
          theme === "dark"
            ? "border-slate-800 bg-slate-950/60"
            : "border-slate-200 bg-white/60"
        }`}
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <h2
              className={`text-3xl font-bold ${
                theme === "dark" ? "text-white" : "text-slate-900"
              }`}
            >
              Why Choose MyStore?
            </h2>

            <p className="mt-3 text-slate-500">
              Everything you need for a better shopping experience.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              [
                "🚚",
                "Fast Delivery",
                "Get your favorite products delivered quickly and safely.",
              ],
              [
                "🔒",
                "Secure Shopping",
                "Your shopping experience is designed with security in mind.",
              ],
              [
                "❤️",
                "Wishlist",
                "Save your favorite products and come back to them anytime.",
              ],
            ].map(([icon, title, description]) => (
              <div
                key={title}
                className={`rounded-2xl border p-6 transition hover:-translate-y-1 ${
                  theme === "dark"
                    ? "border-slate-700 bg-slate-900"
                    : "border-slate-200 bg-white shadow-md"
                }`}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-2xl">
                  {icon}
                </div>

                <h3
                  className={`text-xl font-bold ${
                    theme === "dark" ? "text-white" : "text-slate-900"
                  }`}
                >
                  {title}
                </h3>

                <p className="mt-3 leading-7 text-slate-500">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-3xl border border-blue-500/20 bg-blue-500/10 p-10 text-center">
          <h2
            className={`text-3xl font-bold sm:text-4xl ${
              theme === "dark" ? "text-white" : "text-slate-900"
            }`}
          >
            Ready to Start Shopping?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-500">
            Explore our products and find something you love today.
          </p>

          <Link
            to="/product"
            className="mt-7 inline-block rounded-xl bg-blue-600 px-8 py-3.5 font-bold text-white transition hover:scale-105 hover:bg-blue-700"
          >
            Start Shopping 🛒
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`border-t px-6 py-6 text-center ${
          theme === "dark"
            ? "border-slate-800 bg-slate-950"
            : "border-slate-200 bg-white"
        }`}
      >
        <p className="text-sm text-slate-500">
          © 2026 MyStore. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Home;
