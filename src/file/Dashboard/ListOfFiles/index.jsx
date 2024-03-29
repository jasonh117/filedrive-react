import React, { Component } from 'react';
import { connect } from 'react-redux';
import { tryGetFolder, highlight, clearHighlight } from 'file/actions';
import { openContentModal } from 'modal/actions';
import FileBar from './FileBar';
import FileItem from './FileItem';
import {
  ListOfFilesContainer,
  ErrorMessage
} from './components';

class ListOfFiles extends Component {
  componentWillMount() {
    this.props.tryGetFolder();
  }

  highlight(e, file) {
    let extraKey = null;
    if (e.metaKey) extraKey = 'meta';
    else if (e.shiftKey) extraKey = 'shift';
    this.props.highlight(file.id, extraKey);
  }

  render() {
    return (
      <ListOfFilesContainer onClick={e => {
        if (e.target === e.currentTarget && this.props.file.files)
          this.props.clearHighlight();
      }}>
        { this.props.file.files && <FileBar /> }
        {
          this.props.file.files &&
          this.props.file.files.map(file => (
            <FileItem
              key={file.id}
              file={file}
              highlight={e => this.highlight(e, file)}
              openModal={this.props.openContentModal}
            />
          ))
        }
        {
          this.props.file.files && this.props.file.files.length === 0 &&
          <p>You have no files.</p>
        }
        {
          this.props.file.error &&
          <ErrorMessage>{this.props.file.error.message}</ErrorMessage>
        }
      </ListOfFilesContainer>
    );
  }
}

const mapStateToProps = state => ({
  file: state.file
});

const mapDispatchToProps = dispatch => ({
  tryGetFolder: (options) => dispatch(tryGetFolder(options)),
  highlight: (fileId, extraKey) => dispatch(highlight(fileId, extraKey)),
  clearHighlight: () => dispatch(clearHighlight()),
  openContentModal: () => dispatch(openContentModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(ListOfFiles);
