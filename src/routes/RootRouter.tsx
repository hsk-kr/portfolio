import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// components
import DoorPage from 'containers/DoorPage';
import AboutMePage from 'containers/AboutMePage';

const RootRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/aboutme">
          <AboutMePage />
        </Route>
        <Route path="/">
          <DoorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default RootRouter;
