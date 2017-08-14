import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Login from 'user/Login';
import Register from 'user/Register';
import Dashboard from 'file/Dashboard';
import Settings from 'user/Settings';
import Modals from 'modal';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/settings" component={Settings} />
          <Modals />
        </div>
      </HashRouter>
    );
  }
}

export default App;
