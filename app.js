let ListaDeNumeroSorteados = [];
let NumeroGeradoAleatoriamente = GeradorNumeroAleatorio();
let PlacarDeTentativas = 1;

function ExibeTexto(tag, txt) {
    let texto = document.querySelector(tag);
    texto.innerHTML = txt;
}

function ExibeMensagemInicial() {
    ExibeTexto('h1', 'Bem-Vindo');
    ExibeTexto('p', 'Escolha um número entre 1 a 4');
}

ExibeMensagemInicial();

function chutar() {
    let chute = document.querySelector('input').value;

    if (chute == NumeroGeradoAleatoriamente) {
        ExibeTexto('h1', 'Parabéns!');
        ExibeTexto('p', 'Você acertou! com um total de ' + PlacarDeTentativas + ' tentativas');
        LimpaTela();

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

function novoJogo() {
    NumeroGeradoAleatoriamente = GeradorNumeroAleatorio();
    PlacarDeTentativas = 1;
    LimpaTela();
    ExibeMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function GeradorNumeroAleatorio() {
    let Random = parseInt(Math.random() * 4 + 1); 
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
