function obtenerDatos(){
    //Tiene tres estados:
    //Pending -> Se esta realizando la peticion.
    //resolve/exito -> La peticion salio bien.
    //reject/error -> Algo salio mal.
    return new Promise((resolve, reject)=>{
        console.log("[obtenerDatos] Iniciando Obtencion de Datos...");
        setTimeout(()=>{
            let exito = true;
            if(exito){
                resolve("Datos obtenidos correctamente.");
            } else {
                reject("Ocurrio un error al solicitar los datos.");
            }
        }, 2000);
    });
}

//consumo basico de promesa con .then() y .catch()
console.log("Iniciando obtencion de Datos");
obtenerDatos()
    .then((resultado)=>{
        console.log("Resultado obtenido: " + resultado);
    })
    .catch((error)=>{
        console.log("Error: " + error);
    });

function buscarUsuario(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            let exito = true;
            if (exito) {
                let usuario = {
                    nombre: "Roberto",
                    edad: 22
                }
                resolve(usuario);
            } else {
                reject("No se pudo obtener el usuario");
            }
        }, 3000);
    })
}

console.log("buscarUsuario con encadenamiento");
buscarUsuario()
    .then(usuario => {
        console.log("Usuario encontrado: ", usuario);
        //Retornar un valor aqui le pasa al siguiente .them();
        return usuario.nombre.toUpperCase();
    })
    .then(nombreMayusculas => {
        console.log("Procesando nombre: ", nombreMayusculas);
    })
    .catch(error => {
        console.log("Error: " , error);
    })
    .finally(()=>{
        console.log("Fin del flujo");
    })