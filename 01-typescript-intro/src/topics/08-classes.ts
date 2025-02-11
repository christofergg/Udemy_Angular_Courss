export class Person {
    public name : string;
    private address : string;
    public phone? : string;

    constructor(name : string, address : string) {
        this.name = name;
        this.address = address;
    }
}

const ironMan: Person = new Person('Christofer', 'Calle False 123');
ironMan.phone = '656666666';

console.log(ironMan.name)