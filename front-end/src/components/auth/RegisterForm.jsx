import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Composant FormField intégré pour éviter les problèmes d'import
const FormField = ({ 
  label, 
  type = 'text', 
  name, 
  value, 
  onChange, 
  error, 
  placeholder, 
  disabled = false 
}) => (
  <div className="mb-4">
    {label && (
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
    )}
    <input
      id={name}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      className={`
        w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-colors
        ${error 
          ? 'border-red-300 focus:ring-red-500 focus:border-red-500' 
          : 'border-gray-300 focus:ring-teal-500 focus:border-teal-500'
        }
        ${disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'}
      `}
    />
    {error && (
      <p className="mt-1 text-sm text-red-600">{error}</p>
    )}
  </div>
);

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.nom.trim()) {
      newErrors.nom = 'Le nom est requis';
    }
    
    if (!formData.prenom.trim()) {
      newErrors.prenom = 'Le prénom est requis';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email invalide';
    }
    
    if (!formData.password) {
      newErrors.password = 'Le mot de passe est requis';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Le mot de passe doit contenir au moins 6 caractères';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Simulation rapide sans message
    console.log('Données du formulaire:', formData);
    
    // Reset du formulaire
    setFormData({
      nom: '',
      prenom: '',
      email: '',
      password: '',
    });
    
    // Clear les erreurs
    setErrors({});
  };

  return (
    <div className="w-full h-screen bg-gradient-to-r from-teal-600 via-green-400 to-yellow-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-4xl flex overflow-hidden">
        {/* Section gauche */}
        <div className="w-1/2 bg-white p-8 flex flex-col items-center justify-center">
          <div className="rounded-full flex items-center justify-center">
            <img src="/imagelogo.png" alt="Logo" className="w-30 h-30"/>
            <span className="text-white font-bold text-2xl"></span>
          </div>
          <h2 className="text-xl font-bold mb-2 text-black">Bienvenue sur Easy Planning</h2>
          <p className="text-gray-700 text-sm text-center">
            Gagnez du temps en gérant vos équipes et plannings facilement.
          </p>
        </div>

        {/* Section droite */}
        <div className="w-1/2 bg-white p-8 text-center">
          <h2 className="text-lg font-bold text-gray-800 mb-6">Inscription à Easy Planning</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <FormField
              name="nom"
              type="text"
              placeholder="Nom"
              value={formData.nom}
              onChange={handleChange}
              error={errors.nom}
            />
            <FormField
              name="prenom"
              type="text"
              placeholder="Prénom"
              value={formData.prenom}
              onChange={handleChange}
              error={errors.prenom}
            />
            <FormField
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
            />
            <FormField
              name="password"
              type="password"
              placeholder="Mot de passe"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
            />
            
            <button
              type="submit"
              className="w-full py-3 rounded-lg font-semibold text-white transition-all duration-200 bg-orange-400 hover:bg-orange-600 active:transform active:scale-95"
            >
              Inscription
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;