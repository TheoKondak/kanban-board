import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, BrowserRouter } from 'react-router-dom';

import App from './App';
import Root from './routes/root';
import ErrorPage from './routes/error-view';
import BaseModalWrapper from './components/modal/BaseModalWrapper';

import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
