import JournalStore from '../store/Journal/JournalStore.jsx';
import { add, del, upd } from '../store/Journal/JournalModules.jsx';
import * as Styled from './PageStyled.jsx';

const MinePage = () => {
  const store = JournalStore;

  const addTest = () => {
    store.dispatch(add('추가!'));

    console.log(store.getState());
  };

  const delTest = () => {
    store.dispatch(del());

    console.log(store.getState());
  };

  const updTest = () => {
    store.dispatch(upd('변경!'));

    console.log(store.getState());
  };

  return (
    <Styled.PageContainer>
      나의 페이지
      <button onClick={addTest}>추가!</button>
      <button onClick={delTest}>삭제!</button>
      <button onClick={updTest}>변경!</button>
    </Styled.PageContainer>
  );
};

export default MinePage;
