import { useEffect, useState } from "react";
import "./App.css";
import StudentForm from "./StudentForm";
import StudentList from "./StudentList";

function App() {
  const [students, setStudents] = useState(() => {
    const savedStudents = localStorage.getItem("students");

    return savedStudents ? JSON.parse(savedStudents) : [];
  });
  const [edit, setEdit] = useState(null);

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const handleStudent = (student) => {
    if (edit) {
      setStudents(
        students.map((item) =>
          item.id === edit.id ? { ...student, id: edit.id } : item,
        ),
      );

      setEdit(null);
    } else {
      setStudents([
        ...students,
        {
          ...student,
          id: Date.now(),
        },
      ]);
    }
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  const editHandler = (student) => {
    setEdit(student);
  };

  return (
    <div>
      <StudentForm submit={handleStudent} edit={edit} setEdit={setEdit} />

      <StudentList
        students={students}
        Delete={deleteStudent}
        edit={editHandler}
      />
    </div>
  );
}

export default App;
