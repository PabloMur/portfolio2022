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
                <custom-title>Hola, soy Pablo!</custom-title>
                <p class="banner-parrafo">
                  Estudiante de la carrera de Desarrollador Web Full-Stack en <a href="https://apx.school/" target="_blank">APX</a>.
                  </br>
                  Este es mi portafolio, espero que lo disfruten!
                </p>
                <div class="cicleTwo"></div>
                <div class="cicleOne"></div>
                <div class="cicleThree"></div>
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
            background:rgb(41,65,171);
            background-image: url(${fondo})
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
        .banner-parrafo{
          font-size:24px;
        }
        .cicleOne{
            position:absolute;
            height:300px;
            width:300px;
            background-color:#1ed760;
            border-radius:200px;
            top:-150px;
            right:-150px;
            animation: 6s flotar;
        }
        .cicleTwo{
          position:absolute;
          height:400px;
          width:400px;
          background-color:#1ed760;
          border-radius:200px;
          top:130px;
          right:-150px;
          animation: 10s flotar;
        }
        .cicleThree{
          position:absolute;
          height:600px;
          width:600px;
          background-color:#1ed760;
          border-radius:400px;
          top:400px;
          left:-200px;
          animation: 7s flotar;
      }
        @keyframes flotar{
          from{
            opacity:0.5;
            top: 1150px;
          }
          to{
            opacity:1
            top: -150px;
          }
        }
    
    `;
    this.appendChild(style);
  }
}
customElements.define("home-page", HomePage);
