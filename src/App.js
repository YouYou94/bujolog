import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Index } from './pages';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/bujolog" element={<Home />} />
        <Route path="/bujolog/index" element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
