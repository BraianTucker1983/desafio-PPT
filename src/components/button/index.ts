
import { initRouter } from "../../router";
import { goTo } from "../../router";

const router = initRouter();

class CustomButton extends HTMLElement {
  shadow: ShadowRoot;

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.render();
  }

  render() {
    this.shadow.innerHTML = `
      <style>
        button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: auto;
          height: 87px;
          background-color: #006CFC;
          border: 10px solid #001997;
          border-radius: 10px;
          font-family: "AmericanTypewriter", serif;
          color: #D8FCFC;
          padding: 12px 24px;
          font-size: 45px;
          font-weight: 400;          
        }
      </style>

      <button>
        <slot></slot>
      </button>
    `;

    this.shadow.querySelector("button")?.addEventListener("click", () => {
      goTo("/instructions");
    });
  }
}

customElements.define("custom-button", CustomButton);
