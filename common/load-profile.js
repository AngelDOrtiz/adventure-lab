import { getUser } from '../data/api.js';
import isDead from './is-dead.js';

function loadProfile() {
    const name = document.getElementById('name');
    const avatar = document.getElementById('avatar');
    const hp = document.getElementById('hp');
    const gold = document.getElementById('gold');

    const user = getUser();

    if (!user) {
        window.location = './';
    }

    name.textContent = user.name;
    avatar.src = '../assets/avatars/' + user.spec + '.jpg';
    gold.textContent = user.gold;

    if (isDead(user)) {
        hp.textContent = 'Your adventure has ended';
    }
    else {
        hp.textContent = user.hp;
    }
}

export default loadProfile;