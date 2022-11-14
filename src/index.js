import React from 'react';
import ReactDOM from 'react-dom/client';

// Components
import App from './App.js';

//Redux

// CSS
import './index.css';
import './Reset.css';
import './styles/font.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
