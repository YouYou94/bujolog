import { BrowserRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Router from './Router/Router.jsx';
import './App.css';
import { authService } from './Firebase.js';
import { onAuthStateChanged } from 'firebase/auth';

function App() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    onAuthStateChanged(authService, user => {
      if (user) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Router isLogin={isLogin} setIsLogin={setIsLogin} />
      </BrowserRouter>
    </div>
  );
}

export default App;
