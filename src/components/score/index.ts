import { state } from "../../state";

class Score extends HTMLElement {
  shadow: ShadowRoot;

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();

    
    state.subscribe(() => {
      this.render();
    });
  }

  render() {
    const { score } = state.getState();

    
    const regularFont = new URL("../../assets/fonts/American-Typewriter-Regular.ttf", import.meta.url).href;
    const boldFont = new URL("../../assets/fonts/American-Typewriter-Bold.ttf", import.meta.url).href;

    this.shadow.innerHTML = `
      <style>
        @font-face {
          font-family: "AmericanTypewriter";
          src: url("${regularFont}") format("truetype");
          font-weight: 400;
          font-style: normal;
        }

        @font-face {
          font-family: "AmericanTypewriter";
          src: url("${boldFont}") format("truetype");
          font-weight: 700;
          font-style: normal;
        }

        :host {
          font-family: "AmericanTypewriter", serif;
          display: block;
        }

        .score {
          border: 10px solid #000;
          border-radius: 10px;
          padding: 12px 16px;
          width: 220px;
          background-color: white;
          font-family: inherit;            
        }

        .title {
          text-align: center;
          font-size: 22px;
          margin-bottom: 10px;
          font-weight: 700;
          color: #000000;
        }

        .row {
          display: flex;
          justify-content: flex-end;
          gap: 20px;
          font-size: 18px;
          margin: 6px 0;
          font-weight: 400;
          color: #000000;
        }
      </style>

      <div class="score">
        <div class="title">Score</div>
        <div class="row">
          <span>Vos:</span>
          <span>${score.me}</span>
        </div>
        <div class="row">
          <span>Maquina:</span>
          <span>${score.computer}</span>
        </div>
      </div>
    `;
  }
}


if (!customElements.get("custom-score")) {
  customElements.define("custom-score", Score);
}
