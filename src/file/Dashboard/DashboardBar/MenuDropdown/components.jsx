import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { commonButton } from 'lib/components';

export const DropdownContainer = styled.div`
  position: absolute;
  right: 20px;
  border: 1px solid black;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

export const MenuButton = commonButton.withComponent('i').extend`
  padding: 5px 10px;
`;

export const Item = commonButton.withComponent(Link).extend`
  border: none;

  &:hover {
    border: none;
  }

  &:active {
    border: none;
  }
`;
