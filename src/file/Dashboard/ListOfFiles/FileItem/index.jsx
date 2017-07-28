import React from 'react';
import moment from 'moment';
import formatBytes from 'lib/formatBytes';
import {
  FileItemContainer,
  FileIcon,
  FileName,
  FileListModified,
  FileSize,
} from './components';

const typeToClass = {
  'text': 'fa fa-file-text-o',
  'image': 'fa fa-file-image-o',
  'audio': 'fa fa-file-audio-o',
  'video': 'fa fa-file-video-o'
}

const subtypeToClass = {
  'zip': 'fa fa-file-zip-o',
  'pdf': 'fa fa-file-pdf-o',
  'msword': 'fa fa-file-word-o',
  'vnd.ms-powerpoint': 'fa fa-file-powerpoint-o',
  'vnd.ms-excel': 'fa fa-file-excel-o'
}

const getFileClass = (mimetype) => {
  const [type, subtype] = mimetype.split('/');
  if (type === 'application') {
    return subtypeToClass[subtype] || 'fa fa-file';
  } else {
    return typeToClass[type] || 'fa fa-file';
  }
};

const FileItem = ({ file, highlight, openModal }) => (
  <FileItemContainer highlight={file.highlighted} onClick={highlight} onDoubleClick={openModal}>
    <FileIcon className={getFileClass(file.mimetype)} aria-hidden="true" />
    <FileName>{file.originalname}</FileName>
    <FileListModified>{moment(file.updatedAt).format('ll')}</FileListModified>
    <FileSize>{formatBytes(file.size)}</FileSize>
  </FileItemContainer>
);

export default FileItem;
