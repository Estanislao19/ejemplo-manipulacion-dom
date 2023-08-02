//2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:
/*const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");*/

function saludo(name,lastname,nickname){
    let completeName = NombreCompleto(name,lastname) //function session, estamos llamando a funciones dentro de otra funciones
    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".")
}
saludo('Juanita','Gallego','estani')
//Mi nombre es Juanita Gallego, pero prefiero que me digas estani