import React from 'react';
import axios from 'axios';

export default function DeleteButton({ planningId, onDeleted }) {
  const handleDelete = async () => {
    const confirmDelete = window.confirm('❗ Es-tu sûr(e) de vouloir supprimer ce planning ?');
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:8000/api/plannings/${planningId}`);
      alert('✅ Planning supprimé avec succès !');
      onDeleted();
    } catch (error) {
      console.error('Erreur lors de la suppression', error);
      alert('❌ Échec de la suppression.');
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md shadow"
    >
      Supprimer
    </button>
  );
}
