import styled from 'styled-components';

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
`;
