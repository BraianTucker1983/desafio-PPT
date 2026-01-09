import { goTo } from "../../router";

class InstructionsPage extends HTMLElement {
  shadow: ShadowRoot;

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadow.innerHTML = `
      <style>
        .container {                    
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          height: 100vh;
        }
        .custom-title {
          text-align: center;
          width: 317px;
        }
      </style>

      <div class="container">
        <custom-text class="custom-title" value="players-font">
          Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.
        </custom-text>

        <custom-button class="move-button">¡Jugar!</custom-button>
        
        <player-options></player-options>
      </div>
    `;

    this.shadow
      .querySelector(".move-button")
      ?.addEventListener("click", () => goTo("/move"));
  }
}

customElements.define("instructions-page", InstructionsPage);
