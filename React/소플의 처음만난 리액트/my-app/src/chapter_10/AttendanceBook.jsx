import React from "react";
const students = [
  {
    id: 1,
    name: "Yeonggeon",
  },
  {
    id: 2,
    name: "chacha",
  },
  {
    id: 3,
    name: "0cha",
  },
  {
    id: 4,
    name: "smu",
  },
  {
    id: 5,
    name: "gang",
  },
];
function AttendanceBook(props) {
  return (
    <ul>
      {students.map((student) => {
        return <li key={student.id}>{student.name}</li>;
      })}
    </ul>
  );
}

export default AttendanceBook;
