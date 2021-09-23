var numeroSecreto = parseInt(Math.random() * 101);
var tentativas = 10;
var elementoResultado = document.getElementById("resultado");
elementoResultado.innerHTML = "Você tem 10 tentativas";

function Chute() {
  var chute = parseInt(document.getElementById("valor").value);
  if (tentativas <= 1) {
    if (tentativas == 1 && chute == numeroSecreto) {
      elementoResultado.innerHTML =
        "Pelo visto, mesmo com meus poderes mentais eu jamais descobriria o que voce esta pensando, voce é ótimo, Parabéns!";
    } else {
      tentativas -= 1;
      elementoResultado.innerHTML =
        "Você não tem mais tentativas. A resposta era: " +
        numeroSecreto +
        ".Pelo visto eu li sua mente e já sabia que voce iria errar. Mais sorte na proxima!";
      return;
    }
  } else if (chute == numeroSecreto) {
    elementoResultado.innerHTML =
      "Pelo visto, mesmo com meus poderes mentais eu jamais descobriria o que voce esta pensando, voce é ótimo, Parabéns!";
  } else if (chute > 100 || chute < 0 || !chute) {
    elementoResultado.innerHTML =
      "Você deve digitar um número de 0 a 100. Não tente enganar o Xavier.";
  } else {
    if (chute < numeroSecreto) {
      tentativas -= 1;
      elementoResultado.innerHTML =
        "Errou, o número é maior que " +
        chute +
        ". Resta(m) apenas " +
        tentativas +
        " tentativa (s).";
    } else {
      tentativas -= 1;
      elementoResultado.innerHTML =
        "Errou, o número é menor que " +
        chute +
        ". Resta(m) apenas " +
        tentativas +
        " tentativa (s).";
    }
  }
}
