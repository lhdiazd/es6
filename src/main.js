import  Impuesto  from './impuesto.js';
import  Cliente  from './cliente.js';


let impuesto = new Impuesto(2500000, 100000);

let cliente1 = new Cliente("luis", impuesto);

console.log(cliente1.calcularImpuesto());