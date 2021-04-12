function makeHero(formData) {
    const hero = {
        name: formData.get('name'),
        spec: formData.get('spec'),
        hp: 40,
        gold: 0,
        completed: {}
    };

    return hero;
}

export const newMakeHero = (formData) => ({
    name: formData.get('name'),
    spec: formData.get('spec'),
    hp: 40,
    gold: 0,
    completed: {}
});

export default makeHero;