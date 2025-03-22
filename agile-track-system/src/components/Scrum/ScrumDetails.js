import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ScrumDetails = () => {
  const { teamName } = useParams();

  const scrumData = {
    "Scrum Team A": {
      tasks: [
        { name: "Task One", description: "Description for Task One", status: "To Do" }
      ],
      users: [
        { name: "Employee One", email: "employee1@example.com" }
      ]
    },
    "Scrum Team B": {
      tasks: [
        { name: "Task Two", description: "Description for Task Two", status: "In Progress" }
      ],
      users: [
        { name: "Employee Two", email: "employee2@example.com" }
      ]
    }
  };

  const teamDetails = scrumData[teamName] || { tasks: [], users: [] };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Scrum Details for {teamName}</h2>
      <nav>
        <Link to="/dashboard">Dashboard</Link> | 
        <Link to="/profiles">Profiles</Link> | 
        <Link to="/login">Logout</Link>
      </nav>

      <h3>Tasks</h3>
      <ul>
        {teamDetails.tasks.map((task, index) => (
          <li key={index}>
            <strong>{task.name}</strong> - {task.description} ({task.status})
          </li>
        ))}
      </ul>

      <h3>Users</h3>
      <ul>
        {teamDetails.users.map((user, index) => (
          <li key={index}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScrumDetails;
