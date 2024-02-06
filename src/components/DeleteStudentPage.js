// DeleteStudentPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const DeleteStudentPage = ({ match }) => {
  const { id } = match.params;
  const storedStudents = JSON.parse(localStorage.getItem('students') || '[]');
  const student = storedStudents.find(student => student.id === parseInt(id));
  const navigate = useNavigate(); // Using useNavigate instead of useHistory

  const handleDelete = () => {
    const updatedStudents = storedStudents.filter(s => s.id !== parseInt(id));
    localStorage.setItem('students', JSON.stringify(updatedStudents));
    navigate('/'); // Navigate to the homepage
  };

  return (
    <div>
      <h2>Delete Student</h2>
      <p>Are you sure you want to delete {student.name}?</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DeleteStudentPage;
