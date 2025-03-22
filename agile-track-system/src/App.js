import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';

import { UserProvider, UserContext } from './context/UserContext';
import { ScrumProvider } from './context/ScrumContext';
import { TaskProvider } from './context/TaskContext';

import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import SignUp from './components/Signup/SignUp';
import UserProfile from './components/UserProfile/UserProfile';
import Welcome from  './pages/Welcome';
import UserHome from './pages/UserHome';
import ScrumDetails from './components/Scrum/ScrumDetails';

// Admin Components
import AdminDashboard from './components/Admin/AdminDashboard';
import AdminProfiles from './components/Admin/AdminProfiles';
import AdminScrumDetails from './components/Admin/AdminScrumDetails';

const App = () => {
  return (
    <UserProvider>
      <ScrumProvider>
        <TaskProvider>
          <Router>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Welcome />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />

              {/* Private Routes (Only Accessible After Login) */}
              <Route path="/*" element={<AuthenticatedRoutes />} />
            </Routes>
          </Router>
        </TaskProvider>
      </ScrumProvider>
    </UserProvider>
  );
};

const AuthenticatedRoutes = () => {
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login'); // Redirect if not logged in
    }
  }, [user, navigate]);

  if (!user) return null;

  return (
    <div className="app">
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', background: '#f8f8f8' }}>
        <div>
          {user.role === 'admin' ? (
            <>
              <Link to="/admin/dashboard" style={{ marginRight: '15px' }}>Dashboard</Link>
              <Link to="/admin/profiles" style={{ marginRight: '15px' }}>Profiles</Link>
            </>
          ) : (
            <>
              <Link to="/dashboard" style={{ marginRight: '15px' }}>Dashboard</Link>
              <Link to="/profiles" style={{ marginRight: '15px' }}>Profiles</Link>
            </>
          )}
        </div>
        <button onClick={logout}>Logout</button>
      </nav>

      <Routes>
        {user.role === 'admin' ? (
          <>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/profiles" element={<AdminProfiles />} />
            <Route path="/admin/scrum-details/:id" element={<AdminScrumDetails />} />
          </>
        ) : (
          <>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profiles" element={<UserProfile />} />
            <Route path="/user-home" element={<UserHome />} />
            <Route path="/scrum-details/:id" element={<ScrumDetails />} />
          </>
        )}
      </Routes>
    </div>
  );
};


export default App;
