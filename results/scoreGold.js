function scoreGold(gold) {
    if (gold === 0) {
        return 'even';
    }
    if (gold > 0) {
        return 'richer';
    }
    if (gold < 0) {
        return 'poorer';
    }
}

export default scoreGold;