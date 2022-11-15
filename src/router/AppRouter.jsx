import { Route, Routes } from 'react-router-dom';
import TopBar from '../containers/TopBar/TopBarContainer';
import AuthPage from '../pages/AuthPage';
import NotFound from '../pages/NotFound';

const AppRouter = () => {
  return (
    <>
      <TopBar />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/bujolog/auth/login" element={<AuthPage />} />
      </Routes>
    </>
  );
};

export default AppRouter;
