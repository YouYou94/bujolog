import styled, { keyframes } from 'styled-components';
import HomeImage from '../../img/Background/HomeImage.jpg';

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

  background-image: url(${HomeImage});
  background-color: rgb(0, 0, 0, 0.65);
  background-blend-mode: multiply;
  background-repeat: no-repeat;
  background-size: cover;

  color: rgb(245, 245, 245);

  gap: 3rem;
`;

export const Title = styled.h1`
  font-family: 'Anton';
  font-size: 5rem;

  user-select: none;
`;

export const CaptionBox = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2rem;
`;

export const Caption = styled.label`
  height: 4rem;
  font-family: 'GowunDodum';
  font-size: 2rem;

  animation: ${FadeIn} 1.5s ease-in-out;

  ${prop =>
    prop.optional === 'CLICK'
      ? 'text-align: right; font-size: 3rem; font-family: Anton; font-style:italic; transition: .3s all; cursor:pointer; &:hover {padding-right: .9rem;}'
      : ''}
`;
