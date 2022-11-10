// Constants
import { NEWBIE } from '../Constants.jsx';

// User Components
import Newbie from '../components/Bujolog/Newbie/Newbie.jsx';
import Oldbie from '../components/Bujolog/Oldbie/Oldbie.jsx';

//Redux
import { useSelector } from 'react-redux';

// styled-components
import * as Styled from './PageStyled.jsx';

const MinePage = () => {
  const userIs = useSelector(state => state.jourReducer.is);

  return (
    <Styled.PageContainer>
      <Styled.MinePageContainer>
        {userIs === NEWBIE ? <Newbie /> : <Oldbie />}
      </Styled.MinePageContainer>
    </Styled.PageContainer>
  );
};

export default MinePage;
