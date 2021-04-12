import createQuestLink from './create-quest-links.js';
import hasCompletedAllquests from './has-completed-all-quests.js';
import createCompletedQuest from './create-completed-quest.js';
import loadProfile from '../common/load-profile.js';
import isDead from '../common/is-dead.js';
import { getUser } from '../data/api.js';
import quests from '../data/quest-data.js';

loadProfile();

const user = getUser();

if (isDead(user) || hasCompletedAllquests(quests, user)) {
    window.location = '../results';
}

const nav = document.getElementById('quests');

for (let i = 0; i < quests.length; i++) {
    const quest = quests[i];
    let questDisplay = null;

    if (user.completed[quest.id]) {
        questDisplay = createCompletedQuest(quest);
    }
    else {
        questDisplay = createQuestLink(quest);
    }
    nav.appendChild(questDisplay);
}