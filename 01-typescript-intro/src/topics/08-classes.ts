export class Person {
    public phone? : string;

    constructor(
        public name : string, 
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

const ironMan: Person = new Hero('IronMan', 45, 'Tony Stark');
ironMan.phone = '656666666';

console.log(ironMan);