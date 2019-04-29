import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import App from 'Containers/App';
import Home from 'Containers/Home';
import SelectDifficulty from 'Containers/SelectDifficulty';

const Routes = () => (
  <HashRouter basename="/">
    <Switch>
      <Route path="/game" component={Home} />
      <Route path="/difficulty" component={SelectDifficulty} />
      <Route path="/" component={App} />
    </Switch>
  </HashRouter>
);

export default Routes;
