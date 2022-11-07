import { useNavigate } from 'react-router-dom';
import * as Styled from '../../MenuStyled.jsx';

export const MyBujolog = ({ setDisplay }) => {
  const navigate = useNavigate();

  return (
    <Styled.MenuItem
      onClick={() => {
        setDisplay('close');
        navigate('/bujolog/mine');
      }}
    >
      나의 저널
    </Styled.MenuItem>
  );
};
