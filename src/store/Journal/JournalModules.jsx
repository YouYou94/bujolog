const initialState = {
  exist: 'NOT',
};

/* ACTION Type */
const ADD = 'ADD';
const DEL = 'DELETE';
const UPD = 'UPDATE';

/* ACTION */
export const add = value => {
  return {
    type: ADD,
    text: value,
  };
};

export const del = () => {
  return {
    type: DEL,
  };
};

export const upd = value => {
  return {
    type: UPD,
    text: value,
  };
};

/* REDUCER */
export const journalReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        exist: 'IS',
        text: action.text,
      };

    case DEL:
      return {
        exist: 'NOT',
      };

    case UPD:
      return {
        ...state,
        exist: 'IS',
        text: action.text,
      };

    default:
      return state;
  }
};
