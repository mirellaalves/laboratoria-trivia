let nomeDigitado = prompt("Digite seu nome", "");
let nome = document.getElementById("nomeNaTela");
nome.innerHTML = "Olá, " + nomeDigitado + " Seja bem vindo(a)!"

let querJogar = prompt("Coloque o número correspondente a sua resposta.\nDeseja iniciar o jogo?\n1. Sim\n2. Não", "");
if (querJogar == 1) {
    let pergunta1 = prompt("Quanto é 2 + 2?\n1. 3\n2. 4\n3. 5", "");
    if (pergunta1 != 2) {
        alert("Errou!");
        let resp1ErradaImpressa = document.getElementById("resp1Errada");
        resp1ErradaImpressa.innerHTML = "Resposta 1"
    }
    else {
        alert("Você acertou!");
        let resp1CertaImpressa = document.getElementById("resp1Certa");
        resp1CertaImpressa.innerHTML = "Resposta 1"
    }
    let pergunta2 = prompt("Quanto a capital de Cuba?\n1. Havana\n2. Lima\n3. Brasília", "");
    if (pergunta2 != 1) {
        alert("Errou!");
        let resp2ErradaImpressa = document.getElementById("resp2Errada");
        resp2ErradaImpressa.innerHTML = "Resposta 2"
    }
    else {
        alert("Você acertou!");
        let resp2CertaImpressa = document.getElementById("resp2Certa");
        resp2CertaImpressa.innerHTML = "Resposta 2"
    }
    let pergunta3 = prompt("Qual é a fórmula da água?\n1. C2O2\n2. H2O2\n3. H2O", "");
    if (pergunta3 != 3) {
        alert("Errou!");
        let resp3ErradaImpressa = document.getElementById("resp3Errada");
        resp3ErradaImpressa.innerHTML = "Resposta 3"
    }
    else {
        alert("Você acertou!");
        let resp3CertaImpressa = document.getElementById("resp3Certa");
        resp3CertaImpressa.innerHTML = "Resposta 3"
    }
}
else {
    alert("Volte sempre!")
}




