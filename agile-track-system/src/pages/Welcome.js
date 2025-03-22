import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Welcome to Agile Track System</h1>
      <p>Manage your Agile tasks efficiently.</p>
      <div>
        <Link to="/dashboard">
          <button>Go to Dashboard</button>
        </Link>
        <Link to="/login" style={{ marginLeft: '10px' }}>
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
