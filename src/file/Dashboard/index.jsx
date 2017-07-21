import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import DashboardBar from './DashboardBar';
import ListOfFiles from './ListOfFiles';
import FileProperties from './FileProperties';
import {
  DashboardContainer,
  MainContainer
} from './components';

class Dashboard extends Component {
  render() {
    return !localStorage.getItem('JWT') ? <Redirect to="/login"/> : (
      <DashboardContainer>
        <DashboardBar />
        <MainContainer>
          <ListOfFiles />
          <FileProperties />
        </MainContainer>
      </DashboardContainer>
    );
  }
}

export default Dashboard;
