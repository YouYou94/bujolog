import { useNavigate } from 'react-router-dom';
import * as Styled from '../TopBarStyled.jsx';

// 바꾸기
const StartButton = () => {
  const navigate = useNavigate();

  return (
    <Styled.RightContentsButton onClick={() => navigate('/bujolog/mine')}>
      시작하기
    </Styled.RightContentsButton>
  );
};

export default StartButton;
