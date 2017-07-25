import styled from 'styled-components';
import { Line } from 'rc-progress';
import { commonButton } from 'lib/components';

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
  -webkit-user-select: none;  /* Chrome all / Safari all */
  -moz-user-select: none;     /* Firefox all */
  -ms-user-select: none;      /* IE 10+ */
  user-select: none;
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

export const UploadButton = commonButton.extend`
  margin: 20px 0;
`;

export const ErrorMessage = styled.p`
  font-size: 20px;
  margin: 20px;
  color: red;
  text-align: center;
`;

export const ProgressBar = styled(Line)`
  width: 90%;
  margin: 30px;
`;
