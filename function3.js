function ini() {
    let numUno = parseInt(prompt("Ingrese Primer Numero..."));
    let numDos = parseInt(prompt("Ingrese Segundo Numero..."));
    textMayor = numUno + " > " + numDos + " " + ((numUno > +numDos)? "✅" : "❌")
    textMenor = numUno + " < " + numDos + " " + ((+numUno < +numDos)? "✅" : "❌")
    textIgual = numUno + " === " + numDos + " " + ((+numUno === +numDos)? "✅" : "❌")
    textDiferente = numUno + " !== " + numDos + " " + ((+numUno != +numDos)? "✅" : "❌")
    const outputElement = document.getElementById("result-text");
    
    outputElement.innerHTML = `
    <strong>Comparacion de 2 numeros:</strong><br><br>

   ${textMayor}<br>
    ${textMenor}<br>
    ${textIgual}<br>
    ${textDiferente}<br>
    `;
}
