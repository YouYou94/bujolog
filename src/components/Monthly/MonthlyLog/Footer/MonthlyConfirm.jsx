import { useNavigate } from 'react-router-dom';
import * as Styled from './FooterStyled.jsx';

const MonthlyConfirm = () => {
  const navigate = useNavigate();

  const goConfirm = () => {
    navigate('/bujolog/mine/daily');
  };

  return <Styled.Button onClick={goConfirm}>확인</Styled.Button>;
};

export default MonthlyConfirm;
