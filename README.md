# Easy-planning
Application de gestion de planification
Cahier des Charges : Application de
Gestion de Planification: Easy Planning
1. Contexte
L'entreprise souhaite mettre en place une solution de gestion du
planning pour centraliser et automatiser la planification des employés,
des ressources et des tâches. Cette application doit permettre une
gestion efficace des horaires de travail, des congés, et de la disponibilité
des collaborateurs, tout en offrant une visibilité claire aux gestionnaires
et aux équipes.
2. Objectifs
L'objectif principal de l'application de gestion du planning est d'organiser
les emplois du temps de manière optimisée, avec des fonctionnalités de:
● Création et gestion des plannings de travail des employés.
● Suivi des disponibilités et des absences.
● Automatisation des notifications et rappels de planning.
● Coordination entre différents services et projets.
● Intégration des congés et des absences dans le planning.
3. Fonctionnalités
3.1 Module de Création et Gestion de Planning
● Création des plannings avec définition des jours et horaires de
travail.
● Gestion des shifts (horaires décalés, travail de nuit, etc.).
● Répartition des employés sur différents créneaux en fonction de
leur disponibilité.
● Liaison avec l’application Calendar pour afficher les plannings sur
un calendrier global.
● Possibilité de dupliquer les plannings pour plusieurs jours ou
semaines.
3.2 Gestion des Disponibilités et Absences
● Intégration avec l’application EASY Leave pour tenir compte des
congés, absences maladie, RTT.
● Mise à jour automatique des disponibilités en fonction des
absences validées.
● Suivi en temps réel de la disponibilité des collaborateurs.
● Possibilité de marquer les employés comme "non disponibles" sur
certaines périodes spécifiques.
3.3 Notifications et Rappels
● Envoi de notifications automatiques aux employés pour leur
rappeler leur prochain shift.
● Rappels de changements ou de modifications dans le planning.
● Notifications aux gestionnaires lors des conflits de planning ou en
cas de besoins en personnel non couverts.
● Personnalisation des notifications (email, SMS, notification).
3.4 Gestion des Ressources
● Attribution des ressources matérielles (véhicules, équipements) en
fonction du planning.
● Visualisation de la disponibilité des ressources et affectation aux
créneaux de travail.
● Gestion des conflits d’utilisation des ressources (matériel ou salle
réservé à plusieurs événements simultanément).
3.5 Coordination Inter-Équipes
● Coordination des plannings entre plusieurs équipes ou
départements.
● Suivi des disponibilités croisées pour les projets nécessitant
plusieurs collaborateurs.
● Planification multi-sites pour les entreprises avec plusieurs lieux de
travail.
3.6 Intégration des Congés et Absences
● Liaison automatique avec les demandes de congés validées.
● Prise en compte des absences dans la planification et
réajustement des équipes disponibles.
● Option de planification automatique pour remplacer les employés
absents.
3.7 Tableau de Bord et Reporting
● Dashboard pour visualiser l’occupation des collaborateurs, les
absences, les surcharges de travail.
● Graphiques sur les heures travaillées par employé, équipe ou
service.
● Export des plannings et rapports au format Excel ou PDF pour les
gestionnaires.
● Historique des plannings précédents et archivage pour analyse
future.
4. Sécurité et Gestion des Rôles
● Accès restreint en fonction des rôles : gestionnaires de planning,
responsables RH, employés.
● Droits spécifiques pour la création, modification, et suppression
des plannings.
● Possibilité pour les employés de consulter uniquement leur
planning sans modification.
● Journalisation des actions effectuées sur les plannings pour suivre
les modifications.
5. Intégration avec les autres applications
● EASY Leave : pour synchroniser les congés et absences dans les
plannings.
● Calendar : pour visualiser les plannings et shifts sur un calendrier
global.
● HR : pour la gestion des employés et des ressources humaines.
● Project : pour planifier les ressources sur les projets.
6. Contraintes Techniques
● L'application doit s'intégrer facilement avec les autres modules
Odoo sans nécessiter de modifications majeures.
● Elle doit être optimisée pour un usage multi-site et multi-utilisateur.
● Le système doit pouvoir gérer un volume important de données
sans dégradation des performances.
7. Critères de Validation
● L’application doit permettre de créer, modifier et visualiser les
plannings de travail de manière fluide.
● Les notifications et rappels doivent fonctionner automatiquement
et de manière fiable.
● Les employés doivent pouvoir consulter leur emploi du temps et
recevoir des notifications en temps réel.
● La gestion des absences et des ressources doit être prise en
compte dans le calcul des plannings.
● Les rapports et tableaux de bord doivent être clairs et exportables
facilement.


