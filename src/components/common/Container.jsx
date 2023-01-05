import styled from 'styled-components';

export const CommonContainer = ({ children }) => {
  return <MainLayout>{children}</MainLayout>;
};

export const WriteContainer = ({ children }) => {
  return <WriteLayout>{children}</WriteLayout>;
};

export const ViewContainer = ({ children }) => {
  return <ViewLayout>{children}</ViewLayout>;
};

/* 추후 반응형 웹 만들기! */
export const MainLayout = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: row;
`;

/* 작성 컨테이너 */
export const WriteLayout = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;

  border-right: 2px solid rgb(204, 204, 204);
  padding: 2rem;
`;

/* 결과 컨테이너 */
export const ViewLayout = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;

  padding: 2rem;

  background-color: rgb(245, 245, 245);
`;
