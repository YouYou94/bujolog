import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import FontStyles from './styles/FontStyles.js';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FontStyles />
    <App />
  </React.StrictMode>
);
