//### 2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
function imprimirPrimerElementoArray(arr){
console.log(arr[0])
}
imprimirPrimerElementoArray(['Juanita','Rigoberto','Natilla'])

//Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).
function imprimerElementoPorElemento(arr){
    for(let i = 0; i < arr.length; + i++){ //nuestra variable i no puede superar esa longitud
      console.log(arr[i]) //va a empezar en 0 y va a terminar cuando recorra todo
    }
}
imprimirPrimerElementoArray(['Juanita','Rigoberto','Natilla']);

//### 4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

const obj ={
    nombre:'Estanislao',
    edad:21,
    comidasFavoritas:['Pollo frito','Lasagna']
}

Object.values(obj) //nos devolvio un arreglo con cada uno de los valores de nuestro objeto

//ahora como seria

function imprimerElementoPorElementoObjeto(obj){
    const arr = Object.values(obj);
    for(let i = 0; i < arr.length; + i++){ //nuestra variable i no puede superar esa longitud
      console.log(arr[i]) //va a empezar en 0 y va a terminar cuando recorra todo
    }
} 
imprimerElementoPorElementoObjeto(obj)//No nos imprime todo el obejto, sino elemento por elemento