import { combineReducers } from 'redux';

import user from 'user/reducer';
import file from 'file/reducer';

export default combineReducers({
  user,
  file
});