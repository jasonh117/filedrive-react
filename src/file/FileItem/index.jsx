import React from 'react';
import moment from 'moment';
import formatBytes from '../../lib/formatBytes';
import {
  FileItemContainer,
  FileIcon,
  FileName,
  FileListModified,
  FileSize,
} from './components';


const FileItem = ({ file, highlight }) => (
  <FileItemContainer highlight={file.highlighted} onClick={highlight}>
    <FileIcon />
    <FileName>{file.originalname}</FileName>
    <FileListModified>{moment(file.updatedAt).format('ll')}</FileListModified>
    <FileSize>{formatBytes(file.size)}</FileSize>
  </FileItemContainer>
);

export default FileItem;
