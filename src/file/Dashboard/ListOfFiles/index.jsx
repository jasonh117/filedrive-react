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
              highlight={() => this.props.highlight(this.props.file.files, file.id)}
              // TODO: different types of highlights
            />
          ))
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
  highlight: (fileList, fileId) => dispatch(highlight(fileList, fileId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ListOfFiles);
