import { Route, Routes, useLocation } from 'react-router-dom';

// Components
import TopBar from '../components/TopBar/TopBar.jsx';

// Page
import AuthPage from '../pages/AuthPage.jsx';
import NotFound from '../pages/NotFound.jsx';

const EFFECTIVEPATH = ['/bujolog', '/bujolog/auth/login', '/bujolog/mine'];

const Router = () => {
  const nowPath = useLocation().pathname;
  return (
    <>
      {EFFECTIVEPATH.find(path => path === nowPath) ? <TopBar /> : <></>}
      <Routes>
        {/* NotFound */}
        <Route path="/*" element={<NotFound />} />
        {/* Auth */}
        <Route path="/bujolog/auth/login" element={<AuthPage />} />
      </Routes>
    </>
  );
};

export default Router;
