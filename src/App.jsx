import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';

// Layout components
import PublicLayout from './layouts/PublicLayout';
import ClientLayout from './layouts/ClientLayout';
import AdminLayout from './layouts/AdminLayout';

// Public pages
import Home from './pages/public/Home';
import Products from './pages/public/Products';
import Services from './pages/public/Services';
import Contact from './pages/public/Contact';
import Branches from './pages/public/Branches';
import News from './pages/public/News';

// Auth pages
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';

// Client portal pages
import Dashboard from './pages/client/Dashboard';
import Accounts from './pages/client/Accounts';
import Transfers from './pages/client/Transfers';
import Bills from './pages/client/Bills';
import Investments from './pages/client/Investments';
import Loans from './pages/client/Loans';
import Cards from './pages/client/Cards';
import Statements from './pages/client/Statements';
import Support from './pages/client/Support';

// Admin portal pages
import AdminDashboard from './pages/admin/Dashboard';
import UserManagement from './pages/admin/UserManagement';
import TransactionMonitoring from './pages/admin/TransactionMonitoring';
import RiskManagement from './pages/admin/RiskManagement';
import Reports from './pages/admin/Reports';
import CustomerService from './pages/admin/CustomerService';
import SystemConfig from './pages/admin/SystemConfig';
import AuditLogs from './pages/admin/AuditLogs';

const App = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const isAdmin = user?.role === 'admin';

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Routes>
        {/* Public routes */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/branches" element={<Branches />} />
          <Route path="/news" element={<News />} />
        </Route>

        {/* Auth routes */}
        <Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to="/dashboard" />} />
        <Route path="/register" element={!isAuthenticated ? <Register /> : <Navigate to="/dashboard" />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Client portal routes */}
        <Route
          element={
            isAuthenticated ? <ClientLayout /> : <Navigate to="/login" />
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/transfers" element={<Transfers />} />
          <Route path="/bills" element={<Bills />} />
          <Route path="/investments" element={<Investments />} />
          <Route path="/loans" element={<Loans />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/statements" element={<Statements />} />
          <Route path="/support" element={<Support />} />
        </Route>

        {/* Admin portal routes */}
        <Route
          element={
            isAuthenticated && isAdmin ? (
              <AdminLayout />
            ) : (
              <Navigate to="/login" />
            )
          }
        >
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<UserManagement />} />
          <Route path="/admin/transactions" element={<TransactionMonitoring />} />
          <Route path="/admin/risk" element={<RiskManagement />} />
          <Route path="/admin/reports" element={<Reports />} />
          <Route path="/admin/customer-service" element={<CustomerService />} />
          <Route path="/admin/config" element={<SystemConfig />} />
          <Route path="/admin/audit" element={<AuditLogs />} />
        </Route>

        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Box>
  );
};

export default App;