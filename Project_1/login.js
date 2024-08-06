

const usuarios = [
    { id: 1, usuario: 'usuario1', clave: '1234' },
    { id: 2, usuario: 'usuario2', clave: '5678' },
    { id: 3, usuario: 'usuario3', clave: '9101' },
    { id: 4, usuario: 'usuario4', clave: '1121' },
    { id: 5, usuario: 'usuario5', clave: '3141' }
];



const intentosFallidos = JSON.parse(localStorage.getItem('intentosFallidos')) || {};
const usuariosBloqueados = JSON.parse(localStorage.getItem('usuariosBloqueados')) || {};

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const usuarioInput = document.getElementById('usuario').value;
    const claveInput = document.getElementById('clave').value;

    const usuario = usuarios.find(u => u.usuario === usuarioInput);

    if (usuario.clave === claveInput) {
        alert('Inicio de sesión exitoso');
        // Resetear intentos fallidos en caso de éxito
        delete intentosFallidos[usuario.usuario];
        localStorage.setItem('intentosFallidos', JSON.stringify(intentosFallidos));
    } else {
        alert('Clave incorrecta');


}});







/*let iniciodeSesion = ''
function ingresoUsuario (usuario){
iniciodeSesion = usuario.options[usuario.selectedIndex]

console.log(iniciodeSesion)
} */














/*let usuarioSeleccionado=''
function selecionoUsuario (users){
    usuarioSeleccionado=users.option[users.selectedIndex]

    console.log(usuarioSeleccionado)
}

const usuario = usuarios.find(u => u.usuario === usuarioInput);

function loguear(){

    let user= document.getElementById("tipodeUsuario").value;
    let password =document.getElementById("tipodeContraseña").value;

if(user==="usuarios" && password==="elementoContraseña"){
    alert('Bienvenido');
    return 
}

else
{
alert('Error');
} */



