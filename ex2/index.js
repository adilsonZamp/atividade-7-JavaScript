const nome = prompt("Nome:");
const peso = prompt("Peso:");
const altura = prompt("Altura:");

const imc = parseFloat(peso) / (parseFloat(altura) * parseFloat(altura));

if (imc < 17) {
    console.log("Muito abaixo do peso");
    console.log(`${nome} coma muito imediatamente`);
} else if (imc >= 17 && imc <= 18.49) {
    console.log("Abaixo do peso");
    console.log(`${nome} come um pouco`);
} else if (imc >= 18.5 && imc <= 24.99) {
    console.log("Peso normal");
    console.log(`${nome} Peso de boa`);
} else if (imc >= 25 && imc <= 29.99) {
    console.log("Acima do peso");
    console.log(`${nome} Reduz a pança ai`);
} else if (imc >= 30 && imc <= 34.99) {
    console.log("Obesidade I");
    console.log(`${nome} Consulte um médico depois de amanhã`);
} else if (imc >= 35 && imc <= 39.99) {
    console.log("Obesidade II (severa)");
    console.log(`${nome} Consulte um médico amanhã`);
} else if (imc >= 40) {
    console.log("Obesidade III (mórbida)");
    console.log(`${nome} Consulte um médico IMEDIATAMENTE A A`);
}