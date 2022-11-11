import MakeStartButton from '../MakeStart/MakeStartButton.jsx';
import MakeStartNotice from '../MakeStart/MakeStartNotice.jsx';
import * as Styled from './ContainerStyled.jsx';

const MakeStartContainer = () => {
  return (
    <Styled.JournalMakingContainer>
      <MakeStartNotice />
      <MakeStartButton />
    </Styled.JournalMakingContainer>
  );
};

export default MakeStartContainer;
