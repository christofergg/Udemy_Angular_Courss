
export interface Passenger {
    name : string;
    children? : string[];
};

const passenger1 : Passenger = {
    name: "Christofer"
};
const passenger2 : Passenger = {
    name: "Cristina",
    children: ['María', 'Noelia']
};

const printChildren = (passenger : Passenger) => {
    const howManyChildren = passenger.children?.length || 0;
    //Si queremos forzar a que siempre va a venir un children se debe definir de la siguiente forma
    //passenger.children!.length

    console.log({ howManyChildren });
}

printChildren(passenger2);
printChildren(passenger1);