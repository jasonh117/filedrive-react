import React, { Component } from 'react';
import { connect } from 'react-redux';
import { apiHost } from 'config';
import { closeContentModal } from 'modal/actions'
import {
  ContentModalContainer,
  Modal,
  Text,
  Pdf
} from './components';

class ContentModal extends Component {
  getContent(file) {
    const [type, subtype] = file.mimetype.split('/');
    const src = `${apiHost}/file/${file.filename}?jwt=${localStorage.getItem('JWT')}&view=true`;
    switch (type) {
      case 'text':
        return <Text title={file.originalname} src={src} />;
      case 'image':
        return <img alt={file.originalname} src={src} />;
      case 'audio':
        return <audio alt={file.originalname} src={src} controls />;
      case 'video':
        return <video alt={file.originalname} src={src} controls />;
      case 'application':
        if (subtype === 'pdf') {
          return <Pdf src={src} />
        }
      default:
        return <div>Cannot preview this file.</div>;
    }
  }

  render() {
    const file = this.props.file.files &&
      this.props.file.files.find(file => file.id === this.props.file.selected);
    return (
      <ContentModalContainer onClick={this.props.closeContentModal}>
        <Modal onClick={e => e.stopPropagation()}>
          {file && this.props.open && this.getContent(file)}
        </Modal>
      </ContentModalContainer >
    );
  }
}

const mapStateToProps = state => ({
  file: state.file,
  open: state.modal.contentModal
});

const mapDispatchToProps = dispatch => ({
  closeContentModal: () => dispatch(closeContentModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(ContentModal);
