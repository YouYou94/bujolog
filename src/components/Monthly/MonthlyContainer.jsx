import { customAlphabet } from 'nanoid';
import { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { DAYSHORTNAME, MONTHNAME } from '../../Constants';
import {
  createSchedule,
  updateSchedule,
} from '../../store/modules/MonthlyModule';
import MonthlyPresenter from './MothlyPresenter';

const MENUAL = {
  title: 'MONTHLY LOG',
  captionList: [
    '이곳을 먼슬리로그를 셋업하는 페이지입니다.',
    '일정표를 이용하여 한달의 계획을 세워보세요.',
    '나머지는 아래의 사용법을 참고해주세요.',
    '1. 일정을 선택하세요.',
    '2. 계획을 작성하세요.',
    '3. 추가하기 또는 엔터키를 입력하여 셋업을 완료하세요.',
    '4. 한달의 게획을 세우고 실천해보세요.',
  ],
};

export const CREATE_METHOD = '스케줄 추가하기';
export const UPDATE_METHOD = '스케줄 변경하기';

const MonthlyContainer = () => {
  const navigate = useNavigate();
  const modalRef = useRef();

  const nanoid = customAlphabet('0123456789abcdefghijklmnop', 8);

  const userMonthlyList = useSelector(state => state.monthly.monthly);
  const dispatch = useDispatch();

  const date = new Date();

  const [isDisplayModal, setIsDisplayModal] = useState(false);
  const [currentDate, setCurrentDate] = useState({
    month: date.getMonth(),
    day: date.getDay() - 1,
    end: new Array(
      new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
    ).fill(),
  });
  const [selectedSchedule, setSeletedSchedule] = useState({
    method: '',
    id: '',
    month: '',
    day: '',
    plan: '',
  });

  //console.log(userMonthlyList);

  /* 캘린더 헤더 마일스톤 클릭 기능 */
  const handleClickPrevMonth = () => {
    if (currentDate.month === 0) return;

    const currentMonth = currentDate.month - 1;

    setCurrentDate({
      month: currentMonth,
      day: null,
      end: new Array(
        new Date(date.getFullYear(), currentMonth + 1, 0).getDate()
      ).fill(),
    });
  };

  const handleClickNextMileStone = () => {
    if (currentDate.month === 11) return;

    const currentMonth = currentDate.month + 1;

    setCurrentDate({
      month: currentMonth,
      day: null,
      end: new Array(
        new Date(date.getFullYear(), currentMonth + 1, 0).getDate()
      ).fill(),
    });
  };

  /* 스케줄 클릭 기능 (클릭 시 모달창 display) */
  const handleClickSchedule = event => {
    const { id } = event.currentTarget;

    setIsDisplayModal(true);

    if (!userMonthlyList[`${currentDate.month}.${id}`]) {
      setSeletedSchedule({
        method: CREATE_METHOD,
        id: nanoid(),
        month: currentDate.month,
        day: id,
        plan: '',
      });

      return;
    }

    setSeletedSchedule({
      method: UPDATE_METHOD,
      id: userMonthlyList[`${currentDate.month}.${id}`].id,
      month: currentDate.month,
      day: id,
      plan: userMonthlyList[`${currentDate.month}.${id}`].plan,
    });
  };

  //console.log(selectedSchedule);

  const handleChangeModalInput = event => {
    const { value } = event.target;

    setSeletedSchedule({ ...selectedSchedule, plan: value });
  };

  /* 먼슬리로그 CRUD 기능 */
  const handleCreateMonthlyLog = event => {
    const { key } = event;

    if (key === 'Enter') {
      dispatch(createSchedule({ selectedSchedule }));

      setIsDisplayModal(false);
    }
  };

  const handleUpdateMonthlyLog = event => {
    const { key } = event;

    if (key === 'Enter') {
      dispatch(updateSchedule({ selectedSchedule }));

      setIsDisplayModal(false);
    }
  };

  /* 일(Day) 얻는 함수 */
  const getDayShortName = date => {
    const { month } = currentDate;
    const currentYear = new Date().getFullYear();

    const day = new Date(currentYear, month, date).getDay();

    return day;
  };

  /* 세팅 버튼 기능 */
  const handleClickMoveOnBack = () => navigate('/bujolog/index');

  /* 모달 영역 밖 클릭 시 모달창 닫힘 기능 */
  const handleClickOutSide = event => {
    if (isDisplayModal && !modalRef.current.contains(event.target)) {
      setIsDisplayModal(false);
    }
  };

  useEffect(() => {
    if (isDisplayModal)
      document.addEventListener('mousedown', handleClickOutSide);
    return () => {
      document.removeEventListener('mousedown', handleClickOutSide);
    };
  });

  return (
    <MonthlyPresenter
      modalRef={modalRef}
      userMonthlyList={userMonthlyList}
      CREATE_METHOD={CREATE_METHOD}
      MENUAL={MENUAL}
      MONTHNAME={MONTHNAME}
      DAYSHORTNAME={DAYSHORTNAME}
      isDisplayModal={isDisplayModal}
      currentDate={currentDate}
      selectedSchedule={selectedSchedule}
      handleClickPrevMonth={handleClickPrevMonth}
      handleClickNextMileStone={handleClickNextMileStone}
      handleClickSchedule={handleClickSchedule}
      handleChangeModalInput={handleChangeModalInput}
      getDayShortName={getDayShortName}
      handleCreateMonthlyLog={handleCreateMonthlyLog}
      handleUpdateMonthlyLog={handleUpdateMonthlyLog}
      handleClickMoveOnBack={handleClickMoveOnBack}
    />
  );
};

export default MonthlyContainer;
