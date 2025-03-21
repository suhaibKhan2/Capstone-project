import React, { useContext, useState } from 'react';
import { ScrumContext } from '../../context/ScrumContext';

const ScrumTeams = () => {
  const { scrumTeams, addScrumTeam } = useContext(ScrumContext);
  const [name, setName] = useState('');

  const handleAddScrumTeam = () => {
    if (name.trim() !== '') {
      addScrumTeam(name);
      setName('');
    }
  };

  return (
    <div>
      <h2>Scrum Teams</h2>
      {scrumTeams && scrumTeams.length > 0 ? (
        <ul>
          {scrumTeams.map((team) => (
            <li key={team.id}>{team.name}</li>
          ))}
        </ul>
      ) : (
        <p>No Scrum Teams Available</p>
      )}
      <input
        type="text"
        placeholder="New Scrum Team"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleAddScrumTeam}>Add Scrum Team</button>
    </div>
  );
};

export default ScrumTeams;
