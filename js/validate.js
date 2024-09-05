
//Funcion para estas declaraciones onsubmit="return valideteForm()" novalidate funcione
//function validateForm() {
//    let username = document.getElementById('username').value;
//let password = document.getElementById('password').value;

    //Validar que los campos no estén vacios
//if (username.trim() === "" || password.trim() === ""){
//alert("Por favor, rellene todos los campos.");
//return false;
//    }

    //Ejemplo de validacion adicional: longitud mínima de la contraseña
 //   if (password.length < 8){
//alert("La contraseña debe tener al menos 8 caracteres");
//        return false;
//    }

    //Si todas las validaciones pasan, se puede enviar el formulario
//    return true;
//}

window.onload=() => { //funcion de flecha en javaScript
    'use strict'; //Se ejecuta de forma estricta (activa) evitando posibles errores javascript

    //Selecciona el formulario que tiene la clase .needs-validation y devuelve un array(NodeList)
    let forms = document.querySelectorAll('.needs-validation')
    //se recorre el array de todos estos elementos del Form
    Array.from(forms).forEach(form => {
        //se crea un evento de escucha cuando se pulsa el submit, ejecute la validacion
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) { //evento checkValidity() verifica el formulario sea correcto -> required
                event.preventDefault() //detiene la ejecucion del formulario
                event.stopPropagation() //no se ejecute el action
            }

            //form.classList.add('was-validated')
        }, false) //false significa que se ejecuta esta función en el momento que pulsas click
    })

}