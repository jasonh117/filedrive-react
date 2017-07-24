import { combineReducers } from 'redux';

import user from 'user/reducer';
import file from 'file/reducer';
import modal from 'modal/reducer';

export default combineReducers({
  user,
  file,
  modal
});