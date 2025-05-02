// Importando a biblioteca readline-sync
const readline = require('readline-sync');

// Captura o número de pessoas
const numeroPessoas = readline.questionInt('Digite o número de pessoas na mesa: ');

// Captura o valor total da conta
const valorTotal = readline.questionFloat('Digite o valor total da conta: ');

// Captura o método de pagamento
const metodoPagamento = readline.question('Qual é o método de pagamento (PIX, dinheiro ou cartão)? ').toLowerCase();

// Lógica de desconto
let valorFinal = valorTotal;

if (metodoPagamento === 'pix' || metodoPagamento === 'dinheiro') {
  const desconto = valorTotal * 0.05;
  valorFinal -= desconto;
  console.log(`\nDesconto de 5% aplicado: R$ ${desconto.toFixed(2)}`);
} else {
  console.log('\nNenhum desconto aplicado.');
}

// Cálculo por pessoa
const valorPorPessoa = valorFinal / numeroPessoas;

// Exibindo os resultados finais
console.log(`\nValor total da conta: R$ ${valorTotal.toFixed(2)}`);
console.log(`Valor final a pagar: R$ ${valorFinal.toFixed(2)}`);
console.log(`Cada pessoa deve pagar: R$ ${valorPorPessoa.toFixed(2)}`);
