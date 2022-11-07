import MyBujo from './MenuItem/MyBujo.jsx';
import * as Styled from '../../../styled/NavContentsStyled.jsx';

// 로그인 여부 확인하기!
const Menu = () => {
  return (
    <Styled.MenuContainer>
      <MyBujo />
    </Styled.MenuContainer>
  );
};

export default Menu;
