function scoreHp(hp) {
    if (hp <= 0) {
        return 'dead';
    }
    if (hp < 20) {
        return 'bruised';
    }
    return 'healthy';
}

export default scoreHp;