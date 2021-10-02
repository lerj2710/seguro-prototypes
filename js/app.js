
//Constructores
function Seguro(marca, year, tipo) {
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}
// realiar una cotizacion
Seguro.prototype.cotizarSeguro = function () {
    /*
    1 = Americano 1.15
    2 = Asiatico 1.05
    3 = Europeo 1.35
    */
   let cantida;
    const base = 2000;
   switch (this.marca) {
        case '1':
            cantida = base * 1.15;
            break;
        case '2':
            cantida = base * 1.05;
            break;
        case '3':
            cantida = base * 1.35;
            break;
               
       default:
           break;
   }
   //leer el año 
   const diferencia = new Date().getFullYear() - this.year;
   //por cada año de diferencia se reduce el costo a un 3%
   cantida -= ((diferencia *3) * cantida) / 100;
   /**
    * si es de tipo basico es se multiplica un 30% mas
    * si es de tipo completo es se multiplica un 50% mas
    */
   if (this.tipo === 'basico') {
       cantida *= 1.30;
   }else{
       cantida *=1.50;
   }
   console.log(cantida);
}

function UI() {}
//========== PROTOTYPES ===========================
       //llenar los años
UI.prototype.llenarOpciones= ()=>{
        const max = new Date().getFullYear(), //mostrar el año actual
              min= max -20;
        const selectYear = document.querySelector('#year');        // llamo a donde lo quiero insertar
              for(let i = max; i >min ; i--){// hago el contador para que se muetre los 20 años
                    let option = document.createElement('option');// creo la option que voy a meter
                        option.value= i;//le doy valores
                        option.textContent= i;
                        selectYear.appendChild(option);// muestro en donde tiene que estar pero..
              }
};
            //mostrar mensaje de error
UI.prototype.mostrarMensaje= (mensaje, tipo)=>{
    
    const div = document.createElement('div');
   
    if ( tipo === 'error') {
        div.classList.add('error');            
    }else{
        div.classList.add('correcto');
    }
    div.classList.add('mensaje','mt-10');
    div.textContent = mensaje;

          // insertar en el HTML
    const formulario = document.querySelector('#cotizar-seguro');
          formulario.insertBefore(div, document.querySelector('#resultado'))  ;
    
    setTimeout(() => {
        div.remove();
    }, 3000);
};
//INSTACIAR UI
const ui = new UI();// tengo que instanciarlo

//===============EVENTOS=======================================
document.addEventListener('DOMContentLoaded',()=>{
    ui.llenarOpciones();// y lo mando a llmar
});

addEventListener();
function addEventListener() {
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.addEventListener('submit', cotizarSeguro);
}

//============FUNCIONES===============
function cotizarSeguro(e) {
    e.preventDefault();
        // leer la marca selecionada
    const marca = document.querySelector('#marca').value;
    // leer la year selecionada
    const year = document.querySelector('#year').value;
    // leer la tipo selecionada
    const tipo = document.querySelector('input[name="tipo"]:checked').value;// este es el mejor metodo para leer y validar un radio-button
 
        if (marca ==='' || year === '' || tipo === '') {
           ui.mostrarMensaje('Todos los campos son obligatorios', 'error');
           return;
        }
        
        ui.mostrarMensaje('Cotizando...', 'correcto');

        //Instaciar seguro
        const seguro = new Seguro(marca, year, tipo);
        seguro.cotizarSeguro();
        //ultilizar el prototypes para cotizar
}