const login = prompt("Login:");
const senha = prompt("Senha:");

if (login == "aluno" && senha == "123" || login == "professor" && senha == "456") {
    console.log("Login bem-sucedido");
}
else {
    console.log("Login mal-sucedido");
}