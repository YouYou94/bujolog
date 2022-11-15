import styled from 'styled-components';

export const Container = styled.div`
  min-width: 30rem;

  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-bottom: 15rem;
`;

export const NotFoundWrapper = styled.div`
  margin: 1rem 0;
  padding: 0 3rem;

  text-align: ${prop => (prop.center ? 'center' : '')};
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
  font-size: 1.2rem;
`;

export const NotFoundButton = styled.button`
  width: 20rem;
  height: 2rem;
`;
