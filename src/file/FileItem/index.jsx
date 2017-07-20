import React, { Component } from 'react';
import moment from 'moment';
import formatBytes from '../../lib/formatBytes';
import {
  FileItemContainer,
  FileName,
  FileListModified,
  FileSize
} from './components';


class FileItem extends Component {
  render() {
    return (
      <FileItemContainer>
        <FileName>{this.props.file.originalname}</FileName>
        <FileListModified>{moment(this.props.file.updatedAt).format('ll')}</FileListModified>
        <FileSize>{formatBytes(this.props.file.size)}</FileSize>
      </FileItemContainer>
    );
  }
}

export default FileItem;
