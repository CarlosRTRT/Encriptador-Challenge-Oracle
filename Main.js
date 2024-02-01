var imaged = document.getElementById("imaged")
var miDiv = document.getElementById("inputCSection");
var miInput = document.getElementById("inputsection");
var inputaside = document.getElementById("inputaside")


miDiv.addEventListener("click", () => {miInput.focus()});
imaged.addEventListener("click", ()=> {miInput.focus()});

function encriptar () {
    var valor = miInput.value;
    var miInput2 = valor.split('').reverse('').join('');
     
    
    miInput.value = miInput2;
    inputaside.value = miInput2;
    miInput.value = "";
}
function desencriptar () {
    var valor = inputaside.value;
    var inputaside2 = valor.split('').reverse('').join('');
     
    
    inputaside.value = inputaside2;
    miInput.value = inputaside2;
    inputaside.value = "";
}
function copiar (){ 


    navigator.clipboard.writeText(inputaside.value)

    window.getSelection().removeAllRanges();
    window.alert('Texto copiado al portapapeles: ' + inputaside.value);
    inputaside.value = "";

}
