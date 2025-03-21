import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    if (email === 'admin@example.com' && password === 'admin123') {
      setUser({ email, role: 'admin' }); // Admin user
    } else if (email === 'user@example.com' && password === 'user123') {
      setUser({ email, role: 'user' }); // Regular user
    } else {
      return 'Invalid credentials';
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
