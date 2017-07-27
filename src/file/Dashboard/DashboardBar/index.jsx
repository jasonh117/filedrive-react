import React, { Component } from 'react';
import { connect } from 'react-redux';
import { openUploadModal } from 'modal/actions';
import { clearHighlight } from 'file/actions';
import MenuDropdown from './MenuDropdown';
import {
  DashboardBarContainer,
  UploadButton,
  ButtonsContainer,
} from './components';

class DashboardBar extends Component {
  render() {
    return (
      <DashboardBarContainer onClick={this.props.clearHighlight}>
        <ButtonsContainer>
          <UploadButton onClick={this.props.openUploadModal}>Upload File</UploadButton>
        </ButtonsContainer>
        <ButtonsContainer>
          <MenuDropdown />
        </ButtonsContainer>
      </DashboardBarContainer>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  openUploadModal: () => dispatch(openUploadModal()),
  clearHighlight: () => dispatch(clearHighlight())
})

export default connect(null, mapDispatchToProps)(DashboardBar);
