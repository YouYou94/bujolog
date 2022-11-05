import styled from 'styled-components';

export const PageContainer = styled.div`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 15rem;

  @media screen and (max-width: 768px) {
    margin: 0 1rem;
  }
`;

/* Auth Page */
export const AuthContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-bottom: 10rem;
`;
