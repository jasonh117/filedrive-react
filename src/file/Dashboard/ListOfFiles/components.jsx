import styled from 'styled-components';
import OriginalSpinner from 'react-spinkit';

export const ListOfFilesContainer = styled.div`
  background-color: #F2F2F2;
  padding: 20px;
  flex: 0.7;
  overflow: scroll;
`;

export const ErrorMessage = styled.p`
  font-size: 20px;
  margin: 0;
  color: red;
  text-align: center;
`;

export const Spinner = styled(OriginalSpinner).attrs({
  name: 'circle'
})`
  margin: 0 auto;
`;