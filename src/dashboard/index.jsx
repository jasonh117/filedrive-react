import React, { Component } from 'react';
import styled from 'styled-components';
import Immutable from 'seamless-immutable';

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 200px;
`;

class Dashboard extends Component {
  render() {
    return (
      <LoginContainer>Dashboard
      </LoginContainer>
    );
  }
}

export default Dashboard;
