import styled from 'styled-components';

export const Caption = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid rgb(220, 220, 220);

  background-color: rgb(245, 246, 247, 0.2);

  @media screen and (min-width: 1024px) {
    flex: 1;

    flex-direction: column;
  }

  @media screen and (max-width: 1024px) {
    height: 3rem;
  }
`;

export const Contents = styled.div`
  flex: 1;

  display: flex;

  border: 1px solid rgb(220, 220, 220);

  background-color: rgb(245, 246, 247, 0.2);
`;
