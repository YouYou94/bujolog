/* Initial Value */
const initialState = {
  login: false,
};

/* Action Type */
const ISLOGIN = 'ISLOGIN';
const NOTLOGIN = 'NOTLOGIN';

/* Action */
export const isLogin = () => {
  return { type: ISLOGIN };
};

export const notLogin = () => {
  return { type: NOTLOGIN };
};

/* Reducer */
const isLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case ISLOGIN:
      return {
        ...state,
        login: true,
      };
    case NOTLOGIN:
      return {
        ...state,
        login: false,
      };
    default:
      return state;
  }
};

export default isLoginReducer;
