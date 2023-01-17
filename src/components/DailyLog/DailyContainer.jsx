import { customAlphabet } from 'nanoid';
import { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createDailyLog } from '../../store/modules/DailyModule';
import DailyPresenter from './DailyPresenter';

const MENUAL = {
  title: 'DAILY LOG',
  captionList: [
    '이곳을 데일리로그를 셋업하는 페이지입니다.',
    '하루의 To Do List를 작성하고 실천해보세요.',
    '나머지는 아래의 사용법을 참고해주세요.',
    '1. 추가하기 버튼을 클릭하세요.',
    '2. 키를 설정하세요.',
    '3. To Do List를 작성하세요.',
    '4. 하루의 To Do List를 실천해보세요.',
  ],
};

export const CREATE_METHOD = '데일리로그 추가하기';

const DailyContainer = () => {
  const modalRef = useRef();
  const createRef = useRef();

  const nanoid = customAlphabet('0123456789abcdefghijklmnop', 8);

  const today = `${String(new Date().getMonth() + 1).padStart(
    2,
    '0'
  )}. ${new Date().getDate()}`;

  const userKeyList = useSelector(state => state.key.key);
  const userDailyLogList = useSelector(state => state.daily.daily);
  const dispatch = useDispatch();

  //console.log(userDailyLogList);

  const [isDisplayModal, setIsDisplayModal] = useState(false);
  const [createState, setCreateState] = useState({
    method: '',
    id: nanoid(),
    today,
    key: '',
    log: '',
  });

  const onInitialState = () => {
    setCreateState({
      method: '',
      id: nanoid(),
      today,
      key: '',
      log: '',
    });
  };

  /* 모달 기능 */
  const handleDisplayModal = () => {
    setIsDisplayModal(true);

    setCreateState({
      ...createState,
      method: CREATE_METHOD,
    });
  };

  const handleChangeCreateStateLog = event => {
    const { value } = event.target;

    setCreateState({
      ...createState,
      log: value,
    });
  };

  const handleClickIcon = event => {
    const { id } = event.currentTarget;

    setCreateState({
      ...createState,
      key: id,
    });
  };

  /* 데일리로그 CRUD 기능 */
  const handleCreateDailyLog = event => {
    const { key } = event;

    if (key === 'Enter') {
      if (!createState.key || !createState.log) {
        alert('키 또는 로그가 비어있습니다!');
        return;
      }

      dispatch(createDailyLog({ createState }));

      setIsDisplayModal(false);
      onInitialState();
    }
  };

  /* 모달 영역 밖 클릭 시 모달창 닫힘 기능 */
  const handleClickOutSide = event => {
    if (
      isDisplayModal &&
      !modalRef.current.contains(event.target) &&
      !createRef.current.contains(event.target)
    ) {
      setIsDisplayModal(false);

      onInitialState();
    }
  };

  useEffect(() => {
    if (isDisplayModal)
      document.addEventListener('mousedown', handleClickOutSide);
    return () => {
      document.removeEventListener('mousedown', handleClickOutSide);
    };
  });

  return (
    <DailyPresenter
      MENUAL={MENUAL}
      modalRef={modalRef}
      createRef={createRef}
      today={today}
      userKeyList={userKeyList}
      userDailyLogList={userDailyLogList}
      isDisplayModal={isDisplayModal}
      createState={createState}
      handleDisplayModal={handleDisplayModal}
      handleChangeCreateStateLog={handleChangeCreateStateLog}
      handleClickIcon={handleClickIcon}
      handleCreateDailyLog={handleCreateDailyLog}
    />
  );
};

export default DailyContainer;
