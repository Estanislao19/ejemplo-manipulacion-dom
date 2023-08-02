//2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:
/*const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}   */

let tipoDeSuscripcion ="Basic"
if(tipoDeSuscripcion === 'free'){
    console.log("Solo puedes tomar los cursos gratis");
}else if(tipoDeSuscripcion === 'Basic'){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}else if(tipoDeSuscripcion === 'Basic'){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}else if(tipoDeSuscripcion === 'Expert'){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}else if(tipoDeSuscripcion === 'ExpertPlus'){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

//### 3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if)

function conseguirTipoSuscripcion (subcripcion) {
    if(subcripcion === 'free'){
        console.log("Solo puedes tomar los cursos gratis");
        return; //aca termina la ejecucion de la funcion
    }
    if(subcripcion === 'Basic'){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        return;
    }
   
    if(subcripcion === 'Expert'){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        return
    }
    if(subcripcion === 'ExpertPlus'){
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        return;
    }
    console.warm('Este tipo de subscripcion no existe') //sino le pasamos el return siempre me va a tirar el warm
}

// 💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays o objetos y un solo condicional. 😏

const tiposDeSubscripciones = {
    free: "Solo puedes tomar los cursos gratis",
    basic:"Puedes tomar casi todos los cursos de Platzi durante un mes",
    expert:"Puedes tomar casi todos los cursos de Platzi durante un año",
    expertPlus:"Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
}; 
tipoDeSuscripcion['free']//podemos acceder
tipoDeSuscripcion.free//es lo mismo
const ejemploSuscripcion = 'free';

tipoDeSuscripcion[ejemploSuscripcion] //tambien va a funcionar


//Resolucion del bonus
const tiposDeSubscripciones = {
    free: "Solo puedes tomar los cursos gratis",
    basic:"Puedes tomar casi todos los cursos de Platzi durante un mes",
    expert:"Puedes tomar casi todos los cursos de Platzi durante un año",
    expertPlus:"Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
}; 

function conseguirTipoSuscripcion (subcripcion){
    if(tipoDeSuscripcion[subcripcion]){ //si esto nos devuelve algo este condicionar se va a ejecutar
    console.log(tipoDeSuscripcion[subcripcion])
    return;
    }
    console.warn('Este tipo de suscripcion no existe'); 
}
conseguirTipoSuscripcion('free')//Solo puedes tomar los cursos gratis
conseguirTipoSuscripcion('expert') //Puedes tomar casi todos los cursos de Platzi durante un año
