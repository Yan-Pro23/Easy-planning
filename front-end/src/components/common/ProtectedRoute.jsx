// src/components/common/ProtectedRoute.jsx
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const ProtectedRoute = ({ 
  children, 
  requiredRole = null, 
  redirectTo = '/login' 
}) => {
  const { user, isInitialized } = useAuth();
  const location = useLocation();

  // Afficher un loader pendant l'initialisation
  if (!isInitialized) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement...</p>
        </div>
      </div>
    );
  }

  // Rediriger vers la page de connexion si pas connecté
  if (!user) {
    return <Navigate to={redirectTo} state={{ from: location }} replace />;
  }

  // Vérifier le rôle requis
  if (requiredRole && user.role !== requiredRole) {
    // Rediriger vers le dashboard approprié selon le rôle
    const dashboardPath = user.role === 'admin' ? '/admin' : '/dashboard';
    return <Navigate to={dashboardPath} replace />;
  }

  return children;
};

// Composant pour les routes publiques (connexion/inscription)
export const PublicRoute = ({ children, redirectTo = null }) => {
  const { user, isInitialized } = useAuth();

  // Afficher un loader pendant l'initialisation
  if (!isInitialized) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement...</p>
        </div>
      </div>
    );
  }

  // Si l'utilisateur est connecté, le rediriger vers son dashboard
  if (user) {
    const defaultRedirect = user.role === 'admin' ? '/admin' : '/dashboard';
    return <Navigate to={redirectTo || defaultRedirect} replace />;
  }

  return children;
};

export default ProtectedRoute;