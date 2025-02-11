import {Product, taxCalculation} from "./06-function-destructuring"

const shoppingCart :Product[] = [
    {
        description: "Nokia 1000",
        price: 100
    },
    {
        description: "Ipad",
        price: 150
    }
];

const [total,  taxTotal] = taxCalculation({
    tax: 0.15,
    products: shoppingCart
});


console.log('Total', total);
console.log('Tax', taxTotal);