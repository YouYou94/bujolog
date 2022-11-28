import styled from 'styled-components';

export const Layout = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
`;

export const AuthBox = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AuthCaption = styled.span`
  margin-top: 7rem;
  margin-bottom: 2rem;

  font-family: 'CormorantGaramond';

  @media screen and (min-width: 64rem) {
    font-size: 3rem;
  }

  @media screen and (max-width: 64rem) {
    font-size: 2rem;
  }

  @media screen and (max-width: 48rem) {
  }
`;
