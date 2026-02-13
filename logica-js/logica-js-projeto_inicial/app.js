/*alert('Boas vindas ao jogo do número secreto!');
let numeroSecreto = 5;
let chute = prompt('Escolha um número entre 1 e 10.');

if(chute == numeroSecreto) { 
    console.log('Parabéns! Você acertou o número secreto! (5)'); 
}*/

/*alert('Boas vindas ao nosso site!');
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
}*/


/*let porcentagemDesconto = 0;
let quantidadeMilhas = prompt('Digite a quantidade de milhas acumuladas: ');

// Para utilizar o desconto referente a 5.000 milhas o operador lógico deve ser "maior ou igual" (>=) ou "maior que" (>).
// Aqui foi utilizado "maior que" (>). Portando, o usuário que tiver exatamente 5.000 milhas não receberá o desconto de 10%.
if(quantidadeMilhas > 5000){
    porcentagemDesconto = porcentagemDesconto + 10;
    alert(`Parabéns! Você tem direito a um desconto de ${porcentagemDesconto}% em sua próxima viagem!`);
}

// Uma quantidade milhas >= 30.000 satisfaria as duas condições, resultando em um desconto de 30%. Maior do que o devido.
// O correto seria utilizar "else if" para garantir que apenas uma das condições seja satisfeita.
// ntão é lógico que o usuário que tiver 30.000 milhas ou mais receberá apenas o desconto de 20%, e não os descontos de 10% e 20% somados, totalizando 30%.
// O erro nesse modelo de negócio se da por conta da falta de uma estrutura de controle mais adequada, como o "else if", para garantir que apenas uma das condições seja satisfeita.
if(quantidadeMilhas >= 30000){
    porcentagemDesconto = porcentagemDesconto + 20;
    alert(`Incrível! Você tem direito a um desconto de ${porcentagemDesconto}% em sua próxima viagem!`);
} else {
    alert(`Infelizmente,\n\nvocê não tem direito a descontos no momento.\n\nContinue acumulando milhas para aproveitar benefícios exclusivos!`);
    porcentagemDesconto = 0;
}*/


let porcentagemDesconto = 0;
let quantidadeMilhas = prompt('Digite a quantidade de milhas acumuladas: ');

if(quantidadeMilhas >= 30000){
    porcentagemDesconto = 20;
    alert(`Incrível! Você tem direito a um desconto de ${porcentagemDesconto}% em sua próxima viagem!`);
} else if(quantidadeMilhas >= 5000){
    porcentagemDesconto = 10;
    alert(`Parabéns! Você tem direito a um desconto de ${porcentagemDesconto}% em sua próxima viagem!`);
} else {    
    alert(`Infelizmente,\n\nvocê não tem direito a descontos no momento.\n\nContinue acumulando milhas para aproveitar benefícios exclusivos!`);    
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
