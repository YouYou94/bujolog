import TopBarHome from '../../components/TopBar/TopBarHome.jsx';
import TopBarTitle from '../../components/TopBar/TopBarTitle.jsx';
import TopBarNotice from '../../components/TopBar/TopBarNotice.jsx';
import * as Styled from './TopBarContainerStyled.jsx';

const TopBar = () => {
  return (
    <Styled.Container>
      <TopBarHome />
      <TopBarTitle />
      <TopBarNotice />
    </Styled.Container>
  );
};

export default TopBar;
