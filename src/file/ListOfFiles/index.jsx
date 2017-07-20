import React, { Component } from 'react';
import { connect } from 'react-redux';
import { tryGetFolder } from '../actions';
import FileItem from '../FileItem';
import {
  ListOfFilesContainer
} from './components';


class ListOfFiles extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.tryGetFolder();
  }

  render() {
    return (
      <ListOfFilesContainer>
        {
          this.props.file.files &&
          this.props.file.files.map(file => (
            <FileItem key={file.id} file={file}/>
          ))
        }
      </ListOfFilesContainer>
    );
  }
}

const mapStateToProps = state => ({
  file: state.file
});

const mapDispatchToProps = dispatch => ({
  tryGetFolder: (folder) => dispatch(tryGetFolder(folder))
})

export default connect(mapStateToProps, mapDispatchToProps)(ListOfFiles);
