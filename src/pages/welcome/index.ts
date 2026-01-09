import { goTo } from "../../router";

class Welcome extends HTMLElement {
  shadow: ShadowRoot;

  constructor() {
    super();    
    this.shadow = this.attachShadow({ mode: "open" });
    this.render();
  }

  render() {
    const variant = this.getAttribute("value") ?? "title-font";

  this.shadow.innerHTML = `
      <style>
        .container {          
          display: flex;
          height: 100vh;          
          flex-direction: column;
          align-items: center;          
          min-gap: 10px;
          }

         .custom-title{          
          text-align: left;          
          width: 308px;
          padding: 0px;
          }

          .start-button{
            margin: 0px;
          }



      </style>

      <div class="container">
        <custom-text class="custom-title" value="title-font">
         Piedra Papel <span class="muted">ó</span> Tijera
         </custom-text>

        <custom-button class="start-button">Empezar</custom-button>

        <player-options></player-options>
       </div>


    `;

    this.shadow.querySelector(".start-button")?.addEventListener("click", () => {
        goTo("/instructions");
      });
  }
}

customElements.define("welcome-page", Welcome);

