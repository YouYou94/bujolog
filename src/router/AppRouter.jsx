import { Routes } from 'react-router-dom';
import TopBar from '../containers/TopBar/TopBarContainer';

const AppRouter = () => {
  return (
    <>
      <TopBar />
      <Routes></Routes>
    </>
  );
};

export default AppRouter;