Users Stories - Easy Planning
User Stories Backend
1. Création d'un planning
User Story : En tant qu'administrateur, je veux pouvoir créer un planning afin de définir les horaires de travail des employés.
Tâches Backend :
Créer le modèle Planning avec les champs requis (nom, date, horaires, employés assignés).
Implémenter l'API pour la création de plannings.
Gérer la validation des informations envoyées (horaires, disponibilité).
Critères de Validation :
Un planning peut être créé avec les informations complètes.
La validation des horaires est effectuée.
2. Modification d'un planning
User Story : En tant qu'administrateur, je veux pouvoir modifier un planning afin de mettre à jour les horaires.
Tâches Backend :
Implémenter l'API pour mettre à jour un planning existant.
Critères de Validation :
Les détails du planning peuvent être modifiés.
3. Suppression d'un planning
User Story : En tant qu'administrateur, je veux pouvoir supprimer un planning afin de retirer les plannings obsolètes.
Tâches Backend :
Implémenter l'API pour supprimer un planning.
Critères de Validation :
Le planning est supprimé de la base de données.
4. Intégration des absences
User Story : En tant qu'administrateur, je veux que les congés et absences soient intégrés dans le planning.
Tâches Backend :
Intégrer le module EASYLeave pour synchroniser les congés avec le planning.
Implémenter l'API pour mettre à jour les plannings en fonction des absences.
Critères de Validation :
Les absences sont intégrées au planning.
5. Attribution des ressources
User Story : En tant qu'administrateur, je veux pouvoir attribuer des ressources matérielles aux plannings.
Tâches Backend :
Créer le modèle "Ressources" et les lier aux plannings.
Implémenter l'API pour associer les ressources aux plannings.
Critères de Validation :
Les ressources sont associées correctement aux plannings.
6. Envoi de notifications automatiques
User Story : En tant qu'administrateur, je veux que les employés soient notifiés de leur planning par email.
Tâches Backend :
Intégrer le système de notification avec les emails.
Mettre en place des rappels automatiques.
Critères de Validation :
Les notifications sont envoyées après la création ou la modification d'un planning.
7. Gestion des conflits
User Story : En tant qu'administrateur, je veux être averti des conflits dans le planning.
Tâches Backend :
Implémenter un système pour détecter et signaler les conflits.
Critères de Validation :
Les conflits de disponibilité sont signalés en temps réel.
User Stories Frontend
1. Formulaire de création de planning
User Story : En tant qu'administrateur, je veux un formulaire pour créer un planning.
Tâches Frontend :
Créer un formulaire avec les champs nécessaires (nom, date, horaires, employés).
Connecter le formulaire à l'API backend.
Critères de Validation :
Le formulaire permet de saisir toutes les informations nécessaires.
Les erreurs de validation s’affichent.
2. Interface de modification de planning
User Story : En tant qu'administrateur, je veux une interface pour modifier un planning.
Tâches Frontend :
Créer une page de modification avec données pré-remplies.
Connecter la page à l'API backend.
Critères de Validation :
Les champs sont pré-remplis.
Les modifications sont sauvegardées.
3. Interface de suppression de planning
User Story : En tant qu'administrateur, je veux une option pour supprimer un planning.
Tâches Frontend :
Ajouter un bouton de suppression dans l’interface de gestion des plannings.
Connecter le bouton à l'API backend.
Critères de Validation :
Un message de confirmation s’affiche avant la suppression.
4. Affichage des plannings
User Story : En tant qu'administrateur, je veux voir la liste des plannings.
Tâches Frontend :
Créer une page listant les plannings avec pagination et filtres.
Intégrer des filtres par date, équipe, et employé.
Critères de Validation :
La liste des plannings s’affiche correctement.
Les plannings peuvent être filtrés.
5. Notification de planning
User Story : En tant qu'employé, je veux recevoir une notification de mes prochains shifts.
Tâches Frontend :
Mettre en place des notifications (email et pop-up).
Afficher un rappel automatique dans l’interface utilisateur.
Critères de Validation :
Les notifications sont affichées dans l'interface.
6. Visualisation des plannings sur un calendrier
User Story : En tant qu'administrateur, je veux voir les plannings sous forme de calendrier.
Tâches Frontend :
Intégrer un calendrier interactif affichant les plannings.
Permettre de cliquer sur un planning pour voir les détails.
Critères de Validation :
Les plannings sont correctement affichés dans le calendrier.