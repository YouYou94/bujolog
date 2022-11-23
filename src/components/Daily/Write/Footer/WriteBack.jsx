import { useNavigate } from 'react-router-dom';
import * as Styled from './WriteFooterStyled.jsx';

const WriteBack = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return <Styled.Button onClick={goBack}>이전</Styled.Button>;
};

export default WriteBack;
