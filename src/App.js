import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import Router from './Router/Router.jsx';
import './App.css';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="App">
      <BrowserRouter>
        <Router isLogin={isLogin} setIsLogin={setIsLogin} />
      </BrowserRouter>
    </div>
  );
}

export default App;
