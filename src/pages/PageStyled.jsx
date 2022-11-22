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

  @media screen and (max-width: 1024px) {
    position: absolute;

    width: 100%;
    height: 100%;

    right: ${prop => (prop.isTransform ? '0' : '-100%')};

    transition: all 0.35s;
  }
`;

export const PageTransform = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    width: 6rem;
    height: 2rem;

    top: 50%;
    ${prop => (prop.isTransform ? 'left:-4rem;' : 'right:-4rem;')}

    position: absolute;

    display: flex;
    justify-content: center;
    align-items: center;

    border: 2px solid rgb(220, 220, 220);
    border-radius: 2rem;

    font-family: 'CormorantGaramond';
    font-size: 1.2rem;

    background-color: white;
    color: rgb(220, 220, 220);

    cursor: pointer;

    transition: all 0.35s;

    &:hover {
      ${prop => (prop.isTransform ? 'left:0;' : 'right:0;')}

      border: 2px solid rgb(150, 150, 150);
      color: black;
    }
  }
`;
