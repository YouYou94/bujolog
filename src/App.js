import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home, Index } from './pages';

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
