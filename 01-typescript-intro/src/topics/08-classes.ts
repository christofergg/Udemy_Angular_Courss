export class Person {
    public phone? : string;

    constructor(
        public name : string, 
        private address : string) {
    }
}

const ironMan: Person = new Person('Christofer', 'Calle False 123');
ironMan.phone = '656666666';

console.log(ironMan);