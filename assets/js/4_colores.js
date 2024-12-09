const divAzul = document.getElementById("divAzul")
const divRojo = document.getElementById("divRojo")
const divVerde = document.getElementById("divVerde")
const divAmarillo = document.getElementById("divAmarillo")

const cambiarColorANegro = (evento) => {
evento.target.style.backgroundColor = "black"
}

divAzul.addEventListener("click", cambiarColorANegro);
divRojo.addEventListener("click", cambiarColorANegro);
divVerde.addEventListener("click", cambiarColorANegro);
divAmarillo.addEventListener("click", cambiarColorANegro);

let cambiaColor = "";

const keyDiv = document.getElementById("key");
const nuevoDivsContainer = document.getElementById("divs-container");

document.addEventListener("keydown", function (event) {
    if (event.key === "a") {
        cambiaColor = "pink";
        keyDiv.style.backgroundColor = cambiaColor;
    } else if (event.key === "s") {
        cambiaColor = 'orange';
        keyDiv.style.backgroundColor = cambiaColor;
    } else if (event.key === "d") {
        cambiaColor = "lightblue";
        keyDiv.style.backgroundColor = cambiaColor;
    }

    else if (event.key === "q") {
        crearNuevoDiv("purple");
    }else if (event.key === "w") {
        crearNuevoDiv("gray");
    } else if (event.key === "e") {
        crearNuevoDiv("brown");
    }
    });

    function crearNuevoDiv(color) {
    const newDiv = document.createElement('div');
    newDiv.className = "dynamic-div";
    newDiv.style.backgroundColor = color;
    nuevoDivsContainer.appendChild(newDiv);
    }


