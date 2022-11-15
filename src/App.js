import { BrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { authService } from './Firebase.js';
import { defaultUser, setUser } from './store/modules/UserModule.jsx';
import { setTrueLogin, setFalseLogin } from './store/modules/IsLoginModule.jsx';
import AppRouter from './router/AppRouter.jsx';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const is = useSelector(state => state.isLogin);
  console.log(is);

  useEffect(() => {
    onAuthStateChanged(authService, user => {
      if (user) {
        dispatch(setUser({ name: user.displayName, userId: user.uid }));
        dispatch(setTrueLogin());
      } else {
        dispatch(defaultUser());
        dispatch(setFalseLogin());
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
