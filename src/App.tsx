import React from 'react';
import './App.scss';

// Routes
import RootRouter from 'routes/RootRouter';

// context
import { AppProvider } from 'context/AppContext';

function App() {
  return (
    <AppProvider>
      <RootRouter />
    </AppProvider>
  );
}

export default App;
