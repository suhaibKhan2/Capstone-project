import React, { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ScrumContext } from '../../context/ScrumContext';
import { UserContext } from '../../context/UserContext';

const Dashboard = () => {
  const { scrumTeams } = useContext(ScrumContext);
  const { logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      {/* Navigation Bar */}
      <nav style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center', gap: '15px' }}>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/profiles">Profiles</Link>
        <button onClick={handleLogout} style={{ background: 'red', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}>
          Logout
        </button>
      </nav>

      {/* Scrum Teams Section */}
      <h2>Scrum Teams</h2>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {scrumTeams.map((team) => (
            <li key={team.id} style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span>{team.name}</span>
              <button 
                onClick={() => navigate(`/scrum-details/${team.id}`)} 
                style={{ background: '#007bff', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}>
                Get Details
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
