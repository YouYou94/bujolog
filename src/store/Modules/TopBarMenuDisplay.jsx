/* Initial Value */
const initialState = {
  display: null,
};

/* Action Type */
const OPEN = 'open';
const CLOSE = 'close';

/* Action */
export const opened = () => {
  return { type: OPEN };
};

export const closed = () => {
  return { type: CLOSE };
};

/* Reducer */
const topBarMenuReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN:
      return {
        ...state,
        display: OPEN,
      };
    case CLOSE:
      return {
        ...state,
        display: CLOSE,
      };
    default:
      return state;
  }
};

export default topBarMenuReducer;
