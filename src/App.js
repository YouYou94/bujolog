import { BrowserRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Router from './Router/Router.jsx';
import './App.css';
import { authService } from './Firebase.js';
import { onAuthStateChanged } from 'firebase/auth';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState(null);

  const getUserUrl = (id, provider) => {
    let url = '';
    switch (provider) {
      case 'google':
        url = 'GG@';
        break;
      case 'github':
        url = 'GH@';
        break;
      default:
        url = 'DE@';
        break;
    }

    return (url += id);
  };

  useEffect(() => {
    onAuthStateChanged(authService, user => {
      if (user) {
        setIsLogin(true);
        setUser({
          displayName: user.displayName,
          id: user.email.split('@')[0],
          url: getUserUrl(
            user.email.split('@')[0],
            user.providerData[0].providerId.split('.')[0]
          ),
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
