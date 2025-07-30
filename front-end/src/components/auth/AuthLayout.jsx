// src/components/auth/AuthLayout.jsx
import React from 'react';

const AuthLayout = ({ children, title, subtitle, showTestAccounts = false }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-400 via-teal-500 to-yellow-400 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-5xl flex overflow-hidden">
        {/* Section gauche - Branding */}
        <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-teal-500 to-teal-600 p-12 flex-col justify-center text-white relative overflow-hidden">
          {/* Éléments décoratifs */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full transform translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full transform -translate-x-12 translate-y-12"></div>
          
          <div className="relative z-10">
            {/* Logo */}
            <div className="mb-8">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg">
                <div className="flex items-center justify-center">
                  <div className="w-3 h-3 bg-teal-500 rounded-full mr-1"></div>
                  <div className="w-3 h-3 bg-orange-500 rounded-full ml-1"></div>
                </div>
              </div>
              <h1 className="text-3xl font-bold mb-2">
                Easy Planning
              </h1>
            </div>
            
            {/* Contenu dynamique */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">{title}</h2>
              <p className="text-teal-100 text-lg leading-relaxed mb-8">
                {subtitle}
              </p>
            </div>

            {/* Comptes de test */}
            {showTestAccounts && (
              <div className="mt-8 p-4 bg-teal-600 bg-opacity-50 rounded-xl border border-teal-400">
                <p className="text-sm font-semibold mb-3 text-teal-100">
                  🧪 Comptes de démonstration :
                </p>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
                    <span className="text-teal-100">
                      <strong>Admin:</strong> admin@easyplanning.com
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                    <span className="text-teal-100">
                      <strong>User:</strong> user@example.com
                    </span>
                  </div>
                  <p className="text-teal-200 text-xs mt-2">
                    Mot de passe quelconque
                  </p>
                </div>
              </div>
            )}

            {/* Statistiques factices */}
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-xs text-teal-200">Utilisateurs</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">99%</div>
                <div className="text-xs text-teal-200">Uptime</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-xs text-teal-200">Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Section droite - Formulaire */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex items-center justify-center">
          <div className="w-full max-w-md">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;