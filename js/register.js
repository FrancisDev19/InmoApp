class REGISTRO {

    Validar(){
        const nombre = document.querySelector('#name');
        const lastName = document.querySelector('#lastName');
        const email = document.querySelector('#email');
        const tel = document.querySelector('#tel');
        const cell = document.querySelector('#cell');
        const provincia = document.querySelector('#provincia');
        const terminos = document.querySelector('#terminos');

        var emailHelp = document.querySelector('#emailHelp');
        var nombreHelp = document.querySelector('#nameHelp');
        var lastNameHelp = document.querySelector('#lastNameHelp');
        var telHelp = document.querySelector('#telHelp');
        var cellHelp = document.querySelector('#cellHelp');
        var provinciaHelp = document.querySelector('#provinciaHelp');
        var terminosHelp = document.querySelector('#terminosHelp');

        if(nombre.value == 0 || nombre.value == null){
            
            nombreHelp.classList.add('is-danger');
            nombreHelp.textContent = `El nombre es incorrecto`;
            nombre.focus();
            return false;
        };
        if (lastName.value == 0 || lastName.value == null) {

            lastNameHelp.classList.add('is-danger');
            lastNameHelp.textContent = `El Apellido es incorrecto`;
            lastName.focus();
            return false;
        };
        if (email.value == 0 || email.value == null) {

            emailHelp.classList.add('is-danger');
            emailHelp.textContent = `El Correo Electrónico es incorrecto`;
            email.focus();
            return false;
        };
        if (!/^([0-9])*$/.test(tel.value)) {
            telHelp.classList.add('is-danger');
            telHelp.textContent = `El numero de teléfono es incorrecto`;
            tel.focus();
            return false;
        };
        if (!/^([0-9])*$/.test(cell.value)) {
            cellHelp.classList.add('is-danger');
            cellHelp.textContent = `El celular es incorrecto`;
            cell.focus();
            return false;
        };
        
    }

}

document.querySelector('#registro').addEventListener('click', (e) => {

    const registro = new REGISTRO();
    registro.Validar();

    e.preventDefault();

});