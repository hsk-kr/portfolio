import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// components
import DoorPage from 'pages/DoorPage';
import MainPage from 'pages/MainPage';

const RootRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home">
          <MainPage />
        </Route>
        <Route exact path="/">
          <DoorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default RootRouter;
