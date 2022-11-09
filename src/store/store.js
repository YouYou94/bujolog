import { combineReducers } from 'redux';

import jourReducer from './Modules/Journal.jsx';
import topBarMenuReducer from './Modules/TopBarMenuDisplay.jsx';
import isLoginReducer from './Modules/IsLogin.jsx';

const AppReducer = combineReducers({
  isLoginReducer,
  jourReducer,
  topBarMenuReducer,
});

export default AppReducer;
