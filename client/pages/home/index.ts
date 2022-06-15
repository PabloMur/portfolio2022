class HomePage extends HTMLElement {
  fondo = require("url:./img/fondoHome.jpg");
  shadow: ShadowRoot;
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.render();
  }
  render() {
    const style = document.createElement("style");
    this.shadow.innerHTML = `
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
          width: 100%;
          height:100vh;
          padding: 20px;
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
          border-radius: 25px;
          z-index: 6;
          padding:70px;
          margin: 0 auto;
          margin-top: 15vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background:#ffffff08;
          backdrop-filter: blur(60px);
          position: relative;
          box-shadow: 5px 5px 5px rgb(0 0 0 / 13%);
          border: 0.1px #ffffff12 solid;
          color:#1ed760;
        }
        @media (max-width:600px){
          .banner-text-container{
            padding:10px;
            width: 90%;
            margin-top: 0;
          }
        }
        .banner-parrafo{
          font-size:24px; 
        }
        @media (max-width:600px){
          .banner-parrafo{
            font-size:22px;
            color: white; 
          }
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
          border:150px #290056 solid;
          border-radius:50%;
          top:0px;
          right:-300px;
          animation: 2s flotar;
          
        }
        .cicleThree{
          position:absolute;
          height:800px;
          width:800px;
          background: orange;
          border-radius:400px;
          top:450px;
          left:-200px;
          animation: 2s flotar; 
        }
        @media (max-width:600px){
          .cicleThree{
            display:none;
          }
        }
        .cicleFour{
          position:absolute;
          height:160px;
          width:160px;
          border:25px #1ed760 solid;
          border-radius:400px;
          top:10vh;
          left:10vw;
          animation: 2s flotar;
        }
        @media (max-width:600px){
          .cicleFour{
            
            height:260px;
            width:260px;
            border:45px #1ed760 solid;
            border-radius:400px;
            top:10vh;
            left:0vw;
            animation: 2s flotar;  
          }
        }
        
        @keyframes flotar{
          from{
            opacity:0;
            top: 100%;
          }
          to{
            opacity:1;
            
          }
        }
    
    `;
    this.shadow.appendChild(style);
  }
}
customElements.define("home-page", HomePage);
