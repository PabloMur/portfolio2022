const javascript = require("url:./img/js.png");
const typescript = require("url:./img/typescript.png");
const html = require("url:./img/html-5.png");
const css = require("url:./img/css-3.png");
const git = require("url:./img/git.png");
const node = require("url:./img/nodo-js.png");

class Stack extends HTMLElement {
  shadow: ShadowRoot;
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.iconAnimation();
    let burger = this.shadow.querySelector(".nav-burger-logo") as any;
    let lista = document.querySelector(".nav-list") as any;
    burger.addEventListener("click", (e) => (lista.style.display = "flex"));
  }
  render() {
    const style = document.createElement("style");
    this.shadow.innerHTML = `
            <div class="home-page">
                <custom-menu></custom-menu>
                <div class="banner">
                    
                    <custom-title>Stack</custom-title>
                    <p class="frase">Estas son las principales tecnologias que utilizo.</p>
                    <ul class="stack-list">
                      <li><img src="${javascript}"/></li>
                      <li><img src="${typescript}"/></li>
                      <li><img src="${html}"/></li>
                      <li><img src="${css}"/></li>
                      <li><img src="${git}"/></li>
                      <li><img src="${node}"/></li>
                    </ul>
                </div>
                <custom-footer></custom-footer>
            </div>
          `;
    style.innerHTML = `
            .home-page{
                height:140vh;
                width:100%;
                padding-bottom:0;
            }
            .banner{
                background: black;
                width: 100%;
                min-height:100vh;
                padding: 20px;
                color:#1ed760;
                overflow: hidden;
                position:relative;
                display:flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }

            .stack-list{
              display:flex;
              width: 50%;
              justify-content: space-between;
              padding:0;
              margin: 0 auto;
            }
            .stack-list li{
              list-style:none;
              text-decoration: none;
            }

            img{
              height:100px;
              width:100px;
              margin: 15spx;
            }

            img:hover{
              transform: scale(1.1)
            }

            .frase{
              padding-bottom: 30px;
              color: #fd5aff;
              font-size: 25px;
              animation: 1s flotar;
            }

            

            @keyframes aparecerIcon{
              from{
                opacity: 0;
                transform: translateY(100%);
             }
              to{
                opacity:1;
                transform: translateY(0);
              }
            }
            @keyframes flotar{
              from{
                opacity: 0;
                
              }
              to{
                opacity:1;
                
              }
            }
        `;

    this.shadow.appendChild(style);
  }
  iconAnimation() {
    this.render();
    const icons = this.shadow.querySelectorAll(".stack-list li") as any;
    icons.forEach((icon: any, index) => {
      icon.style.animation = `aparecerIcon ${(index + 1) / 7}s forwards`;
    });
  }
}
customElements.define("stack-page", Stack);
