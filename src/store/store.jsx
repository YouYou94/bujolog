import { configureStore } from '@reduxjs/toolkit';

import sideMenuSlice from './modules/SideMenuModule';

const store = configureStore({
  reducer: {
    sideMenu: sideMenuSlice.reducer,
  },
});

export default store;
