import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('user')).key;

const keySlice = createSlice({
  name: 'key',
  initialState,
  reducers: {
    createKey(state, action) {},
    updateKey(state, action) {},
    deleteKey(state, action) {},
    initialBullet(state) {
      state.bullet = state.bullet.filter(bullet => bullet.save === true);
    },
  },
});

export const { createKey, updateKey, deleteKey } = keySlice.actions;
export default keySlice;
