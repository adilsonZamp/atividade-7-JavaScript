/*
Peça para o usuário informar um número (N)
Solicite que ele informe palavras N vezes
Crie um Array e guarde cada uma delas
Utilize um laço de repetição para imprimir as
palavras do Array na ordem reversa
*/

const num = prompt("Digite um número:");
let palavras = [''];
let palavra;

for (let i = 0; i < num; i++) {
    palavra = prompt("Digite uma palavra:");
    palavras[i] = palavra;
}

for (let i = palavras.length; i != -1; i--) {
    console.log(palavras[i]);
}