
//Constructores
function seguro(marca, year, tipo) {
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
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
        
        ui.mostrarMensaje('Cotizando', 'exito');
}