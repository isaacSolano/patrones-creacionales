export class Vaso{
    private id_vaso:Number;
    private capacidad:Number;
    private cantidad:Number;
    private tamanno:String;

	constructor(id_vaso:Number, capacidad: Number, cantidad: Number) {
        this.setId_vaso(id_vaso);
        this.setCapacidad(capacidad);
        this.setCantidad(cantidad)
        
        switch(id_vaso){
            case 1:
                this.setTamanno("Pequenno");
                break;

            case 2:
                this.setTamanno("Mediano");
                break;

            case 3:
                this.setTamanno("Grande");
                break;
        }
    }


	getId_vaso(): Number {
		return this.id_vaso;
	}

	setId_vaso(value: Number) {
		this.id_vaso = value;
	}

	getCantidad(): any {
		return this.cantidad;
	}

	setCantidad(value: Number) {
		this.cantidad = value;
	}

	getCapacidad(): Number {
		return this.capacidad;
	}

	setCapacidad(value: Number) {
		this.capacidad = value;
	}

	getTamanno(): String {
		return this.tamanno;
	}

	setTamanno(value: String) {
		this.tamanno = value;
	}

}