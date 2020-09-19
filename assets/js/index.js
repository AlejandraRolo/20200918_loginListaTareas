/** VALIDACIÓN DE FORMULARIO Y VARIABLES */
const valRegistro = document.getElementById('frmRegistro')
let listaUsuario = [];   // inicializar lista vacia
const valListaUsuario = localStorage.getItem("lstUsuario") === null ? true : false

/* INPUTS */

// nombre
const inputName = document.getElementById('usuarioNombre'); // obtener todas las propiedades del control
const mensajeNombre = document.getElementById('nombreMensaje'); // obtener todas las propiedades del control

// apellido
const inputApellido = document.getElementById('usuarioApellido'); // obtener todas las propiedades del control
const apellidoMensaje = document.getElementById('apellidoMensaje'); // obtener todas las propiedades del control

// correo
const inputCorreo = document.getElementById('usuarioCorreo'); // obtener todas las propiedades del control
const correoMensaje = document.getElementById('correoMensaje'); // obtener todas las propiedades del control

// clave
const inputClave = document.getElementById('usuarioPsw'); // obtener todas las propiedades del control
const claveMensaje = document.getElementById('claveMensaje'); // obtener todas las propiedades del control


valRegistro.addEventListener("submit", (e)=> {
    e.preventDefault();

    if(inputName.value == ""){ insertarMensajeValidacion(inputName, mensajeNombre, 'Debe ingresar un Nombre') }
    if(inputApellido.value == ""){ insertarMensajeValidacion(inputApellido, apellidoMensaje, 'Debe ingresar un Apellido') }
    if(inputCorreo.value == ""){ insertarMensajeValidacion(inputCorreo, correoMensaje, 'Debe ingresar un Correo') }
    if(inputClave.value == ""){ insertarMensajeValidacion(inputClave, claveMensaje, 'Debe ingresar una Contraseña') }

    if(inputName.value != "" && inputApellido.value != "" && inputCorreo.value != "" && inputClave.value != ""){

        // construir objeto usuario
        const usuario = {
            nombre: inputName.value,
            apellido: inputApellido.value,
            correo: inputCorreo.value,
            clave: inputClave.value
        }
        guardarUsuario(usuario)

        swal("Bienvenido(a)!", "Te has registrado con éxito. Para ingresar ve al Login!!", "success");
        //  darle un tiempo de espera para que recargue la página
        setTimeout(()=>{
            window.location.reload()
        },2500); // esta dado en segundos
    }else{
        swal("Alerta!", "Por favor no olvide completar todos los campos!!", "warning");
    }
})

/* Aqui estamos invocando el evento keydown que es cuando precionamos una tecla */
// vamos a retirar color y mensaje de validación si el usuario  digita un valor en el input

inputName.addEventListener("keydown", ()=>{
    removerMensajeValidacion(inputName, mensajeNombre)
})

inputApellido.addEventListener("keydown", ()=>{
    removerMensajeValidacion(inputApellido, apellidoMensaje)
})

inputCorreo.addEventListener("keydown", ()=>{
    removerMensajeValidacion(inputCorreo, correoMensaje)
})

inputClave.addEventListener("keydown", ()=>{
    removerMensajeValidacion(inputClave, claveMensaje)
})


/* Función para guardar en localStorage los usuarios registrados */
const guardarUsuario = (usuario)=> {

    listaUsuario = valListaUsuario ? listaUsuario : JSON.parse(localStorage.getItem("lstUsuario"))
    listaUsuario.push(usuario)
    localStorage.setItem("lstUsuario", JSON.stringify(listaUsuario))
}