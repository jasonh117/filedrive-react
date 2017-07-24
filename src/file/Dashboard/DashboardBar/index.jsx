import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleUploadModal } from 'modal/actions'
import {
  DashboardBarContainer,
  UploadButton,
  ButtonsContainer,
} from './components';

class DashboardBar extends Component {
  render() {
    return (
      <DashboardBarContainer>
        <ButtonsContainer>
          <UploadButton onClick={this.props.toggleUploadModal}>Upload File</UploadButton>
        </ButtonsContainer>
      </DashboardBarContainer>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  toggleUploadModal: () => dispatch(toggleUploadModal())
})

export default connect(null, mapDispatchToProps)(DashboardBar);
