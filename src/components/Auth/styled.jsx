import styled from 'styled-components';

export const AuthPageTitle = styled.div`
  margin-bottom: 3rem;

  font-family: 'CormorantGaramond';
  font-size: 3rem;

  cursor: pointer;
`;

export const AuthSocialLoginButton = styled.button`
  width: 25rem;
  height: 2.5rem;

  margin: 0.5rem 0;
  border: none;

  color: white;
  background-color: ${prop => prop.color};

  font-size: 1.3rem;

  cursor: pointer;
`;
