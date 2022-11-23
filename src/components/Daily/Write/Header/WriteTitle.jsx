import { Today } from '../WriteContainer.jsx';
import * as Styled from './WriteHeaderStyled.jsx';

const DayFormula = day => {
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
      return '';
  }
};

const WriteHeader = () => {
  const title = `${Today.getMonth() + 1}.${Today.getDate()} ${DayFormula(
    Today.getDay()
  )}`;

  return <Styled.WriteTitle>{title}</Styled.WriteTitle>;
};

export default WriteHeader;
