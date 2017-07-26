import styled from 'styled-components';
import { commonButton } from 'lib/components';

export const FilePropertiesContainer = styled.div`
  padding: 20px;
  box-shadow: -2px 2px 2px 0 gray;
  flex: 0.3;
  overflow: scroll;
`;

export const FilePropertiesList = styled.div`
  margin: 10px;
`;

export const FileActions = styled.div`
  margin: 10px;
  padding-top: 20px;
  -webkit-user-select: none;  /* Chrome all / Safari all */
  -moz-user-select: none;     /* Firefox all */
  -ms-user-select: none;      /* IE 10+ */
  user-select: none;
`;

export const Item = styled.div`
  display: flex;
  padding: 10px;
`;

export const Label = styled.span`
  flex: 0.4;
`;

export const Content = styled.span`
  flex: 0.6;
`;

export const Download = commonButton.withComponent('a').extend.attrs({
  download: true
})`
  margin: 10px;
  color: black;
  text-decoration: none;
`;

export const Delete = commonButton.extend`
  margin: 10px;
  width: 90px;
`;
