import { Persona } from './Decorador/Componente/Persona';
import { Decorador } from './Decorador/Decorador/Decorador';

import { Tico } from './Decorador/Componente_Concreto/Tico';
import { Peruano } from './Decorador/Componente_Concreto/Peruano';
import { Ingles } from './Decorador/Componente_Concreto/Ingles';


import { Helper } from '../Helper';
import { Bicicleta } from './Decorador/Decorador_Concreto/Bicicleta';
import { Patines } from './Decorador/Decorador_Concreto/Patines';
import { Patineta } from './Decorador/Decorador_Concreto/Patineta';

export class Gestor{
    private arrPersonas:Array<Persona>;
    private helper:Helper;

    constructor(){
        this.arrPersonas = new Array();
        this.helper = new Helper();
    }

    crearPersona(){
        let persona:Persona = null,
            tipo:Number = this.helper.randomize(3);

        switch(tipo){
            case 0:
                persona = new Tico("Nery Brenes", 45, "Correr");
                break;

            case 1:
                persona = new Peruano("Ines Melchor", 50, "Correr");
                break;

            case 2:
                persona = new Ingles("Mo Farah", 30, "Correr");
                break;
        }

        this.arrPersonas.push(persona);
    }

    decorarPersona(indice:any){
        let persona:Persona = this.arrPersonas[indice],
            tipoDecoracion:Number = this.helper.randomize(3);
        
        switch (tipoDecoracion){
            case 0:
                this.reemplazarPersona(indice, new Bicicleta(persona) );
                break;

            case 1:
                this.reemplazarPersona(indice, new Patines(persona) );
                break;

            case 2:
                this.reemplazarPersona(indice, new Patineta(persona) );
                break;
        }
    }

    reemplazarPersona(indice:any, decorador:Decorador){
        this.arrPersonas[indice] = decorador;
    }

    quitarDecorador(indice:any){
        let persona:Decorador = this.arrPersonas[indice] as Decorador;

        this.arrPersonas[indice] = persona.getPersona();
    }

    obtenerInfoPersonasCreadas():Array<Object>{
        let arrInfoPersonasCreadas:Array<Object> = [];

        this.arrPersonas.forEach(persona => {
            arrInfoPersonasCreadas.push({tipo: persona.getTipo() === "Persona" ? false : true, info: persona.toString()});
        });

        return arrInfoPersonasCreadas;
    }
}