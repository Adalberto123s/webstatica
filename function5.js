function ini() {
    let cantidadNumeros = Number(prompt("Ingrese la cantidad de numeros a ingresar: "));
    let numeros = [];
    const outputElement = document.getElementById("result-text");
    outputElement.innerHTML = ""

    let index = 0
    let numerotext = '<br>'
        while (index < cantidadNumeros) {
            let num = Number(prompt("Ingrese un número positivo"));
            numeros.push(num)
            const exp = Math.pow(numeros[index], 2)
            numerotext += `El exponente de de + ${numeros[index]} + ' es ${exp}<br>`
            index ++
        }
        outputElement.innerHTML += numerotext;
}
