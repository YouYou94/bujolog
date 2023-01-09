import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CommonLayout, EnrolUser } from '../../components';
import { Container, GuideBox, Title, Text, GuideText } from './HomeStyled.jsx';

export function Home() {
  const navigate = useNavigate();
  const [isChange, setIsChange] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('user')) navigate('/bujolog/index');
  }, []);

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
