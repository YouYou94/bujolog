import { Route, Routes, useLocation } from 'react-router-dom';
import TopBar from '../containers/TopBar/TopBar.jsx';
import Footer from '../containers/Footer/Footer.jsx';

const AppRouter = () => {
  return (
    <>
      <TopBar />
      <Footer />
    </>
  );
};

export default AppRouter;
