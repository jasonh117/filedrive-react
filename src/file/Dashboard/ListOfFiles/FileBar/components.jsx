import styled from 'styled-components';
import { commonButton } from 'lib/components';

export const FileBarContainer = styled.div`
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
`;

export const FileIcon = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 15px;
`;

export const FileName = commonButton.extend`
  flex: 3;
  padding: 15px 0 15px 15px;
  cursor: pointer;
  border: none;

  &:hover {
    border: none;
  }

  &:active {
    border: none;
  }
`;

export const FileListModified = FileName.extend`
  flex: 1;
  cursor: pointer;
`;

export const FileSize = styled.span`
  flex: 1;
  padding: 15px 0 15px 15px;
`;

export const SortIcon = styled.i`
  margin-left: 5px;
`;
