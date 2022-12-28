

let nombre = prompt("Ingresa tu nombre");
let apellido = prompt("ingresa tu apellido");
let edad = Number(prompt("Ingresa tu edad"));
let correo = document.getElementById("correo").value

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


function clickFormulario() {
    alert("Los datos se han completado correctamente");
    document.getElementById('divResumen').style.display = "block";
    document.getElementById('seccionPlanEstudio').style.display = "block";
    document.getElementById('dirSede').style.display = "block";
    
}

alert("A continuación elija la sede de su preferencia");

let sede = prompt("Ingresa la Sede a inscribirse \n 1 para Sede CABA \n 2 para Sede Rosario \n 3 para Sede Córdoba");

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


let materiasFront = ["HTML", "CSS", "JAVASCRIPT", "ANGULAR", "REACT", "PROYECTO"];
let materiasBack = ["JAVASCRIPT", "NODJS", "MySQL", "JAVA", "PROYECTO"];
let materiasUx = ["DISEÑO UX", "REACT", "BOOTSTRAP", "SASS", "PROYECTO"]

const planEstudios = document.getElementById('plan');

planEstudios.addEventListener('change', (event) => {
    const resultado = document.getElementById('resultado');
    resultado.textContent = `Tu carrera elegida es ${event.target.value} y consta de las siguientes materias`;
    
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