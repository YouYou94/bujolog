import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogin: false,
};

const isLoginSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setTrueLogin(state) {
      state.isLogin = true;
    },
    setFalseLogin(state) {
      state.isLogin = false;
    },
  },
});

export const { setTrueLogin, setFalseLogin } = isLoginSlice.actions;
export default isLoginSlice;
