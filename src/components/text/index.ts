class CustomTitle extends HTMLElement {
  shadow!: ShadowRoot;

  static get observedAttributes() {
    return ["value"];
  }

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
  const variant = this.getAttribute("value") ?? "title-font";

  this.shadow.innerHTML = `
    <style>
      .title-font {
        font-family: "AmericanTypewriter", serif;
        color: var(--color-principal);
        font-weight: 700;
        font-size: 80px;
      }

      .players-font {
        font-family: "AmericanTypewriter", serif;
        color: #000000;
        font-size: 32px;
      }

      ::slotted(.muted) {
        opacity: var(--muted-opacity);
      }
      
    </style>

    <h1 class="${variant}">
      <slot></slot>
    </h1>
  `;
}
}

customElements.define("custom-text", CustomTitle);
