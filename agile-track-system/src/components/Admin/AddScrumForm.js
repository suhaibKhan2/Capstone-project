import React, { useState, useContext } from 'react';
import { ScrumContext } from '../../context/ScrumContext';

const AddScrumForm = ({ onClose }) => {
  const { addScrumTeam } = useContext(ScrumContext);
  const [scrumName, setScrumName] = useState('');
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskStatus, setTaskStatus] = useState('To Do');
  const [assignedUser, setAssignedUser] = useState('');
  const [error, setError] = useState('');

  const handleCreateScrum = () => {
    if (!scrumName || !taskTitle || !taskDescription || !assignedUser) {
      setError('All fields are required.');
      return;
    }

    // Creating new Scrum object
    const newScrum = {
      id: Date.now(),
      name: scrumName,
      tasks: [
        {
          title: taskTitle,
          description: taskDescription,
          status: taskStatus,
          assignedTo: assignedUser
        }
      ]
    };

    addScrumTeam(newScrum);

    // Clear the form fields
    setScrumName('');
    setTaskTitle('');
    setTaskDescription('');
    setTaskStatus('To Do');
    setAssignedUser('');
    setError('');

    // Close the form
    onClose();
  };

  return (
    <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '10px', textAlign: 'center' }}>
      <h3>Add New Scrum</h3>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <input
        type="text"
        placeholder="Scrum Name"
        value={scrumName}
        onChange={(e) => setScrumName(e.target.value)}
        style={{ display: 'block', margin: '10px auto' }}
      />
      <input
        type="text"
        placeholder="Task Title"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        style={{ display: 'block', margin: '10px auto' }}
      />
      <input
        type="text"
        placeholder="Task Description"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        style={{ display: 'block', margin: '10px auto' }}
      />
      <select
        value={taskStatus}
        onChange={(e) => setTaskStatus(e.target.value)}
        style={{ display: 'block', margin: '10px auto' }}
      >
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
      <input
        type="text"
        placeholder="Assign To (User Name)"
        value={assignedUser}
        onChange={(e) => setAssignedUser(e.target.value)}
        style={{ display: 'block', margin: '10px auto' }}
      />
      <button onClick={handleCreateScrum} style={{ margin: '10px' }}>Create Scrum</button>
      <button onClick={onClose} style={{ margin: '10px' }}>Cancel</button>
    </div>
  );
};

export default AddScrumForm;
