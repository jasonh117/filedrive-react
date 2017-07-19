import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './login';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Login} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
