import { Routes } from 'react-router-dom';
import Header from '../components/Header/Header.jsx';
import TopBar from '../components/TopBar/TopBar.jsx';

const Router = ({ isLogin, setIsLogin }) => {
  return (
    <>
      <TopBar />
      <Header isLogin={isLogin} setIsLogin={setIsLogin} />
      <Routes></Routes>
    </>
  );
};

export default Router;
