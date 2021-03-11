//1: função anônima atribuída à uma constante chamada subtrai que recebe dois parâmetros e retorna a subtração deles.
function subtrai(a, b) {
  return a - b;
}

let result = subtrai(25, 15);

console.log(result);

//2: arrow function atribuída à uma constante chamada testaZero que recebe um parâmetros e imprime no console se o valor é zero ou não
let c = 0;

const testaZero = (c) => c;
if (c === 0) {
  console.log("É zero.");
} else {
  console.log("Não é zero.");
}

console.log(c);

//3: criar função chamada testaSinal que recebe dois parâmetros. A função testaSinal deve aplicar a função subtrai aos outros dois parâmetros, testar esse resultado e imprimir no console um dos valores
function testaSinal(a, b) {
  let resultado = subtrai(a, b);
  if (subtrai(a, b) == 0) {
    console.log("É zero.")
  } else if ((a > 0 && b < 0) || (a < 0 && b > 0)) {
    console.log("Subtração entre números de sinais diferentes");
  } else {
    console.log("Subtração entre números de mesmo sinal");
  }
}

testaSinal(10, 0);
