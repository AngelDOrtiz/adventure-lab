export default quests;

const spidergolem = {
    id: 'spidergolem',
    title: `The Golemancer's Spider`
    map: {
        top: '28%',
        left: '64%'
    },
    image: 'spidergolem.jpg',
    description: `While making your way through the jungle in search for treasure, you notice that you have a follower in the shadows of the canopy.
                The Spider Golemancer has set up shop in this jungle and their watchdog has found you. What do you do?`,
    choices: [{
        id: 'confuse',
        description: 'Try to confuse the construct',
        result: 'You bombard the monster with a flash of skill and use his momentary confusion to slip away',
        hp: 0,
        gold: 0
    },
    
    {
        id: 'repel',
        description: 'Destroy the branch',
        result: 'You conjure a great force towards the construct. You destroy te branch that the golem was on, causing the golem to fall. It drops some gold',
        hp: 0,
        gold: 20
    },

    {
        id: 'block',
        description: 'Block its attack',
        result: 'You put up your defensive measures and attempt to block the creature. It is too strong',
        hp: -15,
        gold: 0
    },

    {
        id: 'rush',
        description: 'Go on the offensive',
        result: 'You engage the construct before it gets a chance to attack. After some scrapes and bruises, you come out victorious and wealthier than pre-golem you.',
        hp: -10,
        gold: 30
    }]
};

const chromaland = {
    id: 'chromaland',
    title: `The World of Colors`
    map: {
        top: '74%',
        left: '39%'
    },
    image: 'chromaland.jpg',
    description: `After stepping through a portal, you find yourself stuck in the World of Colors. You appear in the middle of a now curious robot's camp.`,
    choices: [{
        id: 'attack',
        description: 'Assault the curious robot',
        result: `You begin to lunge at the robot. What is wrong with you? He was just vibing? Also, they're a robot and strong. You get rocked.`,
        hp: -40,
        gold: 0
    },
    
    {
        id: 'ask',
        description: 'Ask for help returning',
        result: `You ask the robot for help getting back to your own realm. They tell you how to return and you tip them for their help.`,
        hp: 0,
        gold: -10
    },

    {
        id: 'stereo',
        description: 'Nice stereo',
        result: `"Nice stereo", you say. You and the robot party in the irridescent sunset.
        They send you back to your realm with a small coin pouch that they have no need for.`,
        hp: 10,
        gold: 30
    },

    {
        id: 'leave',
        description: 'Leave the camp',
        result: `You decide that you can find your way back home on your own. The robot watches you walk away without saying anything to it.
        You wander the World or Colors for a bit but eventually you find your way home. Exhausted`,
        hp: -20,
        gold: 0
    }]
};

const lampMerchant = {
    id: 'lampMerchant',
    title: `The Lamp Merchant`
    map: {
        top: '18%',
        left: '52%'
    },
    image: 'lampMerchant.jpg',
    description: `As you walk the streets of the citadel, you hear a faint clinking from the shadows that slowly manifests into a floaty djinn.
    "Greetings, friend. Could I interest you in a relic?", it says, almost chiming each word.`,
    choices: [{
        id: 'red',
        description: 'Choose the red lamp.',
        result: `You choose the red lamp with the anvil motif. A powerfully evil djinn appears from the lamp.
        "I"M FREEEEEEEE", it yells, as it takes your gold and teleports away. The mercant shrugs.`,
        hp: 0,
        gold: -30
    },
    
    {
        id: 'blue',
        description: 'Choose the blue lamp',
        result: `You choose the blue lamp with a cold fire burning inside it. A benevolent djinn sprouts from the lamp and gives you a monetary blessing.
        The merchant gives you a thumbs up.`,
        hp: 0,
        gold: 30
    },

    {
        id: 'green',
        description: 'Choose the green lamp',
        result: `You choose the elephant shaped green lamp. A caring djinn appears and heals your wounds (if any).
        The merchant sways and chimes.`,
        hp: 40,
        gold: 0
    },

    {
        id: 'leave',
        description: 'Leave the merchant',
        result: `Without removing your eyes off the merchant, you back away slowly. The merchant is dejected. How will they feed their family. You leave.`,
        hp: 0,
        gold: 0
    }]
};

const quests = [
    spidergolem,
    chromaland,
    lampMerchant,
];

