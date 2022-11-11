import styled from 'styled-components';

export const PageContainer = styled.div`
  flex: 1;

  display: flex;
  justify-content: center;

  margin: 0 10rem;

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

/* Not Found Page */
export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const NotFoundTitle = styled.div`
  margin-bottom: 2rem;

  font-family: 'CormorantGaramond';
  font-size: 4rem;

  cursor: pointer;
`;

export const NotFoundSubTitle = styled.div`
  margin: 0 0 0.5rem 1rem;

  font-family: 'GowunDodum';
  font-size: 1.5rem;
`;

export const NotFoundExplanation = styled.div`
  margin: 0 0 0.3rem 1rem;

  font-family: 'GowunDodum';
  font-size: 1.1rem;
`;

export const NotFoundWrapper = styled.div`
  margin: 2rem 0;
  padding: 0 3rem;

  text-align: ${prop => (prop.center ? 'center' : '')};
`;

export const NotFoundButton = styled.button`
  width: 25rem;
  height: 2rem;

  border: 1px solid gray;
  border-radius: 2rem;

  font-family: 'GowunDodum';
  font-size: 1rem;

  color: black;
  background-color: white;

  cursor: pointer;

  &:hover {
    color: gray;
  }
`;

/* Mine Page */
export const MinePageContainer = styled.div`
  height: 100%;

  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;
`;

/* Make Page */
export const MakePageContainer = styled.div`
  flex: 1;
`;
