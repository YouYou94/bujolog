import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  monthly: localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user')).monthlylog
    : {},
};

const monthlySlice = createSlice({
  name: 'monthly',
  initialState,
  reducers: {
    createSchedule(state, action) {
      const { selectedSchedule } = action.payload;
      const { month, day, id, plan } = selectedSchedule;

      state.monthly = { ...state.monthly, [`${month}.${day}`]: { id, plan } };

      const userState = JSON.parse(localStorage.getItem('user'));

      localStorage.setItem(
        'user',
        JSON.stringify({
          ...userState,
          monthlylog: {
            ...userState.monthlylog,
            [`${month}.${day}`]: { id, plan },
          },
        })
      );

      console.log('먼슬리로그 추가 완료!');
    },
    updateSchedule(state, action) {
      const { selectedSchedule } = action.payload;
      const { month, day, id, plan } = selectedSchedule;

      Object.keys(state.monthly).forEach(key => {
        if (`${month}.${day}` === key) {
          state.monthly[key] = { id, plan };
        }
      });

      const userState = JSON.parse(localStorage.getItem('user'));

      localStorage.setItem(
        'user',
        JSON.stringify({
          ...userState,
          monthlylog: state.monthly,
        })
      );

      console.log('먼슬리로그 변경 완료!');
    },
    deleteSchedule(state, action) {},
  },
});

export const { createSchedule, updateSchedule, deleteSchedule } =
  monthlySlice.actions;
export default monthlySlice;
