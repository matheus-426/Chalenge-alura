alert('Boas vindas ao nosso site!');
let nome = 'lua';
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;
let mensagemDeErro = alert('Erro! Preencha todos os campos');
alert(mensagemDeErro);
nome = prompt('seu nome?');
idade = prompt('idade?');
if(idade >= 18){
    alert('pode ter CNH');
}