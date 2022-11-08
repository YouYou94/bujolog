import { combineReducers } from 'redux';

import jourReducer from './Modules/Journal';
import topBarMenuReducer from './Modules/TopBarMenuDisplay';

const AppReducer = combineReducers({
  jourReducer,
  topBarMenuReducer,
});

export default AppReducer;
