import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { apiHost } from 'config';
import formatBytes from 'lib/formatBytes';
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
      this.props.file.files.find(file => {
        return file.id === this.props.file.selected
      });
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
            <Content>{formatBytes(file.size)}</Content>
          </Item>
          <Item>
            <Label>Location</Label>
            <Content>{file.folder}</Content>
          </Item>
          <Item>
            <Label>Last Modified</Label>
            <Content>{moment(file.updatedAt).format('ll')}</Content>
          </Item>
          <Item>
            <Label>Created At</Label>
            <Content>{moment(file.createdAt).format('ll')}</Content>
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
})

export default connect(mapStateToProps, mapDispatchToProps)(FileProperties);
