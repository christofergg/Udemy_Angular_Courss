
function addNumbers(a: number, b: number) : number {
    return a + b;
};

const addNumbersArrow = (a: number, b: number) : string => {
    return `${a + b}`; //retorna en string la operacion a + b
}

//1er Argumento obligatorio, segundo opcional, tercero opcional con valor por defecto
function multiply (firstNumber : number, secondNumber? : number, base : number = 2) { 
    return firstNumber * base;
}

// const result: number = addNumbers(1, 2);
// const result2: string = addNumbersArrow(1, 2);
// const multiplyResult: number = multiply(5);


interface Character {
    name : string;
    hp: number;
    showHp: () => void;
}

// console.log({ result, result2, multiplyResult });
const healCharacter = (character : Character, amount : number) => {

    character.hp += amount;
    if (character.hp > 100) {
        character.hp = 100;
    }
}

const strider : Character = {
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida ${ this.hp}`)
    },
}

healCharacter(strider, 10);
strider.showHp();
healCharacter(strider, 50);
strider.showHp();