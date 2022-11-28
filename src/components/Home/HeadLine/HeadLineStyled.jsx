import styled, { keyframes } from 'styled-components';

export const HeadLineBox = styled.div`
  height: 10rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Cursor = keyframes`
  0%{
    border-right: 1px solid #fff;
  }
  25%{
    border-right: 1px solid #000;
  }
  50%{
    border-right: 1px solid #fff;
  }
  75%{
    border-right: 1px solid #000;
  }
  100%{
    border-right: 1px solid #fff;
  } 
`;

export const HeadLine = styled.span`
  animation: ${Cursor} 3s 1s infinite alternate;

  font-family: 'GreatVibes';

  @media screen and (min-width: 64rem) {
    font-size: 5rem;
  }

  @media screen and (max-width: 64rem) {
    font-size: 4rem;
  }

  @media screen and (max-width: 48rem) {
    font-size: 3rem;
  }
`;
