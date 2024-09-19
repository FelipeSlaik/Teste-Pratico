
// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;


const data = require("./faturamento.json");

const maiorValor = data.reduce((prev, curr) => {
    return curr.valor > prev.valor ? curr : prev;
})
const menorValor = data.reduce((prev, curr) => {
    if (curr.valor !== 0 && (curr.valor < prev.valor || prev.valor === 0)) {
        return curr;
    }
    return prev;
});

const {valorTotal, qtd} = data.reduce ((prev, curr) => {
    prev.valorTotal += curr.valor
    if(curr.valor !== 0){
    prev.qtd++;
    }

    return prev;
}, {valorTotal: 0, qtd: 0})

const media = valorTotal / qtd;

const {countDiasMaiorQueMedia} = data.reduce((prev, curr) => {
    if(curr.valor > media){
        prev.countDiasMaiorQueMedia++;
    } 

    return prev;
}, {countDiasMaiorQueMedia: 1});


console.log(`O menor valor de faturamento ocorrido em um dia do mês é de : ${menorValor.valor}`)
 console.log(`O maior valor de faturamento ocorrido em um dia do mês é de : ${maiorValor.valor}`)
 console.log(`Número de dias no mês em que o valor de faturamento diário foi superior à média mensal é : ${countDiasMaiorQueMedia} dias.`)
 console.log(`Quantidade de dias considerados no cálculo da média é de : ${qtd} dias.`);