const nome1 = prompt("Nome da Pessoa 1:");
const peso1 = prompt("Peso da Pessoa 1:");
const altura1 = prompt("Altura da Pessoa 1:");

const nome2 = prompt("Nome da Pessoa 2:");
const peso2 = prompt("Peso da Pessoa 2:");
const altura2 = prompt("Altura da Pessoa 2:");

const imc1 = parseFloat(peso1) / ( parseFloat(altura1) * parseFloat(altura1) );
const imc2 = parseFloat(peso2) / ( parseFloat(altura2) * parseFloat(altura2) );

if(parseFloat(imc1) > parseFloat(imc2)) {
    console.log(`O IMC de ${nome1} (${imc1}) é maior que o de ${nome2} (${imc2})`);
}
else {
    console.log(`O IMC de ${nome2} (${imc2}) é maior que o de ${nome1} (${imc1})`);
}