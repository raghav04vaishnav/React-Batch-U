import React, { useState } from "react";
import StudentItem from "./StudentItem";

function StudentList({ students, Delete, edit }) {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  const filterData = [...students]
    .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sort === "asc") {
        return a.age - b.age;
      }

      if (sort === "desc") {
        return b.age - a.age;
      }

      return 0;
    });

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {/* Search & Sort */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-5">
        <input
          type="text"
          placeholder="Search student by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2"
        >
          <option value="">Sort by Age</option>
          <option value="asc">Age: Low to High</option>
          <option value="desc">Age: High to Low</option>
        </select>
      </div>

      {/* Student Table */}
      {filterData.length === 0 ? (
        <p className="text-center text-gray-500 py-8">No students found</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="px-4 py-3 text-left">Name</th>

                <th className="px-4 py-3 text-left">Age</th>

                <th className="px-4 py-3 text-left">Email</th>

                <th className="px-4 py-3 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filterData.map((student) => (
                <StudentItem
                  key={student.id}
                  student={student}
                  onDelete={Delete}
                  onEdit={edit}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default StudentList;
