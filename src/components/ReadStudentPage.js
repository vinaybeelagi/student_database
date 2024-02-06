// ReadStudentPage.js
import React from 'react';

const ReadStudentPage = ({ match }) => {
  const { id } = match.params;
  const storedStudents = JSON.parse(localStorage.getItem('students') || '[]');
  const student = storedStudents.find(student => student.id === parseInt(id));

  return (
    <div>
      <h2>Student Details</h2>
      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <p>Email: {student.email}</p>
    </div>
  );
};

export default ReadStudentPage;
