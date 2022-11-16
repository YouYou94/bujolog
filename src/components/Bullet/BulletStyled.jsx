import styled from 'styled-components';

/*
  Left
*/
/* Title */
export const Title = styled.h1`
  height: 10rem;

  padding: 3rem 2rem 0 2rem;

  font-family: 'CormorantGaramond';
  font-size: 3.5rem;

  border-bottom: 3px solid rgb(220, 220, 220);

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
    background-color: rgb(255, 211, 117, 0.1);
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
  height: 100vh;

  display: flex-block;
  flex-direction: column;

  border-bottom: 3px solid rgb(220, 220, 220);

  overflow: hidden;
`;

export const SelectTitle = styled.h1`
  height: 10rem;

  font-family: 'CormorantGaramond';
  font-size: 3.5rem;

  padding: 3rem 2rem 0 2rem;
  border-bottom: 3px solid rgb(220, 220, 220);

  text-align: center;

  user-select: none;
`;

export const Wrapper = styled.div`
  height: 73vh;

  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const BulletList = styled.div`
  height: 5rem;

  display: flex;
  flex-direction: row;
  align-items: center;

  margin: 0.5rem 0;
  padding: 1rem 1rem;

  border-top: 1px solid rgb(220, 220, 220);
  border-bottom: 1px solid rgb(220, 220, 220);
`;

export const Icon = styled.div`
  width: 2rem;
  height: 2rem;

  background-image: url(${prop => prop.icon});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Name = styled.span`
  flex: 1;

  text-align: center;
`;

export const Description = styled.span`
  flex: 1;

  text-align: center;
`;

export const DeleteButton = styled.button`
  width: 3rem;
  height: 3rem;

  &:hover {
    background-color: rgb(255, 211, 117, 0.1);
  }
`;

export const AddWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
`;

export const Add = styled.div`
  width: 3rem;
  height: 3rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid rgb(220, 220, 220);
  border-radius: 50%;
  padding-bottom: 0.5rem;

  font-size: 2rem;

  color: rgb(220, 220, 220);

  cursor: pointer;

  &:hover {
    color: black;
    border: 1px solid black;
  }
`;

/* Setting */
export const SettingWrapper = styled.div`
  height: 5rem;

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
