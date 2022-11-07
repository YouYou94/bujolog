import { BrowserRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { authService } from './Firebase.js';
import { onAuthStateChanged } from 'firebase/auth';

// Router
import Router from './Router/Router.jsx';

// Context
import { LoginContext, UserContext } from './Context/Context.jsx';

// CSS
import './App.css';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState(null);

  // 유저 정보 확인!
  useEffect(() => {
    onAuthStateChanged(authService, user => {
      if (user) {
        // console.log(user.uid);
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
        <UserContext.Provider value={user}>
          <LoginContext.Provider value={isLogin}>
            <Router />
          </LoginContext.Provider>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
