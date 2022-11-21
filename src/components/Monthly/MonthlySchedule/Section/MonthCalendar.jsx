import { nanoid } from '@reduxjs/toolkit';
import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkScheduled } from '../../../../store/modules/MonthlyModuls.jsx';
import { MonthlyContext } from '../../../../pages/MonthlyLogPage.jsx';
import * as Styled from './SectionStyled.jsx';

const MonthCalendar = () => {
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
    setIsTool(!isTool);
  };

  for (let i = 1; i <= currentEndDate; i++) {
    const date = new Date(currentYear, currentMonth, i).getDate();
    const schedule =
      scheduleState[currentMonth][`${date}`] !== undefined
        ? scheduleState[currentMonth][`${date}`].schedule
        : '';
    let day = '';

    switch (new Date(currentYear, currentMonth, i).getDay()) {
      case 0:
        day = 'S';
        break;
      case 1:
        day = 'M';
        break;
      case 2:
        day = 'T';
        break;
      case 3:
        day = 'W';
        break;
      case 4:
        day = 'T';
        break;
      case 5:
        day = 'F';
        break;
      case 6:
        day = 'S';
        break;
      default:
        break;
    }

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
