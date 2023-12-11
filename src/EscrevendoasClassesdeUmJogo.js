class Hero {
    constructor(name, idade, type) {
        this.name = name;
        this.idade = idade;
        this.type = type;
    }
    tackle() {
        const attacks = {
            mage: 'feitiço',
            warrior: 'espada',
            monk: 'artes marcias',
            ninja: 'ninjutsu',
        };
        const attack = attacks[this.type] || 'usou um ataque indefinido';

        console.log(`O ${this.type} ${this.name} atacou usando ${attack} `)

    }

}

let mainHero = new Hero('Cleitin', 100, 'mage');
mainHero.tackle();