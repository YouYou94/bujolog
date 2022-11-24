import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  daily: {},
};

const daillySlice = createSlice({
  name: 'daily',
  initialState,
  reducers: {
    checkTodayLog(state, action) {
      const { today } = action.payload;

      state.daily = {
        ...state.daily,
        [`${today}`]: [],
      };
    },
    addDailyLog(state, action) {
      const { today, icon, log } = action.payload;

      if (!state.daily[`${today}`]) checkTodayLog({ today: today });

      state.daily[`${today}`].push({ icon: icon, log: log });
    },
    delDailyLog(state, action) {
      const { today, id } = action.payload;
      state.daily[`${today}`] = state.daily[`${today}`].filter(
        (e, index) => index !== Number(id)
      );
    },
  },
});

export const { checkTodayLog, addDailyLog, delDailyLog } = daillySlice.actions;
export default daillySlice;
