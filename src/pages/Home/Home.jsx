import { CommonLayout } from '../../components';
import { Container, GuideBox, Title, Text, GuideText } from './HomeStyled.jsx';

export function Home() {
  return (
    <CommonLayout>
      <Container>
        <Title>BUJOLOG</Title>
        <GuideBox>
          <Text>Click Me</Text>
          <GuideText>← 여기를 클릭해주세요.</GuideText>
        </GuideBox>
      </Container>
    </CommonLayout>
  );
}
