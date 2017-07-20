import React, { Component } from 'react';
import DashboardBar from '../DashboardBar';
import ListOfFiles from '../ListOfFiles';
import FileProperties from '../FileProperties';
import {
  DashboardContainer,
  MainContainer
} from './components';

class Dashboard extends Component {
  render() {
    return (
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
