import React, { Component } from 'react';
import { connect } from 'react-redux';
import UploadModal from './UploadModal';
import {
  Transition
} from './components';

class Modals extends Component {
  render() {
    return (
      <div>
        <Transition in={this.props.modal.uploadModal}>
          <UploadModal />
        </Transition>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  modal: state.modal
});

export default connect(mapStateToProps, null)(Modals);
