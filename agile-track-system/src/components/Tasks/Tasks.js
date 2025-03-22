import React, { useContext, useState } from 'react';
import { TaskContext } from '../../context/TaskContext';
import { ScrumContext } from '../../context/ScrumContext';

const Tasks = () => {
  const { tasks, addTask } = useContext(TaskContext);
  const { scrumTeams } = useContext(ScrumContext);
  const [title, setTitle] = useState('');
  const [scrumId, setScrumId] = useState('');

  const handleAddTask = () => {
    if (title.trim() !== '' && scrumId) {
      addTask(title, Number(scrumId));
      setTitle('');
      setScrumId('');
    }
  };

  return (
    <div>
      <h2>Tasks</h2>
      {tasks && tasks.length > 0 ? (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              {task.title} - Status: {task.status} (Scrum Team {task.scrumId})
            </li>
          ))}
        </ul>
      ) : (
        <p>No Tasks Available</p>
      )}

      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <select value={scrumId} onChange={(e) => setScrumId(e.target.value)}>
        <option value="">Select Scrum Team</option>
        {scrumTeams && scrumTeams.length > 0 ? (
          scrumTeams.map((team) => (
            <option key={team.id} value={team.id}>
              {team.name}
            </option>
          ))
        ) : (
          <option disabled>No Scrum Teams Available</option>
        )}
      </select>

      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default Tasks;
