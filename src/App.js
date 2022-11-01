import { Routes } from 'react-router-dom';
import './App.css';
import TopBar from './components/TopBar/TopBar.jsx';

function App() {
  return (
    <div className="App">
      <TopBar />
      <Routes></Routes>
    </div>
  );
}

export default App;
