// src/components/HomePage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Student from './Student';// Updated import statement

const HomePage = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const storedStudents = JSON.parse(localStorage.getItem('students') || '[]');
    setStudents(storedStudents);
  }, []);

  return (
    <div>
      <h1>Student Database</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>ID</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <Student key={student.id} student={student} />
          ))}
        </tbody>
      </table>
      <Link to="/create">Create Student</Link>
    </div>
  );
};

export default HomePage;
