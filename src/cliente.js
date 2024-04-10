export default class Cliente {
    constructor(nombre, impuesto) {
      this._nombre = nombre;
      this._impuesto = impuesto;
    }
  
    
    get nombre() {
      return this._nombre;
    }
  
    set nombre(nombre) {
      this._nombre = nombre;
    }
  
    get impuesto() {
      return this._impuesto;
    }
  
    set impuesto(impuesto) {
      this._impuesto = impuesto;
    }

    calcularImpuesto(){
        return ((this.impuesto.montoBrutoAnual - this.impuesto.deducciones) * 0.21);
    }

  }