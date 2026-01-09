class CounterCircle extends HTMLElement {
  shadow: ShadowRoot;
  total = 3;
  radius = 45;
  circumference = 2 * Math.PI * this.radius;
  intervalId?: number;

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    if (this.hasAttribute("seconds")) {
      this.total = Number(this.getAttribute("seconds"));
    }
    this.render();
    this.start();
  }

  start() {
    const circle = this.shadow.querySelector(
      ".progress"
    ) as SVGCircleElement;

    let elapsed = 0;

    this.intervalId = window.setInterval(() => {
      elapsed++;

      const offset =
        this.circumference -
        (this.circumference * elapsed) / this.total;

      circle.style.strokeDashoffset = String(offset);

      const text = this.shadow.querySelector(".number");
      if (text) text.textContent = String(this.total - elapsed);

      if (elapsed >= this.total) {
        clearInterval(this.intervalId);
        this.dispatchEvent(new CustomEvent("finish"));
      }
    }, 1000);

    
  }
  
  hide() {
    this.style.opacity = "0";
    this.style.pointerEvents = "none";
  }

  render() {
    this.shadow.innerHTML = `
      <style>
        :host {
          display: inline-block;
          width: 243px;
          height: 243px;
          position: relative;
        }

        img {
          display: none;  
          width: 100%;
          height: 100%;
          object-fit: contain;
          position: absolute;
          inset: 0;
        }

        svg {
          position: absolute;
          inset: 0;
          transform: rotate(-90deg);
        }

        .number {
          font-size: 28px;
          font-weight: bold;
          dominant-baseline: middle;
          text-anchor: middle;
        }

        .progress {
          fill: none;
          stroke: black;
          stroke-width: 8;
          stroke-dasharray: ${this.circumference};
          stroke-dashoffset: ${this.circumference};
          transition: stroke-dashoffset 1s linear;
        }
      </style>

      <img src="/assets/count.png" />

      <svg viewBox="0 0 120 120">
        <circle
          class="progress"
          cx="60"
          cy="60"
          r="${this.radius}"
        />
        <text
          class="number"
          x="60"
          y="60"
          transform="rotate(90 60 60)"
        >
          ${this.total}
        </text>
      </svg>
    `;
  }
}

customElements.define("counter-circle", CounterCircle);
