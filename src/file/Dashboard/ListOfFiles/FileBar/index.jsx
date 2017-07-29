import React, { Component } from 'react';
import { connect } from 'react-redux';
import { tryGetFolder } from 'file/actions';
import {
  FileBarContainer,
  FileIcon,
  FileName,
  FileListModified,
  FileSize,
  SortIcon
} from './components';

class FileBar extends Component {
  handleSort(sort, initial) {
    const newState = this.props.sort === sort ?
      { desc: !this.props.desc } : { sort, desc: initial };
    this.props.tryGetFolder(newState);
  }

  render() {
    return (
      <FileBarContainer>
        <FileIcon />
        <FileName onClick={() => this.handleSort('originalname', false)}>
          <span>Name</span>
          {this.props.sort === 'originalname' && <SortIcon className={this.props.desc ? 'fa fa-long-arrow-down' : 'fa fa-long-arrow-up'} />}
        </FileName>
        <FileListModified onClick={() => this.handleSort('updatedAt', true)}>
          <span>Last modified</span>
          {this.props.sort === 'updatedAt' && <SortIcon className={this.props.desc ? 'fa fa-long-arrow-down' : 'fa fa-long-arrow-up'} />}
        </FileListModified>
        <FileSize>File size</FileSize>
      </FileBarContainer>
    );
  }
}

const mapStateToProps = state => ({
  sort: state.file.sort,
  desc: state.file.desc
});

const mapDispatchToProps = dispatch => ({
  tryGetFolder: (options) => dispatch(tryGetFolder(options)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FileBar);
