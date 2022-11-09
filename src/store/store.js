import { combineReducers } from 'redux';

import jourReducer from './Modules/Journal.jsx';
import topBarMenuReducer from './Modules/TopBarMenuDisplay.jsx';
import isLoginReducer from './Modules/IsLogin.jsx';
import userReducer from './Modules/User.jsx';

const AppReducer = combineReducers({
  isLoginReducer,
  userReducer,
  jourReducer,
  topBarMenuReducer,
});

export default AppReducer;
