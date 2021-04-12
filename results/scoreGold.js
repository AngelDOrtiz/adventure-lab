function scoreGold(gold) {
    if (gold === 40) {
        return 'even';
    }
    if (gold > 40) {
        return 'richer';
    }
    if (gold < 40) {
        return 'poorer';
    }
}

export default scoreGold;