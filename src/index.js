import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AuthProvider from './contexts/AuthProvider';
import VedioProvider from './contexts/VedioProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <VedioProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </VedioProvider>
  </React.StrictMode>
);

reportWebVitals();
