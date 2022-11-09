/* Bullet Journal */
/*
index:
    key:
        . is - NEWBIE or OLDBIE : 뉴비인지 사용자인지
        . bullet - 배열 
        . index - 배열 : 저널의 인덱스(표지 넘버)를 갖는다.
        . mandal-art : (준비중) 9x9 계획표
        . todo : (준비중) 오늘 해야 할 일
        . future-log : 한 해를 계획하는 페이지
        . monthly-log : 한 달을 계획하는 페이지
        . weekly-log : 한 주를 계획하는 페이지
        . daily-log : 오늘 하루를 적는 페이지

Create:
    - 기본적으로 Newbie 유저의 저널을 생성한다.
    - key:
        exist : 'NEWBIE'
        나머지 key 빈 배열

ADD:
    - 저널 추가

DEL:
    - 저널 삭제

UPD:
    - 저널 변경(추후 구현)
*/

/* Initial Value */
const INITIAL_VALUE = '';

const NEWBIE = 'NEWBIE';
const OLDBIE = 'OLDBIE';

const initialState = {
  is: 'NEWBIE',
};

/* Action Type */
const CREAT_JOUR = 'CREAT_JOUR';

const ADD_BULLET = 'ADD_BULLET';
//const ADD_INDEX = 'ADD_INDEX';
const ADD_FUTURE = 'ADD_FUTURE';
const ADD_MONTHLY = 'ADD_MONTHLY';
const ADD_WEEKLY = 'ADD_WEEKLY';
const ADD_DAILY = 'ADD_DAILY';

const DEL_JOUR = 'DEL_JOUR';

/* Action */
export const createJour = () => {
  return {
    type: CREAT_JOUR,
    data: INITIAL_VALUE,
  };
};

export const addBullet = INPUT_DATA => {
  return {
    type: ADD_BULLET,
    data: INPUT_DATA,
  };
};

export const addFuture = INPUT_DATA => {
  return {
    type: ADD_FUTURE,
    data: INPUT_DATA,
  };
};

export const addMonthly = INPUT_DATA => {
  return {
    type: ADD_MONTHLY,
    data: INPUT_DATA,
  };
};

export const addWeekly = INPUT_DATA => {
  return {
    type: ADD_WEEKLY,
    data: INPUT_DATA,
  };
};

export const addDaily = INPUT_DATA => {
  return {
    type: ADD_DAILY,
    data: INPUT_DATA,
  };
};

export const delJour = () => {
  return {
    type: DEL_JOUR,
  };
};

/* Reducer */
const jourReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREAT_JOUR:
      return {
        ...state,
        is: OLDBIE,
        bullet: action.data,
        future: action.data,
        monthly: action.data,
        weekly: action.data,
        daily: action.data,
      };
    case ADD_BULLET:
      return;
    case ADD_FUTURE:
      return;
    case ADD_MONTHLY:
      return;
    case ADD_WEEKLY:
      return;
    case ADD_DAILY:
      return;
    case DEL_JOUR:
      return {
        ...state,
        is: NEWBIE,
      };
    default:
      return state;
  }
};

export default jourReducer;
