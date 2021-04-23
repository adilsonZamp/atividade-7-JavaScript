/*
Para calcular a gorjeta, Hugo considera justo uma taxa de 20% em refeições de
valor inferior a R$ 50, 15% para refeições de valor entre R$ 50 e R$ 200 e 10%
para valores acima de R$ 200.
• Peça para o usuário informar o nome dos três restaurantes.
• Peça para o usuário informar os três valores totais das contas.
• Crie uma função para calcular o valor da gorjeta.
• Armazene os resultados em três arrays: um com o nome de todos os
restaurantes, outro com todas as gorjetas e outro com todos os valores
originais.
• Crie uma função que receba os três arrays como parâmetro e mostre o
detalhamento de cada uma das contas. A impressão de cada detalhamento
deve ser feita por outra função, no seguinte formato: "Restaurante do Zé Birola
- [Valor: R$ 60.00 | Gorjeta: R$ 9.00 | Total: R$ 69.00]"
*/

const calculaGorjeta = (valorConta) => {
    if (valorConta < 50) {
        return (20 * valorConta) / 100;
    } else if (valorConta >= 50 && valorConta <= 200) {
        return (15 * valorConta) / 100;
    } else if (valorConta > 200) {
        return (10 * valorConta) / 100;
    }
};

const impressaoDetalhada = () => {
    for (let i = 0; i < 3; i++) {
        console.log(
            `Restaurante ${restaurantes[i]} - [Valor: ${
                totalContas[i]
            } | Gorjeta: ${gorjetas[i]} | Total: ${
                parseInt(totalContas[i]) + parseInt(gorjetas[i])
            }]`
        );
    }
};

let restaurantes = [];
for (let i = 0; i < 3; i++) {
    restaurantes.push(prompt("Digite o nome do restaurante:"));
}

let totalContas = [];
for (let i = 0; i < 3; i++) {
    totalContas.push(prompt("Digite o valor total da conta:"));
}

let gorjetas = [];
for (let i = 0; i < 3; i++) {
    gorjetas.push(calculaGorjeta(totalContas[i]));
}

impressaoDetalhada();
