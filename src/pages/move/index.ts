import { state } from "../../state";
import { goTo } from "../../router";

type Jugada = "piedra" | "papel" | "tijera";

class Move extends HTMLElement {
  shadow: ShadowRoot;
  selectedMove: Jugada | null = null;

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
  this.render();

  const options = this.shadow.querySelector(
    "player-options"
  ) as any;

  const counter = this.shadow.querySelector(
    "counter-circle"
  );

  let selectedMove: Jugada | null = null;

  this.shadow.addEventListener("select", (e: Event) => {
    selectedMove = (e as CustomEvent<Jugada>).detail;
  });

  counter?.addEventListener("finish", () => {
  const playerMove = selectedMove ?? state.randomPlay();
  const computerMove = state.randomPlay();

  (counter as any).hide();

  options.showOnly(playerMove);

  const computerHand = this.shadow.querySelector(
    "computer-option"
  ) as any;

  computerHand.show(computerMove);

  
  state.setMove(playerMove, computerMove);

  setTimeout(() => {
    goTo("/result");
  }, 1000);
});


}


  render() {
    this.shadow.innerHTML = `
      <style>
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 100%;
        }
      </style>

      <div class="container">
        <computer-option></computer-option>
        <player-options></player-options>
        <counter-circle seconds="3"></counter-circle>
      </div>
    `;
  }
}

customElements.define("move-page", Move);
