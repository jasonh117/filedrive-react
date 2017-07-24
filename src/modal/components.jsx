import styled from 'styled-components';

export const Transition = styled.div`
  opacity: ${props => props.in ? 1 : 0};
  visibility: ${props => props.in ? 'visible' : 'hidden'};
  -webkit-transition: all 0.15s ease-in;
  transition: all 0.15s ease-in;
`;