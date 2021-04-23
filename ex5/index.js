/*
Crie uma função que calcule e mostre no
console o tempo restante para aposentadoria
de uma pessoa
– Ler nome e idade
– Chamar calcularIdade() criada anteriormente
– Considere idade para aposentadoria = 65 anos
– Verificar se pessoa já está aposentada
*/

const nome = prompt("Digite seu nome:");
const idade = prompt("Digite sua idade:");

function calcularIdade(i) {
    if (i >= 65) {
        return true;
    } else {
        return 65 - i;
    }
}

if (calcularIdade(idade) === true) {
    console.log("Você já está aposentado(a)!")
}
else {
    console.log(`${nome}, para você se aposentar faltam ${calcularIdade(idade)} ano(s)!`);
}