import { createSlice } from '@reduxjs/toolkit';
import { DOT, NEXT } from '../../Constants';

const initialState = [
  {
    // 1월
    goals: [],
    task: [],
  },
  {
    // 2월
    goals: [],
    task: [],
  },
  {
    // 3월
    goals: [],
    task: [],
  },
  {
    // 4월
    goals: [],
    task: [],
  },
  {
    // 5월
    goals: [],
    task: [],
  },
  {
    // 6월
    goals: [],
    task: [],
  },
  {
    // 7월
    goals: [],
    task: [],
  },
  {
    // 8월
    goals: [],
    task: [],
  },
  {
    // 9월
    goals: [],
    task: [],
  },
  {
    // 10월
    goals: [],
    task: [],
  },
  {
    // 11월
    goals: [
      { icon: DOT, log: 'Next.js 공부하기' },
      { icon: DOT, log: 'TypeScript 공부하기' },
    ],
    task: [
      { icon: NEXT, log: '이력서 작성 (~ 12월)' },
      { icon: DOT, log: 'TypeScript 변수 공부' },
      { icon: DOT, log: 'Rest API 공부' },
    ],
    3: { schedule: '예비군 원격 교육' },
    9: { schedule: '예비군 훈련' },
    10: { schedule: '동생 생일' },
    17: { schedule: '수능' },
    26: { schedule: '주현이 형 결혼식' },
  },
  {
    // 12월
    goals: [],
    task: [],
  },
];

const monthlySlice = createSlice({
  name: 'monthly',
  initialState,
  reducers: {
    checkScheduled(state, action) {
      const { month, date } = action.payload;

      if (state[month][`${date}`] === undefined) {
        state[month] = {
          ...state[month],
          [date]: { schedule: '' },
        };
      }
    },
    addScheduled(state, action) {
      const { month, date, schedule } = action.payload;
      state[month] = {
        ...state[month],
        [date]: { schedule: schedule },
      };
    },
    delSceduled(state, action) {
      const { month, date } = action.payload;

      state[month] = {
        ...state[month],
        [date]: { schedule: '' },
      };
    },
    addTask(state, action) {
      const { month, icon, log } = action.payload;

      state[month].task.push({ icon, log });
    },
    delTask(state, action) {
      const { month, id } = action.payload;

      state[month].task = state[month].task.filter(
        (e, index) => index !== Number(id)
      );
    },
    addGoal(state, action) {
      const { month, icon, log } = action.payload;

      state[month].goals.push({ icon, log });
    },
    delGoal(state, action) {
      const { month, id } = action.payload;

      state[month].goals = state[month].goals.filter(
        (e, index) => index !== Number(id)
      );
    },
  },
});

export const {
  checkScheduled,
  addScheduled,
  delSceduled,
  addTask,
  delTask,
  addGoal,
  delGoal,
} = monthlySlice.actions;
export default monthlySlice;
