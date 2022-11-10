import { useNavigate } from 'react-router-dom';
import * as Styled from '../NewbieStyled.jsx';

const ManualButton = () => {
  const navigate = useNavigate();

  return (
    <Styled.ManualWrap>
      <Styled.ManualButton onClick={() => navigate('/make')}>
        시작하기
      </Styled.ManualButton>
    </Styled.ManualWrap>
  );
};

export default ManualButton;
