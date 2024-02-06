// EditStudentPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EditStudentPage = ({ match }) => {
  const { id } = match.params;
  const storedStudents = JSON.parse(localStorage.getItem('students') || '[]');
  const student = storedStudents.find(student => student.id === parseInt(id));

  const [name, setName] = useState(student.name);
  const [age, setAge] = useState(student.age);
  const [email, setEmail] = useState(student.email);
  const navigate = useNavigate(); // Using useNavigate instead of useHistory

  const handleSubmit = () => {
    const updatedStudent = { ...student, name, age, email };
    const updatedStudents = storedStudents.map(s => (s.id === parseInt(id) ? updatedStudent : s));
    localStorage.setItem('students', JSON.stringify(updatedStudents));
    navigate('/'); // Navigate to the homepage
  };

  return (
    <div>
      <h2>Edit Student</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={e => setName(e.target.value)} required />
        <label>Age:</label>
        <input type="number" value={age} onChange={e => setAge(e.target.value)} required />
        <label>Email:</label>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditStudentPage;
