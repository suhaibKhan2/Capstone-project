import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { TaskContext } from '../../context/TaskContext';

const AdminProfiles = () => {
  const navigate = useNavigate();
  const { user, users = [], addUser } = useContext(UserContext);
  const { tasks = [] } = useContext(TaskContext);

  const [showForm, setShowForm] = useState(false);
  const [newUser, setNewUser] = useState({ name: '', email: '', password: '', role: 'Employee' });
  const [error, setError] = useState('');
  const [historyUserId, setHistoryUserId] = useState(null);

  // 🔹 Redirect non-admin users
  useEffect(() => {
    if (!user || user.role !== 'admin') {
      navigate('/dashboard'); 
    }
  }, [user, navigate]);

  const handleInputChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleCreateUser = () => {
    if (!newUser.name || !newUser.email || !newUser.password) {
      setError('All fields are required');
      return;
    }
    addUser(newUser);
    setShowForm(false);
    setNewUser({ name: '', email: '', password: '', role: 'Employee' });
    setError('');
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/admin/dashboard" style={{ marginRight: '15px' }}>Dashboard</Link>
        <Link to="/admin/profiles" style={{ marginRight: '15px' }}>Profiles</Link>
        <button onClick={() => setShowForm(!showForm)} style={{ marginLeft: '15px' }}>
          {showForm ? 'Cancel' : 'Add New User'}
        </button>
      </nav>

      <h2>User Profiles</h2>

      {showForm && (
        <div style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '20px' }}>
          <h3>Add New User</h3>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <input type="text" name="name" placeholder="Name" value={newUser.name} onChange={handleInputChange} />
          <input type="email" name="email" placeholder="Email" value={newUser.email} onChange={handleInputChange} />
          <input type="password" name="password" placeholder="Password" value={newUser.password} onChange={handleInputChange} />
          <select name="role" value={newUser.role} onChange={handleInputChange}>
            <option value="Employee">Employee</option>
            <option value="Admin">Admin</option>
          </select>
          <button onClick={handleCreateUser}>Create User</button>
        </div>
      )}

      {users.length > 0 ? (
        users.map((user) => (
          <div key={user.id} style={{ borderBottom: '1px solid #ddd', padding: '10px' }}>
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <button onClick={() => setHistoryUserId(historyUserId === user.id ? null : user.id)}>
              {historyUserId === user.id ? 'Hide History' : 'Get History'}
            </button>

            {historyUserId === user.id && (
              <div>
                <h4>Tasks Worked By {user.name}</h4>
                <ul>
                  {tasks.filter((task) => task.assignedTo === user.name).map((task) => (
                    <li key={task.id}>
                      <strong>Title:</strong> {task.title} | 
                      <strong>Description:</strong> {task.description} | 
                      <strong>Status:</strong> {task.status}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
};

export default AdminProfiles;
