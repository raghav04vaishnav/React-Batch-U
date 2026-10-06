import React, { useEffect, useState } from "react";
import Users from "./Users.jsx";

function Home({ products }) {
  const [users, setUsers] = useState([]);

  const [formData, setFormData] = useState({
    id: "",
    title: "",
    description: "",
    category: "",
    price: "",
    discount: "",
    rating: "",
  });

  const [newData, setNewData] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  // Users se data receive
  const handleUsers = (data) => {
    setUsers(data);
  };

  // Products + Users + New Products
  const mergeData = [...products, ...users, ...newData];

  useEffect(() => {
    console.log("Merged Data:", mergeData);
    console.log("Merged Data Length:", mergeData.length);
  }, [products, users, newData]);

  // Form input
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.id ||
      !formData.title ||
      !formData.description ||
      !formData.category ||
      !formData.price ||
      !formData.discount ||
      !formData.rating
    ) {
      alert("Please fill all fields");
      return;
    }

    const product = {
      id: Number(formData.id),
      title: formData.title,
      description: formData.description,
      category: formData.category,
      price: Number(formData.price),
      discountPercentage: Number(formData.discount),
      rating: Number(formData.rating),
    };

    setNewData((prev) => [...prev, product]);

    setFormData({
      id: "",
      title: "",
      description: "",
      category: "",
      price: "",
      discount: "",
      rating: "",
    });
  };

  // Search
  const filterData = mergeData.filter((item) => {
    const searchText = search.toLowerCase();

    return (
      String(item.title || "")
        .toLowerCase()
        .includes(searchText) ||
      String(item.description || "")
        .toLowerCase()
        .includes(searchText)
    );
  });

  // Sort
  const finalData = [...filterData].sort((a, b) => {
    if (sort === "price-low") {
      return Number(a.price || 0) - Number(b.price || 0);
    }

    if (sort === "price-high") {
      return Number(b.price || 0) - Number(a.price || 0);
    }

    if (sort === "rating-low") {
      return Number(a.rating || 0) - Number(b.rating || 0);
    }

    if (sort === "rating-high") {
      return Number(b.rating || 0) - Number(a.rating || 0);
    }

    return 0;
  });

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800">
            Product Dashboard
          </h1>

          <p className="mt-2 text-gray-500">
            Manage, search and sort your products and users
          </p>
        </div>

        {/* Users API */}
        <Users onData={handleUsers} />

        {/* Form */}
        <div className="mb-8 rounded-2xl bg-white p-6 shadow-md">
          <h2 className="mb-5 text-2xl font-semibold text-gray-800">
            Add New Product
          </h2>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
          >
            <input
              type="number"
              name="id"
              placeholder="Product ID"
              value={formData.id}
              onChange={handleChange}
              className="rounded-lg border border-gray-300 px-4 py-3"
            />

            <input
              type="text"
              name="title"
              placeholder="Product Title"
              value={formData.title}
              onChange={handleChange}
              className="rounded-lg border border-gray-300 px-4 py-3"
            />

            <input
              type="text"
              name="category"
              placeholder="Category"
              value={formData.category}
              onChange={handleChange}
              className="rounded-lg border border-gray-300 px-4 py-3"
            />

            <input
              type="number"
              name="price"
              placeholder="Price"
              value={formData.price}
              onChange={handleChange}
              className="rounded-lg border border-gray-300 px-4 py-3"
            />

            <input
              type="number"
              name="discount"
              placeholder="Discount %"
              value={formData.discount}
              onChange={handleChange}
              className="rounded-lg border border-gray-300 px-4 py-3"
            />

            <input
              type="text"
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
              className="rounded-lg border border-gray-300 px-4 py-3"
            />

            <input
              type="number"
              name="rating"
              placeholder="Rating"
              value={formData.rating}
              onChange={handleChange}
              className="rounded-lg border border-gray-300 px-4 py-3"
            />

            <button
              type="submit"
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 md:col-span-2"
            >
              + Add Product
            </button>
          </form>
        </div>

        {/* Search + Sort */}
        <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="md:col-span-2">
            <input
              type="text"
              placeholder="🔍 Search by title or description..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-gray-300 bg-white px-5 py-4 shadow-sm"
            />
          </div>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="rounded-xl border border-gray-300 bg-white px-5 py-4 shadow-sm"
          >
            <option value="">Sort By</option>
            <option value="price-low">Price: Low → High</option>
            <option value="price-high">Price: High → Low</option>
            <option value="rating-low">Rating: Low → High</option>
            <option value="rating-high">Rating: High → Low</option>
          </select>
        </div>

        {/* Statistics */}
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl bg-white p-5 shadow-md">
            <p className="text-sm text-gray-500">
              Total Merged Data
            </p>

            <h2 className="mt-2 text-3xl font-bold text-blue-600">
              {mergeData.length}
            </h2>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-md">
            <p className="text-sm text-gray-500">
              Showing Data
            </p>

            <h2 className="mt-2 text-3xl font-bold text-green-600">
              {finalData.length}
            </h2>
          </div>
        </div>

        {/* Heading */}
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-800">
            Merged Data
          </h2>

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            {finalData.length} Results
          </span>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {finalData.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="rounded-2xl bg-white p-6 shadow-md transition hover:shadow-xl"
            >
              <div className="mb-4 flex items-start justify-between">
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600">
                  ID: {item.id}
                </span>

                <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-700">
                  ⭐ {item.rating || "N/A"}
                </span>
              </div>

              <h3 className="mb-2 text-xl font-bold text-gray-800">
                {item.title || "No Title"}
              </h3>

              <p className="mb-4 line-clamp-2 text-sm text-gray-500">
                {item.description || "No Description"}
              </p>

              <span className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                {item.category || "No Category"}
              </span>

              <div className="mt-5 flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">
                    Price
                  </p>

                  <p className="text-2xl font-bold text-green-600">
                    ${item.price || 0}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Discount
                  </p>

                  <p className="font-semibold text-red-500">
                    {item.discountPercentage ??
                      item.discount ??
                      0}
                    %
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Data */}
        {finalData.length === 0 && (
          <div className="rounded-2xl bg-white py-16 text-center shadow-md">
            <h2 className="text-2xl font-semibold text-gray-700">
              No Data Found
            </h2>

            <p className="mt-2 text-gray-500">
              Try searching with a different title or description.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;