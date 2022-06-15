class About extends HTMLElement {
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
    const imagenperfil = require("url:./img/perfil.jpg");
    this.shadow.innerHTML = `
              <div class="home-page">
              <custom-menu></custom-menu>
                  <div class="banner">
                      <div class="cicleOne"></div>
                      <div class="texto">
                        <custom-title>Acerca de Mí</custom-title>
                        <p class="parrafo">Me considero una persona alegre, aventurera y perseverante. Cuando me propongo algo no paro hasta lograrlo. Entusiasta del mundo de la tecnologia en general. Soy una persona muy curiosa y me fascina entender como funcionan las cosas. Suelo enriquecerme de conocimientos de manera autodidacta. Si bien soy bastante autosificiente e independiente, tambien soy muy colavorativo y me gusta ayudar en lo que pueda. Creo fuertemente que trabajar en equipo nos hace llegar a resultados, no solo mejores, sino que tambien mas rapido. Mi filosofia es: " Si una persona pudo, yo tambien. Y si nadie lo hizo, seré el primero". Me encanta el pensamiento logico y la resolucion de problemas. Pero tambien tengo un lado creativo y tridimencional, por lo que no solo resuelvo problemas a travez del codigo sino que tambien me gusta diseñar. Algunas de las cosas que me gustan ja</p>
                      </div>
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
                padding-top: 12vh;
                color:#1ed760;
                overflow: hidden;
                position:relative;
                display:flex;
                justify-content: center;
                align-items: center;
                gap: 50px;
              }
              .banner-main{
                height: 25vh;
                font-size: 80px;
                font-weight: 700;
              }
              .texto{
                display:flex;
                flex-direction: column;
                justify-content: center;
                align-items: start;
              }
              .cicleOne{
                  height:400px;
                  width:400px;
                  background-color:#1ed760;
                  border-radius:200px;
                  background-image: url(${imagenperfil});
                  background-size: cover;
              }
              .parrafo{
                max-width: 600px;
                color: white;
              }
          
          `;
    this.shadow.appendChild(style);
  }
}
customElements.define("about-page", About);
