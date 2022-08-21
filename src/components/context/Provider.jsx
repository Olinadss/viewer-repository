import React, { useState } from 'react';
import Context from './Context';

function Provider({ children }) {
  const [userData, setUserData] = useState([]);
  const [userRepos, setUserRepos] = useState([]);
  const contextValue = {
    userData,
    userRepos,
    setUserData,
    setUserRepos
  };

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
}

export default Provider;