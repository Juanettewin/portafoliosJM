const estelasDeLuz = document.querySelector('.estelas-de-luz');

for (let i = 0; i < 50; i++) {
  const estela = document.createElement('div');
  estela.classList.add('estela');
  estela.style.top = `${Math.random() * 100}%`;
  estela.style.left = `${Math.random() * 100}%`;
  estela.style.animationDuration = `${Math.random() * 10 + 5}s`;
  estela.style.animationDelay = `${Math.random() * 5}s`;
  estela.style.transform = `scale(${Math.random()}) rotate(${Math.random() * 360}deg)`;
  estelasDeLuz.appendChild(estela);
}

const boton = document.getElementById("boton");
const parrafo = document.getElementById("parrafo");

boton.addEventListener("click", function() {
  if (parrafo.style.display === "none") {
    parrafo.style.display = "block";
  } else {
    parrafo.style.display = "none";
  }
});