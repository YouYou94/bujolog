import { createSlice } from '@reduxjs/toolkit';
import { INITIALKEY } from '../../Constants';

const initialState = {
  key: localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user')).key
    : INITIALKEY,
};

const keySlice = createSlice({
  name: 'key',
  initialState,
  reducers: {
    createKey(state, action) {
      const { selectedKey } = action.payload;
      const { icon, id, description } = selectedKey;

      const createState = {
        icon,
        id,
        description,
      };

      const userState = JSON.parse(localStorage.getItem('user'));

      state.key.push(createState);

      localStorage.setItem(
        'user',
        JSON.stringify({ ...userState, key: state.key })
      );

      console.log('키 생성 완료!');
    },
    updateKey(state, action) {
      const { selectedKey } = action.payload;
      const { icon, id, description } = selectedKey;

      const updateState = {
        icon,
        id,
        description,
      };

      const userState = JSON.parse(localStorage.getItem('user'));

      const changeState = state.key.map(key =>
        key.id === id ? updateState : key
      );

      state.key = changeState;

      localStorage.setItem(
        'user',
        JSON.stringify({ ...userState, key: state.key })
      );

      console.log('키 변경 완료!');
    },
    deleteKey(state, action) {
      const { id } = action.payload;

      const userState = JSON.parse(localStorage.getItem('user'));

      const changeState = state.key.filter(key => key.id !== id);

      state.key = changeState;

      localStorage.setItem(
        'user',
        JSON.stringify({ ...userState, key: state.key })
      );

      console.log('키 삭제 완료!');
    },
  },
});

export const { createKey, updateKey, deleteKey } = keySlice.actions;
export default keySlice;
