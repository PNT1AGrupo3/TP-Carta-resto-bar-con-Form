function submitClick() {
    var resultado = false;
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById('apellido').value;
    if (soloLetras(nombre) && soloLetras(apellido)) {
        resultado = true;
    } else {
        alert("Nombre y Apellido Incorrecto! No incluya espacios, números o caracteres especiales");
    }
    return resultado;
}
function soloLetras(texto) {
    return /^[a-zA-Z]+$/.test(texto);
}