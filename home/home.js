import makeHero from './make-hero.js';
import { saveUser } from '../data/api.js';

const heroRegistration = document.getElementById('hero-registration');

heroRegistration.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(heroRegistration);

    const user = makeHero(formData);

    saveUser(user);

    window.location = 'map';
});