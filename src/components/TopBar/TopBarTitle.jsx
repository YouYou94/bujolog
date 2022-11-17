import { useContext } from 'react';
import { MyContext } from '../../App.js';
import * as Styled from './TopBarComponentStyled.jsx';

const TopBarTitle = () => {
  const isLogin = useContext(MyContext).isLogin;
  const user = useContext(MyContext).user;

  return (
    <>
      {isLogin ? (
        <Styled.Name>{user.name}`s 저널 로그</Styled.Name>
      ) : (
        <Styled.Title>BuJo-log</Styled.Title>
      )}
    </>
  );
};

export default TopBarTitle;
