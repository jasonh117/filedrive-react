import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import DashboardBar from './DashboardBar';
import ListOfFiles from './ListOfFiles';
import FileProperties from './FileProperties';
import { openUploadModal } from 'modal/actions';
import {
  DashboardContainer,
  MainContainer
} from './components';

class Dashboard extends Component {
  render() {
    return !localStorage.getItem('JWT') ? <Redirect to="/login"/> : (
      <DashboardContainer onDragEnter={this.props.openUploadModal}>
        <DashboardBar />
        <MainContainer>
          <ListOfFiles />
          <FileProperties />
        </MainContainer>
      </DashboardContainer>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  openUploadModal: () => dispatch(openUploadModal())
});

export default connect(null, mapDispatchToProps)(Dashboard);
