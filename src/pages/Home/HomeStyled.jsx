import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 3rem;
`;

export const Title = styled.h1`
  height: 10rem;

  color: rgb(245, 245, 245);

  font-family: 'Anton';
  font-size: 7rem;

  text-align: center;

  user-select: none;
`;

export const Text = styled.label`
  font-family: 'Anton';
  font-size: 3rem;

  transition: 0.3s all;

  cursor: pointer;

  &:hover {
    text-decoration: underline;
    font-size: 3.3rem;
  }
`;

export const GuideBox = styled.h2`
  position: relative;

  height: 5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  color: rgb(245, 245, 245);

  text-align: center;
`;

export const GuideText = styled.label`
  position: absolute;

  width: 13rem;

  top: 35%;
  right: -120%;

  font-family: 'GowunDodum';
  font-size: 1rem;

  color: rgb(255, 255, 255);
`;
