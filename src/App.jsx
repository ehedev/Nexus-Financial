import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Layouts
import { PublicLayout } from './components/layout/PublicLayout';
import { MainLayout } from './components/layout/MainLayout';
import { ProtectedRoute } from './components/layout/ProtectedRoute';

// Pages
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import TransferPage from './pages/TransferPage';
import LedgerPage from './pages/LedgerPage';
import PaymentsPage from './pages/PaymentsPage';
import SettingsPage from './pages/SettingsPage';

function App() {
  return (
    <Routes>

      {/* Public Routes (Landing Page, Login) */}
      <Route element={<PublicLayout />}>
        <Route path='/' element={<LandingPage />} />
      </Route>

      {/* Login is public, but doesn't share the Landing Page/Header/Footer */}
      <Route path='/login' element={<LoginPage />} />
      
      {/* Private Routes (Dashboard) */}
      <Route path="/app" element={<ProtectedRoute />}>
        <Route element={<MainLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path='dashboard' element={<DashboardPage />} />
          <Route path='settings' element={<SettingsPage />} />
          <Route path='transfer' element={<TransferPage />} />
          <Route path='payments' element={<PaymentsPage />} />
          <Route path='ledger' element={<LedgerPage />} />
        </Route>
      </Route>

    </Routes>
  );
}

export default App;