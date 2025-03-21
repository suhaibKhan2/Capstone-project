import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { TaskContext } from '../../context/TaskContext';
import { Link, useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const { user, logout } = useContext(UserContext);
  const { tasks } = useContext(TaskContext);
  const navigate = useNavigate();

  if (!user) {
    navigate('/login'); // Redirect if not logged in
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      {/* Navigation Bar */}
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/dashboard" style={{ marginRight: '15px' }}>Dashboard</Link>
        <Link to="/profiles" style={{ marginRight: '15px' }}>Profiles</Link>
        <button onClick={handleLogout}>Logout</button>
      </nav>

      {/* User Profile Section */}
      <h2>User Profiles</h2>
      <h3>Tasks Worked By {user.name}</h3>
      
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <li key={task.id} style={{ marginBottom: '15px', border: '1px solid #ddd', padding: '10px', borderRadius: '5px' }}>
              <strong>Title:</strong> {task.title} <br />
              <strong>Description:</strong> {task.description} <br />
              <strong>Status:</strong> {task.status}
            </li>
          ))
        ) : (
          <p>No tasks assigned yet.</p>
        )}
      </ul>
    </div>
  );
};

export default UserProfile;
