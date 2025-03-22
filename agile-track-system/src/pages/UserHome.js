import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const UserHome = () => {
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Scrum Teams</h1>
      <nav>
        <Link to="/dashboard">Dashboard</Link> | 
        <Link to="/profiles">Profiles</Link> | 
        <button onClick={handleLogout}>Logout</button>
      </nav>
      <p>Welcome, {user?.name || "User"}! You are now logged in.</p>
    </div>
  );
};

export default UserHome;
