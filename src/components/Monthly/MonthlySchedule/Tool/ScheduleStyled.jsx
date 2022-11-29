import styled from 'styled-components';

export const ToolContainer = styled.div`
  position: absolute;

  width: 100%;
  height: 6rem;

  display: flex;
  justify-content: center;
  align-items: center;

  ${prop => (prop.using ? 'top: 0;' : 'top:-6rem;')}

  border-bottom: 1px solid rgb(220, 220, 220);

  background-color: white;

  transition: all 0.35s;
`;

export const ToolInput = styled.input`
  width: 20rem;
  height: 2rem;

  margin: 0 1rem;

  font-family: 'GowunDodum';

  outline: none;
`;

export const ToolButton = styled.button`
  width: 5rem;
  height: 2rem;

  border: 2px solid rgb(220, 220, 220);
  border-radius: 0.5rem;

  background-color: transparent;

  font-family: 'GowunDodum';
  color: rgb(20, 20, 20);

  &:hover {
    border: 2px solid black;
    color: black;
  }
`;
