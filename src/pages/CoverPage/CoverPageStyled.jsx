import styled from 'styled-components';

export const Caption = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid rgb(220, 220, 220);

  @media screen and (min-width: 1024px) {
    flex: 1;

    flex-direction: column;
  }

  @media screen and (max-width: 1024px) {
    height: 4rem;
  }
`;

export const Contents = styled.div`
  flex: 1;

  border: 1px solid rgb(220, 220, 220);
`;