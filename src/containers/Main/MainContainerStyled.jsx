import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;

  display: flex;

  padding: 3rem 10rem;

  background-color: rgb(245, 246, 247, 0.2);

  @media screen and (max-width: 1440px) {
    padding: 3rem 3rem;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;

    padding: 3rem 10rem;
  }

  @media screen and (max-width: 768px) {
    padding: 3rem 3rem;
  }
`;
