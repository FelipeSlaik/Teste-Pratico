// Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
// • SP – R$67.836,43
// • RJ – R$36.678,66
// • MG – R$29.229,88
// • ES – R$27.165,48
// • Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora. 
const faturamentoSP = parseFloat(67836.43);
const faturamentoRJ = parseFloat(36678.66);
const faturamentoMG = parseFloat(29229.88);
const faturamentoES = parseFloat(27165.48);
const faturamentoOut = parseFloat(19849.53);

const faturamentoPorEstado = [
    { estado: "SP", faturamento: faturamentoSP },
    { estado: "RJ", faturamento: faturamentoRJ },
    { estado: "MG", faturamento: faturamentoMG },
    { estado: "ES", faturamento: faturamentoES },
    { estado: "Outros", faturamento: faturamentoOut }
]

const somaTotalDoFaturamento = faturamentoPorEstado.reduce((prev, curr) => {
   return prev + curr.faturamento;
}, 0)

const percentualSP = faturamentoSP * 100 / somaTotalDoFaturamento;
const percentualRJ = faturamentoRJ * 100 / somaTotalDoFaturamento;
const percentualMG = faturamentoMG * 100 / somaTotalDoFaturamento;
const percentualES = faturamentoES * 100 / somaTotalDoFaturamento;
const percentualOut = faturamentoOut * 100 / somaTotalDoFaturamento;


console.log(`Faturamento total: R$ ${somaTotalDoFaturamento.toFixed(2)}`);
console.log(`Percentual SP: ${percentualSP.toFixed(2)}%`);
console.log(`Percentual RJ: ${percentualRJ.toFixed(2)}%`);
console.log(`Percentual MG: ${percentualMG.toFixed(2)}%`);
console.log(`Percentual ES: ${percentualES.toFixed(2)}%`);
console.log(`Percentual Outros: ${percentualOut.toFixed(2)}%`);