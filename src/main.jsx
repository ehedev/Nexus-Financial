import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Vercel Analytics Import
import { Analytics } from '@vercel/analytics/react';

// React Router Import
import { BrowserRouter } from 'react-router-dom';

// CSS Imports
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/global.css';

// Global State Provider
import { AuthProvider } from './store/AuthContext.jsx';
import { AccountProvider } from './store/AccountContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <AccountProvider>
          <App />
          <Analytics />
        </AccountProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)