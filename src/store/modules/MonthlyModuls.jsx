import { createSlice } from '@reduxjs/toolkit';

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
    goals: [],
    task: [],
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
