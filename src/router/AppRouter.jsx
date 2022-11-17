import { Route, Routes } from 'react-router-dom';

/* Containers */
import Main from '../containers/Main/Main.jsx';

/* Pages */
import CoverPage from '../pages/CoverPage.jsx';
import AuthPage from '../pages/AuthPage.jsx';
import BulletPage from '../pages/BulletPage.jsx';

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/bujolog" element={<Main />}>
          <Route path="" element={<CoverPage />} />
          <Route path="auth/login" element={<AuthPage />} />
          <Route path="mine/bullet" element={<BulletPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRouter;
