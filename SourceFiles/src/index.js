import React from 'react';
import ReactDOM from 'react-dom/client';

import './css/index.css';
import './css/alert.css';
import './css/template.css';
import './css/Projects.css';
import './css/Account.css';
import './css/Dashboard.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App/App';

import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import rootReducer from './Redux/index';

//Redux
const store = configureStore({
  reducer: rootReducer,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

