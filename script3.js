// string a ser invertida 
const str = "Luciano";

// criar um array com os caracteres da string
const caracter = [];
for (let i = 0; i < str.length; i++) {
    caracter.push(str[i]);
}

// inverter o array de caracteres
const inverterCaracter = [];
for (let i = caracter.length - 1; i >= 0; i--) {
    inverterCaracter.push(caracter[i]);
}

// converter o array de caracteres invertido em uma string
let inverterStr = "";
for (let i = 0; i < inverterCaracter.length; i++) {
    inverterStr += inverterCaracter[i];
}

// imprimir a string invertida
console.log(inverterStr); 