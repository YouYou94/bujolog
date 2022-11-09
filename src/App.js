import { BrowserRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { authService } from './Firebase.js';
import { onAuthStateChanged } from 'firebase/auth';

// Router
import Router from './Router/Router.jsx';

// Context
import { UserContext } from './Context/Context.jsx';

// Redux
import { useDispatch } from 'react-redux';
import { isLogin, notLogin } from './store/Modules/IsLogin.jsx';

// CSS
import './App.css';

function App() {
  const dispatch = useDispatch();

  const [user, setUser] = useState(null);

  // 유저 정보 확인!
  useEffect(() => {
    onAuthStateChanged(authService, user => {
      if (user) {
        dispatch(isLogin());
        setUser({
          displayName: user.displayName,
          id: user.uid,
        });
      } else {
        dispatch(notLogin());
        setUser(null);
      }
    });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={user}>
          <Router />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
