import { Route, Routes, useLocation } from 'react-router-dom';
import BulletContainer from '../containers/Journal/BulletContainer';
import TopBar from '../containers/TopBar/TopBarContainer';
import AuthPage from '../pages/AuthPage';
import MyPage from '../pages/MyPage';
import NotFound from '../pages/NotFound';

const WRITEURL = ['/bujolog/my/bullet', '/bujolog/my/journal'];

const AppRouter = () => {
  const location = useLocation().pathname;

  return (
    <>
      {WRITEURL.find(path => path === location) ? <></> : <TopBar />}
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/bujolog/auth/login" element={<AuthPage />} />
        <Route path="/bujolog/my" element={<MyPage />}>
          <Route path="bullet" element={<BulletContainer />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRouter;
