import { nanoid } from '@reduxjs/toolkit';
import { useContext, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  checkScheduled,
  delSceduled,
} from '../../../../store/modules/MonthlyModuls.jsx';
import { MonthlyContext } from '../../../../pages/MonthlyLogPage.jsx';
import * as Styled from './SectionStyled.jsx';

const ScheduleValue = state => {
  if (state !== undefined) return state.schedule;
  else return '';
};

const DayFullName = day => {
  switch (day) {
    case 0:
      return 'S';
    case 1:
      return 'M';
    case 2:
      return 'T';
    case 3:
      return 'W';
    case 4:
      return 'T';
    case 5:
      return 'F';
    case 6:
      return 'S';
    default:
      break;
  }
};

const IsDelete = state => {
  if (state !== undefined && state.schedule !== '') return true;
  else return false;
};

const MonthCalendar = () => {
  const ref = useRef();
  const dispatch = useDispatch();
  const scheduleState = useSelector(state => state.monthly);
  const {
    currentYear,
    currentMonth,
    isTool,
    setIsTool,
    clickDate,
    setClickDate,
  } = useContext(MonthlyContext);
  const currentEndDate = new Date(currentYear, currentMonth + 1, 0).getDate();
  const currentCalendar = [];

  const onThisLogShow = event => {
    const date = event.currentTarget.id;

    dispatch(checkScheduled({ month: currentMonth, date: date }));
    setClickDate(date);

    if (event.target.innerText !== '삭제') setIsTool(!isTool);
  };

  const onDeleteSchedule = event => {
    const date = event.currentTarget.id;

    dispatch(delSceduled({ month: currentMonth, date: date }));
  };

  for (let i = 1; i <= currentEndDate; i++) {
    const date = new Date(currentYear, currentMonth, i).getDate();
    const schedule = ScheduleValue(scheduleState[currentMonth][`${date}`]);

    const isDel = IsDelete(scheduleState[currentMonth][`${date}`]);

    let day = DayFullName(new Date(currentYear, currentMonth, i).getDay());

    currentCalendar.push(
      <Styled.CalendarItemContainer
        key={nanoid()}
        onClick={onThisLogShow}
        id={date}
        isFocus={Number(clickDate) === date ? true : false}
      >
        <Styled.Date>{date}</Styled.Date>
        <Styled.Day>{day}</Styled.Day>
        <Styled.Text>{schedule}</Styled.Text>
        {isDel ? (
          <Styled.DelButton onClick={onDeleteSchedule} id={date} ref={ref}>
            삭제
          </Styled.DelButton>
        ) : (
          ''
        )}
      </Styled.CalendarItemContainer>
    );

    if (i === currentEndDate && i < 31)
      for (let i = currentEndDate; i < 31; i++)
        currentCalendar.push(
          <Styled.CalendarItemContainer key={nanoid()} isDisable={true} />
        );
  }

  return <>{currentCalendar}</>;
};

export default MonthCalendar;
