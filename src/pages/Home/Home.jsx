import Auth from '../../components/Home/Auth/Layout/Auth.jsx';
import HeadLine from '../../components/Home/HeadLine/HeadLine.jsx';
import * as Styled from './HomeStyled.jsx';

const Home = () => {
  return (
    <Styled.Layout>
      <HeadLine />
      <Auth />
    </Styled.Layout>
  );
};

export default Home;
