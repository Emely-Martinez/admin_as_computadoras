import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import { AuthProvider } from '@/contexts/AuthContext.jsx';
import ProtectedRoute from '@/components/ProtectedRoute.jsx';

import ScrollToTop from './components/ScrollToTop.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

import HomePage from './pages/HomePage.jsx';
import ServiciosPage from './pages/ServiciosPage.jsx';
import SobreNosotrosPage from './pages/SobreNosotrosPage.jsx';
import ContactoPage from './pages/ContactoPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import SignupPage from './pages/SignupPage.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';
import EmpleadoDashboard from './pages/EmpleadoDashboard.jsx';
import PerfilPage from './pages/PerfilPage.jsx';

function AppContent() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/servicios" element={<ServiciosPage />} />
          <Route path="/sobre-nosotros" element={<SobreNosotrosPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          
          {/* Protected Routes */}
          <Route path="/admin" element={<ProtectedRoute allowedRoles={['admin']}><AdminDashboard /></ProtectedRoute>} />
          <Route path="/empleados" element={<ProtectedRoute allowedRoles={['admin', 'empleado']}><EmpleadoDashboard /></ProtectedRoute>} />
          <Route path="/perfil" element={<ProtectedRoute><PerfilPage /></ProtectedRoute>} />
          
          <Route path="*" element={<div className="py-20 text-center"><h1 className="text-4xl font-bold mb-4">404</h1><p>Página no encontrada</p></div>} />
        </Routes>
      </main>
      <Footer />
      <a
        href="https://wa.link/ano4vq"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 transition-transform hover:scale-105 hover:bg-[#20bd5a]"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AuthProvider>
        <AppContent />
        <Toaster theme="dark" />
      </AuthProvider>
    </Router>
  );
}

export default App;