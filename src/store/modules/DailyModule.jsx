import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  daily: localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user')).dailylog
    : {},
};

const daillySlice = createSlice({
  name: 'daily',
  initialState,
  reducers: {
    createDailyLog(state, action) {
      const { createState } = action.payload;
      const { id, today, key, log, check } = createState;

      if (!state.daily[`${today}`]) {
        state.daily = {
          ...state.daily,
          [`${today}`]: [],
        };
      }

      if (state.daily[`${today}`]) {
        state.daily[`${today}`].push({ id, key, log, check });
      }

      const userState = JSON.parse(localStorage.getItem('user'));

      localStorage.setItem(
        'user',
        JSON.stringify({
          ...userState,
          dailylog: {
            ...userState.dailylog,
            [`${today}`]: state.daily[`${today}`],
          },
        })
      );

      console.log('데일리로그 추가 완료!');
    },
    deleteDailyLog(state, action) {
      const { today, id } = action.payload;

      console.log(id);

      const userState = JSON.parse(localStorage.getItem('user'));

      const changeState = state.daily[`${today}`].filter(log => log.id !== id);

      state.daily = { ...state.daily, [`${today}`]: changeState };

      localStorage.setItem(
        'user',
        JSON.stringify({ ...userState, dailylog: state.daily })
      );

      console.log('데일리로그 삭제 완료!');
    },
  },
});

export const { createDailyLog, deleteDailyLog } = daillySlice.actions;
export default daillySlice;
