import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BackgroundLayout, EnrolUser } from '../../components';
import {
  Container,
  GuideBox,
  Title,
  Text,
  GuideText,
} from './HomePageStyled.jsx';

export function HomePage() {
  const navigate = useNavigate();
  const [isChange, setIsChange] = useState(false);

  const onHandlerClickText = () => {
    const user = localStorage.getItem('user');

    if (!user) setIsChange(true);
    else navigate('/bujolog/index');
  };

  return (
    <BackgroundLayout>
      <Container>
        <Title>BUJOLOG</Title>
        {isChange ? (
          <EnrolUser setIsChange={setIsChange} />
        ) : (
          <GuideBox>
            <Text onClick={onHandlerClickText}>Click Me</Text>
            <GuideText>← 여기를 클릭해주세요.</GuideText>
          </GuideBox>
        )}
      </Container>
    </BackgroundLayout>
  );
}
