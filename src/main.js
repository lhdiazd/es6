import Impuesto from './impuesto.js';
import Cliente from './cliente.js';

document.addEventListener("DOMContentLoaded", () => {
    let nameInput = document.getElementById("nameInput");
    let montoBrutoInput = document.getElementById("montoBrutoInput");
    let deduccionesInput = document.getElementById("deduccionesInput");
    let calcularButton = document.getElementById("calcularButton");
    let impuestoCalculadoContainer = document.getElementById("impuestoCalculadoContainer");
    let resultado = document.getElementById("resultado");
    let patron = /^[1-9][0-9]*$/;


    let isEmpty = (inputValue) => {
        return (inputValue === '');
    }

    let validateNumberInput = (inputNumberValue) => {
        return patron.test(inputNumberValue);
    }

    calcularButton.addEventListener("click", () => {
        let nameInputValue = nameInput.value;
        let montoBrutoInputValue = montoBrutoInput.value;
        let deduccionesInputValue = (isEmpty(deduccionesInput.value)) ? 0 : deduccionesInput.value;

        if (isEmpty(nameInputValue) || isEmpty(montoBrutoInputValue)) {
            alert('Los campos nombre y monto bruto anual, no pueden estar vacíos');
        } else if (!validateNumberInput(montoBrutoInputValue)) {
            alert('Ingrese solo valores númericos en el campo monto bruto anual');
        } else if (!validateNumberInput(deduccionesInputValue)) {
            alert('Ingrese solo valores númericos en el campo deducciones');
        } else {
            let montoBruto = parseFloat(montoBrutoInputValue);
            let deducciones = parseFloat(deduccionesInputValue);

            if (deducciones > montoBruto) {
                alert("El monto de las deducciones no puede ser mayor al monto bruto anual");                
            } else {
                let impuesto = new Impuesto(montoBrutoInputValue, deduccionesInputValue);
                let cliente = new Cliente(nameInputValue, impuesto);
                let impuestoCalculado = Math.round(cliente.calcularImpuesto()).toLocaleString();

                resultado.textContent = `El impuesto calculado para el cliente ${cliente._nombre} es de: $${impuestoCalculado} pesos`;
                impuestoCalculadoContainer.style.display = "block";
            }
        }
    });
});


