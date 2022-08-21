import React, { useState } from 'react';
import Context from './Context';

function Provider({ children }) {
  const [userData, setUserData] = useState([]);
  const contextValue = {
    userData,
    setUserData,
  };

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
}

export default Provider;