// src/services/authService.js

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

// Simulation d'API - Remplacez par vos vraies API calls
const simulateApiCall = (data, delay = 1500) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, delay);
  });
};

export const authService = {
  // Inscription
  async register(userData) {
    try {
      // Simulation - Remplacez par votre vraie API
      const response = await simulateApiCall({
        success: true,
        user: {
          id: Date.now(),
          nom: userData.nom,
          prenom: userData.prenom,
          email: userData.email,
          role: userData.email.includes('admin') ? 'admin' : 'user'
        },
        token: 'fake-jwt-token-' + Date.now()
      });

      // Vraie implémentation API :
      /*
      const response = await fetch(`${API_BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de l\'inscription');
      }

      const data = await response.json();
      */

      return response;
    } catch (error) {
      return {
        success: false,
        error: error.message || 'Erreur lors de l\'inscription'
      };
    }
  },

  // Connexion
  async login(credentials) {
    try {
      // Simulation - Remplacez par votre vraie API
      let user;
      
      if (credentials.email === 'admin@easyplanning.com') {
        user = {
          id: 1,
          nom: 'Admin',
          prenom: 'Super',
          email: credentials.email,
          role: 'admin'
        };
      } else {
        user = {
          id: 2,
          nom: 'Utilisateur',
          prenom: 'Test',
          email: credentials.email,
          role: 'user'
        };
      }

      const response = await simulateApiCall({
        success: true,
        user,
        token: 'fake-jwt-token-' + Date.now()
      });

      // Vraie implémentation API :
      /*
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        throw new Error('Identifiants incorrects');
      }

      const data = await response.json();
      */

      return response;
    } catch (error) {
      return {
        success: false,
        error: error.message || 'Erreur lors de la connexion'
      };
    }
  },

  // Vérification du token
  async verifyToken(token) {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/verify`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Token invalide');
      }

      return await response.json();
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  // Réinitialisation de mot de passe
  async resetPassword(email) {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/reset-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la réinitialisation');
      }

      return await response.json();
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
};