import { createSlice } from '@reduxjs/toolkit';
import { DOT, SQUARE, NEXT, PREV } from '../../Constants.jsx';

const initialState = {
  bullet: [
    {
      key: DOT,
      description: '해야 할 일',
    },
    {
      key: SQUARE,
      description: '완료',
    },
    {
      key: NEXT,
      description: '일정 연기',
    },
    {
      key: PREV,
      description: '일정 변경',
    },
  ],
};

const bulletSlice = createSlice({
  name: 'bullet',
  initialState,
  reducers: {
    addBullet(state, action) {
      state.bullet.push(action.payload);
    },
    delBullet(state, action) {
      state.bullet = state.bullet.filter(
        (e, index) => index !== action.payload
      );
    },
    saveBullet(state, action) {
      const { id, key, description } = action.payload;
      state.bullet[id] = { key: key, description: description };
    },
  },
});

export const { addBullet, delBullet, saveBullet } = bulletSlice.actions;
export default bulletSlice;
