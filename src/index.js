import React from 'react';
import ReactDOM from 'react-dom/client';

// Components
import App from './App.js';

// CSS
import FontStyles from './styles/FontStyles.js';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FontStyles />
    <App />
  </React.StrictMode>
);
