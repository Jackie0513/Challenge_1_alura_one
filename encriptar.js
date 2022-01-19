const valores = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat",
};

let textoUsuario = document.querySelector("#msg").value;

let result = document.querySelector("#result");

function encriptar() {
    let textoEncriptado = "";
    for (const llave in valores) {
        textoEncriptado = textoUsuario.replaceAll(llave, valores[llave]);

        textoUsuario = textoEncriptado;
    }

    result.value = textoEncriptado;
}

function desencriptar() {
    let textoDesencriptado = "";
    for (const llave in valores) {
        textoDesencriptado = textoUsuario.replaceAll(valores[llave], llave);

        textoUsuario = textoDesencriptado;
    }
    result.value = textoDesencriptado;
}

var button1 = document.querySelector("#cryp");
button1.onclick = encriptar;

var button2 = document.querySelector("#decryp");
button2.onclick = desencriptar;
