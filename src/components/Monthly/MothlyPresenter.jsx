import { ImageLayout, Menual, ButtonBox, SettingButton } from '../index';
import * as Styled from './MonthlyStyled';

const MonthlyPresenter = ({
  modalRef,
  userMonthlyList,
  CREATE_METHOD,
  MENUAL,
  MONTHNAME,
  DAYSHORTNAME,
  isDisplayModal,
  currentDate,
  selectedSchedule,
  handleClickPrevMonth,
  handleClickNextMileStone,
  handleClickSchedule,
  handleChangeModalInput,
  getDayShortName,
  handleCreateMonthlyLog,
  handleUpdateMonthlyLog,
  handleClickMoveOnBack,
}) => {
  return (
    <ImageLayout>
      <Menual title={MENUAL.title} captionList={MENUAL.captionList} />
      <Styled.Container>
        <Styled.ScheduleBox>
          <Styled.ScheduleHeader>
            <Styled.ScheduleMileStone onClick={handleClickPrevMonth}>
              {'<'}
            </Styled.ScheduleMileStone>
            <Styled.ScheduleMonth>
              {MONTHNAME[currentDate.month]}
            </Styled.ScheduleMonth>
            <Styled.ScheduleMileStone onClick={handleClickNextMileStone}>
              {'>'}
            </Styled.ScheduleMileStone>
          </Styled.ScheduleHeader>
          <Styled.ScheduleArticle>
            {currentDate.end.map((day, index) => {
              return (
                <Styled.Schedule
                  key={index}
                  id={String(index + 1)}
                  onClick={handleClickSchedule}
                >
                  <Styled.ScheduleDate>
                    {String(index + 1).padStart(2, '0')}
                  </Styled.ScheduleDate>
                  <Styled.ScheduleDay>
                    {DAYSHORTNAME[getDayShortName(index + 1)]}
                  </Styled.ScheduleDay>
                  <Styled.SchedulePlan>
                    {userMonthlyList[`${currentDate.month}.${index + 1}`]?.plan}
                  </Styled.SchedulePlan>
                </Styled.Schedule>
              );
            })}
            {isDisplayModal ? (
              <Styled.ModalBox ref={modalRef}>
                <Styled.ModalInput
                  value={selectedSchedule.plan}
                  onChange={handleChangeModalInput}
                  onKeyPress={
                    selectedSchedule.method === CREATE_METHOD
                      ? handleCreateMonthlyLog
                      : handleUpdateMonthlyLog
                  }
                  placeholder="계획을 작성해보세요."
                />
              </Styled.ModalBox>
            ) : (
              <></>
            )}
          </Styled.ScheduleArticle>
        </Styled.ScheduleBox>
        <ButtonBox>
          <SettingButton onClick={handleClickMoveOnBack}>
            뒤로가기
          </SettingButton>
        </ButtonBox>
      </Styled.Container>
    </ImageLayout>
  );
};

export default MonthlyPresenter;
