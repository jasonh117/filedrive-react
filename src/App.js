import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './login';
import Dashboard from './dashboard';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Dashboard} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
