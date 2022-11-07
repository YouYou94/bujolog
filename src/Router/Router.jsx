import { Route, Routes } from 'react-router-dom';
import TopBar from '../components/TopBar/TopBar.jsx';
import AuthPage from '../pages/AuthPage.jsx';

const Router = () => {
  return (
    <>
      <TopBar />
      <Routes>
        {/* Auth */}
        <Route path="/bujolog/auth/login" element={<AuthPage />} />
      </Routes>
    </>
  );
};

export default Router;
