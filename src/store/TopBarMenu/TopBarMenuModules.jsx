const initialState = null;

/* ACTION Type */
const OPEN = 'open';
const CLOSE = 'close';

/* ACTION */
export const opened = () => {
  return { type: OPEN };
};

export const closed = () => {
  return { type: CLOSE };
};

/* REDUCER */
export const topBarMenuReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN:
      return action.type;
    case CLOSE:
      return action.type;
    default:
      return null;
  }
};
