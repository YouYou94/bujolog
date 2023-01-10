import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 10rem;

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
  font-family: 'GowunDodum';
  font-size: 2rem;
`;
