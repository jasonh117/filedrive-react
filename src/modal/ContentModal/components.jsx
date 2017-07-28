import styled from 'styled-components';

export const ContentModalContainer = styled.div`
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
  background-color: #FFF;
  z-index: 3;
  padding: 15px;
  position: relative;
`;

export const Text = styled.iframe`
  width: 50vw;
  height: 50vh;
  border: none;
`;

export const Pdf = styled.embed`
  width: 75vw;
  height: 90vh;
`;