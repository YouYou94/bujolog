import styled from 'styled-components';

export function CommonLayout({ children }) {
  return <Container>{children}</Container>;
}

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
`;
