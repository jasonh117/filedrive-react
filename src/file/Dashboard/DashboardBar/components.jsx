import styled from 'styled-components';
import { commonButton } from 'lib/components';

export const DashboardBarContainer = styled.div`
  height: 50px;
  box-shadow: 0 4px 2px 0 gray;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  -webkit-user-select: none;  /* Chrome all / Safari all */
  -moz-user-select: none;     /* Firefox all */
  -ms-user-select: none;      /* IE 10+ */
  user-select: none;
`;

export const UploadButton = commonButton.extend`
  padding: 5px 10px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
`;