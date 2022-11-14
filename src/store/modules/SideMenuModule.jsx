import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  display: null,
};

const sideMenuSlice = createSlice({
  name: 'sideMenu',
  initialState,
  reducers: {
    open(state) {
      state.display = 'open';
    },
    close(state) {
      state.display = 'close';
    },
  },
});

export const { open, close } = sideMenuSlice.actions;
export default sideMenuSlice;
