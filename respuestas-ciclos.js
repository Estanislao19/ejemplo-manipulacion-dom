//2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:
/* for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}*/

let i= 1
while(i < 5){
    console.log("El valor de i es: " + i);
    i++; //ahora i cambia en cada ejecucion
}

/*for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
} */

let i = 10;
while(i >=2){
    console.log("El valor de i es: " + i);
    i-- //para que se reste uno en la ejecucion en cada bloque de codigo
}

//3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.
let respuesta ; //vamos a hacer la validacion si necesitamos seguir haciendo el ciclo para que los usuarios respondan bien
while(respuesta !== '4'){//para que se ejecute este bloque de codigo, cuando la respuesta es diferente a 4 va a seguir pregunta
    let pregunta = prompt('Cuanto es 2 + 2?') //adentro del ciclo hacemos la pregunta
    respuesta = pregunta
}
