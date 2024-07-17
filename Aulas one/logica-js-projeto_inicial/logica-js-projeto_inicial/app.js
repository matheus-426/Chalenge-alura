alert('Boas-vindas ao jogo do número secreto');
let numeroSecreto = 4;
console.log(numeroSecreto);
let chute = prompt('Escolha um número entre 1 e 10');

if (chute == numeroSecreto) {
  alert(`isso ai, voce acertou o numero secreto ${numeroSecreto}!`);
}else{
    alert('voce errou');
}
