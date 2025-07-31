import React, { useState, useEffect } from 'react';

export default function PlanningForm({ onSubmit, planning = {}, isEditing = false }) {
  const [formData, setFormData] = useState({
    title: planning.title || '',
    description: planning.description || '',
    start_date: planning.start_date || '',
    end_date: planning.end_date || '',
    start_time: planning.start_time || '08:00',
    end_time: planning.end_time || '17:00',
    location: planning.location || '',
    participants: planning.participants ? planning.participants.join(', ') : '',
    status: planning.status || 'active', // Par défaut
  });

  useEffect(() => {
    setFormData({
      title: planning.title || '',
      description: planning.description || '',
      start_date: planning.start_date || '',
      end_date: planning.end_date || '',
      start_time: planning.start_time || '08:00',
      end_time: planning.end_time || '17:00',
      location: planning.location || '',
      participants: planning.participants ? planning.participants.join(', ') : '',
      status: planning.status || 'active',
    });
  }, [planning]);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const participantsArray = formData.participants
      ? formData.participants.split(',').map(p => p.trim()).filter(Boolean)
      : [];

    onSubmit({ ...formData, participants: participantsArray });
  };

  return (
    <div className="w-full h-screen bg-gradient-to-r from-teal-500 to-teal-700 flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md w-full max-w-3xl">
        <h2 className="text-2xl font-bold text-center mb-4">{isEditing ? 'Modifier le planning' : 'Créer un planning'}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Nom (title) */}
          <div className="col-span-2">
            <label className="block text-gray-700 font-semibold mb-1">📌 Nom du planning</label>
            <input
              type="text"
              name="title"
              value={formData.title}
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

          {/* Dates */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">📌 Date de début</label>
            <input
              type="date"
              name="start_date"
              value={formData.start_date}
              onChange={handleChange}
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">📌 Date de fin</label>
            <input
              type="date"
              name="end_date"
              value={formData.end_date}
              onChange={handleChange}
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          {/* Heures */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">📌 Heure de début</label>
            <input
              type="time"
              name="start_time"
              value={formData.start_time}
              onChange={handleChange}
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">📌 Heure de fin</label>
            <input
              type="time"
              name="end_time"
              value={formData.end_time}
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

          {/* Statut */}
          <div className="col-span-2">
            <label className="block text-gray-700 font-semibold mb-1">📌 Statut</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            >
              <option value="active">Actif</option>
              <option value="inactive">Inactif</option>
              <option value="completed">Terminé</option>
            </select>
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
