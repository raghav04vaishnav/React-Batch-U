import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Child from "./Child.jsx";

function Home({ carts }) {
  const navigate = useNavigate();

  const [childCart, setChildCart] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [mergeData, setMergeData] = useState([]);

  const [formData, setFormData] = useState({
    id: "",
    title: "",
    price: "",
    quantity: "",
  });

  // Child se data receive
  const sendData = (data) => {
    setChildCart(data);
  };

  // Parent + Child data merge
  const handleMerge = () => {
    const result = [...carts, ...childCart];

    setMergeData(result);

    console.log(">>>>>>>> Merged Data:", result);
    console.log(">>>>>>>> Merged Length:", result.length);
  };

  // Form input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.id ||
      !formData.title ||
      !formData.price ||
      !formData.quantity
    ) {
      alert("Please fill all fields");
      return;
    }

    const newData = {
      ...formData,
      id: Number(formData.id),
      price: Number(formData.price),
      quantity: Number(formData.quantity),
      fromForm: true,
    };

    setMergeData((prev) => {
      const updatedData = [...prev, newData];

      console.log(">>>>>>>> Final Data:", updatedData);

      return updatedData;
    });

    setFormData({
      id: "",
      title: "",
      price: "",
      quantity: "",
    });
  };

  // Search + Sort
  const filterData = [...mergeData]
    .filter((item) => {
      const title = item.title || item.products?.[0]?.title || "";

      return title.toLowerCase().includes(search.toLowerCase());
    })
    .sort((a, b) => {
      const priceA = Number(a.price) || Number(a.products?.[0]?.price) || 0;

      const priceB = Number(b.price) || Number(b.products?.[0]?.price) || 0;

      if (sort === "low") {
        return priceA - priceB;
      }

      if (sort === "high") {
        return priceB - priceA;
      }

      return 0;
    });

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            Product Dashboard
          </h1>

          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg font-semibold transition"
          >
            Logout
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Child Section */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Child Data</h2>

          <Child sendData={sendData} />
        </div>

        {/* Search / Sort / Merge */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Merge */}
            <button
              onClick={handleMerge}
              className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              Merge Data
            </button>

            {/* Search */}
            <input
              type="text"
              placeholder="🔍 Search title..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Sort */}
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="w-full md:w-56 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Sort by Price</option>
              <option value="low">Low to High</option>
              <option value="high">High to Low</option>
            </select>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-5">
            Add New Product
          </h2>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            <input
              type="number"
              name="id"
              placeholder="Enter ID"
              value={formData.id}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
            />

            <input
              type="text"
              name="title"
              placeholder="Enter Title"
              value={formData.title}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
            />

            <input
              type="number"
              name="price"
              placeholder="Enter Price"
              value={formData.price}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
            />

            <input
              type="number"
              name="quantity"
              placeholder="Enter Quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
            />

            <button
              type="submit"
              className="md:col-span-2 lg:col-span-4 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition"
            >
              + Add Product
            </button>
          </form>
        </div>

        {/* Data Count */}
        <div className="mb-6">
          {mergeData.length === 0 ? (
            <div className="bg-yellow-100 text-yellow-800 px-5 py-4 rounded-lg">
              No Data Available
            </div>
          ) : (
            <div className="bg-blue-100 text-blue-800 px-5 py-4 rounded-lg font-semibold">
              Total Data: {mergeData.length}
            </div>
          )}
        </div>

        {/* Product Cards */}
        {filterData.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filterData.map((item, index) => {
              // Product ke andar se data
              const product = item.products?.[0];

              const title = item.title || product?.title || "No Title";

              const price = item.price || product?.price || 0;

              const image =
                product?.thumbnail ||
                product?.images?.[0] ||
                "https://via.placeholder.com/300";

              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-md hover:shadow-2xl overflow-hidden transition duration-300"
                >
                  {/* Product Image */}
                  <div className="bg-gray-50 h-52 flex items-center justify-center p-4">
                    <img
                      src={image}
                      alt={title}
                      className="h-full w-full object-contain hover:scale-105 transition duration-300"
                    />
                  </div>

                  {/* Card Content */}
                  <div className="p-5">
                    {/* ID + Form Badge */}
                    <div className="flex justify-between items-center mb-3">
                      <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                        ID: {item.id}
                      </span>

                      {item.fromForm && (
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                          Form
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-800 mb-3 capitalize line-clamp-2">
                      {title}
                    </h3>

                    {/* Price */}
                    <p className="text-2xl font-bold text-blue-600 mb-2">
                      ${price}
                    </p>

                    {/* Quantity */}
                    {item.quantity && (
                      <p className="text-gray-600">
                        Quantity:{" "}
                        <span className="font-semibold">{item.quantity}</span>
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-md p-10 text-center">
            <p className="text-gray-500 text-lg">No Data Found</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default Home;
