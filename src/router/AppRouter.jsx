import { Route, Routes } from 'react-router-dom';
import TopBar from '../containers/TopBar/TopBar.jsx';
import Footer from '../containers/Footer/Footer.jsx';
import Main from '../containers/Main/Main.jsx';

const AppRouter = () => {
  return (
    <>
      <TopBar />
      <Routes>
        <Route path="/bujolog" element={<Main />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default AppRouter;
