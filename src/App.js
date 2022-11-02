import { BrowserRouter } from 'react-router-dom';
import Router from './Router/Router.jsx';
import './App.css';
import { useState } from 'react';

function App() {
  const [isToggle, setIsToggle] = useState(false);

  return (
    <div className="App" onClick={() => setIsToggle(!isToggle)}>
      <BrowserRouter>
        <Router isToggle={isToggle} setIsToggle={setIsToggle} />
      </BrowserRouter>
    </div>
  );
}

export default App;
