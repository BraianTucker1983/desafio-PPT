type Jugada = "piedra" | "papel" | "tijera";

class ComputerOption extends HTMLElement {
  shadow: ShadowRoot;

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.render();
  }

  render() {
    this.shadow.innerHTML = `
      <style>
        :host {
          position: absolute;
          top: 0;
          width: 100%;
          display: flex;
          justify-content: center;
        }

        img {
          width: 120px;
          transform: rotate(180deg) translateY(40px);
          opacity: 0;
          transition: opacity 0.3s ease, transform 0.3s ease;
        }

        img.visible {
          opacity: 1;
          transform: rotate(180deg) translateY(0);
        }
      </style>

      <img />
    `;
  }

  show(move: Jugada) {
    const srcMap: Record<Jugada, string> = {
      piedra: new URL("../../assets/piedra.png", import.meta.url).href,
      papel: new URL("../../assets/papel.png", import.meta.url).href,
      tijera: new URL("../../assets/tijera.png", import.meta.url).href,
    };

    const img = this.shadow.querySelector("img")!;
    img.src = srcMap[move];
    img.classList.add("visible");
  }
}

customElements.define("computer-option", ComputerOption);
