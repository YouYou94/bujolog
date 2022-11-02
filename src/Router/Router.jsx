import { Routes } from 'react-router-dom';
import Header from '../components/Header/Header.jsx';
import TopBar from '../components/TopBar/TopBar.jsx';

const Router = () => {
  return (
    <>
      <TopBar />
      <Header />
      <Routes></Routes>
    </>
  );
};

export default Router;
