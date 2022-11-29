import { BrowserRouter, Route, Routes } from 'react-router-dom';

/* Containers */
import Main from '../containers/Main/Main.jsx';

/* Pages */
import BulletPage from '../pages/BulletPage.jsx';
import MonthlyLogPage from '../pages/MonthlyLogPage.jsx';
import DailyLogPage from '../pages/DailyLogPage.jsx';
import Home from '../pages/Home/Home.jsx';
import Mine from '../pages/Mine/Mine.jsx';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/bujolog" element={<Main />}>
          <Route path="" element={<Home />} />
          <Route path="mine" element={<Mine />} />
          {/* <Route path="mine/bullet" element={<BulletPage />} />
          <Route path="mine/monthly" element={<MonthlyLogPage />} />
          <Route path="mine/daily" element={<DailyLogPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
