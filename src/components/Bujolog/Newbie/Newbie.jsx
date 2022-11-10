// Newbie Components
import Manual from './Manual/Manual.jsx';

// styled-components
import * as Styled from './NewbieStyled.jsx';

const Newbie = () => {
  return (
    <Styled.NewbieContainer>
      <Manual />
    </Styled.NewbieContainer>
  );
};

export default Newbie;
