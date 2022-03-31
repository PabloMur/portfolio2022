const fondo = require("url:./img/fondoHome.jpg");

class HomePage extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    const style = document.createElement("style");
    this.innerHTML = `
        <div class="home-page">
            <custom-menu></custom-menu>
            <div class="banner">
                <div class="banner-text-container">
                  <custom-title>Hola, soy Pablo!</custom-title>
                  <p class="banner-parrafo">
                    Estudiante de la carrera de Desarrollador Web Full-Stack en <a href="https://apx.school/" target="_blank">APX</a>.
                    </br>
                    Este es mi portafolio, espero que lo disfruten!
                  </p>
                </div>
                <div class="cicleTwo"></div>
                <div class="cicleOne"></div>
                <div class="cicleThree"></div>
                <div class="cicleFour"></div>
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
          height:100vh;
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
        .banner-text-container{
          width: 70%;
          background: black;
          border-radius: 25px;
          position: relative;
          z-index: 6;
          padding:70px;
          margin: 0 auto;
          margin-top: 15vh;
        }
        .banner-parrafo{
          font-size:24px;
        }
        .cicleOne{
          position:absolute;
          height:45vh;
          width:45vh;
          background:#1ed760;
          border-radius:50%;
          top:-150px;
          right:-150px;
          animation: 2s flotar linear;
        }
        .cicleTwo{
          position:absolute;
          height:700px;
          width:700px;
          border:300px #1ed760 solid;
          border-radius:50%;
          top:270px;
          right:-300px;
          animation: 2s flotar;
        }
        .cicleThree{
          position:absolute;
          height:800px;
          width:800px;
          background: #1ed760;
          border-radius:400px;
          top:450px;
          left:-200px;
          animation: 2s flotar;
        }
        .cicleFour{
          position:absolute;
          height:420px;
          width:420px;
          border:4px #1ed760 solid;
          border-radius:400px;
          top:-200px;
          left:-200px;
          animation: 2s flotar;
        }
        .cicleFour:hover,
        .cicleThree:hover{
          opacity:0;
        }
        @keyframes flotar{
          from{
            opacity:0;
            top: 5%;
          }
          to{
            opacity:1;
            
          }
        }
    
    `;
    this.appendChild(style);
  }
}
customElements.define("home-page", HomePage);
