import React, { useState, useEffect } from 'react';

import {
  fetchUpcomingPlanning,
  fetchTodayAbsences,
  fetchPlanningConflicts,
  fetchNotifications
} from '../api/api'; // ajuste le chemin selon ton arborescence

function Dashboard() {
  useEffect(() => {
    fetchTodayAbsences()
      .then(data => console.log('Absences du jour:', data))
      .catch(error => console.error('Erreur absences:', error));

    fetchPlanningConflicts()
      .then(data => console.log('Conflits de planning:', data))
      .catch(error => console.error('Erreur conflits:', error));

    fetchNotifications()
      .then(data => console.log('Notifications:', data))
      .catch(error => console.error('Erreur notifications:', error));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Tableau de Bord</h1>
      {/* Le reste de ton affichage */}
    </div>
  );
}

// Icônes SVG simples pour remplacer lucide-react
const Icons = {
  BarChart3: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  Calendar: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  Users: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  Book: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
  UserX: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7a4 4 0 11-8 0 4 4 0 018 0zM9 14a6 6 0 00-6 6v1h12v-1a6 6 0 00-6-6zM21 12h-6" />
    </svg>
  ),
  Bell: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM11.049 2.927C11.049 1.862 11.86 1 12.871 1s1.822.862 1.822 1.927-1.86 1.927-1.822 1.927-1.822-.862-1.822-1.927zM18.364 5.636L16.95 7.05A7.036 7.036 0 0019 12c0 3.866-3.134 7-7 7s-7-3.134-7-7a7.036 7.036 0 002.05-4.95L5.636 5.636a9 9 0 1012.728 0z" />
    </svg>
  ),
  Settings: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  Plus: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
    </svg>
  ),
  AlertTriangle: () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
    </svg>
  )
};

