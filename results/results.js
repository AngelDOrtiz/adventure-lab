import scoreGold from './scoreGold.js';
import scoreHp from './scoreHP.js';
import { hpMessages, aliveGoldMessages, deadGoldMessages } from './messages.js';
import { getUser } from '../data/api.js';
import loadProfile from '../common/load-profile.js';

loadProfile();

const user = getUser();
const storyDisplay = document.getElementById('story-display');
const hpResult = scoreHp(user.hp);
const hpMessage = hpMessages[hpResult];
const goldResult = scoreGold(user.gold);

let goldMessages = null;
if (hpResult === 'dead') {
    goldMessages = deadGoldMessages;
}
else {
    goldMessages = aliveGoldMessages;
}

const goldMessage = goldMessages[goldResult];

let story = 'You have survived, ';
story += user.name + ' the ' + user.spec + '. ';
story += hpMessage + ' and ' + goldMessage + '.';

storyDisplay.textContent = story;
