import { iPersonaje } from '../Abstracto/iPersonaje';
import { iVisitor } from '../Abstracto/iVisitor';
import { EquiparArma } from './EquiparArma';

export class Guerrero implements iPersonaje{
    private nombre:String;
    private nivel:Number;
    private especial:String;

    constructor(nombre:String, nivel:Number, especial:String){
        this.nombre = nombre;
        this.nivel = nivel;
        this.especial = especial;
    }

    getNombre(){
        return this.nombre;
    }
    setNombre(nombre:String){
        this.nombre = nombre;
    }

    getNivel(){
        return this.nivel;
    }
    setNivel(nivel:Number){
        this.nivel = nivel;
    }

    getEspecial(){
        return this.especial;
    }
    setEspecial(especial:String){
        this.especial = especial;
    }

    toString():any{
        return {nombre: this.getNombre(), nivel: this.getNivel(), especial: this.getEspecial()}
    }
    
    aceptar(visitor: iVisitor): void {
        if(visitor.constructor.name === EquiparArma.name){
            visitor.visitarGuerrero(this);
        }
    }

}