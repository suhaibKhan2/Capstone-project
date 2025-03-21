import React, { createContext, useState } from 'react';

export const ScrumContext = createContext();

export const ScrumProvider = ({ children }) => {
  const [scrumTeams, setScrumTeams] = useState([
    {
      id: 1,
      name: 'Scrum Team A',
      tasks: [
        { title: 'Task 1', description: 'Setup project', status: 'To Do', assignedTo: 'Alice' },
        { title: 'Task 2', description: 'Develop login feature', status: 'In Progress', assignedTo: 'Bob' }
      ]
    },
    {
      id: 2,
      name: 'Scrum Team B',
      tasks: [
        { title: 'Task 1', description: 'Database setup', status: 'To Do', assignedTo: 'Charlie' },
        { title: 'Task 2', description: 'API development', status: 'In Progress', assignedTo: 'David' }
      ]
    }
  ]);

  const addScrumTeam = (newScrum) => {
    setScrumTeams([...scrumTeams, { id: scrumTeams.length + 1, ...newScrum }]);
  };

  return (
    <ScrumContext.Provider value={{ scrumTeams, addScrumTeam }}>
      {children}
    </ScrumContext.Provider>
  );
};
