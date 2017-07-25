import styled from 'styled-components';

export const commonButton = styled.div`
  padding: 10px;
  border: 1px solid black;
  cursor: pointer;
  -webkit-transition: all 0.15s ease-in;
  transition: all 0.15s ease-in;

  &:hover {
    background-color: gray;
    color: white;
    border: 1px solid #D3D3D3;
  }

  &:active {
    background-color: black;
    color: white;
    border: 1px solid #D3D3D3;
  }
`;