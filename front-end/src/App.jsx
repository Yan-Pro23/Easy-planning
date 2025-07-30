// src/App.jsx
import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

// Components
import LoginForm from './components/auth/LoginForm';
import RegisterForm from './components/auth/RegisterForm';
import UserDashboard from './components/dashboard/UserDashboard';
import AdminDashboard from './components/dashboard/AdminDashboard';
import ProtectedRoute, { PublicRoute } from './components/common/ProtectedRoute';

// Page 404
const NotFound = () => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="text-center">
      <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-teal-500 rounded-full mx-auto mb-8 flex items-center justify-center">
        <span className="text-4xl text-white font-bold">404</span>
      </div>
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Page non trouvée</h1>
      <p className="text-gray-600 mb-8">La page que vous recherchez n'existe pas.</p>
      <a
        href="/"
        className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all"
      >
        Retour à l'accueil
      </a>
    </div>
  </div>
);

// Page de récupération de mot de passe (placeholder)
const ForgotPassword = () => (
  <div className="min-h-screen bg-gradient-to-br from-teal-400 via-teal-500 to-yellow-400 flex items-center justify-center p-4">
    <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center">
          <span className="text-2xl">🔑</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Mot de passe oublié
        </h2>
        <p className="text-gray-600">
          Fonctionnalité à implémenter
        </p>
      </div>
      
      <div className="space-y-4">
        <input
          type="email"
          placeholder="Votre adresse email"
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-lg font-semibold">
          Envoyer le lien de réinitialisation
        </button>
      </div>
      
      <div className="mt-6 text-center">
        <a
          href="/login"
          className="text-teal-600 hover:text-teal-700 font-semibold hover:underline"
        >
          Retour à la connexion
        </a>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            {/* Routes publiques (accessibles seulement si non connecté) */}
            <Route 
              path="/login" 
              element={
                <PublicRoute>
                  <LoginForm />
                </PublicRoute>
              } 
            />
            <Route 
              path="/register" 
              element={
                <PublicRoute>
                  <RegisterForm />
                </PublicRoute>
              } 
            />
            <Route 
              path="/forgot-password" 
              element={
                <PublicRoute>
                  <ForgotPassword />
                </PublicRoute>
              } 
            />

            {/* Routes protégées - Dashboard utilisateur */}
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute requiredRole="user">
                  <UserDashboard />
                </ProtectedRoute>
              } 
            />

            {/* Routes protégées - Dashboard admin */}
            <Route 
              path="/admin" 
              element={
                <ProtectedRoute requiredRole="admin">
                  <AdminDashboard />
                </ProtectedRoute>
              } 
            />

            {/* Route racine - redirection automatique */}
            <Route 
              path="/" 
              element={<Navigate to="/login" replace />} 
            />

            {/* Page 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;