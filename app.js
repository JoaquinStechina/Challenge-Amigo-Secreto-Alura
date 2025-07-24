// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

const NOMBRE_AMIGO = document.getElementById("amigo");
const LISTA = document.getElementById("listaAmigos");
const RESULTADO = document.getElementById("resultado");

function agregarAmigo() {
  if (NOMBRE_AMIGO.value == "") {
    alert("Por favor, inserte un nombre.");
  } else {
    amigos.push(NOMBRE_AMIGO.value);

    NOMBRE_AMIGO.value = "";
    LISTA.innerHTML = "";
    RESULTADO.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
      const li = document.createElement("li");
      li.textContent = amigos[i];
      LISTA.appendChild(li);
    }
  }
}

function sortearAmigo() {
  if (amigos.length > 0) {
    let indice = Math.floor(Math.random() * amigos.length);
    let amigo = amigos[indice];

    LISTA.innerHTML = "";

    const li = document.createElement("li");
    li.textContent = `El amigo secreto es: ${amigo}`;
    RESULTADO.appendChild(li);

    amigos = [];
  } else {
    alert("No hay amigos cargados en la lista!");
  }
}
