import React, { useEffect, useState } from "react";

function StudentForm({ submit, edit, setEdit }) {
  const [form, setForm] = useState({
    name: "",
    age: "",
    email: "",
  });

  const [error, setError] = useState("");

  useEffect(() => {
    if (edit) {
      setForm({
        name: edit.name,
        age: edit.age,
        email: edit.email,
      });
    }
  }, [edit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.age || !form.email) {
      setError("All fields are required");
      return;
    }

    setError("");

    submit({
      ...form,
      age: Number(form.age),
    });

    setForm({
      name: "",
      age: "",
      email: "",
    });
  };

  const cancelEdit = () => {
    setEdit(null);

    setForm({
      name: "",
      age: "",
      email: "",
    });

    setError("");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-5">
        {edit ? "Edit Student" : "Add New Student"}
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            name="name"
            value={form.name}
            placeholder="Enter the Student Name"
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="number"
            name="age"
            value={form.age}
            placeholder="Enter the Age"
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            name="email"
            value={form.email}
            placeholder="Enter the Email ID"
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {error && <p className="text-red-500 text-sm mt-3">{error}</p>}

        <div className="flex gap-3 mt-5">
          <button
            type="submit"
            className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
          >
            {edit ? "Update Student" : "Add New Student"}
          </button>

          {edit && (
            <button
              type="button"
              onClick={cancelEdit}
              className="bg-gray-500 text-white px-5 py-2 rounded-md hover:bg-gray-600 transition"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default StudentForm;
