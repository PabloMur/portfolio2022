class Contact extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    //imagenes
    const gmail = require("url:./img/gmail.png");
    const instagram = require("url:./img/instagram.png");
    const github = require("url:./img/github.png");
    const linkedin = require("url:./img/linkedin.png");
    //
    const style = document.createElement("style");
    this.innerHTML = `
              <div class="home-page">
                  <custom-menu></custom-menu>
                  <div class="banner">
                      <div class="cicleOne"></div>
                      <custom-title>Contact</custom-title>                      
                      <h3>Podes contactarme en estas redes:</h3>
                      <div class="redes-container">
                        <ul class="redes-list">
                          <li><img src="${linkedin}"/></li>
                          <li><img src="${github}"/></li>
                          <li><img src="${instagram}"/></li>
                          <li><a href="mailto:pablomurillo.sp@gmail.com"><img src="${gmail}"/></a>
                          </li>
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
                display:flex;
              }
              img{
                height: 50px;
                width: auto;
              }
          `;
    this.appendChild(style);
  }
  iconAnimation() {
    this.render();
    const icons = document.querySelectorAll(".");
  }
}
customElements.define("contact-page", Contact);
