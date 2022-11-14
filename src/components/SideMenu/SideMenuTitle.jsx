import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { close } from '../../store/modules/SideMenuModule.jsx';
import * as Styled from './SideMenuStyled.jsx';

const SideMenuTitle = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goHome = () => {
    dispatch(close());
    navigate('/bujolog');
  };
  return <Styled.Title onClick={goHome}>Bujo-log</Styled.Title>;
};

export default SideMenuTitle;
