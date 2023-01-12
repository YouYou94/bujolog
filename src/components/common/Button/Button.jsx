import styled from 'styled-components';

export function SettingButton({ children, handler }) {
  return <SettingBtn onClick={handler}>{children}</SettingBtn>;
}

export const SettingBtn = styled.button`
  width: 7rem;
  height: 3rem;

  border: none;
  border-radius: 0.5rem;

  font-family: 'GowunDodum';
  font-size: 1.5rem;

  background-color: transparent;

  &:hover {
    background-color: rgb(180, 200, 187);
  }
`;
