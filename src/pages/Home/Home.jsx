import { useContext } from 'react';
import { AuthContext } from '../../App.js';
import Auth from '../../components/Home/Auth/Layout/Auth.jsx';
import Cover from '../../components/Home/Cover/Cover.jsx';
import HeadLine from '../../components/Home/HeadLine/HeadLine.jsx';
import * as Styled from './HomeStyled.jsx';

const Home = () => {
  const { isLogin } = useContext(AuthContext);
  return (
    <Styled.Layout>
      <HeadLine />
      {isLogin ? <Cover /> : <Auth />}
    </Styled.Layout>
  );
};

export default Home;
