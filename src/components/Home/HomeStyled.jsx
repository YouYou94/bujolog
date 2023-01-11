import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 3rem;
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

export const EnrolBox = styled.div`
  width: 414px;
  height: 5rem;

  display: flex;
  flex-direction: column;
`;

export const UserInput = styled.input`
  width: 414px;
  height: 3rem;

  border: none;
  border-bottom: 1px solid white;
  padding: 0 1rem;

  font-family: 'GowunDodum';
  font-size: 1.4rem;

  background-color: transparent;
  color: white;

  outline: none;

  &::placeholder {
    color: rgb(245, 245, 245);
  }
`;

export const ValidLabel = styled.label`
  width: 414px;
  height: 1rem;

  font-family: 'GowunDodum';
  font-size: 1.2rem;

  color: rgb(255, 84, 84);
`;
