import { Routes } from 'react-router-dom';
import Header from '../components/Header/Header.jsx';
import TopBar from '../components/TopBar/TopBar.jsx';

const Router = ({ isToggle, setIsToggle }) => {
  return (
    <>
      <TopBar />
      <Header isToggle={isToggle} setIsToggle={setIsToggle} />
      <Routes></Routes>
    </>
  );
};

export default Router;
