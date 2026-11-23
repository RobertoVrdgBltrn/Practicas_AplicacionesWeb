import { saludar } from "./Saludo.mjs";
import { despedida } from "./Saludo.mjs";

console.log(saludar("Roberto"));
console.log(despedida("Roberto"));

import Estudiantes from "./Estudiante";

let estudiante1 = new Estudiantes();
estudiante1.nombre = "roberto";
estudiante1.edad = 22;
estudiante1.carrera = "isw";