import React from 'react';
import ReactDOM from 'react-dom/client';

// Components
import App from './App.js';

//Redux
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import AppReducer from './store/store.js';

// CSS
import FontStyles from './styles/FontStyles.js';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(AppReducer);
root.render(
  <React.StrictMode>
    <FontStyles />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
