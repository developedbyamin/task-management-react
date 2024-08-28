import React from 'react';
import { Link } from 'react-router-dom';


const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to the Task and Calendar Management System</h1>
      <Link to="/login">Login</Link>
      <Link to="/dashboard">Go to Dashboard</Link>
    </div>
  );
};

export default Home;
