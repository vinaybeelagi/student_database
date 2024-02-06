// src/components/Student.js
import React from 'react';

const Student = ({ student }) => {
  const handleDelete = () => {
    const storedStudents = JSON.parse(localStorage.getItem('students') || '[]');
    const updatedStudents = storedStudents.filter(s => s.id !== student.id);
    localStorage.setItem('students', JSON.stringify(updatedStudents));
    window.location.reload();
  };

  return (
    <tr>
      <td>{student.name}</td>
      <td>{student.age}</td>
      <td>{student.id}</td>
      <td>{student.email}</td>
      <td>
        <button onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
};

export default Student;
