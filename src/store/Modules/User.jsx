/* Initial Value */
const initialState = {
  name: null,
  userId: null,
};

/* Action Type */
const USERSETTING = 'USERSETTING';
const USERINITIAL = 'USERINITIAL';

/* Action */
export const userSetting = (displayName, uId) => {
  return {
    type: USERSETTING,
    name: displayName,
    userId: uId,
  };
};

export const userInitial = () => {
  return { type: USERINITIAL };
};

/* Reducer */
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERSETTING:
      return {
        ...state,
        name: action.name,
        userId: action.userId,
      };
    case USERINITIAL:
      return {
        ...state,
        name: null,
        userId: null,
      };
    default:
      return state;
  }
};

export default userReducer;
