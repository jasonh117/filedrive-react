import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleUploadModal } from 'modal/actions'
import Dropzone from 'react-dropzone';
import {
  UploadModalContainer,
  Modal,
  UploadButton,
  Instruction,
  FileListContainer
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
        <Modal onClick={e => e.stopPropagation()}>
          <Dropzone
            onDrop={files => this.setState({ files })}
            style={{
              width: '100%',
              height: '100%',
              outline: '2px dashed #666',
              borderRadius: 5,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer'
            }}
            activeStyle={{
              outline: '2px solid #6c6',
              backgroundColor: '#eee'
            }}
          >
            <Instruction>Click to select files or drag files here.</Instruction>
            <FileListContainer>
              {
                this.state.files &&
                this.state.files.map(file => (
                  <div key={file.name}>{file.name}</div>
                ))
              }
            </FileListContainer>
            {
              this.state.files &&
              <UploadButton onClick={e => e.stopPropagation()}>UPLOAD</UploadButton>
            }
          </Dropzone>
        </Modal>
      </UploadModalContainer >
    );
  }
}

const mapDispatchToProps = dispatch => ({
  toggleUploadModal: () => dispatch(toggleUploadModal())
})

export default connect(null, mapDispatchToProps)(UploadModal);
