//si queremos selecionar por el nombre de la etiqueta
/*const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito= document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');*/

/*console.log({
    h1,
    p,
    parrafito,
    pid,
    input
});

h1.innerHTML = 'Patito <br> feo'; //cambia el h1 a patito
h1.getAttribute('pantalla')//platzi que lo guardamos en html
h1.setAttribute('pantalla', 'rojo')//modificamos la clase pantalla y le decimos que el nuevo valor va a ser rojo

h1.classList.add('rojo') //le agregamos la clase
h1.classList.remove('rojo') //le agregamos la clase

input.value = "456"


//meter una imagen dentro de un elemento html
const img = document.createElement('img'); //creamos una imagen
img.setAttribute('src', 'https://img.freepik.com/foto-gratis/paisaje-palma-tropical-vacaciones-verano_1203-5352.jpg?w=2000')//a esa imagen le pusimos los atributo
pid.append(img) //estamos insertando la imagen*/

//FORMA DE ESCUCAHR EVENTOS DESDE JAVASCRIPT
const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular')
const pResult = document.querySelector('#result')

/*function btnOnClick(){//funcion que se debe ejecutar cada vez que le damos click a un botn
 const sumaInput = input1.value + input2.value; //ya podemos ejecutar codigo js cuando le damos click a un boton
 pResult.innerText = "Resultado:" + sumaInput
}*/

//Vamos hacer el onClick(), pero esta vez desde javascript
//btn.addEventListener('click',btnOnClick);//btnOnClick, es la funcion que debe mandar a llamar al momento de darle click

//Si queremos escuchar en form
form.addEventListener('submit',btnOnClick)//ya no escuchamos el evento de click, sino de submit


function sumarInputValues(event){//el form le envia como paramento un event
    console.log(event)
    event.preventDefault();
    const sumaInput = input1.value + input2.value; //ya podemos ejecutar codigo js cuando le damos click a un boton
    pResult.innerText = "Resultado:" + sumaInput
   }