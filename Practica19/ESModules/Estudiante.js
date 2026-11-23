import Persona from "./Persona.js";
export default class Estudiantes extends Persona{
    constructor(){
        super();
        this.carrera = "";
    }

    estudiar(){
        return `${this.nombre} esta estudiando`;
    }
}