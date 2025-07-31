import React, { useState, useEffect } from 'react';
import PlanningForm from './PlanningForm';
import DeleteButton from './DeleteButton';

export default function Planning() {
  const [planningList, setPlanningList] = useState([]);
  const [editingPlanning, setEditingPlanning] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);

  // Charger la liste des plannings depuis l'API
  useEffect(() => {
    fetch('http://localhost:8000/api/plannings')
      .then(res => res.json())
      .then(data => setPlanningList(data.data)) // ← ici : .data pour extraire les résultats
      .catch(err => console.error('Erreur chargement plannings', err));
  }, []);

  // Gestion soumission création/modification
  const handleSubmitPlanning = async (formData) => {
    try {
      if (editingPlanning) {
        // Modification (PUT)
        const res = await fetch(`http://localhost:8000/api/plannings/${editingPlanning.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        if (!res.ok) throw new Error('Erreur modification');
        alert('Planning modifié avec succès');
        setPlanningList(planningList.map(p => p.id === editingPlanning.id ? { ...p, ...formData } : p));
      } else {
        // Création (POST)
        const res = await fetch('http://localhost:8000/api/plannings', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        if (!res.ok) throw new Error('Erreur création');
        const newPlanning = await res.json();
        alert('Planning créé avec succès');
        setPlanningList([...planningList, newPlanning.data]); // ← ici : .data pour récupérer le planning créé
      }
      setEditingPlanning(null);
      setIsFormVisible(false);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleDeleted = (id) => {
    setPlanningList(planningList.filter(p => p.id !== id));
    if (editingPlanning && editingPlanning.id === id) {
      setEditingPlanning(null);
      setIsFormVisible(false);
    }
  };

  const openForm = (planning = null) => {
    setEditingPlanning(planning);
    setIsFormVisible(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-500 to-teal-700 p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-white">Gestion des plannings</h1>

      {!isFormVisible && (
        <button
          onClick={() => openForm(null)}
          className="mb-6 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded"
        >
          + Ajouter un planning
        </button>
      )}

      {isFormVisible ? (
        <PlanningForm
          onSubmit={handleSubmitPlanning}
          planning={editingPlanning || {}}
          isEditing={!!editingPlanning}
        />
      ) : (
        <div>
          {planningList.length === 0 && <p className="text-white">Aucun planning disponible.</p>}
          <ul className="space-y-4">
            {planningList.map(planning => (
              <li
                key={planning.id}
                className="bg-white p-4 rounded shadow flex justify-between items-center"
              >
                <div>
                  <p className="font-semibold text-lg">{planning.title}</p>
                  <p className="text-sm text-gray-600">
                    Du {planning.start_date} {planning.start_time} au {planning.end_date} {planning.end_time}
                  </p>
                  <p className="text-sm text-gray-600">Statut: {planning.status}</p>
                  <p className="text-sm text-gray-600">Lieu: {planning.location}</p>
                  <p className="text-sm text-gray-600">Participants: {(planning.participants || []).join(', ')}</p>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => openForm(planning)}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-1 rounded"
                  >
                    Éditer
                  </button>
                  <DeleteButton planningId={planning.id} onDeleted={() => handleDeleted(planning.id)} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
