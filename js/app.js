
//Constructores
function seguro(marca, year, tipo) {
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}

function UI() {}
//llenar los años 
UI.prototype.llenarOpciones= ()=>{
        const max = new Date().getFullYear(),
              min= max -20;
        const selectYear = document.querySelector('#year');
        
        for(let i = max; i >min ; i--){
            let option = document.createElement('option');
                option.value= i;
                option.textContent= i;
                selectYear.appendChild(option);
        }
}
//intanciar ui
const ui= new UI();
console.log(ui);

//eventos
document.addEventListener('DOMContentLoaded',()=>{
    ui.llenarOpciones();
});


//funciones