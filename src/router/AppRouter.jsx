import { Route, Routes } from 'react-router-dom';

/* Containers */
import TopBar from '../containers/TopBar/TopBar.jsx';
import Footer from '../containers/Footer/Footer.jsx';
import Main from '../containers/Main/Main.jsx';

/* Pages */
import CoverPage from '../pages/CoverPage.jsx';
import AuthPage from '../pages/AuthPage.jsx';

const AppRouter = () => {
  return (
    <>
      <TopBar />
      <Routes>
        <Route path="/bujolog" element={<Main />}>
          <Route path="" element={<CoverPage />} />
          <Route path="auth/login" element={<AuthPage />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default AppRouter;
