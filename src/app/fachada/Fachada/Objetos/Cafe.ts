export default class Cafe{
    private nombre:String;
    private region:String;
    private idCafe:Number;
    private cant_cafe:Number;

    constructor(nombre:String, region:String, idCafe:Number, cant_cafe:Number){
        this.setNombre(nombre);
        this.setRegion(region);
        this.setIdCafe(idCafe);
        this.setCant_cafe(cant_cafe);
    }


    getInfo(admin:boolean):String{
        return `El cafe ${this.getNombre()}, proviene de la region ${this.getRegion()}, ${ admin && `, aun le queda capacidad para ${this.getCant_cafe()} tazas` }`;
    }

    clone():Cafe{
        return this;
    }

	getNombre(): String {
		return this.nombre;
	}

	setNombre(value: String) {
		this.nombre = value;
	}

	getRegion(): String {
		return this.region;
	}

	setRegion(value: String) {
		this.region = value;
	}

	getIdCafe(): Number {
		return this.idCafe;
	}

	setIdCafe(value: Number) {
		this.idCafe = value;
	}

	getCant_cafe(): any {
		return this.cant_cafe;
	}

	setCant_cafe(value: any) {
		this.cant_cafe = value;
	}

}