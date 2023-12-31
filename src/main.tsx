import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.tsx';
import { Provider } from 'react-redux';
import './index.css';
import store from './store';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);
