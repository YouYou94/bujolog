import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BulletPage, HomePage, IndexPage } from './pages';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/bujolog" element={<HomePage />} />
        <Route path="/bujolog/index" element={<IndexPage />} />
        <Route path="/bujolog/bullet" element={<BulletPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
