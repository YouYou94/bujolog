import styled from 'styled-components';

/* Key */
export const KeyContainer = styled.div`
  flex: 1;
`;

export const KeyWrapper = styled.div`
  height: 3.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 1rem 0;
  padding: 0 3rem;
`;

export const Key = styled.div`
  width: 2rem;
  height: 2rem;

  background-image: url(${prop => prop.icon});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Name = styled.span`
  flex: 1;

  font-family: 'CormorantGaramond';
  font-size: 1.5rem;

  text-align: center;
`;

export const Description = styled.span`
  flex: 1;

  text-align: center;
`;

export const ButtonWrapper = styled.div`
  width: 6rem;
`;

export const Button = styled.button`
  width: 3rem;
`;

export const AddWrapper = styled.div`
  height: 3.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 1rem 0;
`;

export const AddButton = styled.button`
  width: 3rem;
  height: 3rem;

  border-radius: 50%;

  font-family: 'CormorantGaramond';
  font-size: 1.5rem;

  &:hover {
    background-color: rgb(220, 220, 220, 0.8);
    color: black;
  }
`;
