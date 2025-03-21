import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import './style.css'; 
const Login = () => {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      setError('Both fields are required');
      return;
    }
    if (!email.includes('@')) {
      setError("Please include an '@' in the email address");
      return;
    }
    
    const result = login(email, password);
    if (result === 'Invalid credentials') {
      setError('Invalid email or password');
    } else {
      if (email === 'admin@example.com') {
        navigate('/admin/dashboard'); // Redirect admin to admin dashboard
      } else {
        navigate('/dashboard'); // Redirect normal user to dashboard
      }
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      <p>Don't have an account? <button onClick={() => navigate('/signup')}>Sign Up</button></p>
    </div>
  );
};

export default Login;
