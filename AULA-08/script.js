// Defina um login e senha
// Peça ao usuário para inserir login e senha
// Use condições para verificar se o login e a senha inseridos pelo usuário são iguais aos que você declarou

let login = "paulinha";
let senha = "senha1234";

let putUsuario = prompt("Insira seu usuário");
let putSenha = prompt("Insira sua senha");

if(login == putUsuario && senha == putSenha){
    alert("Você está logado!")
} else {
    alert("Você inseriu algo errado")
}