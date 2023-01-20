import React from 'react';
import ReactDOM from 'react-dom/client';

// Components
import App from './App.jsx';

//Redux
import { Provider } from 'react-redux';
import store from './store/store.jsx';

// CSS
import './index.css';
import './Reset.css';
import './styles/font.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
