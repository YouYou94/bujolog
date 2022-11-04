import { useNavigate } from 'react-router-dom';
import * as Styled from '../TopBarStyled.jsx';

const StartButton = ({ url }) => {
  const navigate = useNavigate();

  return (
    <Styled.RightContentsButton onClick={() => navigate(`/bujolog/${url}`)}>
      시작하기
    </Styled.RightContentsButton>
  );
};

export default StartButton;
