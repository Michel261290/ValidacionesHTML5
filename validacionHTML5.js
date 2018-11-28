$(document).ready(function () {

});



function btnEnviar() {
    //remueve todos los event handler de el formulario
    $("#formulario").off();
    $("#formulario").submit(function (event) {
        //Aqui va el codigo
        console.log("Entro");

        
       
        //previene la accion por defecto
        event.preventDefault();
        
        
    });

};