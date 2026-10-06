import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function ProductDetails() {
  const [data, setData] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const { mno, name, age } = location?.state;

  const result = location?.state?.mno;

  useEffect(() => {
    if (location?.state && result) {
      setData(result);
      console.log(`>>>>>>>>>>>>>>>>1111`);
      return;
    }
    console.log(`https://dummyjson.com/products/${id}`);
    const fetchData = async (id) => {
      console.log(`>>>>>>>>>>>>>>>>1222222222222111`);

      try {
        const res = await axios.get(`https://dummyjson.com/products/${id}`);
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id, result]);

  console.log(`>>>>>>>data`, data);

  if (!data) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-200">
        <h2 className="text-2xl font-semibold text-slate-600">Loading... ⏳</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 px-5 py-10">
      {/* Back Button */}
      <div className="mx-auto mb-6 max-w-5xl">
        <button
          onClick={() => navigate(-1)}
          className="rounded-lg bg-slate-700 px-5 py-2.5 font-semibold text-white transition hover:bg-slate-800"
        >
          ← Back
        </button>
      </div>

      {/* Product Card */}
      <div className="mx-auto grid max-w-6xl gap-10 rounded-3xl bg-white p-6 shadow-xl md:grid-cols-2">
        {/* Product Image */}
        <div className="flex items-center justify-center rounded-2xl bg-slate-50 p-6">
          <img
            src={data.thumbnail}
            alt={data.title}
            className="h-80 w-full object-contain transition duration-300 hover:scale-105"
          />
        </div>

        {/* Product Information */}
        <div className="flex flex-col justify-center">
          {/* Category */}
          <span className="mb-4 w-fit rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold capitalize text-blue-600">
            {data.category}
          </span>

          {/* Title */}
          <h1 className="text-3xl font-bold text-slate-800 md:text-4xl">
            {data.title}
          </h1>

          {/* Description */}
          <p className="mt-5 leading-7 text-slate-500">{data.description}</p>

          {/* Price */}
          <div className="mt-6 rounded-xl bg-slate-50 p-5">
            <p className="text-sm text-slate-500">Price</p>

            <h2 className="text-3xl font-bold text-green-600">${data.price}</h2>
          </div>

          {/* Discount */}
          <div className="mt-6 rounded-xl bg-orange-50 p-5">
            <p className="text-sm text-slate-500">Discount</p>

            <h2 className="text-2xl font-bold text-orange-600">
              {data.discountPercentage}%
            </h2>
          </div>

          {/* Rating + Stock */}
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="rounded-xl border border-slate-200 p-4">
              <p className="text-sm text-slate-500">Rating</p>

              <p className="mt-1 text-xl font-bold text-slate-800">
                ⭐ {data.rating}
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 p-4">
              <p className="text-sm text-slate-500">Stock</p>

              <p className="mt-1 text-xl font-bold text-slate-800">
                {data.stock}
              </p>
            </div>
          </div>

          {/* Brand */}
          <div className="mt-6">
            <p className="text-sm text-slate-500">Brand</p>

            <p className="text-lg font-bold text-slate-800">{data.brand}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
