import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import CreateStudentForm from './components/CreateStudentForm';
import ReadStudentPage from './components/ReadStudentPage';
import EditStudentPage from './components/EditStudentPage';
import DeleteStudentPage from './components/DeleteStudentPage';

const App = () => {
  return (
    
      <Routes>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/create" component={CreateStudentForm} />
        <Route exact path="/read/:id" component={ReadStudentPage} />
        <Route exact path="/edit/:id" component={EditStudentPage} />
        <Route exact path="/delete/:id" component={DeleteStudentPage} />
      </Routes>
    
  );
};

export default App;
