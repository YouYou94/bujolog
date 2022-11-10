import { BrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';
import { authService } from './Firebase.js';
import { onAuthStateChanged } from 'firebase/auth';

// Router
import AppRouter from './Router/AppRouter.jsx';

// Redux
import { useDispatch } from 'react-redux';
import { isLogin, notLogin } from './store/Modules/IsLogin.jsx';
import { userSetting, userInitial } from './store/Modules/User.jsx';

// CSS
import './App.css';

function App() {
  const dispatch = useDispatch();

  // 유저 정보 확인!
  useEffect(() => {
    onAuthStateChanged(authService, user => {
      if (user) {
        dispatch(isLogin());
        dispatch(userSetting(user.displayName, user.uid));
      } else {
        dispatch(notLogin());
        dispatch(userInitial());
      }
    });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
