import { useEffect, useState } from 'react';
import { Container, Title, CaptionBox, Caption } from './MenualStyled';

export function KeySettingMenual() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    if (count === 5) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  });

  return (
    <Container>
      <Title>KEY SETTING</Title>
      <CaptionBox>
        {count >= 0 ? (
          <Caption>── 이곳을 불렛저널 키를 세팅하는 페이지입니다.</Caption>
        ) : (
          <></>
        )}
        {count >= 1 ? (
          <Caption>── 1. 원하는 아이콘을 선택하세요.</Caption>
        ) : (
          <></>
        )}
        {count >= 2 ? (
          <Caption>── 2. 자신만의 규칙을 작성하세요.</Caption>
        ) : (
          <></>
        )}
        {count >= 3 ? (
          <Caption>── 3. 저장하기를 클릭하여 설정을 완료하세요.</Caption>
        ) : (
          <></>
        )}
        {count >= 4 ? (
          <Caption>── 4. 자신만의 커스텀 키를 만들어보세요.</Caption>
        ) : (
          <></>
        )}
        {count >= 5 ? <Caption optional={'CLICK'}>CLICK ME</Caption> : <></>}
      </CaptionBox>
    </Container>
  );
}
