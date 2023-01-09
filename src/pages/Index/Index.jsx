import { useNavigate } from 'react-router-dom';
import { BackgroundLayout } from '../../components';
import {
  Container,
  Header,
  Title,
  IndexBox,
  IndexAccordion,
  IndexItem,
} from './IndexStyled';

export function Index() {
  const navigate = useNavigate();

  return (
    <BackgroundLayout>
      <Container>
        <Header>
          <Title>INDEX.</Title>
        </Header>
        <IndexBox>
          <IndexAccordion>
            <IndexItem onClick={() => navigate('/bujolog/bullet')}>
              ─ BULLET KEY SETTING
            </IndexItem>
            <IndexItem onClick={() => navigate('/bujolog/monthly')}>
              ─ MONTHLY LOG
            </IndexItem>
            <IndexItem onClick={() => navigate('/bujolog/daily')}>
              ─ DAILY LOG
            </IndexItem>
            <IndexItem>─ MOOD TRACKER</IndexItem>
          </IndexAccordion>
        </IndexBox>
      </Container>
    </BackgroundLayout>
  );
}
