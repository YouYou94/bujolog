import { useNavigate } from 'react-router-dom';
import IndexPresenter from './IndexPresenter';

const IndexContainer = () => {
  const navigate = useNavigate();

  const handleMoveKeySetting = () => navigate('/bujolog/keysetting');

  const handleMoveMonthlyLog = () => navigate('/bujolog/monthlylog');

  const handleMoveDailyLog = () => navigate('/bujolog/dailylog');

  const handleMoveMoodTracker = () => navigate('/bujolog/moodtracker');

  return (
    <IndexPresenter
      handleMoveKeySetting={handleMoveKeySetting}
      handleMoveMonthlyLog={handleMoveMonthlyLog}
      handleMoveDailyLog={handleMoveDailyLog}
      handleMoveMoodTracker={handleMoveMoodTracker}
    />
  );
};

export default IndexContainer;
