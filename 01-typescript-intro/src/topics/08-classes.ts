export class Person {
    public phone? : string;

    constructor(
        public firstName : string, 
        public lastName : string, 
        private address : string = 'Sin dirección') {
    }
}

export class Hero extends Person {
        constructor(
            public alterEgo: string,
            public age: number,
            public realName: string,
        ) {
            super(realName);
        }
}

//se debe priorizar la composición del objeto sobre el nivel de Herencia. por eso en vez de heredar 
//se va a pasar por referencia el objeto. de esta forma la clase NewHero no se ve afectada por los posibles
//cambios de la clase persona.

export class NewHero {
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person
    ) {

    }
}

const tony: Person = new Person('Tony', 'Stark', 'New York');
const ironMan: NewHero = new NewHero('IronMan', 45, 'Tony Stark', tony);

console.log(ironMan);