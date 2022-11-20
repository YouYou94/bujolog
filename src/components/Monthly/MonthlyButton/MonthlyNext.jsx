import { useNavigate } from 'react-router-dom';
import * as Styled from './MonthlyButtonStyled.jsx';

const MonthlyNext = () => {
  const navigate = useNavigate();

  const next = () => {
    navigate('/bujolog/mine/weekly');
  };

  return <Styled.Button onClick={next}>다음</Styled.Button>;
};

export default MonthlyNext;
