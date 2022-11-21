import styled from 'styled-components';

/* Default Page */
export const Caption = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-right: 1px solid rgb(220, 220, 220);

  @media screen and (min-width: 1024px) {
    flex: 1;

    flex-direction: column;
  }

  @media screen and (max-width: 1024px) {
    height: 5rem;
  }
`;

export const Contents = styled.div`
  position: relative;

  flex: 1;

  display: flex;

  background-color: rgb(251, 253, 252);
`;

/* Log Page */
export const LeftLogPage = styled.div`
  flex: 1;

  display: flex;

  border-right: 1px solid rgb(220, 220, 220);
`;

export const RightLogPage = styled.div`
  flex: 1;

  display: flex;

  background-color: rgb(251, 253, 252);
`;
