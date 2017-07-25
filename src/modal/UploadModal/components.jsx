import styled from 'styled-components';
import { Line } from 'rc-progress';

export const UploadModalContainer = styled.div`
  background-color: rgba(33, 33, 33, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  width: 50vw;
  height: 75vh;
  background-color: #FFF;
  z-index: 3;
  padding: 15px;
  position: relative;
`;

export const Instruction = styled.div`
  margin: 20px 0;
`;

export const FileListContainer = styled.div`
  max-width: 90%;
  overflow: scroll;
`;

export const UploadButton = styled.div`
  margin: 20px 0;
  padding: 10px;
  border: 1px solid black;
  cursor: pointer;
`;

export const ErrorMessage = styled.p`
  font-size: 20px;
  margin: 20px;
  color: red;
  text-align: center;
`;

export const ProgressBar = styled(Line)`
  width: 90%;
`;
