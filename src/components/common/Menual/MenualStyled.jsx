import styled, { keyframes } from 'styled-components';

const FadeIn = keyframes`
from {
  opacity: 0;
  transform: translateY(3rem);
}
to{
  opacity: 1;
  transform: none;
}`;

export const Container = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 10rem;

  color: rgb(245, 245, 245);

  gap: 2rem;
`;

export const Title = styled.h1`
  font-family: 'Anton';
  font-size: 5rem;
`;

export const CaptionBox = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2rem;
`;

export const Caption = styled.label`
  height: 4rem;
  font-family: 'GowunDodum';
  font-size: 1.6rem;

  animation: ${FadeIn} 1.5s ease-in-out;
`;
