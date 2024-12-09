const dAzul = document.getElementById("dAzul")
const dRojo = document.getElementById("dRojo")
const dVerde = document.getElementById("dVerde")
const dAmarillo = document.getElementById("dAmarillo")

const cambiarColorANegro = (evento) => {
evento.target.style.backgroundColor = "black"
}

dAzul.addEventListener("click", cambiarColorANegro);
dRojo.addEventListener("click", cambiarColorANegro);
dVerde.addEventListener("click", cambiarColorANegro);
dAmarillo.addEventListener("click", cambiarColorANegro);

let cambiaColor = "";

const keyDiv = document.getElementById("key");
const nuevoDivsContainer = document.getElementById("divs-container");

document.addEventListener("keydown", function (event) {
if (event.key === "a" || event.key === "A") {
    cambiaColor = "pink";
    keyDiv.style.backgroundColor = cambiaColor;
} else if (event.key === "s" || event.key === "S") {
    cambiaColor = 'orange';
    keyDiv.style.backgroundColor = cambiaColor;
} else if (event.key === "d" || event.key === "D") {
    cambiaColor = "lightblue";
    keyDiv.style.backgroundColor = cambiaColor;
}

else if (event.key === "q" || event.key === "Q") {
    crearNuevoDiv("purple");
}else if (event.key === "w" || event.key === "W") {
    crearNuevoDiv("gray");
} else if (event.key === "e" || event.key === "E") {
    crearNuevoDiv("brown");
}
});

function crearNuevoDiv(color) {
const newDiv = document.createElement('div');
newDiv.className = "creador-div";
newDiv.style.backgroundColor = color;
nuevoDivsContainer.appendChild(newDiv);
}


