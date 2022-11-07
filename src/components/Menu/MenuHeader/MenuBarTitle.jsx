import { useNavigate } from 'react-router-dom';
import * as Styled from '../MenuStyled.jsx';

const MenuBarTitle = () => {
  const navigate = useNavigate();

  return (
    <Styled.MenuBarTitle
      onClick={() => {
        navigate('/bujolog');
      }}
    >
      Bujo-log
    </Styled.MenuBarTitle>
  );
};

export default MenuBarTitle;
