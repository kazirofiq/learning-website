import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AuthProvider from './contexts/AuthProvider';
import VedioProvider from './contexts/VedioProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <VedioProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </VedioProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

reportWebVitals();
