import { ImageLayout, Title } from '../index';
import * as Styled from './IndexStyled';

const IndexPresenter = ({
  handleMoveKeySetting,
  handleMoveMonthlyLog,
  handleMoveDailyLog,
  handleMoveMoodTracker,
}) => {
  return (
    <ImageLayout isFull={true}>
      <Styled.Container>
        <Styled.Header>
          <Title width={25} size={7} color={'rgb(245,245,245)'} isShadow={true}>
            INDEX.
          </Title>
        </Styled.Header>
        <Styled.IndexBox>
          <Styled.IndexMenu>
            <Styled.IndexItem onClick={handleMoveKeySetting}>
              ─ BULLET KEY SETTING
            </Styled.IndexItem>
            <Styled.IndexItem onClick={handleMoveMonthlyLog}>
              ─ MONTHLY LOG
            </Styled.IndexItem>
            <Styled.IndexItem onClick={handleMoveDailyLog}>
              ─ DAILY LOG
            </Styled.IndexItem>
            <Styled.IndexItem onClick={handleMoveMoodTracker}>
              ─ MOOD TRACKER
            </Styled.IndexItem>
          </Styled.IndexMenu>
        </Styled.IndexBox>
      </Styled.Container>
    </ImageLayout>
  );
};

export default IndexPresenter;
