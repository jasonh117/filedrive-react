import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleUploadModal } from 'modal/actions'
import {
  UploadModalContainer,
  Modal
} from './components';

class UploadModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: null
    };
  }

  render() {
    return (
      <UploadModalContainer onClick={this.props.toggleUploadModal}>
        <Modal onClick={e => e.stopPropagation()}></Modal>
      </UploadModalContainer>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  toggleUploadModal: () => dispatch(toggleUploadModal())
})

export default connect(null, mapDispatchToProps)(UploadModal);
