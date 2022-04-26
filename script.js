const a = 5;
const b = 10;
const c = 20;

let adicao = a + b;
let subtracao = a - b;
let multiplicacao = a * b;
let divisao = a / b;
let modulo = a % b;

// 2. Maior de dois numeros
if(a > b) {
   console.log(b);
} else if (b > a){
console.log(b);
}
// 3. Maior de tres numeros
if (a > b && a > c) {
    console.log(a)
} else if (b > a && b > c){
    console.log(b)
} else if ( c > a && c > b) {
    console.log(c);
}

// 4.Positive or negative
const valor = -5;
if ( valor > 0) {
    console.log("positive");
} else if (valor < 0) {
    console.log("negative");
} else {
    console.log("zero");
}

// 5. Angulos triangulo
const angUm = 60;
const angDois = 40;
const angTres = 80;

if (angUm + angDois + angTres === 180) {
    console.log(true)
} else {
    console.log(false);
}

//6. 
const pecaChess = "RaInHa";

switch (pecaChess.toLowerCase()) {
    case "rei":
    console.log("rei - uma casa para qualquer direção");
    break;
    
    case "rainha": 
    console.log("rainha - quantas casas quiser : horizontal, vertical ou diagonal");
    break;

    case "bispo":
        console.log("bispo - diagonal");
        break;

    case "cavalo":
        console.log("cavalo - movimento em L");
        break;

    case "peão":
        console.log("peão - uma casa para frente; come em diagonal");    
        break;

    case "torre":
        console.log("torre - horizontal e vertical quantas casas quiser");
        break;

    default:
        console.log("erro, peça invalida");
    break;
}

// 7. Programa notas
let nota = 15;

if (nota < 0 || nota > 100) {
    console.log("erro")    
} else if (nota >= 90) {
    console.log("A");
} else if (nota >=80) {
    console.log("B");
} else if (nota >=70) {
    console.log("C");
} else if (nota >= 60) {
    console.log("D");
} else if (nota >= 50) {
    console.log("E");
} else if ( nota < 50) {
    console.log("F");
}

// 8. 
const n1 = 11;
const n2 = 21;
const n3 = 41;

if (n1 % 2 === 0 || n2 % 2 === 0 || n3 % 2 === 0){
    console.log(true);
} else {
    console.log(false);
}

// 9. 
const num1 = 10;
const num2 = 21;
const num3 = 40;

let numPar = false;

if (num1 % 2 !== 0 || num2 % 2 !== 0 || num3 % 2 !== 0) {
    numPar = true;
}
console.log(numPar);