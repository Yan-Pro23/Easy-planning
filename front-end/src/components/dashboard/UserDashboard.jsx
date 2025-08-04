// src/components/dashboard/UserDashboard.jsx
import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { 
  Calendar, 
  Users, 
  Clock, 
  Bell, 
  Settings, 
  LogOut,
  ChevronDown,
  Home,
  BarChart3,
  FileText
} from 'lucide-react';

const UserDashboard = () => {
  const { user, logout } = useAuth();
  const [showUserMenu, setShowUserMenu] = useState(false);

  const stats = [
    {
      title: 'Plannings cette semaine',
      value: '12',
      change: '+2',
      changeType: 'positive',
      icon: Calendar,
      color: 'bg-blue-500'
    },
    {
      title: 'Heures travaillées',
      value: '38h',
      change: '+4h',
      changeType: 'positive',
      icon: Clock,
      color: 'bg-green-500'
    },
    {
      title: 'Équipiers',
      value: '8',
      change: '+1',
      changeType: 'positive',
      icon: Users,
      color: 'bg-purple-500'
    },
    {
      title: 'Notifications',
      value: '3',
      change: 'nouvelles',
      changeType: 'neutral',
      icon: Bell,
      color: 'bg-orange-500'
    }
  ];

  const recentActivities = [
    {
      id: 1,
      type: 'planning',
      title: 'Planning mise à jour',
      description: 'Votre planning pour demain a été modifié',
      time: 'Il y a 2h',
      status: 'info'
    },
    {
      id: 2,
      type: 'team',
      title: 'Nouveau coéquipier',
      description: 'Marie Dubois a rejoint votre équipe',
      time: 'Il y a 4h',
      status: 'success'
    },
    {
      id: 3,
      type: 'reminder',
      title: 'Rappel',
      description: 'Réunion équipe à 14h aujourd\'hui',
      time: 'Il y a 6h',
      status: 'warning'
    }
  ];

  const quickActions = [
    {
      title: 'Voir mon planning',
      description: 'Consultez votre planning de la semaine',
      icon: Calendar,
      color: 'bg-blue-500 hover:bg-blue-600',
      action: () => console.log('Voir planning')
    },
    {
      title: 'Demander congé',
      description: 'Faire une demande de congé ou absence',
      icon: FileText,
      color: 'bg-green-500 hover:bg-green-600',
      action: () => console.log('Demander congé')
    },
    {
      title: 'Contacter équipe',
      description: 'Envoyer un message à votre équipe',
      icon: Users,
      color: 'bg-purple-500 hover:bg-purple-600',
      action: () => console.log('Contacter équipe')
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo et navigation */}
            <div className="flex items-center">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-teal-500 rounded-full mr-3"></div>
                <h1 className="text-xl font-bold text-gray-800">Easy Planning</h1>
              </div>
              
              {/* Menu navigation */}
              <div className="hidden md:ml-8 md:flex md:space-x-8">
                <a href="#" className="flex items-center px-3 py-2 text-teal-600 font-medium">
                  <Home className="w-4 h-4 mr-2" />
                  Accueil
                </a>
                <a href="#" className="flex items-center px-3 py-2 text-gray-600 hover:text-gray-900">
                  <Calendar className="w-4 h-4 mr-2" />
                  Planning
                </a>
                <a href="#" className="flex items-center px-3 py-2 text-gray-600 hover:text-gray-900">
                  <Users className="w-4 h-4 mr-2" />
                  Équipe
                </a>
                <a href="#" className="flex items-center px-3 py-2 text-gray-600 hover:text-gray-900">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Rapports
                </a>
              </div>
            </div>

            {/* Notifications et profil */}
            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <button className="relative p-2 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-full">
                <Bell className="w-6 h-6" />
                <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
              </button>

              {/* Menu utilisateur */}
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center space-x-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-lg p-2"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                    {user.prenom[0]}{user.nom[0]}
                  </div>
                  <div className="hidden md:block text-left">
                    <p className="text-gray-700 font-medium">{user.prenom} {user.nom}</p>
                    <p className="text-xs text-gray-500 capitalize">{user.role}</p>
                  </div>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </button>

                {/* Dropdown menu */}
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border">
                    <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <Settings className="w-4 h-4 mr-3" />
                      Paramètres
                    </a>
                    <button
                      onClick={logout}
                      className="flex items-center w-full px-4 py-2 text-sm text-red-700 hover:bg-red-50"
                    >
                      <LogOut className="w-4 h-4 mr-3" />
                      Déconnexion
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Contenu principal */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* En-tête */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Bonjour, {user.prenom} ! 👋
            </h2>
            <p className="mt-2 text-gray-600">
              Voici un aperçu de votre activité aujourd'hui
            </p>
          </div>

          {/* Statistiques */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6 border">
                <div className="flex items-center">
                  <div className={`${stat.color} p-3 rounded-lg`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4 flex-1">
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <div className="flex items-center">
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      <span className={`ml-2 text-sm ${
                        stat.changeType === 'positive' ? 'text-green-600' : 
                        stat.changeType === 'negative' ? 'text-red-600' : 'text-gray-600'
                      }`}>
                        {stat.change}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Actions rapides */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm p-6 border">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Actions rapides</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {quickActions.map((action, index) => (
                    <button
                      key={index}
                      onClick={action.action}
                      className={`${action.color} text-white p-6 rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-opacity-50`}
                    >
                      <action.icon className="w-8 h-8 mb-3" />
                      <h4 className="font-semibold mb-2">{action.title}</h4>
                      <p className="text-sm opacity-90">{action.description}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Activités récentes */}
            <div>
              <div className="bg-white rounded-xl shadow-sm p-6 border">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Activités récentes</h3>
                <div className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="flex items-start space-x-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        activity.status === 'success' ? 'bg-green-500' :
                        activity.status === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                      }`}></div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                        <p className="text-sm text-gray-600">{activity.description}</p>
                        <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-4 text-sm text-teal-600 hover:text-teal-700 font-medium">
                  Voir toutes les activités
                </button>
              </div>
            </div>
          </div>

          {/* Planning de la semaine */}
          <div className="mt-8">
            <div className="bg-white rounded-xl shadow-sm p-6 border">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Planning de la semaine</h3>
                <button className="text-teal-600 hover:text-teal-700 font-medium text-sm">
                  Voir le planning complet
                </button>
              </div>
              
              <div className="grid grid-cols-7 gap-4">
                {['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'].map((day, index) => (
                  <div key={day} className="text-center">
                    <div className="text-sm font-medium text-gray-600 mb-2">{day}</div>
                    <div className={`h-20 rounded-lg border-2 border-dashed ${
                      index < 5 ? 'border-teal-300 bg-teal-50' : 'border-gray-200 bg-gray-50'
                    } flex items-center justify-center`}>
                      {index < 5 ? (
                        <div className="text-xs text-teal-700 font-medium">
                          9h-17h
                        </div>
                      ) : (
                        <div className="text-xs text-gray-400">
                          Repos
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserDashboard;