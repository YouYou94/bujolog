import { BrowserRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { authService } from './Firebase.js';
import { onAuthStateChanged } from 'firebase/auth';
import Router from './Router/Router.jsx';
import './App.css';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState(null);

  // 유저 정보 확인!
  useEffect(() => {
    onAuthStateChanged(authService, user => {
      if (user) {
        console.log(user.uid);
        setIsLogin(true);
        setUser({
          displayName: user.displayName,
          id: user.uid,
        });
      } else {
        setIsLogin(false);
        setUser(null);
      }
    });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Router user={user} isLogin={isLogin} />
      </BrowserRouter>
    </div>
  );
}

export default App;
