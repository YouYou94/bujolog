import { Route, Routes, useLocation } from 'react-router-dom';
import { AUTHPATH } from '../Constants.js';
import Header from '../components/Header/Header.jsx';
import TopBar from '../components/TopBar/TopBar.jsx';
import AuthPage from '../pages/Auth/AuthPage.jsx';
import UserPage from '../pages/User/UserPage.jsx';
import MainPage from '../pages/Main/MainPage.jsx';

const Router = ({ user, isLogin }) => {
  return (
    <>
      <TopBar />
      {useLocation().pathname === AUTHPATH ? (
        <></>
      ) : (
        <Header isLogin={isLogin} user={user} />
      )}

      <Routes>
        {/* Main */}
        <Route path="/bujolog" element={<MainPage />} />

        {/* Auth */}
        <Route path="/bujolog/auth/login" element={<AuthPage />} />

        {/* User */}
        <Route path={`/bujolog/${user.url}`} element={<UserPage />} />
      </Routes>
    </>
  );
};

export default Router;
