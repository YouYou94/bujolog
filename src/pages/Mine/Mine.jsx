import Profile from '../../components/Mine/Profile/Profile.jsx';
import Title from '../../components/Mine/Title/Title.jsx';
import * as Styled from './MineStyled.jsx';

const Mine = () => {
  return (
    <Styled.Layout>
      <Title />
      <Profile />
    </Styled.Layout>
  );
};

export default Mine;
