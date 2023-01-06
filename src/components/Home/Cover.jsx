/*
    커버 페이지
*/

import { Container, CoverTitle, CoverCaption } from './Styled';

export function Cover() {
  return (
    <Container>
      <CoverTitle>Bullet Journal</CoverTitle>
      <CoverCaption>불렛저널로그</CoverCaption>
      <CoverCaption>자신만의 불렛을 설정하고</CoverCaption>
      <CoverCaption>저널을 작성해보세요</CoverCaption>
    </Container>
  );
}
