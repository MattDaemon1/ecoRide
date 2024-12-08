import { startStimulusApp } from '@symfony/stimulus-bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

const app = startStimulusApp();
// register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);
// assets/bootstrap.js
import * as bootstrap from 'bootstrap';

// Vous pouvez initialiser des composants Bootstrap ici si nécessaire
document.addEventListener('DOMContentLoaded', () => {
    // Exemple : Initialisation des tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });

    // Autres initialisations de composants si nécessaire
});