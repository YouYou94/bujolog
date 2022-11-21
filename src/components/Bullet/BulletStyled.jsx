import styled from 'styled-components';

/* Caption */
export const Caption = styled.h1`
  font-family: 'GreatVibes';

  @media screen and (min-width: 1024px) {
    font-size: 5rem;
  }

  @media screen and (max-width: 1024px) {
    font-size: 2rem;

    margin: 0 1rem;
    padding-top: 1rem;
  }
`;

export const SubCaption = styled.h1`
  font-family: 'GowunDodum';
  font-size: 1.5rem;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

/* Bullet Contents */
export const ContentsContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
`;

export const BulletContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;

  overflow: hidden;
`;

export const ButtonContainer = styled.div`
  height: 4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-top: 1px solid rgb(220, 220, 220);

  background-color: white;
`;

// 반응형 웹 필요
// 1. 툴 메뉴에 X 버튼 생성하기
// 2. 아이콘 전부 다 줄이기
// 3. 인풋 전부 다 줄이기
// 4. 버튼 전부 다 줄이기
