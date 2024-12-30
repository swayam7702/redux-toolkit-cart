import React from 'react';
import ReactDOM from 'react-dom/client'; // Ensure you're importing from 'react-dom/client'
import { Provider } from 'react-redux';
import store from './Components/store';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
