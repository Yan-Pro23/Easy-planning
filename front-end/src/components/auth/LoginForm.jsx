import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Composant FormField intégré
const FormField = ({ 
  label, 
  type = 'text', 
  name, 
  value, 
  onChange, 
  error, 
  placeholder, 
  disabled = false,
  autoComplete
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
      autoComplete={autoComplete}
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

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    motDePasse: ''
  });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
    
    if (message) {
      setMessage('');
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email invalide';
    }
    
    if (!formData.motDePasse) {
      newErrors.motDePasse = 'Le mot de passe est requis';
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
    
    setIsLoading(true);
    setErrors({});
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const isValidCredentials = 
        (formData.email === 'admin@easyplanning.com' && formData.motDePasse === 'admin123') ||
        (formData.email === 'user@example.com' && formData.motDePasse === 'user123');
      
      if (isValidCredentials) {
        setMessage('✅ Connexion réussie ! Redirection...');
        console.log('Connexion réussie:', { ...formData, rememberMe });
      } else {
        setMessage('❌ Identifiants incorrects');
      }
      
    } catch (error) {
      setMessage('❌ Erreur lors de la connexion. Veuillez réessayer.');
    } finally {
      setIsLoading(false);
    }
  };

  const fillTestCredentials = (type) => {
    if (type === 'admin') {
      setFormData({
        email: 'admin@easyplanning.com',
        motDePasse: 'admin123'
      });
    } else {
      setFormData({
        email: 'user@example.com',
        motDePasse: 'user123'
      });
    }
    setErrors({});
    setMessage('');
  };

  return (
    <div className="w-full h-screen bg-gradient-to-r from-teal-600 via-green-400 to-yellow-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-4xl flex overflow-hidden">
        {/* Section gauche */}
        <div className="w-1/2 bg-white p-8 flex flex-col items-center justify-center">
          <div className="rounded-full flex items-center justify-center">
            <img src="/imagelogo.png" alt="Logo" className="w-30 h-30"/>
            <span className="text-white font-bold text-2xl">Easy planning</span>
          </div>
          <h2 className="text-xl font-bold mb-2 text-black">Bien venu sur Easy planning</h2>
          <p className="text-gray-700 text-sm text-center">
            Gagner du temps en gèrant vos equipe et plannings facilement.
          </p>
        </div>

        {/* Section droite */}
        <div className="w-1/2 bg-white p-8 text-center">
          <h2 className="text-lg font-bold text-gray-800 mb-6">Connexion à Easy-planning</h2>
          
          {message && (
            <div className={`p-4 rounded-lg mb-6 ${
              message.includes('✅') 
                ? 'bg-green-100 text-green-700 border border-green-300' 
                : 'bg-red-100 text-red-700 border border-red-300'
            }`}>
              <div className="flex items-center">
                {message.includes('✅') ? (
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-green-600 mr-2"></div>
                ) : (
                  <span className="font-semibold mr-2">⚠️</span>
                )}
                {message}
              </div>
            </div>
          )}

         

          <form onSubmit={handleSubmit} className="space-y-6">
            <FormField

              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              placeholder="Email ou identifiant"
              disabled={isLoading}
              autoComplete="email"
            />

            <FormField
             
              type="password"
              name="motDePasse"
              value={formData.motDePasse}
              onChange={handleChange}
              error={errors.motDePasse}
              placeholder="Mot de passe"
              disabled={isLoading}
              autoComplete="current-password"
            />

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 focus:ring-2"
                  disabled={isLoading}
                />
                <span className="ml-2 text-sm text-gray-600">Se souvenir de moi</span>
              </label>
             
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`
                w-full py-3 px-6 rounded-lg font-semibold text-white
                transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-orange-300
                ${isLoading 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-400 active:transform active:scale-95'
                }
              `}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Connexion en cours...
                </div>
              ) : (
                'Se connecter'
              )}o
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
            
              <Link
                to="/register"
                className="text-teal-600 hover:text-teal-700 font-semibold hover:underline transition-colors"
              >
                Inscription
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;