import { useEffect, useState, createContext } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { authService } from './Firebase.js';
import AppRouter from './router/AppRouter.jsx';
import './App.css';

export const MyContext = createContext();

function App() {
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    onAuthStateChanged(authService, user => {
      if (user) {
        setIsLogin(true);
        setUser({
          name: user.displayName,
          userId: user.uid,
        });
      } else {
        setIsLogin(false);
        setUser(null);
      }
    });
  }, []);

  const value = { user, isLogin };

  return (
    <div className="App">
      <MyContext.Provider value={value}>
        <AppRouter />
      </MyContext.Provider>
    </div>
  );
}

export default App;
