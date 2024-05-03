//LIsta que guardará os numeros que já foram sorteados
let ListaDeNumeroSorteados = [];

//Var que guarda o numero randomico
let NumeroGeradoAleatoriamente = GeradorNumeroAleatorio();

//Placar de tentativas do usuario que iniciará setado com 1
let PlacarDeTentativas = 1;

//Exibe um texto em uma tag que está localizada no arquivo index.html
function ExibeTexto(tag, txt) {
    let texto = document.querySelector(tag);
    texto.innerHTML = txt;
}

//Mensagem default/padrão
function ExibeMensagemInicial() {
    ExibeTexto('h1', 'Bem-Vindo');
    ExibeTexto('p', 'Escolha um número entre 1 a 4');
}
//Chama a função mensagem default
ExibeMensagemInicial();

//Permite que tentemos compara nosso numero com o numero gerado e armazenado, note que essa função será chamada no index.html
function chutar() {

    let chute = document.querySelector('input').value;

    if (chute == NumeroGeradoAleatoriamente) {
        ExibeTexto('h1', 'Parabéns!');
        ExibeTexto('p', 'Você acertou! com um total de ' + PlacarDeTentativas + ' tentativas');
        LimpaTela();
        //Ativa o botão que reinicia o jogo
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > NumeroGeradoAleatoriamente) {
            ExibeTexto('h1', `Tente novamente (${PlacarDeTentativas})`);
            ExibeTexto('p', 'Dica: Diminua o valor da sua resposta');
            PlacarDeTentativas = PlacarDeTentativas + 1;
            LimpaTela();
        } else {
            ExibeTexto('h1', `Tente novamente (${PlacarDeTentativas})`);
            ExibeTexto('p', 'Dica: Aumente o valor da sua resposta');
            PlacarDeTentativas = PlacarDeTentativas + 1;
            LimpaTela();
        }
    }
}

//Cria um novo setando as variaveis com novos valores, de acordo com suas limitações e tipos
function novoJogo() {
    NumeroGeradoAleatoriamente = GeradorNumeroAleatorio();
    PlacarDeTentativas = 1;
    LimpaTela();
    ExibeMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

//aFunção que gera o numero aleatorio que é guardado na variável chute.
function GeradorNumeroAleatorio() {
    let Random = parseInt(Math.random() * 5 + 1); 
    let QtdDeElementosdaListaDeNumerosSorteados = ListaDeNumeroSorteados.length


    if (QtdDeElementosdaListaDeNumerosSorteados == 4) {
        ListaDeNumeroSorteados = [];
    }
    if (ListaDeNumeroSorteados.includes(Random)) {
        return GeradorNumeroAleatorio();
    } else {
        ListaDeNumeroSorteados.push(Random);
        console.log(ListaDeNumeroSorteados);
        return Random;
    }
}

function LimpaTela() {
    let chute = document.querySelector('input');
    chute.value = '';
}
