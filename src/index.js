import React from 'react';
import ReactDOM from 'react-dom/client';

// Components
import App from './App.js';

//Redux

// CSS
import FontStyles from './styles/FontStyles.js';
import './index.css';
import './Reset.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
