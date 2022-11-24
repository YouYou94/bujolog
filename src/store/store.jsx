import { configureStore } from '@reduxjs/toolkit';

import bulletSlice from './modules/BulletModule.jsx';
import monthlySlice from './modules/MonthlyModule.jsx';
import sideMenuSlice from './modules/SideMenuModule';

const store = configureStore({
  reducer: {
    sideMenu: sideMenuSlice.reducer,
    bullet: bulletSlice.reducer,
    monthly: monthlySlice.reducer,
  },
});

export default store;
