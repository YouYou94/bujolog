import { BrowserRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Router from './Router/Router.jsx';
import './App.css';
import { authService } from './Firebase.js';
import { onAuthStateChanged } from 'firebase/auth';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(authService, user => {
      if (user) {
        setIsLogin(true);
        setUser({
          displayName: user.displayName,
          id: user.email.split('@')[0],
          provider: user.providerData[0].providerId.split('.')[0],
        });
      } else {
        setIsLogin(false);
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
