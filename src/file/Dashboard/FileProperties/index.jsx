import React, { Component } from 'react';
import { connect } from 'react-redux';
import { apiHost } from 'config';
import format from 'lib/format';
import { deleteFile } from 'file/actions';
import {
  FilePropertiesContainer,
  FilePropertiesList,
  FileActions,
  Item,
  Label,
  Content,
  Download,
  Delete
} from './components';

class FileProperties extends Component {
  render() {
    const file = this.props.file.files &&
      this.props.file.files.find(file => file.id === this.props.file.selected);
    return !file ? <FilePropertiesContainer /> : (
      <FilePropertiesContainer>
        <FilePropertiesList>
          <Item>
            <Label>File Name</Label>
            <Content>{file.originalname}</Content>
          </Item>
          <Item>
            <Label>File Type</Label>
            <Content>{file.mimetype.split('/')[0]}</Content>
          </Item>
          <Item>
            <Label>File Size</Label>
            <Content>{format.bytes(file.size)}</Content>
          </Item>
          <Item>
            <Label>Location</Label>
            <Content>{file.folder}</Content>
          </Item>
          <Item>
            <Label>Last Modified</Label>
            <Content>{format.datetime(file.updatedAt)}</Content>
          </Item>
          <Item>
            <Label>Created At</Label>
            <Content>{format.datetime(file.updatedAt)}</Content>
          </Item>
        </FilePropertiesList>
        <FileActions>
          <Download href={`${apiHost}/file/${file.filename}?jwt=${localStorage.getItem('JWT')}`}>Download</Download>
          <Delete onClick={() => this.props.deleteFile(file.filename)}>Delete</Delete>
          {/* TODO: Support features below */}
          {/* <ShareFile></ShareFile> */}
          {/* <ChangePermission></ChangePermission> */}
        </FileActions>
      </FilePropertiesContainer>
    );
  }
}

const mapStateToProps = state => ({
  file: state.file
});

const mapDispatchToProps = dispatch => ({
  deleteFile: (filename) => dispatch(deleteFile(filename))
});

export default connect(mapStateToProps, mapDispatchToProps)(FileProperties);
