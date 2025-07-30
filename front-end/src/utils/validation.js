// src/utils/validation.js

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password) => {
  // Au moins 6 caractères
  if (password.length < 6) {
    return 'Le mot de passe doit contenir au moins 6 caractères';
  }
  
  // Au moins une lettre et un chiffre (optionnel)
  // const hasLetter = /[a-zA-Z]/.test(password);
  // const hasNumber = /\d/.test(password);
  // if (!hasLetter || !hasNumber) {
  //   return 'Le mot de passe doit contenir au moins une lettre et un chiffre';
  // }
  
  return null;
};

export const validateRequired = (value, fieldName) => {
  if (!value || value.trim() === '') {
    return `${fieldName} est requis`;
  }
  return null;
};

export const validateName = (name, fieldName) => {
  const requiredError = validateRequired(name, fieldName);
  if (requiredError) return requiredError;
  
  if (name.length < 2) {
    return `${fieldName} doit contenir au moins 2 caractères`;
  }
  
  // Vérifier que le nom ne contient que des lettres, espaces et traits d'union
  const nameRegex = /^[a-zA-ZÀ-ÿ\s\-']+$/;
  if (!nameRegex.test(name)) {
    return `${fieldName} ne doit contenir que des lettres`;
  }
  
  return null;
};

export const validateForm = {
  register: (formData) => {
    const errors = {};
    
    // Validation du nom
    const nomError = validateName(formData.nom, 'Le nom');
    if (nomError) errors.nom = nomError;
    
    // Validation du prénom
    const prenomError = validateName(formData.prenom, 'Le prénom');
    if (prenomError) errors.prenom = prenomError;
    
    // Validation de l'email
    const emailRequiredError = validateRequired(formData.email, 'L\'email');
    if (emailRequiredError) {
      errors.email = emailRequiredError;
    } else if (!validateEmail(formData.email)) {
      errors.email = 'L\'email n\'est pas valide';
    }
    
    // Validation du mot de passe
    const passwordError = validatePassword(formData.motDePasse);
    if (!formData.motDePasse) {
      errors.motDePasse = 'Le mot de passe est requis';
    } else if (passwordError) {
      errors.motDePasse = passwordError;
    }
    
    return {
      isValid: Object.keys(errors).length === 0,
      errors
    };
  },
  
  login: (formData) => {
    const errors = {};
    
    // Validation de l'email
    const emailRequiredError = validateRequired(formData.email, 'L\'email');
    if (emailRequiredError) {
      errors.email = emailRequiredError;
    } else if (!validateEmail(formData.email)) {
      errors.email = 'L\'email n\'est pas valide';
    }
    
    // Validation du mot de passe
    if (!formData.motDePasse) {
      errors.motDePasse = 'Le mot de passe est requis';
    }
    
    return {
      isValid: Object.keys(errors).length === 0,
      errors
    };
  }
};