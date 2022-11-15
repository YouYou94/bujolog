import { configureStore } from '@reduxjs/toolkit';
import isLoginSlice from './modules/IsLoginModule';

import sideMenuSlice from './modules/SideMenuModule';
import userSlice from './modules/UserModule';

const store = configureStore({
  reducer: {
    sideMenu: sideMenuSlice.reducer,
    user: userSlice.reducer,
    isLogin: isLoginSlice.reducer,
  },
});

export default store;
