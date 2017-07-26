import React, { Component } from 'react';
import { connect } from 'react-redux';
import { tryGetFolder, highlight } from 'file/actions';
import FileItem from './FileItem';
import {
  ListOfFilesContainer,
  ErrorMessage,
  Spinner
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
      <ListOfFilesContainer>
        { this.props.file.busy && <Spinner /> }
        {
          this.props.file.files &&
          this.props.file.files.map(file => (
            <FileItem
              key={file.id}
              file={file}
              highlight={e => this.highlight(e, file)}
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
  tryGetFolder: (folder) => dispatch(tryGetFolder(folder)),
  highlight: (fileId, extraKey) => dispatch(highlight(fileId, extraKey))
})

export default connect(mapStateToProps, mapDispatchToProps)(ListOfFiles);
