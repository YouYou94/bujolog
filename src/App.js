import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/bujolog" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
