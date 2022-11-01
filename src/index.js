import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import FontStyles from './styles/font';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FontStyles />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
