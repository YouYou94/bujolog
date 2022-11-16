import styled from 'styled-components';

/*
  Left
*/
/* Title */
export const Title = styled.h1`
  height: 15%;

  padding: 3rem 2rem 0 2rem;

  font-family: 'CormorantGaramond';
  font-size: 3.5rem;

  border-bottom: 1px solid rgb(220, 220, 220);

  text-align: center;

  user-select: none;
`;

/* Option */
export const OptionWrapper = styled.div`
  flex: 1;

  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;

  padding: 2rem;
`;

export const Option = styled.div`
  min-width: 4rem;
  min-height: 4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 1rem;
  border: 1px solid rgb(220, 220, 220);
  border-radius: 1.5rem;

  background-color: white;

  cursor: pointer;

  &:hover {
    background-color: rgb(255, 211, 117, 0.2);
  }
`;

export const OptionItem = styled.div`
  width: 50%;
  height: 50%;

  background-image: url(${prop => prop.icon});
  background-repeat: no-repeat;
  background-size: cover;
`;

/*
  Right
*/
/* Select */
export const SelectWrapper = styled.div`
  flex: 1;

  border-bottom: 1px solid rgb(220, 220, 220);
`;

/* Setting */
export const SettingWrapper = styled.div`
  height: 10%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  width: 10rem;
  height: 2.5rem;

  margin: 0 1rem;

  font-size: 1.2rem;
`;
