import { Route, Routes, useLocation } from 'react-router-dom';
import { AUTHPATH } from '../Constants.js';
import Header from '../components/Header/Header.jsx';
import TopBar from '../components/TopBar/TopBar.jsx';
import AuthPage from '../pages/Auth/AuthPage.jsx';

const Router = ({ user, isLogin }) => {
  console.log(user);
  return (
    <>
      <TopBar />
      {useLocation().pathname === AUTHPATH ? (
        <></>
      ) : (
        <Header isLogin={isLogin} />
      )}

      <Routes>
        {/* Auth */}
        <Route path="/bujolog/auth/login" element={<AuthPage />} />
      </Routes>
    </>
  );
};

export default Router;
