import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';
import { closeUploadModal } from 'modal/actions'
import { tryUpload } from 'file/actions';
import {
  UploadModalContainer,
  Modal,
  UploadButton,
  Instruction,
  FileListContainer,
  ErrorMessage,
  ProgressBar
} from './components';

const initState = {
  files: null,
  busy: false,
  error: null
}

class UploadModal extends Component {
  constructor(props) {
    super(props);
    this.state = initState;
  }

  uploadFiles(e) {
    e.stopPropagation();
    this.setState({ busy: true });
    this.props.tryUpload(this.state.files)
      .then(() => {
        this.setState(initState);
      })
      .catch(error => {
        this.setState({ error, busy: false });
      });
  }

  render() {
    return (
      <UploadModalContainer onClick={this.props.closeUploadModal}>
        <Modal onClick={e => e.stopPropagation()}>
          <Dropzone
            onDrop={files => this.setState({ files, error: null })}
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
              this.state.files && !this.state.busy &&
              <UploadButton onClick={this.uploadFiles.bind(this)}>UPLOAD</UploadButton>
            }
            {
              this.state.busy &&
              <ProgressBar percent={this.props.uploadProgress*100} />
            }
            {
              this.state.error &&
              <ErrorMessage>{this.state.error.message}</ErrorMessage>
            }
          </Dropzone>
        </Modal>
      </UploadModalContainer >
    );
  }
}

const mapStateToProps = state => ({
  busy: state.file.busy,
  uploadProgress: state.modal.uploadProgress
});

const mapDispatchToProps = dispatch => ({
  closeUploadModal: () => dispatch(closeUploadModal()),
  tryUpload: files => dispatch(tryUpload(files))
});

export default connect(mapStateToProps, mapDispatchToProps)(UploadModal);
