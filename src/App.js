import { useEffect, useState, createContext } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { authService } from './Firebase.js';
import AppRouter from './router/AppRouter.jsx';
import './App.css';

export const AuthContext = createContext();

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
          photoURL: user.photoURL,
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
      <AuthContext.Provider value={value}>
        <AppRouter />
      </AuthContext.Provider>
    </div>
  );
}

export default App;
