interface Product {
    description: string;
    price: number;
}

const phone : Product = {
    description: "Nokia A1",
    price: 150.0
}

const tablet : Product = {
    description: "Ipad Air",
    price: 250.0
}

const shoppingCart = [phone, tablet];
const tax : number = 0.15;

//Ejercicio Destructuración
interface taxCalculationOptions {
    tax: number;
    products: Product[];
}

function taxCalculation ( options : taxCalculationOptions ) : [number, number] {
    let total = 0;
    //se puede destructurar options en los elementos necesarios
    const { tax, products } = options;
    //de products directamente necestiamos el price -> ({price})
    products.forEach( ({price}) => {
        total += price;
    });
    return [total, total * tax];
}

const result = taxCalculation({
    tax,
    products: shoppingCart
});

const [total, taxTotal] = result
console.log('Total', total);
console.log('Tax', taxTotal);