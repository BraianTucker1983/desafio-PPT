class e extends HTMLElement{static get observedAttributes(){return["value"]}constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}attributeChangedCallback(){this.render()}render(){let e=this.getAttribute("value")??"title-font";this.shadow.innerHTML=`
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

    <h1 class="${e}">
      <slot></slot>
    </h1>
  `}}customElements.define("custom-text",e);let t=[{pathRegex:/^\/$/,tag:"welcome-page"},{pathRegex:/^\/instructions\/?$/,tag:"instructions-page"},{pathRegex:/^\/move\/?$/,tag:"move-page"},{pathRegex:/^\/result\/?$/,tag:"result-page"}];function s(){let e,s,o=(e="/desafio-PPT",(s=window.location.pathname).startsWith(e)?s.slice(e.length)||"/":s||"/"),i=t.find(e=>e.pathRegex.test(o));if(!i)return void console.warn("Ruta no encontrada:",o);let a=document.querySelector(".root");a&&(a.innerHTML="",a.appendChild(document.createElement(i.tag)))}function o(e){history.pushState({},"","/desafio-PPT"+e),s()}function i(){s(),window.addEventListener("popstate",()=>{s()})}i();class a extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){this.shadow.innerHTML=`
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
    `,this.shadow.querySelector("button")?.addEventListener("click",()=>{o("/instructions")})}}customElements.define("custom-button",a);var r={};r=import.meta.resolve("BohIV");var n={};n=import.meta.resolve("2FUzK");var l={};l=import.meta.resolve("4n4pf");class c extends HTMLElement{constructor(){super(),this.selectedOption=null,this.shadow=this.attachShadow({mode:"open"}),this.render(),this.addListeners()}render(){let e=new URL(r).href,t=new URL(n).href,s=new URL(l).href;this.shadow.innerHTML=`
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

        @media (min-width: 600px) {
          .container {
            height: 181px;
          }
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
        <img data-option="piedra" src="${e}" />
        <img data-option="papel" src="${t}" />
        <img data-option="tijera" src="${s}" />
      </div>
    `}addListeners(){let e=this.shadow.querySelectorAll("img");e.forEach(t=>{t.addEventListener("click",()=>{if(this.selectedOption)return;let s=t.dataset.option;this.selectedOption=s,e.forEach(e=>{e.dataset.option===s?(e.classList.add("selected"),e.classList.remove("not-selected")):e.classList.add("not-selected")}),this.disable(),this.dispatchEvent(new CustomEvent("select",{detail:s,bubbles:!0,composed:!0}))})})}disable(){this.shadow.querySelectorAll("img").forEach(e=>{e.style.pointerEvents="none"})}showOnly(e){this.classList.add("locked"),this.shadow.querySelectorAll("img").forEach(t=>{t.dataset.option===e?(t.classList.add("selected"),t.classList.remove("not-selected","hidden")):(t.classList.add("hidden"),t.classList.remove("selected","not-selected"))})}}customElements.define("player-options",c);class d extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){this.shadow.innerHTML=`
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
    `}show(e){let t={piedra:new URL(r).href,papel:new URL(n).href,tijera:new URL(l).href},s=this.shadow.querySelector("img");s.src=t[e],s.classList.add("visible")}}customElements.define("computer-option",d);class h extends HTMLElement{constructor(){super(),this.total=3,this.radius=45,this.circumference=2*Math.PI*this.radius,this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.hasAttribute("seconds")&&(this.total=Number(this.getAttribute("seconds"))),this.render(),this.start()}start(){let e=this.shadow.querySelector(".progress"),t=0;this.intervalId=window.setInterval(()=>{t++;let s=this.circumference-this.circumference*t/this.total;e.style.strokeDashoffset=String(s);let o=this.shadow.querySelector(".number");o&&(o.textContent=String(this.total-t)),t>=this.total&&(clearInterval(this.intervalId),this.dispatchEvent(new CustomEvent("finish")))},1e3)}hide(){this.style.opacity="0",this.style.pointerEvents="none"}render(){this.shadow.innerHTML=`
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
    `}}customElements.define("counter-circle",h);let p={data:{currentGame:null,history:[],score:{me:0,computer:0}},listeners:[],init(){let e=localStorage.getItem("ppt-state");e&&(this.data=JSON.parse(e))},getState(){return this.data},setState(e){this.data=e,localStorage.setItem("ppt-state",JSON.stringify(e)),this.listeners.forEach(e=>e(this.data))},subscribe(e){this.listeners.push(e)},setMove(e,t){let s={myPlay:e,computerPlay:t},o=this.winner(s.myPlay,s.computerPlay),i={...this.data};i.currentGame=s,i.history=[...i.history,s],"ganaste"===o&&(i.score.me+=1),"perdiste"===o&&(i.score.computer+=1),this.setState(i)},randomPlay(){let e=["piedra","papel","tijera"],t=Math.floor(Math.random()*e.length);return e[t]},winner:(e,t)=>e===t?"empataron":"tijera"===e&&"papel"===t||"papel"===e&&"piedra"===t||"piedra"===e&&"tijera"===t?"ganaste":"perdiste",resetScore(){let e={...this.data};e.score={me:0,computer:0},this.setState(e)}};var m={};m=import.meta.resolve("lR1Y8");var u={};u=import.meta.resolve("kZ9n3");class f extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render(),p.subscribe(()=>{this.render()})}render(){let{score:e}=p.getState(),t=new URL(m).href,s=new URL(u).href;this.shadow.innerHTML=`
      <style>
        @font-face {
          font-family: "AmericanTypewriter";
          src: url("${t}") format("truetype");
          font-weight: 400;
          font-style: normal;
        }

        @font-face {
          font-family: "AmericanTypewriter";
          src: url("${s}") format("truetype");
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
          <span>${e.me}</span>
        </div>
        <div class="row">
          <span>Maquina:</span>
          <span>${e.computer}</span>
        </div>
      </div>
    `}}customElements.get("custom-score")||customElements.define("custom-score",f);class g extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){document.body.classList.add("with-bg"),this.render()}render(){this.getAttribute("value"),this.shadow.innerHTML=`
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
         Piedra Papel <span class="muted">\xf3</span> Tijera
         </custom-text>

        <custom-button class="start-button">Empezar</custom-button>

        <player-options></player-options>
       </div>


    `,this.shadow.querySelector(".start-button")?.addEventListener("click",()=>{o("/instructions")})}}customElements.define("welcome-page",g);class y extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){document.body.classList.add("with-bg"),this.render()}render(){this.shadow.innerHTML=`
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
          Presion\xe1 jugar y eleg\xed: piedra, papel o tijera antes de que pasen los 3 segundos.
        </custom-text>

        <custom-button class="move-button">\xa1Jugar!</custom-button>
        
        <player-options></player-options>
      </div>
    `,this.shadow.querySelector(".move-button")?.addEventListener("click",()=>o("/move"))}}customElements.define("instructions-page",y);class w extends HTMLElement{constructor(){super(),this.selectedMove=null,this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){document.body.classList.add("with-bg"),this.render();let e=this.shadow.querySelector("player-options"),t=this.shadow.querySelector("counter-circle"),s=null;this.shadow.addEventListener("select",e=>{s=e.detail}),t?.addEventListener("finish",()=>{let i=s??p.randomPlay(),a=p.randomPlay();t.hide(),e.showOnly(i),this.shadow.querySelector("computer-option").show(a),p.setMove(i,a),setTimeout(()=>{o("/result")},1e3)})}render(){this.shadow.innerHTML=`
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
    `}}customElements.define("move-page",w);let v=new URL(r).href,x=new URL(n).href,b=new URL(l).href,L=new URL(import.meta.resolve("2lEOO")).href,E=new URL(import.meta.resolve("cJ8Te")).href,S=new URL(import.meta.resolve("kMv0Y")).href;class k extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){document.body.classList.remove("with-bg"),this.render()}render(){let e=p.getState().currentGame;if(!e){this.shadow.innerHTML="<p>No hay resultado</p>";return}let t=p.winner(e.myPlay,e.computerPlay),s={piedra:v,papel:x,tijera:b},i=s[e.myPlay],a=s[e.computerPlay];this.shadow.innerHTML=`
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
      background-color: ${({ganaste:"rgba(0,255,0,0.3)",perdiste:"rgba(255,0,0,0.3)",empataron:"rgba(128,128,128,0.3)"})[t]};
      opacity: 0.4;
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
    <img class="computer" src="${a}" alt="Computer Move">
    <img class="player" src="${i}" alt="Player Move">
  </div>

  <div class="foreground">
    <img class="result-img" src="${({ganaste:L,perdiste:E,empataron:S})[t]}" alt="Resultado">
    <custom-score></custom-score>
    <custom-button class="again">Volver a jugar</custom-button>
  </div>
`,this.shadow.querySelector(".again")?.addEventListener("click",()=>{o("/move")})}}customElements.get("result-page")||customElements.define("result-page",k),p.init(),i();
//# sourceMappingURL=desafio-PPT.9e347e33.js.map
