# EcoRide - Plateforme de Covoiturage Écologique

## Prérequis
- PHP 8.1+
- Symfony 6.3
- Composer
- MySQL

## Installation
1. Cloner le dépôt
2. Installer les dépendances : `composer install`
3. Configurer le .env
4. Créer la base de données : `php bin/console doctrine:database:create`
5. Lancer les migrations : `php bin/console doctrine:migrations:migrate`

## Démarrage du serveur
`symfony server:start`

## Structure du projet
- `src/` : Logique de l'application
- `templates/` : Vues Twig
- `config/` : Configuration