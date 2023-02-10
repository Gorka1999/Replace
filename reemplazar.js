//Variables
let ingresarTexto = document.getElementById("textoIn");
let mostrarTexto = document.getElementById("textoOut");
let btnA = document.getElementById("btnA");
let btnE = document.getElementById("btnE");
let btnI = document.getElementById("btnI");
let btnO = document.getElementById("btnO");
let btnU = document.getElementById("btnU");

//
//3 - Reemplazar las "barba" por las "uuhhmm"
let texto =
  "Las Olimpiadas de Munich fueron en su momento las mas innovadoras. Munich  creo las mejores instalaciones deportivas de la epoca. En munich se reunieron deportistas de mas de 125 naciones ";

console.log(texto);

reemplazarMayuscula();

function reemplazarMayuscula() {
  resultado = texto.replace(/munich/g, "Munich");
  console.log(resultado);
  reemplazarMunichRoma();
}

function reemplazarMunichRoma() {
  //Munich a Roma
  resultado2 = resultado.replace(/Munich/g, "Roma");
  console.log(resultado2);
}

// ----------------------    cambiar vocales al presionar botones

btnA.addEventListener("click", cambiarTodoPorA);
btnE.addEventListener("click", cambiarTodoPorE);
btnI.addEventListener("click", cambiarTodoPorI);
btnO.addEventListener("click", cambiarTodoPorO);
btnU.addEventListener("click", cambiarTodoPorU);

cambiarTodoPorA();

function cambiarTodoPorA() {
  textoAñadido = ingresarTexto.value;
  //console.log(texto);
  todoA = textoAñadido.replace(/[aeiouáéíóú]/gi, "a");
  mostrarTexto.innerHTML = `Resultado: ${todoA}`;
  //console.log(todoA);
}

cambiarTodoPorE();

function cambiarTodoPorE() {
  textoAñadido = ingresarTexto.value;
  todoE = textoAñadido.replace(/[aeiouáéíóú]/gi, "e");
  mostrarTexto.innerHTML = `Resultado1: ${todoE}`;
  console.log(todoE);
}

cambiarTodoPorI();

function cambiarTodoPorI() {
    textoAñadido = ingresarTexto.value;
    todoI = textoAñadido.replace(/[aeiouáéíóú]/gi, "i");
    mostrarTexto.innerHTML = `Resultado: ${todoI}`;
  console.log(todoI);
}

cambiarTodoPorO();

function cambiarTodoPorO() {
    textoAñadido = ingresarTexto.value;
    todoO = textoAñadido.replace(/[aeiouáéíóú]/gi, "o");
    mostrarTexto.innerHTML = `Resultado: ${todoO}`;
  console.log(todoO);
}

cambiarTodoPorU();

function cambiarTodoPorU() {
    textoAñadido = ingresarTexto.value;
    todoU = textoAñadido.replace(/[aeiouáéíóú]/gi, "u");
    mostrarTexto.innerHTML = `Resultado: ${todoU}`;
  console.log(todoU);
}
