import React, { useContext, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ScrumContext } from '../../context/ScrumContext';
import { UserContext } from '../../context/UserContext';
import AddScrumForm from './AddScrumForm';

const AdminDashboard = () => {
  const scrumContext = useContext(ScrumContext);
  const userContext = useContext(UserContext);
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);

  // ✅ Ensure `scrumTeams` has a default empty array to prevent undefined errors
  const scrumTeams = scrumContext?.scrumTeams || [];
  const addScrumTeam = scrumContext?.addScrumTeam || (() => {});
  const logout = userContext?.logout || (() => {});

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      {/* Navigation Bar */}
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/admin/dashboard" style={{ marginRight: '15px' }}>Dashboard</Link>
        <Link to="/admin/profiles" style={{ marginRight: '15px' }}>Profiles</Link>
        <button onClick={handleLogout}>Logout</button>
      </nav>

      <h2>Scrum Teams</h2>

      {/* Add New Scrum Button */}
      <button onClick={() => setShowForm(true)}>Add New Scrum</button>

      {/* Add Scrum Form (Displays when button is clicked) */}
      {showForm && <AddScrumForm onClose={() => setShowForm(false)} />}

      {/* Scrum Teams List (Safe Handling) */}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {scrumTeams.length === 0 ? (
          <p>No Scrum teams available.</p>
        ) : (
          scrumTeams.map((team) => (
            <li key={team.id} style={{ marginBottom: '10px', border: '1px solid #ddd', padding: '10px' }}>
              <strong>{team.name}</strong>
              <ul>
                {team.tasks?.map((task, index) => (
                  <li key={index}>
                    <strong>Task:</strong> {task.title} - {task.status}  
                    <br />
                    <strong>Assigned To:</strong> {task.assignedTo}
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => navigate(`/admin/scrum-details/${team.id}`)} 
                style={{ marginTop: '10px' }}>
                Get Details
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default AdminDashboard;
