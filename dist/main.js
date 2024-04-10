"use strict";

require("core-js/modules/es.parse-float.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.regexp.test.js");
var _impuesto = _interopRequireDefault(require("./impuesto.js"));
var _cliente = _interopRequireDefault(require("./cliente.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
document.addEventListener("DOMContentLoaded", function () {
  var nameInput = document.getElementById("nameInput");
  var montoBrutoInput = document.getElementById("montoBrutoInput");
  var deduccionesInput = document.getElementById("deduccionesInput");
  var calcularButton = document.getElementById("calcularButton");
  var impuestoCalculadoContainer = document.getElementById("impuestoCalculadoContainer");
  var resultado = document.getElementById("resultado");
  var patron = /^[1-9][0-9]*$/;
  var isEmpty = function isEmpty(inputValue) {
    return inputValue === '';
  };
  var validateNumberInput = function validateNumberInput(inputNumberValue) {
    return patron.test(inputNumberValue);
  };
  calcularButton.addEventListener("click", function () {
    var nameInputValue = nameInput.value;
    var montoBrutoInputValue = montoBrutoInput.value;
    var deduccionesInputValue = isEmpty(deduccionesInput.value) ? 0 : deduccionesInput.value;
    if (isEmpty(nameInputValue) || isEmpty(montoBrutoInputValue)) {
      alert('Los campos nombre y monto bruto anual, no pueden estar vacíos');
    } else if (!validateNumberInput(montoBrutoInputValue)) {
      alert('Ingrese solo valores númericos en el campo monto bruto anual');
    } else if (!validateNumberInput(deduccionesInputValue)) {
      alert('Ingrese solo valores númericos en el campo deducciones');
    } else {
      var montoBruto = parseFloat(montoBrutoInputValue);
      var deducciones = parseFloat(deduccionesInputValue);
      if (deducciones > montoBruto) {
        alert("El monto de las deducciones no puede ser mayor al monto bruto anual");
      } else {
        var impuesto = new _impuesto["default"](montoBrutoInputValue, deduccionesInputValue);
        var cliente = new _cliente["default"](nameInputValue, impuesto);
        var impuestoCalculado = Math.round(cliente.calcularImpuesto()).toLocaleString();
        resultado.textContent = "El impuesto calculado para el cliente ".concat(cliente._nombre, " es de: $").concat(impuestoCalculado);
        impuestoCalculadoContainer.style.display = "block";
      }
    }
  });
});