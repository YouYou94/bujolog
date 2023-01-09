import { useState } from 'react';
import { CommonLayout, EnrolUser } from '../../components';
import { Container, GuideBox, Title, Text, GuideText } from './HomeStyled.jsx';

export function Home() {
  const [isChange, setIsChange] = useState(false);

  return (
    <CommonLayout>
      <Container>
        <Title>BUJOLOG</Title>
        {isChange ? (
          <EnrolUser />
        ) : (
          <GuideBox>
            <Text onClick={() => setIsChange(true)}>Click Me</Text>
            <GuideText>← 여기를 클릭해주세요.</GuideText>
          </GuideBox>
        )}
      </Container>
    </CommonLayout>
  );
}
