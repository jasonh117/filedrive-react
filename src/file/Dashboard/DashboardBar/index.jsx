import React, { Component } from 'react';
import {
  DashboardBarContainer,
  UploadButton
} from './components';

class DashboardBar extends Component {
  render() {
    return (
      <DashboardBarContainer>
        <UploadButton>Upload File</UploadButton>
      </DashboardBarContainer>
    );
  }
}

export default DashboardBar;
