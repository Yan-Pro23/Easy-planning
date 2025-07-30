import React, { useState, useEffect } from 'react';

export default function PlanningForm({ onSubmit, planning = {}, isEditing = false }) {
  const [formData, setFormData] = useState({
    nom: planning.title || '',
    description: planning.description || '',
    date_debut: planning.start_date || '',
    date_fin: planning.end_date || '',
    heure_debut: planning.start_time || '08:00',
    heure_fin: planning.end_time || '17:00',
    location: planning.location || '',
    participants: planning.participants ? planning.participants.join(', ') : '',
  });

  const [equipes, setEquipes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/equipes')
      .then(res => res.json())
      .then(data => setEquipes(data))
      .catch(console.error);
  }, []);

  useEffect(() => {
    setFormData({
      nom: planning.title || '',
      description: planning.description || '',
      date_debut: planning.start_date || '',
      date_fin: planning.end_date || '',
      heure_debut: planning.start_time || '08:00',
      heure_fin: planning.end_time || '17:00',
      location: planning.location || '',
      participants: planning.participants ? planning.participants.join(', ') : '',
    });
  }, [planning]);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Convert participants back to an array
    const participantsArray = formData.participants.split(',').map(participant => participant.trim());
    onSubmit({ ...formData, participants: participantsArray });
  };

  return (
    <div className="w-full h-screen bg-gradient-to-r from-teal-500 to-teal-700 flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md w-full max-w-3xl">
        <h2 className="text-2xl font-bold text-center mb-4">{isEditing ? 'Modifier le planning' : 'Créer un planning'}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Nom planning */}
          <div className="col-span-2">
            <label className="block text-gray-700 font-semibold mb-1">📌 Nom planning</label>
            <input
              type="text"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              placeholder="Nom du planning"
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          {/* Description */}
          <div className="col-span-2">
            <label className="block text-gray-700 font-semibold mb-1">📌 Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Description de la réunion"
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          {/* Date début */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">📌 Date de début</label>
            <input
              type="date"
              name="date_debut"
              value={formData.date_debut}
              onChange={handleChange}
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          {/* Date fin */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">📌 Date de fin</label>
            <input
              type="date"
              name="date_fin"
              value={formData.date_fin}
              onChange={handleChange}
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          {/* Heure début */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">📌 Heure de début</label>
            <input
              type="time"
              name="heure_debut"
              value={formData.heure_debut}
              onChange={handleChange}
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          {/* Heure fin */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">📌 Heure de fin</label>
            <input
              type="time"
              name="heure_fin"
              value={formData.heure_fin}
              onChange={handleChange}
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          {/* Lieu */}
          <div className="col-span-2">
            <label className="block text-gray-700 font-semibold mb-1">📌 Lieu</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Lieu de la réunion"
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          {/* Participants */}
          <div className="col-span-2">
            <label className="block text-gray-700 font-semibold mb-1">📌 Participants</label>
            <input
              type="text"
              name="participants"
              value={formData.participants}
              onChange={handleChange}
              placeholder="Participants (séparés par des virgules)"
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>
        </div>

        <div className="mt-6 text-right">
          <button
            type="submit"
            className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-colors duration-200"
          >
            {isEditing ? 'Modifier le planning' : 'Créer le planning'}
          </button>
        </div>
      </form>
    </div>
  );
}