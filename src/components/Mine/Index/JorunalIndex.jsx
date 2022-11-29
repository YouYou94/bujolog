import { useNavigate } from 'react-router-dom';
import * as Styled from './IndexStyled.jsx';

const JournalIndex = () => {
  const navigate = useNavigate();

  const handleOnClickGoBullet = () => navigate('bullet');

  const handleOnClickGoMonthly = () => navigate('monthly');

  const handleOnClickGoDaily = () => navigate('daily');
  return (
    <Styled.IndexLayout>
      <Styled.IndexTitle>Index</Styled.IndexTitle>
      <Styled.SetupBox title="키 설정하기" onClick={handleOnClickGoBullet}>
        Key Setting
      </Styled.SetupBox>
      <Styled.SetupBox
        title="먼슬리 로그 작성하기"
        onClick={handleOnClickGoMonthly}
      >
        Monthly Log
      </Styled.SetupBox>
      <Styled.SetupBox
        title="데일리 로그 작성하기"
        onClick={handleOnClickGoDaily}
      >
        Daily Log
      </Styled.SetupBox>
    </Styled.IndexLayout>
  );
};

export default JournalIndex;
