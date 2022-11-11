import { Route, Routes, useLocation } from 'react-router-dom';

// Components
import TopBar from '../components/TopBar/TopBar.jsx';
import BulletContainer from '../components/Make/Container/BulletContainer.jsx';
import MonthlyContainer from '../components/Make/Container/MonthlyContainer.jsx';
import DailyContainer from '../components/Make/Container/DailyContainer.jsx';

// Page
import AuthPage from '../pages/AuthPage.jsx';
import MakePage from '../pages/MakePage.jsx';
import MinePage from '../pages/MinePage.jsx';
import NotFound from '../pages/NotFound.jsx';

//const EFFECTIVEPATH = ['/bujolog', '/bujolog/auth/login', '/bujolog/mine'];

const Router = () => {
  //const nowPath = useLocation().pathname;

  return (
    <>
      <TopBar />
      {/* {EFFECTIVEPATH.find(path => path === nowPath) ? <TopBar /> : <></>} */}
      <Routes>
        {/* NotFound */}
        <Route path="*" element={<NotFound />} />

        {/* Auth */}
        <Route path="/bujolog/auth/login" element={<AuthPage />} />

        {/* User Page */}
        <Route path="/bujolog/mine" element={<MinePage />} />
        <Route path="/bujolog/make" element={<MakePage />}>
          <Route path="bullet" element={<BulletContainer />} />
          <Route path="monthly" element={<MonthlyContainer />} />
          <Route path="daily" element={<DailyContainer />} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
