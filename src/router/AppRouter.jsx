import { BrowserRouter, Route, Routes } from 'react-router-dom';

/* Containers */
import Main from '../containers/Main/Main.jsx';

/* Pages */
import CoverPage from '../pages/CoverPage.jsx';
import BulletPage from '../pages/BulletPage.jsx';
import MonthlyLogPage from '../pages/MonthlyLogPage.jsx';
import DailyLogPage from '../pages/DailyLogPage.jsx';
import Home from '../pages/Home/Home.jsx';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/bujolog" element={<Main />}>
          <Route path="" element={<Home />} />
          {/* <Route path="" element={<CoverPage />} />
          <Route path="auth/login" element={<AuthPage />} />
          <Route path="mine/bullet" element={<BulletPage />} />
          <Route path="mine/monthly" element={<MonthlyLogPage />} />
          <Route path="mine/daily" element={<DailyLogPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
