import { BrowserRouter, Route, Routes } from 'react-router-dom';

/* Containers */
import Main from '../containers/Main/Main.jsx';
import Journal from '../containers/Journal/Journal.jsx';

/* Pages */
import Bullet from '../pages/Journal/Bullet.jsx';
import MonthlyLog from '../pages/Journal/MonthlyLog.jsx';
import DailyLog from '../pages/Journal/DailyLog.jsx';
import Home from '../pages/Home/Home.jsx';
import Mine from '../pages/Mine/Mine.jsx';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/bujolog" element={<Main />}>
          <Route path="" element={<Home />} />
          <Route path="mine" element={<Mine />} />
        </Route>
        <Route path="journal" element={<Journal />}>
          <Route path="bullet" element={<Bullet />} />
          <Route path="monthly" element={<MonthlyLog />} />
          <Route path="daily" element={<DailyLog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
