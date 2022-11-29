import styled from 'styled-components';

export const IndexLayout = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;

  padding: 2rem;
`;

export const IndexTitle = styled.h2`
  font-family: 'CormorantGaramond';
  font-size: 2rem;
`;

export const SetupBox = styled.div`
  margin: 1rem 0;
  padding: 1rem 1rem;
  border-bottom: 1px solid rgb(220, 220, 220);

  font-family: 'CormorantGaramond';
  font-size: 1.3rem;

  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
