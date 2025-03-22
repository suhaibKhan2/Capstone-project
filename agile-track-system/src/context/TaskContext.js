import React, { createContext, useState } from 'react';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task One', status: 'To Do', scrumId: 1 },
    { id: 2, title: 'Task Two', status: 'In Progress', scrumId: 2 },
  ]);

  const addTask = (title, scrumId) => {
    setTasks([...tasks, { id: tasks.length + 1, title, status: 'To Do', scrumId }]);
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask }}>
      {children}
    </TaskContext.Provider>
  );
};
