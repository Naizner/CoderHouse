// Prompt consultando Nombre, Apellido y Edad para validar que sea mayor de edad y además para capturar los datos y volcarlos luego al formulario que sigue

let nombre = prompt("Ingresa tu nombre");
let apellido = prompt("ingresa tu apellido");
let edad = Number(prompt("Ingresa tu edad"));
let correo = document.getElementById("correo").value

// Validación de Edad mayor a 18 años / Acción de mostrar un Div oculto / Completando el formulario de inscripción
if(isNaN(edad) || edad == ""){
    alert("Este campo solo permite números positivos");
}else if (edad >= 18){
    document.getElementById("seccion").style.display = "block";
    alert("Sos mayor de edad. Podés inscribirte. Bienvenido " + nombre + " " + apellido);
    document.getElementById("nombre").value = nombre;
    document.getElementById("apellido").value = apellido;
    document.getElementById("edad").value = edad;
}else {
    alert("Sos menor de edad, no podes acceder al formulario de Inscripcion");
}

// Función en el formulario que se activa al ser enviado. Habilita los DIV con la información que sigue en la inscripción
function clickFormulario() {
    alert("Los datos se han completado correctamente");
    document.getElementById('divResumen').style.display = "block";
    document.getElementById('seccionPlanEstudio').style.display = "block";
    document.getElementById('dirSede').style.display = "block";
    
}

// Selección de Sede para cursar estudios. 

alert("A continuación elija la sede de su preferencia");

let sede = prompt("Ingresa la Sede a inscribirse \n 1 para Sede CABA \n 2 para Sede Rosario \n 3 para Sede Córdoba");

// Devuelve Dirección de sede elegida mediante un Switch
const sedeCaba = "Av. Cordoba 5555 entre Quiroz y M. Belgrano";
const sedeRosario = "Av Circumbalación 4569 esquina Medrano, Rosario";
const sedeCordoba = "Av Corrientes 778 Villa Carlos Paz"


switch(sede) {
    case "1":
        alert("Dirección de Sede " + sedeCaba);
        document.getElementById('dirSede').innerHTML = "SEDE CABA " + sedeCaba;
        break;
    case "2":
        alert("Dirección de Sede " + sedeRosario);
        document.getElementById('dirSede').innerHTML = "SEDE ROSARIO " + sedeRosario;
        break;
    case "3":
        alert("Dirección de Sede " + sedeCordoba);
        document.getElementById('dirSede').innerHTML = "SEDE CÓRDOBA " + sedeCordoba;
        break;
}

// Defino materias que componen cada plan de estudios a elegir
let materiasFront = ["HTML", "CSS", "JAVASCRIPT", "ANGULAR", "REACT", "PROYECTO"];
let materiasBack = ["JAVASCRIPT", "NODJS", "MySQL", "JAVA", "PROYECTO"];
let materiasUx = ["DISEÑO UX", "REACT", "BOOTSTRAP", "SASS", "PROYECTO"]

const planEstudios = document.getElementById('plan');

// Defino una escucha para que cuando cambie el Select poder capturar el valor que elige el cliente. Para luego poder mostrarle las materias que incluye el Plan elegido
planEstudios.addEventListener('change', (event) => {
    const resultado = document.getElementById('resultado');
    resultado.textContent = `Tu carrera elegida es ${event.target.value} y consta de las siguientes materias`;
//    Pregunto si la elección del usuario es X Carrera, con un For recorra el arreglo de esa carrera para mostrar las materias.
    if (event.target.value == "Front-End") {
        for (let i = 0; i < materiasFront.length; i++) {
            document.getElementById("materias").innerHTML += materiasFront[i] + " / ";
        }
    }else if (event.target.value == "Back-End") {
        for (let i = 0; i < materiasBack.length; i++) {
            document.getElementById("materias").innerHTML += materiasBack[i] + " / ";
        }
    }else if (event.target.value == "UX") {
        for (let i = 0; i < materiasUx.length; i++) {
            document.getElementById("materias").innerHTML += materiasUx[i] + " / ";
        }
    }else {
        alert("Ha ocurrido un error, vuelva a intentarlo");
    }
});