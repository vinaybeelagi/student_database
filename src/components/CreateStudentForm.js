// CreateStudentForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateStudentForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    const newStudent = { id: Date.now(), name, age, email };
    const storedStudents = JSON.parse(localStorage.getItem('students') || '[]');
    localStorage.setItem('students', JSON.stringify([...storedStudents, newStudent]));
    navigate('/');
  };

  return (
    <div>
      <h2>Create Student</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={e => setName(e.target.value)} required />
        <label>Age:</label>
        <input type="number" value={age} onChange={e => setAge(e.target.value)} required />
        <label>Email:</label>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateStudentForm;
