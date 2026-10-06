import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function ProductDetails() {
  const [data, setData] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const { mno, name, age } = location?.state || {};
  const result = location?.state?.mno;
  console.log(`>>>>>>>>>>>`,name)

  useEffect(() => {
    if (location?.state && result) {
      setData(result);
      console.log("Data useLocation se aaya:", result);
      console.log("Name:", name);
      console.log("Age:", age);

      return;
    }

    // Direct URL / Refresh case
    const fetchData = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/users");

        console.log("API DATA:", res.data);

        const user = res.data.users.find((item) => item.id === Number(id));

        console.log("FOUND USER:", user);

        setData(user);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id, result]);

  console.log(">>>>>>> data", data);

  // Loading
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

      {/* User Card */}
      <div className="mx-auto grid max-w-6xl gap-10 rounded-3xl bg-white p-6 shadow-xl md:grid-cols-2">
        {/* Image */}
        <div className="flex items-center justify-center rounded-2xl bg-slate-50 p-6">
          <img
            src={data.image}
            alt={`${data.firstName} ${data.lastName}`}
            className="h-80 w-full object-contain transition duration-300 hover:scale-105"
          />
        </div>

        {/* User Information */}
        <div className="flex flex-col justify-center">
          {/* Name */}
          <h1 className="text-3xl font-bold text-slate-800 md:text-4xl">
            {data.firstName} {data.lastName}
          </h1>

          {/* Username */}
          <p className="mt-2 text-slate-500">@{data.username}</p>

          {/* Age */}
          <div className="mt-6 rounded-xl bg-slate-50 p-5">
            <p className="text-sm text-slate-500">Age</p>

            <h2 className="text-3xl font-bold text-blue-600">{data.age}</h2>
          </div>

          {/* Email */}
          <div className="mt-6 rounded-xl bg-blue-50 p-5">
            <p className="text-sm text-slate-500">Email</p>

            <h2 className="mt-1 break-all font-semibold text-blue-600">
              {data.email}
            </h2>
          </div>

          {/* Phone */}
          <div className="mt-6 rounded-xl bg-green-50 p-5">
            <p className="text-sm text-slate-500">Phone</p>

            <h2 className="mt-1 font-semibold text-green-600">{data.phone}</h2>
          </div>

          {/* Gender + Blood Group */}
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="rounded-xl border border-slate-200 p-4">
              <p className="text-sm text-slate-500">Gender</p>

              <p className="mt-1 text-xl font-bold capitalize text-slate-800">
                {data.gender}
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 p-4">
              <p className="text-sm text-slate-500">Blood Group</p>

              <p className="mt-1 text-xl font-bold text-slate-800">
                {data.bloodGroup}
              </p>
            </div>
          </div>

          {/* Height + Weight */}
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="rounded-xl border border-slate-200 p-4">
              <p className="text-sm text-slate-500">Height</p>

              <p className="mt-1 text-lg font-bold text-slate-800">
                {data.height} cm
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 p-4">
              <p className="text-sm text-slate-500">Weight</p>

              <p className="mt-1 text-lg font-bold text-slate-800">
                {data.weight} kg
              </p>
            </div>
          </div>

          {/* Address */}
          <div className="mt-6">
            <p className="text-sm text-slate-500">Address</p>

            <p className="text-lg font-bold text-slate-800">
              {data.address?.address}, {data.address?.city}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;