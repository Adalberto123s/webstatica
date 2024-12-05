
function ini() {
    const emoticones = [
        '&#128512',
        '&#128518',
        '&#129299',
        '&#129300',
        '&#129761',
        '&#128517',
        '&#128521',
        '&#128522',
        '&#128523',
        '&#128519',
        '&#128520',
        '&#128527',
        '&#128526',
        '&#128525',
        '&#129321',
        '&#128528'
    ]
    const outputElement = document.getElementById("result-text");
    outputElement.innerHTML = ""; // Limpiar el contenido inicial

    const lado = Number(prompt("Ingrese el tamaño del lado del cuadrado:"));

    // Validar que el tamaño sea mayor que 0
    if (lado <= 0 || isNaN(lado)) {
        outputElement.innerHTML = "Por favor, ingrese un número válido mayor que 0.";
        return;
    }

    let cuadrado = ""; // Aquí construiremos el cuadrado

    for (let i = 0; i < lado; i++) {
        for (let j = 0; j < lado; j++) {
            let randomInt = Math.floor(Math.random() * (emoticones.length - 1));
            cuadrado += emoticones[randomInt]; // Agregar un asterisco
        }
        cuadrado += "<br>"; // Saltar a la siguiente línea
    }

    // Mostrar el cuadrado en la etiqueta <p>
    outputElement.innerHTML = cuadrado;
}
