const valores = {
  e: "enter",
  i: "imes",
  a: "ai",
  o: "ober",
  u: "ufat",
};

let result = document.querySelector("#result");
let textoUsuario = document.querySelector("#msg");

function encriptar() {
  let texto = textoUsuario.value;
  let textoEncriptado = "";
  for (const llave in valores) {
    textoEncriptado = texto.replaceAll(llave, valores[llave]);

    texto = textoEncriptado;
  }

  result.value = textoEncriptado;
  textoUsuario.value = "";
}

function desencriptar() {
  let textoUsuario = document.querySelector("#msg").value;
  let textoDesencriptado = "";
  for (const llave in valores) {
    textoDesencriptado = textoUsuario.replaceAll(valores[llave], llave);

    textoUsuario = textoDesencriptado;
  }
  result.value = textoDesencriptado;
}
function copiar() {
  let textoCopiado = document.querySelector("#result").value;
  navigator.clipboard.writeText(textoCopiado);
}

var button1 = document.querySelector("#cryp");
button1.onclick = encriptar;

var button2 = document.querySelector("#decryp");
button2.onclick = desencriptar;

var button3 = document.querySelector("#copy");
button3.onclick = copiar;
