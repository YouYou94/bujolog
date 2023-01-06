import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/bujolog" element={<HomePage />} />
        <Route path="/bujolog/:id" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
