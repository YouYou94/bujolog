import styled from 'styled-components';

export function SetupTemplate({ children }) {
  return <SetupContainer>{children}</SetupContainer>;
}

export function SetupArticle({ children }) {
  return <ArticleContainer>{children}</ArticleContainer>;
}

export function SetupFooter({ children }) {
  return <FooterContainer>{children}</FooterContainer>;
}

export const SetupContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;

  border-left: 1px solid rgb(204, 204, 204);

  background-color: rgb(245, 245, 245);
`;

export const ArticleContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;

  padding: 1rem;
`;

export const FooterContainer = styled.div`
  height: 5rem;

  display: flex;
  justify-content: space-between;

  padding: 0 1rem;
`;
