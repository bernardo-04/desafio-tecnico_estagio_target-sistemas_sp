/*
  3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
    • O menor valor de faturamento ocorrido em um dia do mês;
    • O maior valor de faturamento ocorrido em um dia do mês;
    • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

  IMPORTANTE:
    a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
    b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;
*/

const dadosFaturamento = require("./dados.json");

const calcMediaMensal = (dadosMensais = []) => {
  const diasFaturados = dadosMensais.filter(
    (faturamentoDiario) => faturamentoDiario.valor !== 0
  );
  const faturamentoTotal = diasFaturados.reduce(
    (valorTotal, valorAtual) => valorTotal + valorAtual.valor,
    0
  );

  return faturamentoTotal / diasFaturados.length;
};

const menorFaturamento = (dadosMensais = []) => {
  let menorValor = dadosMensais[0].valor;

  dadosMensais.map((faturamentoDiario) => {
    if (faturamentoDiario.valor < menorValor && faturamentoDiario.valor !== 0)
      menorValor = faturamentoDiario.valor;
  });

  return menorValor;
};

const maiorFaturamento = (dadosMensais = []) => {
  let maiorValor = dadosMensais[0].valor;

  dadosMensais.map((faturamentoDiario) => {
    if (faturamentoDiario.valor > maiorValor)
      maiorValor = faturamentoDiario.valor;
  });

  return maiorValor;
};

const faturamentoAcimaMedia = (dadosMensais = []) => {
  const mediaMensal = calcMediaMensal(dadosFaturamento);

  const dias = dadosMensais.filter(
    (dadoDiario) => dadoDiario.valor > mediaMensal
  );
  return dias.length;
};

console.log(
  `O menor valor faturado no mês foi de: R$ ${parseFloat(
    menorFaturamento(dadosFaturamento)
  )
    .toFixed(2)
    .replace(".", ",")}`
);

console.log(
  `O maior valor faturado no mês foi de: R$ ${parseFloat(
    maiorFaturamento(dadosFaturamento)
  )
    .toFixed(2)
    .replace(".", ",")}`
);

console.log(
  `Esse mês tiveram ${faturamentoAcimaMedia(
    dadosFaturamento
  )} dias com o faturamento acima da média mensal que foi de R$ ${parseFloat(
    calcMediaMensal(dadosFaturamento)
  )
    .toFixed(2)
    .replace(".", ",")}`
);
