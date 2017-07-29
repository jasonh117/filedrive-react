import styled from 'styled-components';

export const ListOfFilesContainer = styled.div`
  background-color: #F2F2F2;
  padding: 20px;
  flex: 0.7;
  overflow: scroll;
  -webkit-user-select: none;  /* Chrome all / Safari all */
  -moz-user-select: none;     /* Firefox all */
  -ms-user-select: none;      /* IE 10+ */
  user-select: none;
`;

export const ErrorMessage = styled.p`
  font-size: 20px;
  margin: 0;
  color: red;
  text-align: center;
`;
