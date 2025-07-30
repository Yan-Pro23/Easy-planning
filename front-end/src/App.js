import React from 'react';
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import RegisterForm from './components/auth/RegisterForm';
import LoginForm from './components/auth/LoginForm';

function App() {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<Navigate to="/register" replace />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/forgot-password" element={
          <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-teal-600 via-green-400 to-yellow-100">
            <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full mx-4">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Mot de passe oublié</h2>
              <p className="text-gray-600 mb-4">Cette fonctionnalité sera bientôt disponible.</p>
              <Link 
                to="/login" 
                className="text-teal-600 hover:text-teal-700 font-semibold hover:underline"
              >
                Retour à la connexion
              </Link>
            </div>
          </div>
        } />
        <Route path="*" element={<Navigate to="/register" replace />} />
      </Routes>
    </div>
  );
}

export default App;