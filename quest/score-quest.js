function scoreQuest(choice, questId, user) {
    user.gold += choice.gold;
    user.hp += choice.hp;
    user.completed[questId] = true;
}

export default scoreQuest;