class Proyects extends HTMLElement {
  shadow: ShadowRoot;
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.cardsAnimation();
  }
  render() {
    const style = document.createElement("style");
    this.shadow.innerHTML = `
          <div class="home-page">
              <custom-menu></custom-menu>
              <div class="banner">
                  <div class="cicleTwo"></div>

                  <custom-title>Proyects</custom-title>

                  <div class="cards-container">
                    <custom-card 
                      title="Buscador de Pelis" 
                      description="Este es un programa de terminal, que mediante comandos custom podemos solicitarle a un archivo .json, las peliculas ordenadas segun los fitlros que utilicemos"
                      img=https://images.pexels.com/photos/207580/pexels-photo-207580.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500>
                    </custom-card>

                    <custom-card 
                      title="Juego Piedra, Papel o Tijera" 
                      description="Este es el trdicional juego, en el que podremos enfrentarnos a la PC. Tanto nuestro score como el de la maquina seran almacenados en el localStorage. Ademas, estamos ante la implementacion de una single page aplication, componentes, state managment y ruteo."
                      img="https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
                    </custom-card>

                    <custom-card 
                      title="Juego Piedra, Papel o Tijera" 
                      description="Este es el trdicional juego, en el que podremos enfrentarnos a la PC. Tanto nuestro score como el de la maquina seran almacenados en el localStorage. Ademas, estamos ante la implementacion de una single page aplication, componentes, state managment y ruteo."
                      img="https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
                    </custom-card>

                    <custom-card 
                      title="Juego Piedra, Papel o Tijera" 
                      description="Este es el trdicional juego, en el que podremos enfrentarnos a la PC. Tanto nuestro score como el de la maquina seran almacenados en el localStorage. Ademas, estamos ante la implementacion de una single page aplication, componentes, state managment y ruteo."
                      img="https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
                    </custom-card>

                    <custom-card 
                      title="Chatroom"
                      description="Seguimos desarrollando la implementacion de una single page appilcation, pero, en esta oportunidad sumamos el uso de bases de datos no relacionales. Mas precisamente Firestore y Firebase Realtime Data Bese, de la mano de Firebase. Por otro lado tambien construimos una REST API cons express. Y lo documentamos con Postman."
                      img="https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
                    </custom-card>
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
              width: 100%;
              min-height:100vh;
              padding-top: 50px;
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
         
          .cards-container{
            min-height: 60vh;
            margin: 0 auto;
            max-width: 980px;
            display: flex;
            align-items:start;
            flex-wrap: wrap;
            gap: 20px;            
            padding: 10vh 0;
            
          }
          .cicleTwo{
            position:absolute;
            height:1700px;
            width:1700px;
            border:1500px #290056 solid;
            border-radius:50%;
            top:350px;
            animation: 1s flotar;
          }

          @media (max-width: 600px){
            custom-card{
              margin:0 auto;
            }
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
  cardsAnimation() {
    this.render();
    const cards = this.shadow.querySelectorAll(
      ".cards-container custom-card"
    ) as any;
    cards.forEach((card: any, index) => {
      card.style.animation = `aparecerIcon ${index + 1 / 7}s forwards`;
    });
  }
}
customElements.define("proyects-page", Proyects);
