import styled from 'styled-components';

export const FileItemContainer = styled.div`
  margin-bottom: 1px;
  background-color: ${props => props.highlight ? '#4285f4' : '#FFF'};
  color: ${props => props.highlight ? '#FFF' : '#000'};
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 20px;
  cursor: pointer;
`;

export const FileIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 15px;
`;

export const FileName = styled.span`
  flex: 3;
`;

export const FileListModified = styled.span`
  flex: 1;
`;

export const FileSize = styled.span`
  flex: 1;
`;
