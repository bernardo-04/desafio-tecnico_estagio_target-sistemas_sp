/*
  5) Escreva um programa que inverta os caracteres de um string.

  IMPORTANTE:
    a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
    b) Evite usar funções prontas, como, por exemplo, reverse;
*/

const inverterString = (string) => {
  const novaString = [];
  const stringSeparada = string.trim().split("");

  for (let i = stringSeparada.length - 1; i >= 0; i--) {
    novaString.push(stringSeparada[i]);
  }

  return novaString.join("");
};

const string = "Hello World";
console.log(`String: ${string}\nString Invertida: ${inverterString(string)}`);
