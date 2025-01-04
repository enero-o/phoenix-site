import React from 'react';

import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';

import App from './app';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Toaster position="top-right" />
    <App />
  </React.StrictMode>,
);
