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

const getFileClass = (mimetype) => {
  switch (mimetype.split('/')[0]) {
    case 'text':
      return 'fa fa-file-text-o'
    case 'image':
      return 'fa fa-file-image-o'
    case 'audio':
      return 'fa fa-file-audio-o'
    case 'video':
      return 'fa fa-file-video-o'
    case 'application':
      if (mimetype.split('/')[1] === 'zip')
        return 'fa fa-file-zip-o'
      if (mimetype.split('/')[1] === 'pdf')
        return 'fa fa-file-pdf-o'
      if (mimetype.split('/')[1] === 'msword')
        return 'fa fa-file-word-o'
      if (mimetype.split('/')[1] === 'vnd.ms-powerpoint')
        return 'fa fa-file-powerpoint-o'
      if (mimetype.split('/')[1] === 'vnd.ms-excel')
        return 'fa fa-file-excel-o'
    default:
      return 'fa fa-file';
  };
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
