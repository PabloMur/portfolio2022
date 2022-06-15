class Contact extends HTMLElement {
  shadow: ShadowRoot;
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.iconAnimation();
  }
  render() {
    //imagenes
    const gmail = require("url:./img/gmail.png");
    const instagram = require("url:./img/instagram.png");
    const github = require("url:./img/github.png");
    const linkedin = require("url:./img/linkedin.png");
    //
    const style = document.createElement("style");
    this.shadow.innerHTML = `
              <div class="home-page">
                  <custom-menu></custom-menu>
                  <div class="banner">
                      <div class="cicleOne"></div>
                      <custom-title>Contact</custom-title>                      
                      <p class="frase">Podes contactarme en estas redes:</p>
                      <div class="redes-container">
                        <ul class="redes-list">
                          <li><img src="${linkedin}"/></li>
                          <li><img src="${github}"/></li>
                          <li><img src="${instagram}"/></li>
                        </ul>
                      </div>
                  </div>
                  
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
              .banner-main{
                height: 25vh;
                font-size: 80px;
                font-weight: 700;
              }
              .cicleOne{
                position:absolute;
                height:300px;
                width:100%;
                background-color:#9c27b0;
                border-radius:100%;
                top:95vh;   
              }
              .redes-list{
                padding:0;
                display:flex;
                justify-content: space-between;
                align-items:center;
              }
              img{
                height: 50px;
                width: auto;
              }

              .frase{
                padding-bottom: 30px;
                color: orange;
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
          `;
    this.shadow.appendChild(style);
  }

  iconAnimation() {
    this.render();
    const icons = this.shadow.querySelectorAll(".redes-list li") as any;
    icons.forEach((icon: any, index) => {
      icon.style.animation = `aparecerIcon ${(index + 1) / 7}s forwards`;
    });
  }
}
customElements.define("contact-page", Contact);
