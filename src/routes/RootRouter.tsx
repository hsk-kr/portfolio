import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// components
import DoorPage from 'pages/DoorPage';
import HomePage from 'pages/HomePage';

const RootRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route exact path="/">
          <DoorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default RootRouter;
