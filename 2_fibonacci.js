/*
  2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
*/

const calcFibonacci = (num) => {
  const sequencia = [];

  // Valores iniciais
  let num1 = 0;
  let num2 = 1;
  sequencia.push(num1, num2);

  while (sequencia[sequencia.length - 1] < num) {
    sequencia.push(num1 + num2);
    num1 = sequencia[sequencia.length - 2];
    num2 = sequencia[sequencia.length - 1];
  }

  return sequencia;
};

const numero = 987; // Número a ser informado
const fibonacci = calcFibonacci(numero);

console.log(`Sequência de Fibonacci:\n${fibonacci}\n`);
console.log(
  `O número ${numero} ${
    fibonacci.includes(numero) ? "pertence" : "não pertence"
  } à Sequência de Fibonacci`
);
