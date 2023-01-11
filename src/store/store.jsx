import { configureStore } from '@reduxjs/toolkit';

import keySlice from './modules/KeyModule.jsx';
import daillySlice from './modules/DailyModule.jsx';
import monthlySlice from './modules/MonthlyModule.jsx';

const store = configureStore({
  reducer: {
    key: keySlice.reducer,
    monthly: monthlySlice.reducer,
    daily: daillySlice.reducer,
  },
});

export default store;
