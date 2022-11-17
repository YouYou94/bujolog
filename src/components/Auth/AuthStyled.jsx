import styled from 'styled-components';

/* Caption */
export const Caption = styled.h1`
  font-family: 'GreatVibes';

  @media screen and (min-width: 1024px) {
    font-size: 5rem;

    margin: 1rem 0;
  }

  @media screen and (max-width: 1024px) {
    font-size: 2rem;

    margin: 0 1rem;
  }
`;

/* Login */

export const LoginWrapper = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoginButton = styled.button`
  width: 25rem;
  height: 3rem;

  margin: 0.5rem 0;
  border-radius: 0;

  color: white;
  background-color: ${prop => prop.color};

  &:hover {
    color: white;
  }
`;
