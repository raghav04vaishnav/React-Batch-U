import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchProducts } from "./slice/productSlice";

function ProductList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filterData = [...products]
    .filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sort === "low") return a.price - b.price;
      if (sort === "high") return b.price - a.price;

      return 0;
    });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>

          <p className="mt-4 text-lg font-medium text-gray-600">
            Loading Products...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-xl shadow-md text-center">
          <h2 className="text-2xl font-bold text-red-500">
            Something went wrong!
          </h2>

          <p className="text-gray-600 mt-2">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="max-w-7xl mx-auto mb-8">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          All Products
        </h1>

        <p className="text-gray-500 text-center mt-2">
          Explore our latest products
        </p>
      </div>
      <div className="max-w-3xl mx-auto mb-8 flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Search product by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 px-4 py-3 bg-white border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="px-4 py-3 bg-white border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Sort By Price</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filterData.length > 0 ? (
          filterData.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >
              <div className="bg-gray-50 h-56 flex items-center justify-center p-4">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="p-5">
                <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">
                  {product.title}
                </h2>

                <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                  {product.description}
                </p>

                <div className="flex items-center justify-between mt-4">
                  <span className="text-xl font-bold text-green-600">
                    ${product.price}
                  </span>

                  <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-md text-sm font-medium">
                    ⭐ {product.rating}
                  </span>
                </div>

                <button
                  onClick={() => navigate(`/product/${product.id}`)}
                  className="w-full mt-5 bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 transition"
                >
                  View Details
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-16">
            <h2 className="text-2xl font-semibold text-gray-700">
              No Products Found
            </h2>

            <p className="text-gray-500 mt-2">Try another product name.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductList;
