type Jugada = "piedra" | "papel" | "tijera";

class PlayerOptions extends HTMLElement {
  shadow!: ShadowRoot;
  selectedOption: Jugada | null = null;

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.render();
    this.addListeners();
  }

  render() {
    const piedra = new URL("../../assets/piedra.png", import.meta.url).href;
    const papel = new URL("../../assets/papel.png", import.meta.url).href;
    const tijera = new URL("../../assets/tijera.png", import.meta.url).href;

    this.shadow.innerHTML = `
      <style>
        :host {
          display: block;
          position: absolute;
          bottom: 0;
          width: 100%;
        }

        .container {
          display: flex;
          justify-content: center;
          gap: 32px;
          height: 131px;
          overflow: hidden;
        }

        img {
          width: 100px;
          transform: translateY(40px);
          transition: transform 0.25s ease, opacity 0.25s ease;
          cursor: pointer;
        }

        img:hover {
          transform: translateY(0);
        }

        img.selected {
          transform: translateY(0);
          opacity: 1;
        }

        img.not-selected {
          opacity: 0.3;
        }

        img.hidden {
          opacity: 0;
          transform: translateY(120px);
          pointer-events: none;
        }

        :host(.locked) {
          display: flex;
          justify-content: center;
        }

        :host(.locked) .container {
          justify-content: center;
          gap: 0;
        }

        :host(.locked) img.selected {
          transform: translateY(0);
        }

      </style>

      <div class="container">
        <img data-option="piedra" src="${piedra}" />
        <img data-option="papel" src="${papel}" />
        <img data-option="tijera" src="${tijera}" />
      </div>
    `;
  }

  addListeners() {
    const images = this.shadow.querySelectorAll("img");

    images.forEach((img) => {
      img.addEventListener("click", () => {
        if (this.selectedOption) return;

        const option = img.dataset.option as Jugada;
        this.selectedOption = option;

        images.forEach((i) => {
          if (i.dataset.option === option) {
            i.classList.add("selected");
            i.classList.remove("not-selected");
          } else {
            i.classList.add("not-selected");
          }
        });

        this.disable();

        this.dispatchEvent(
          new CustomEvent<Jugada>("select", {
            detail: option,
            bubbles: true,
            composed: true,
          })
        );
      });
    });
  }

  disable() {
    const images = this.shadow.querySelectorAll("img");
    images.forEach((img) => {
      img.style.pointerEvents = "none";
    });
  }

  showOnly(option: Jugada) {

    this.classList.add("locked");

    const images = this.shadow.querySelectorAll("img");

    images.forEach((img) => {
      if (img.dataset.option === option) {
        img.classList.add("selected");
        img.classList.remove("not-selected", "hidden");
      } else {
        img.classList.add("hidden");
        img.classList.remove("selected", "not-selected");
      }
    });
  }
}

customElements.define("player-options", PlayerOptions);
