import { log } from "console";

const javascript = require("url:./img/js.png");
const typescript = require("url:./img/typescript.png");
const html = require("url:./img/html-5.png");
const css = require("url:./img/css-3.png");
const git = require("url:./img/git.png");
const node = require("url:./img/nodo-js.png");

class Stack extends HTMLElement {
  connectedCallback() {
    this.iconAnimation();
  }
  render() {
    const style = document.createElement("style");
    this.innerHTML = `
            <div class="home-page">
                <custom-menu></custom-menu>
                <div class="banner">
                    <div class="cicleOne"></div>
                    <custom-title>Stack</custom-title>
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
                background:black;
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

            img{
              height:75px;
              width:75px;
              margin: 10px;
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
        `;

    this.appendChild(style);
  }
  iconAnimation() {
    this.render();
    const icons = document.querySelectorAll(".stack-list li");
    icons.forEach((icon: any, index) => {
      icon.style.animation = `aparecerIcon ${(index + 1) / 7}s forwards`;
    });
  }
}
customElements.define("stack-page", Stack);
