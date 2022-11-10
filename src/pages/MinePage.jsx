// Constants
import { NEWBIE } from '../Constants.jsx';

// User Components
import NewbieMessage from '../components/Mine/NewbieMessage.jsx';

//Redux
import { useSelector } from 'react-redux';

// styled-components
import * as Styled from './PageStyled.jsx';

const MinePage = () => {
  const journalIs = useSelector(state => state.jourReducer.is);

  return (
    <Styled.PageContainer>
      {journalIs === NEWBIE ? <NewbieMessage /> : <></>}
    </Styled.PageContainer>
  );
};

export default MinePage;
