import { createSlice } from '@reduxjs/toolkit';
import { DOT, SQUARE, NEXT, PREV } from '../../Constants.jsx';

const initialState = {
  bullet: [
    {
      key: DOT,
      description: '해야 할 일',
      save: true,
    },
    {
      key: SQUARE,
      description: '완료',
      save: true,
    },
    {
      key: NEXT,
      description: '일정 연기',
      save: true,
    },
    {
      key: PREV,
      description: '일정 변경',
      save: true,
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
      const id = action.payload;
      state.bullet = state.bullet.filter((e, index) => index !== id);
    },
    saveBullet(state, action) {
      const { id, key, description } = action.payload;
      state.commonState.bullet[id] = {
        key: key,
        description: description,
        save: true,
      };
    },
    saveAllBullet(state) {
      // 모두 true로 변경하기
      state.userState.is = 'OLDBIE';
      state.userState.bullet = state.commonState.bullet.filter(
        bullet => bullet.save === true
      );

      state.commonState.bullet = state.userState.bullet;
    },
    initialBullet(state) {
      state.bullet = state.bullet.filter(bullet => bullet.save === true);
    },
  },
});

export const {
  addBullet,
  delBullet,
  saveBullet,
  saveAllBullet,
  initialBullet,
} = bulletSlice.actions;
export default bulletSlice;
