import { state } from "../../state";
import { goTo } from "../../router";

type GameResult = "ganaste" | "perdiste" | "empataron";

const piedraImg = new URL("../../assets/piedra.png", import.meta.url).href;
const papelImg = new URL("../../assets/papel.png", import.meta.url).href;
const tijeraImg = new URL("../../assets/tijera.png", import.meta.url).href;

const winImg = new URL("../../assets/win.png", import.meta.url).href;
const loseImg = new URL("../../assets/lose.png", import.meta.url).href;
const drawImg = new URL("../../assets/draw.png", import.meta.url).href;

class ResultPage extends HTMLElement {
  shadow: ShadowRoot;

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const game = state.getState().currentGame;

    if (!game) {
      this.shadow.innerHTML = `<p>No hay resultado</p>`;
      return;
    }
    
    const result = state.winner(game.myPlay, game.computerPlay) as GameResult;

    
    const resultImages: Record<GameResult, string> = {
      ganaste: winImg,
      perdiste: loseImg,
      empataron: drawImg,
    };
    const imageSrc = resultImages[result];

    
    const movesMap: Record<string, string> = {
      piedra: piedraImg,
      papel: papelImg,
      tijera: tijeraImg,
    };
    const playerMove = movesMap[game.myPlay];
    const computerMove = movesMap[game.computerPlay];
   
    const backgroundColors: Record<GameResult, string> = {
      ganaste: "rgba(0,255,0,0.3)",    
      perdiste: "rgba(255,0,0,0.3)",   
      empataron: "rgba(128,128,128,0.3)" 
    };
    const bgColor = backgroundColors[result];

    this.shadow.innerHTML = `
  <style>
    :host {
      display: block;
      position: relative;
      height: 100vh;
      width: 100%;
      overflow: hidden;
    }

    
    .background {
      position: absolute;
      inset: 0;
      background-color: ${bgColor};
      opacity: 0.2;
      z-index: 0;
    }

    .background img {
      position: absolute;
      width: 150px;
      height: auto;
    }

    
    .background img.computer {
      top: 10px; 
      left: 50%;
      transform: translateX(-50%) rotate(180deg);
    }

    
    .background img.player {
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%) ;
    }

    
    .foreground {
      position: relative;
      z-index: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      padding: 20px;
    }

    .foreground img.result-img {
      width: 200px;
    }
    
  </style>

  <div class="background">
    <img class="computer" src="${computerMove}" alt="Computer Move">
    <img class="player" src="${playerMove}" alt="Player Move">
  </div>

  <div class="foreground">
    <img class="result-img" src="${imageSrc}" alt="Resultado">
    <custom-score></custom-score>
    <custom-button class="again">Volver a jugar</custom-button>
  </div>
`;
    
    this.shadow
      .querySelector(".again")
      ?.addEventListener("click", () => {
        goTo("/move");
      });
  }
}

if (!customElements.get("result-page")) {
  customElements.define("result-page", ResultPage);
}
