import React, { useState, createContext } from 'react';

interface ContextType {
  navbarVisible: boolean;
  setNavbarVisible: Function;
}

interface Props {
  children: React.ReactNode;
}

const initialContext = {
  navbarVisible: false,
  setNavbarVisible: () => {},
};

export const AppContext = createContext<ContextType>(initialContext);

export const AppProvider: React.FC<Props> = ({ children }) => {
  const [navbarVisible, setNavbarVisible] = useState<boolean>(true);

  const value = {
    navbarVisible,
    setNavbarVisible,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
