import { configureStore } from '@reduxjs/toolkit';

import bulletSlice from './modules/BulletModuls';
import monthlySlice from './modules/MonthlyModuls';
import sideMenuSlice from './modules/SideMenuModule';

const store = configureStore({
  reducer: {
    sideMenu: sideMenuSlice.reducer,
    bullet: bulletSlice.reducer,
    monthly: monthlySlice.reducer,
  },
});

export default store;
