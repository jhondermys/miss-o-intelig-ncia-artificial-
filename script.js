</body >
    <script src="script.js"></script>
const caixaPrincipal = document.querySelector(‘.caixa -
principal’);
const caixaPerguntas = document.querySelector(‘.caixa -
perguntas’);
const caixaAlternativas = document.querySelector(‘.caixa -
alternativas’);
const caixaResultado = document.querySelector(‘.caixa -
resultado’);
const textoResultado = document.querySelector(‘.texto -
resultado’);
const perguntas = [
    {
        enunciado: “Assim que saiu da escola, você se
depara com uma nova tecnologia: um chat que consegue
responder a todas as dúvidas que uma pessoa pode ter.
Além disso, o chat também gera imagens e áudios
hiper-realistas. Qual o seu primeiro pensamento?”, 
        alternativas: [
            {
                texto: “Isso é assustador!”,
                afirmacao: “afirmação”
            },
            {
                texto: “Isso é maravilhoso!”,

               afirmacao: “afirmação”
            }
        ]
   },
    ]
  },
(...continuam as próximas perguntas)
    ];
    let atual = 0;
    let perguntaAtual;
    let historiaFinal = “”;
    function mostraPergunta() 
        if (atual >= perguntas.length) {
            mostraResultado();
            return;
        }
      perguntaAtual = perguntas[atual];
      caixaPerguntas.textContent = perguntaAtual.enunciado;
      function mostraResultado() {
          caixaPerguntas.textContent = “Em 2049...”;
          textoResultado.textContent = historiaFinal;
          caixaAlternativas.textContent = “”;
      }
      mostraAltenativas();
    }
    function mostraAlternativas() {
        for (const alternativa of perguntaAtual.alternativas) {
            const botaoAlternativas = document.
    createElement(“button”);
            botaoAlternativas.textContent = alternativa.texto;
            botaoAlternativas.addEventListener(“click”, () =>
            respostaSelecionada(alternativa));
    function respostaSelecionada(opcaoSelecionada) {
        const afirmacoes = opcaoSelecionada.afirmação;
        historiaFinal += afirmacoes + “ “;
        atual++;
        mostraPergunta();
    }
            caixaAlternativas.appendChild(botaoAlternativas);
        }
    }