import React from "react";

function StudentItem({ student, onDelete, onEdit }) {
  return (
    <tr className="odd:bg-gray-50 even:bg-white">
      <td className="px-4 py-3">{student.name}</td>

      <td className="px-4 py-3">{student.age}</td>

      <td className="px-4 py-3">{student.email}</td>

      <td className="px-4 py-3">
        <div className="flex justify-center gap-2">
          <button
            onClick={() => onEdit(student)}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
          >
            Edit
          </button>

          <button
            onClick={() => onDelete(student.id)}
            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}

export default StudentItem;
