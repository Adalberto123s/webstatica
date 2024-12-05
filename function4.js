function ini() {
    let numero = parseInt(prompt("Ingrese un número..."));
const outputElement = document.getElementById("result-text");
switch(+numero) {
    case 1:
        outputElement.innerHTML = "EL número 1 corresponde a la vocal <strong>a</strong>"
        break;
    case 2:
        outputElement.innerHTML = "EL número 2 corresponde a la vocal <strong>e</strong>"
        break;
    case 3:
        outputElement.innerHTML = "EL número 3 corresponde a la vocal <strong>i</strong>"
        break;
    case 4:
        outputElement.innerHTML = "EL número 4 corresponde a la vocal <strong>o</strong>"
        break;
    case 5:
        outputElement.innerHTML = "EL número 5 corresponde a la vocal <strong>u</strong>"
        break;
    default:
        outputElement.innerHTML = "Número no correspondiente a una vocal, ingrese un valor entre 1 y 5"
}

}