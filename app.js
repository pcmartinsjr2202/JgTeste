//let titulo = document. querySelector('h1');
//titulo.innerHTML = 'Número Secreto';
//let paragrafo =  document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número secreto entre 0 e 10.';
let listadenumerossorteados = [];
let numeroLimite =30; 
let numerosecreto = gerarnumeroaleatorio();
let tentativas = 1;
exibirMensagemInicial();    
function ExibirTextoNaTela(tag, texto) {
     let campo = document.querySelector(tag);
     campo.innerHTML = texto;
     responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}
function exibirMensagemInicial () {
ExibirTextoNaTela('h1', 'Número Secreto');
ExibirTextoNaTela('p', 'Escolha um número secreto entre 1 e ' + numeroLimite + '.');
}
function verificarChute () { 
    let chute = document.querySelector('input').value;
       if(chute==numerosecreto) {
           ExibirTextoNaTela('h1','Parabéns! Você acertou!');
           let palavraTentativas = tentativas > 1 ? ' tentativas' : ' tentativa';
           let mensagemTentativas = 'Parabéns! Você acertou com ' + tentativas +  palavraTentativas + '.'; 
           ExibirTextoNaTela('p', mensagemTentativas);
           document.getElementById('reiniciar').removeAttribute('disabled');
               } else {
             if(chute>numerosecreto) {
                 ExibirTextoNaTela('p', 'O número secreto é menor!');
             }else {
                 ExibirTextoNaTela('p', 'O número secreto é maior!');
                   }
                   tentativas++;
                   limparCampo();   
                   
   }
}  
function gerarnumeroaleatorio () {
    let numeroEscolhido = parseInt((Math.random())*numeroLimite + 1);
    let qtdnumerosescolhidos = listadenumerossorteados.length
    if(qtdnumerosescolhidos == numeroLimite) {
        listadenumerossorteados = [];
    }
    if (listadenumerossorteados.includes(numeroEscolhido)) {
       return gerarnumeroaleatorio();
    } else {
        listadenumerossorteados.push(numeroEscolhido);
         return numeroEscolhido;
    }   
}
function limparCampo() {
    document.querySelector('input').value = '';
}
function reiniciarjogo() {
numerosecreto = gerarnumeroaleatorio();
limparCampo();
tentativas = 1;
exibirMensagemInicial();
document.getElementById('reiniciar').setAttribute('disabled',true);
}