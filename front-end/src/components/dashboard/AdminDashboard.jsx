// src/components/dashboard/AdminDashboard.jsx
import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { 
  Users, 
  Calendar, 
  BarChart3, 
  Settings, 
  LogOut,
  ChevronDown,
  Shield,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  UserPlus,
  FileText,
  DollarSign
} from 'lucide-react';

const AdminDashboard = () => {
  const { user, logout } = useAuth();
  const [showUserMenu, setShowUserMenu] = useState(false);

  const adminStats = [
    {
      title: 'Utilisateurs actifs',
      value: '127',
      change: '+12%',
      changeType: 'positive',
      icon: Users,
      color: 'bg-blue-500'
    },
    {
      title: 'Plannings créés',
      value: '89',
      change: '+8%',
      changeType: 'positive',
      icon: Calendar,
      color: 'bg-green-500'
    },
    {
      title: 'Heures planifiées',
      value: '2,340h',
      change: '+15%',  
      changeType: 'positive',
      icon: Clock,
      color: 'bg-purple-500'
    },
    {
      title: 'Efficacité',
      value: '94%',
      change: '+2%',
      changeType: 'positive',
      icon: TrendingUp,
      color: 'bg-orange-500'
    }
  ];

  const recentActions = [
    {
      id: 1,
      type: 'user',
      title: 'Nouvel utilisateur',
      description: 'Jean Martin a créé un compte',
      time: 'Il y a 15 min',
      status: 'success',
      icon: UserPlus
    },
    {
      id: 2,
      type: 'planning',
      title: 'Planning modifié',
      description: 'Équipe Marketing - Planning semaine 47',
      time: 'Il y a 32 min',
      status: 'info',
      icon: Calendar
    },
    {
      id: 3,
      type: 'alert',
      title: 'Conflit détecté',
      description: 'Double affectation détectée pour Marie D.',
      time: 'Il y a 1h',
      status: 'warning',
      icon: AlertTriangle
    },
    {
      id: 4,
      type: 'system',
      title: 'Sauvegarde terminée',
      description: 'Sauvegarde automatique des données',
      time: 'Il y a 2h',
      status: 'success',
      icon: CheckCircle
    }
  ];

  const quickActions = [
    {
      title: 'Gérer les utilisateurs',
      description: 'Ajouter, modifier ou supprimer des comptes',
      icon: Users,
      color: 'bg-blue-500 hover:bg-blue-600',
      action: () => console.log('Gérer utilisateurs')
    },
    {
      title: 'Créer un planning',
      description: 'Nouveau planning pour une équipe',
      icon: Calendar,
      color: 'bg-green-500 hover:bg-green-600',
      action: () => console.log('Créer planning')
    },
    {
      title: 'Voir les rapports',
      description: 'Analyser les performances globales',
      icon: BarChart3,
      color: 'bg-purple-500 hover:bg-purple-600',
      action: () => console.log('Voir rapports')
    },
    {
      title: 'Configuration',
      description: 'Paramètres système et sécurité',
      icon: Settings,
      color: 'bg-orange-500 hover:bg-orange-600',
      action: () => console.log('Configuration')
    }
  ];

  const teams = [
    { name: 'Marketing', members: 12, activeSchedules: 3, status: 'active' },
    { name: 'Développement', members: 8, activeSchedules: 2, status: 'active' },
    { name: 'Support Client', members: 15, activeSchedules: 4, status: 'active' },
    { name: 'Ventes', members: 6, activeSchedules: 2, status: 'inactive' },
    { name: 'RH', members: 4, activeSchedules: 1, status: 'active' }
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
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-teal-500 rounded-full mr-3 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <h1 className="text-xl font-bold text-gray-800">Easy Planning - Admin</h1>
              </div>
              
              {/* Menu navigation */}
              <div className="hidden md:ml-8 md:flex md:space-x-8">
                <a href="#" className="flex items-center px-3 py-2 text-teal-600 font-medium">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Dashboard
                </a>
                <a href="#" className="flex items-center px-3 py-2 text-gray-600 hover:text-gray-900">
                  <Users className="w-4 h-4 mr-2" />
                  Utilisateurs
                </a>
                <a href="#" className="flex items-center px-3 py-2 text-gray-600 hover:text-gray-900">
                  <Calendar className="w-4 h-4 mr-2" />
                  Plannings
                </a>
                <a href="#" className="flex items-center px-3 py-2 text-gray-600 hover:text-gray-900">
                  <FileText className="w-4 h-4 mr-2" />
                  Rapports
                </a>
                <a href="#" className="flex items-center px-3 py-2 text-gray-600 hover:text-gray-900">
                  <Settings className="w-4 h-4 mr-2" />
                  Paramètres
                </a>
              </div>
            </div>

            {/* Profil admin */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center space-x-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-lg p-2"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-red-400 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div className="hidden md:block text-left">
                    <p className="text-gray-700 font-medium">{user.prenom} {user.nom}</p>
                    <p className="text-xs text-red-600 capitalize font-semibold">{user.role}</p>
                  </div>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </button>

                {/* Dropdown menu */}
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border">
                    <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <Settings className="w-4 h-4 mr-3" />
                      Paramètres Admin
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
            <h2 className="text-3xl font-bold text-gray-900 flex items-center">
              <Shield className="w-8 h-8 text-red-500 mr-3" />
              Panneau d'administration
            </h2>
            <p className="mt-2 text-gray-600">
              Gérez l'ensemble de la plateforme Easy Planning
            </p>
          </div>

          {/* Statistiques administrateur */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {adminStats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6 border hover:shadow-md transition-shadow">
                <div className="flex items-center">
                  <div className={`${stat.color} p-3 rounded-lg`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4 flex-1">
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <div className="flex items-center">
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      <span className={`ml-2 text-sm font-medium ${
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
            {/* Actions administrateur */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm p-6 border">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Actions rapides</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {quickActions.map((action, index) => (
                    <button
                      key={index}
                      onClick={action.action}
                      className={`${action.color} text-white p-6 rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-opacity-50 text-left`}
                    >
                      <action.icon className="w-8 h-8 mb-3" />
                      <h4 className="font-semibold mb-2">{action.title}</h4>
                      <p className="text-sm opacity-90">{action.description}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Gestion des équipes */}
              <div className="bg-white rounded-xl shadow-sm p-6 border mt-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Équipes</h3>
                  <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                    Nouvelle équipe
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-2 font-semibold text-gray-700">Équipe</th>
                        <th className="text-left py-3 px-2 font-semibold text-gray-700">Membres</th>
                        <th className="text-left py-3 px-2 font-semibold text-gray-700">Plannings</th>
                        <th className="text-left py-3 px-2 font-semibold text-gray-700">Status</th>
                        <th className="text-left py-3 px-2 font-semibold text-gray-700">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {teams.map((team, index) => (
                        <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-2 font-medium text-gray-900">{team.name}</td>
                          <td className="py-3 px-2 text-gray-600">{team.members}</td>
                          <td className="py-3 px-2 text-gray-600">{team.activeSchedules}</td>
                          <td className="py-3 px-2">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              team.status === 'active' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-gray-100 text-gray-800'
                            }`}>
                              {team.status === 'active' ? 'Actif' : 'Inactif'}
                            </span>
                          </td>
                          <td className="py-3 px-2">
                            <button className="text-teal-600 hover:text-teal-800 text-sm font-medium">
                              Gérer
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Activités récentes */}
            <div>
              <div className="bg-white rounded-xl shadow-sm p-6 border">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Activités récentes</h3>
                <div className="space-y-4">
                  {recentActions.map((activity) => (
                    <div key={activity.id} className="flex items-start space-x-3">
                      <div className={`p-2 rounded-lg ${
                        activity.status === 'success' ? 'bg-green-100' :
                        activity.status === 'warning' ? 'bg-yellow-100' : 'bg-blue-100'
                      }`}>
                        <activity.icon className={`w-4 h-4 ${
                          activity.status === 'success' ? 'text-green-600' :
                          activity.status === 'warning' ? 'text-yellow-600' : 'text-blue-600'
                        }`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                        <p className="text-sm text-gray-600">{activity.description}</p>
                        <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-4 text-sm text-teal-600 hover:text-teal-700 font-medium">
                  Voir tous les événements
                </button>
              </div>

              {/* Alertes système */}
              <div className="bg-white rounded-xl shadow-sm p-6 border mt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Alertes système</h3>
                <div className="space-y-3">
                  <div className="flex items-center p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                    <AlertTriangle className="w-5 h-5 text-yellow-600 mr-3" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-yellow-800">Maintenance programmée</p>
                      <p className="text-xs text-yellow-600">Dimanche 3h-5h</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-blue-800">Système opérationnel</p>
                      <p className="text-xs text-blue-600">Tous les services fonctionnent</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;