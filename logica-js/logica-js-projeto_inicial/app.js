/*alert('Boas vindas ao jogo do número secreto!');
let numeroSecreto = 5;
let chute = prompt('Escolha um número entre 1 e 10.');

if(chute == numeroSecreto) { 
    console.log('Parabéns! Você acertou o número secreto! (5)'); 
}*/

alert('Boas vindas ao nosso site!');
let nome = 'Lua';
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;
let mensagemDeErro = 'Erro! Preencha todos os campos.';

alert(mensagemDeErro);

nome = prompt('Digite seu nome:');
let age = prompt('Digite sua idade:');

if(age >= 18){
    alert('Bem-vindo, ' + nome + '! Você tem ' + age + ' anos e pode tirar habilitação para dirigir.');
} else {
    alert('Desculpe, ' + nome + '. Você tem ' + age + ' anos e não pode tirar habilitação para dirigir ainda. Aguarde até completar 18 anos.');
}


// FLASHCARD 1
// ==========================================
// PERGUNTA:
// IF e Operadores de Comparação em JS
// 
// Complete a frase:
// O operador ______ verifica se dois valores são iguais (com conversão de tipo).
// O operador ______ verifica se dois valores são estritamente iguais (sem conversão).
// O operador ______ verifica se um valor é maior que outro.
// ==========================================
// RESPOSTA:
// ==  (igualdade - compara apenas valor)
// === (igualdade estrita - compara valor E tipo)
// >   (maior que)
// 
// Exemplo:
// 5 == "5"  // true
// 5 === "5" // false
// 10 > 5    // true
// ==========================================

// FLASHCARD 2
// ==========================================
// PERGUNTA:
// Estrutura IF
// 
// Qual será a saída deste código?
// 
// let idade = 17;
// 
// if (idade >= 18) {
//   console.log("Pode dirigir");
// } else {
//   console.log("Não pode dirigir");
// }
// ==========================================
// RESPOSTA:
// "Não pode dirigir"
// 
// Explicação:
// - O operador >= verifica se idade é maior ou igual a 18
// - Como 17 não é >= 18, executa o bloco else
// ==========================================

// FLASHCARD 3
// ==========================================
// PERGUNTA:
// Múltiplas Condições
// 
// Complete os espaços para que o código mostre "Acesso negado":
// 
// let usuario = "joao";
// let senha = 123;
// 
// if (usuario ___ "admin" ___ senha ___ 456) {
//   console.log("Acesso liberado");
// } ___ {
//   console.log("Acesso negado");
// }
// ==========================================
// RESPOSTA:
// if (usuario === "admin" && senha === 456) {
//   console.log("Acesso liberado");
// } else {
//   console.log("Acesso negado");
// }
// 
// Explicação:
// - === para comparar valores e tipos
// - && (AND) para exigir que ambas condições sejam verdadeiras
// - else para quando a condição não for satisfeita
// ==========================================
