// Por favor ver desde el Navegador con IndexEntrega2.html


// Defino un constructor de "Especialidades" para mostrar cuando el Usuario seleccione de la lista de su interés

class Especialidades {
    constructor(especialidad, alcance, resultados){
        this.especialidad = especialidad;
        this.alcance = alcance;
        this.resultados = resultados;
    }
// Metodo que luego utilizo para mostrar en pantalla
    mostrarDetalle(){
        return `<p>Especialidad: ${this.especialidad}<p/><br>
        <p>Nos centraremos en los siguientes campos: ${this.alcance}<p/><br>
        <p>Trabajaremos en conjunto para lograr los siguientes objetivos: ${this.resultados}<p/><br>`
    }

}

// Defino un array vacío para luego pushearle las nuevas instancias de Clase Especialidades
let trabajos = [];

trabajos.push(new Especialidades("Diseño Web", "Análisis Web Design / Experiencia de usuario / Modificación de Estilos CSS", "Mejoras visuales e interactivas"))
trabajos.push(new Especialidades("Desarrollo Back-End", "Servidores y Hosting / Consumo de APIs / Base de Datos", "Consulta de datos / Programación de cálculos y funciones / Tu Web concetada a lo que necesitan tus clientes"))
trabajos.push(new Especialidades("Marketing Online", "Análisis SEO / Publicidad Google Ads y Fbk Ads / Mailing", "Posicionamiento en buscadores / Genera tráfico a tu Web para hacer crecer tu negocio / Genera Ventas y acciones importantes de tus clientes"))

// Accediendo al DOM
const seleccionTrabajos = document.getElementById("seleccionPlanTrabajos");
// Pongo una escucha al evento Change para tomar el value al cambiar el Select por parte del clilente
seleccionTrabajos.addEventListener('change', (event) => {
// Si el Value cambia, muestra en Pantalla distintos resultados de acuerdo a la elección del Usuario.    
    document.getElementById("seleccionPlanTrabajos").value;
    switch (seleccionTrabajos.value){
        case "1":
            const trabajo1 = document.getElementById('selectTrabajos').innerHTML = trabajos[0].mostrarDetalle();
            break;
        case "2":
            const trabajo2 = document.getElementById('selectTrabajos').innerHTML = trabajos[1].mostrarDetalle();
            break;
        case "3":
            const trabajo3 = document.getElementById('selectTrabajos').innerHTML = trabajos[2].mostrarDetalle();
            break;
    }

});


// Defino Clase de Empresas que trabajaron como Clientes hipotéticamente :p
class Empresas {
    constructor (nombre, sector, tamano,) {
        this.nombre = nombre;
        this.sector = sector;
        this.tamano = tamano;
    }

}
// defino array vacio para pushearles las empresas con sus propiedades.
let clientes = []

clientes.push(new Empresas("Nike", "Ind & Calzado", "Grande"));
clientes.push(new Empresas("Gomería Juancito", "Automotor", "Pyme"));
clientes.push(new Empresas("Editorial Planeta", "Editorial", "Mediana"));
clientes.push(new Empresas("Arcor", "Alimentos y Bebidas", "Grande"));
clientes.push(new Empresas("Kiosco Marta", "Comercio", "Pequeña"));
clientes.push(new Empresas("Publish Agency", "Tecnología", "Mediana"));

// recorro el array para Listar por pantalla cada empresa con sus propiedades.
for (let i=0; i< clientes.length; i++){
    document.getElementById("clientes").innerHTML += `Nombre: ${clientes[i].nombre} / Sector: ${clientes[i].sector} / Tamaño: ${clientes[i].tamano} <br>`;
}
// Defino función para luego invocarla al momento de hacer Click desde el Botón de la Web mediante el evento OnClick
function nuevoCliente() {
    clientes.push(new Empresas(prompt("Ingresa tu Empresa"), prompt("Ingresa el sector al cual te dedicas"), prompt("¿Cuál es tu nivel de facturación \n Pequeña - De 3 a 5 Mill anuales \n Pyme - De 5 a 20 Mill anuales \n Grande - Más de 20 Mill anuales")));
    document.getElementById("nuevoCliente").innerHTML = `Nombre: ${clientes[clientes.length -1].nombre} / Sector: ${clientes[clientes.length -1].sector} / Tamaño: ${clientes[clientes.length -1].tamano} <br>`;
    alert("Ya casi eres nuestro Cliente. Completa el Formulario de abajo y nos pondremos en contacto. Gracias por formar parte")
    
}

// Utilizo función de orden superior para filtrar las empresas según su tamaño. Muestro además en pantalla las grandes empresas.
let grandesClientes = clientes.filter((element) => element.tamano.includes("Grande"));
let pymeClientes = clientes.filter((element) => element.tamano.includes("Pyme"));
let chicosClientes = clientes.filter((element) => element.tamano.includes("Pequeña"));

document.getElementById("grandesClientes").innerHTML = `Estos Clientes confiaron en nosotros. => ${grandesClientes[0].nombre} y ${grandesClientes[1].nombre}  <=  <br>`;
console.log(grandesClientes);

// Muchas gracias. Nicolas Aizner
