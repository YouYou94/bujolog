import { configureStore } from '@reduxjs/toolkit';

import bulletSlice from './modules/BulletModuls';
import sideMenuSlice from './modules/SideMenuModule';

const store = configureStore({
  reducer: {
    sideMenu: sideMenuSlice.reducer,
    bullet: bulletSlice.reducer,
  },
});

export default store;
