import { useState } from 'react';

// Containers
import AuthHeader from './AuthHeader.jsx';
import AuthSection from './AuthSection.jsx';
import AuthFooter from './AuthFooter.jsx';

// styled-components
import * as Styled from './AuthContainerStyled.jsx';

const AuthContainer = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  return (
    <Styled.Container>
      <AuthHeader />
      <AuthSection id={id} pw={pw} setId={setId} setPw={setPw} />
      <AuthFooter />
    </Styled.Container>
  );
};

export default AuthContainer;
