import { useNavigate } from 'react-router-dom';
import * as Styled from '../../MenuStyled.jsx';

export const BujologHome = ({ setDisplay }) => {
  const navigate = useNavigate();

  return (
    <Styled.MenuItem
      onClick={() => {
        setDisplay('close');
        navigate('/bujolog');
      }}
    >
      Bujo-log 홈
    </Styled.MenuItem>
  );
};
