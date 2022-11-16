import { createSlice } from '@reduxjs/toolkit';
import { DOT, SQUARE, NEXT, PREV } from '../../Constants.jsx';

const commonState = {
  bullet: [
    {
      key: DOT,
      name: 'Task',
      description: '해야 할 일',
    },
    {
      key: SQUARE,
      name: 'Task Completed',
      description: '완료',
    },
    {
      key: NEXT,
      name: 'Task Migrated',
      description: '일정 연기',
    },
    {
      key: PREV,
      name: 'Task Scheduled',
      description: '일정 변경',
    },
  ],
};

const userState = {
  user: 'NEWBIE',
  bullet: [],
};

const bulletSlice = createSlice({
  name: 'bullet',
  initialState: { commonState, userState },
  reducers: {
    addBullet(state, action) {
      state.commonState.bullet.push(action.payload);
    },
    delBullet(state, action) {
      state.commonState.bullet = state.commonState.bullet.filter(
        (e, index) => index !== action.payload
      );
    },
    saveBullet(state) {
      state.userState.user = 'OLDBIE';
      state.userState.bullet = state.commonState.bullet;
    },
  },
});

export const { addBullet, delBullet, saveBullet } = bulletSlice.actions;
export default bulletSlice;
