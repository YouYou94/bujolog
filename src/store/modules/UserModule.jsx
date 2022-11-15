import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: null,
  userId: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.name = action.payload.name;
      state.userId = action.payload.userId;
    },
    defaultUser(state) {
      state.name = null;
      state.userId = null;
    },
  },
});

export const { setUser, defaultUser } = userSlice.actions;
export default userSlice;
