import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  HomePage,
  IndexPage,
  KeysettingPage,
  MonthlylogPage,
  DailylogPage,
  MoodtrackerPage,
} from './pages';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/bujolog" element={<HomePage />} />
        <Route path="/bujolog/index" element={<IndexPage />} />
        <Route path="/bujolog/keysetting" element={<KeysettingPage />} />
        <Route path="/bujolog/monthlylog" element={<MonthlylogPage />} />
        <Route path="/bujolog/dailylog" element={<DailylogPage />} />
        <Route path="/bujolog/moodtracker" element={<MoodtrackerPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
