export default class Impuesto{
    constructor(montoBrutoAnual, deducciones){
        this._montoBrutoAnual = montoBrutoAnual;
        this._deducciones = deducciones;
    }

    get montoBrutoAnual(){
        return this._montoBrutoAnual;
    }

    set montoBrutoAnual(montoBrutoAnual){
        this._montoBrutoAnual = montoBrutoAnual;
    }

    get deducciones(){
        return this._deducciones;
    }

    set deducciones(deducciones){
        this._deducciones = deducciones;
    }

    
}