const EasyPlanningDashboard = () => {
  const [activeTab, setActiveTab] = useState('tableau-de-bord');
  
  // États pour toutes les données dynamiques
  const [planningAvenir, setPlanningAvenir] = useState(null);
  const [absencesJour, setAbsencesJour] = useState([]);
  const [conflits, setConflits] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const menuItems = [
    { id: 'tableau-de-bord', icon: Icons.BarChart3, label: 'Tableau de bord', path: '/dashboard' },
    { id: 'planning', icon: Icons.Calendar, label: 'Planning', path: '/planning' },
    { id: 'equipes', icon: Icons.Users, label: 'Équipes', path: '/equipes' },
    { id: 'resources', icon: Icons.Book, label: 'Resources', path: '/resources' },
    { id: 'absences', icon: Icons.UserX, label: 'Absences', path: '/absences' },
    { id: 'notifications', icon: Icons.Bell, label: 'Notifications', path: '/notifications' },
    { id: 'rapports', icon: Icons.BarChart3, label: 'Rapports', path: '/rapports' },
    { id: 'parametres', icon: Icons.Settings, label: 'Paramètres', path: '/parametres' },
  ];

  // Fonction pour charger toutes les données du dashboard
  const fetchDashboardData = async () => {
  setIsLoading(true);
  try {
    const [planningData, absencesData, conflitsData, notificationsData] = await Promise.all([
      fetchUpcomingPlanning(),
      fetchTodayAbsences(),
      fetchPlanningConflicts(),
      fetchNotifications()
    ]);

    setPlanningAvenir(planningData);
    setAbsencesJour(absencesData);
    setConflits(conflitsData);
    setNotifications(notificationsData);

  } catch (error) {
    console.error('Erreur lors du chargement des données :', error);
  } finally {
    setIsLoading(false);
  }
};

  // Charger les données au montage du composant
  useEffect(() => {
    fetchDashboardData();
  }, []);

  // Fonction pour rendre le contenu selon l'onglet actif
  const renderContent = () => {
    switch(activeTab) {
      case 'tableau-de-bord':
        return (
          <>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">RÉSUMÉ DU PLANNING</h2>
            
            {isLoading ? (
              <div className="text-center py-12">
                <p className="text-gray-500">Chargement du tableau de bord...</p>
              </div>
            ) : (
              <>
                {/* Planning Cards avec données dynamiques */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-3 gap-6 mb-8">
                  
                  {/* Planning à venir - Données de l'employé connecté */}
                  <div className="bg-white rounded-lg p-6 shadow-sm border">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Planning à venir</h3>
                    
                    {planningAvenir ? (
                      <>
                        <div className="space-y-2 text-sm text-gray-600">
                          <p>{planningAvenir.service}</p>
                          <p>{planningAvenir.horaires}</p>
                          <p>{planningAvenir.equipe}</p>
                        </div>
                        <div className="mt-4">
                          <input type="checkbox" className="mr-2" checked={planningAvenir.disponible} readOnly />
                          <label className="text-sm text-gray-600">Disponible</label>
                        </div>
                        <a 
                          href="/planning-avenir" 
                          className="mt-4 bg-teal-600 text-white px-4 py-2 rounded text-sm hover:bg-teal-700 transition-colors inline-block text-center"
                        >
                          VOIR PLUS
                        </a>
                      </>
                    ) : (
                      <div className="text-center py-8">
                        <Icons.Calendar />
                        <p className="text-gray-500 mt-2">Aucun planning programmé</p>
                        <p className="text-sm text-gray-400">Votre prochain shift apparaîtra ici</p>
                      </div>
                    )}
                  </div>

                  {/* Absent ce jour - Données des collègues/équipe */}
                  <div className="bg-teal-600 rounded-lg p-6 text-white">
                    <h3 className="text-lg font-semibold mb-4">Absent ce jour</h3>
                    
                    {absencesJour.length > 0 ? (
                      <>
                        <div className="space-y-2 text-sm">
                          {absencesJour.slice(0, 1).map((absence, index) => (
                            <div key={index}>
                              <p>{absence.date}</p>
                              <p>{absence.nom}</p>
                              <p>{absence.service}</p>
                              <p>{absence.raison}</p>
                            </div>
                          ))}
                          {absencesJour.length > 1 && (
                            <p className="text-xs">+{absencesJour.length - 1} autre(s)</p>
                          )}
                        </div>
                        <a 
                          href="/absences-jour" 
                          className="mt-4 bg-white text-teal-600 px-4 py-2 rounded text-sm hover:bg-gray-100 transition-colors inline-block text-center"
                        >
                          VOIR PLUS
                        </a>
                      </>
                    ) : (
                      <div className="text-center py-8">
                        <Icons.Users />
                        <p className="text-white mt-2">Aucune absence aujourd'hui</p>
                        <p className="text-sm text-teal-100">Toute l'équipe est présente</p>
                      </div>
                    )}
                  </div>

                  {/* Conflits - Alertes système */}
                  <div className="bg-orange-500 rounded-lg p-6 text-white">
                    <h3 className="text-lg font-semibold mb-4">Conflits</h3>
                    
                    {conflits.length > 0 ? (
                      <>
                        <div className="space-y-2 text-sm">
                          {conflits.slice(0, 1).map((conflit, index) => (
                            <div key={index}>
                              <p>{conflit.type}</p>
                              <p>{conflit.periode}</p>
                              <p>{conflit.description}</p>
                              <p>{conflit.action}</p>
                            </div>
                          ))}
                          {conflits.length > 1 && (
                            <p className="text-xs">+{conflits.length - 1} autre(s) conflit(s)</p>
                          )}
                        </div>
                        <a 
                          href="/conflits-planning" 
                          className="mt-4 bg-white text-orange-500 px-4 py-2 rounded text-sm hover:bg-gray-100 transition-colors inline-block text-center"
                        >
                          VOIR PLUS
                        </a>
                      </>
                    ) : (
                      <div className="text-center py-8">
                        <Icons.AlertTriangle />
                        <p className="text-white mt-2">Aucun conflit détecté</p>
                        <p className="text-sm text-orange-100">Planning sans problème</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Notifications Section - Affichage conditionnel */}
                <div className="bg-white rounded-lg shadow-sm border">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-6">Dernières notifications</h3>
                    
                    {notifications.length > 0 ? (
                      <div className="space-y-4">
                        {notifications.slice(0, 3).map((notification, index) => (
                          <div key={index} className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-gray-800 shadow-sm font-medium mb-2">{notification.message}</p>
                            <div className="text-sm text-gray-600 space-y-1">
                              <p>{notification.time} | {notification.team}</p>
                              <p>{notification.received}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <div className="flex justify-center text-gray-400 mb-2">
                          <Icons.Bell />
                        </div>
                        <p className="text-gray-500">Aucune notification pour le moment</p>
                        <p className="text-sm text-gray-400 mt-1">
                          Les nouvelles notifications apparaîtront ici
                        </p>
                      </div>
                    )}

                    <div className="mt-6 flex gap-4">
                      <a 
                        href="/formulaire de planning   " 
                        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center space-x-2"
                      >
                        <Icons.Plus />
                        <span>Créer un nouveau planning</span>
                      </a>
                      {notifications.length > 0 && (
                        <a 
                          href="/toutes-notifications" 
                          className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                        >
                          Voir toutes les notifications
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </>
            )}
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b w-full bg-teal-600">
        <div className="flex items-center px-4 py-3">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full flex items-center justify-center">
              <img src="/logo.png" alt="Easy Planning Logo" className="w-[118px] h-[100] rounded-full object-cover" />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-teal-600">Easy</h1>
              <p className="text-lg font-semibold text-teal-600">Planning</p>
            </div>
          </div>
          <nav className="ml-12 flex space-x-8 ml-40">
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Dashboard</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Plannings</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Équipes</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Ressources</a>
          </nav>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-teal-600 min-h-screen">
          <nav className="p-4">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = item.id === activeTab;
              return (
                <a
                  key={item.id}
                  href={item.path}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg mb-2 cursor-pointer transition-colors block ${
                    isActive 
                      ? 'bg-orange-500 text-white' 
                      : 'text-white hover:bg-teal-700'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab(item.id);
                    console.log(`Navigation vers: ${item.path}`);
                  }}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </a>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="max-w-6xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default EasyPlanningDashboard;