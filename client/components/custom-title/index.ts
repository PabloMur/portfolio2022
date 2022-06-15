class CustomTitle extends HTMLElement {
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
    this.innerHTML = `
          <div class="title-container">
            <h1>${this.textContent}</h1>
          </div> 
          `;
    style.innerHTML = `
              .title-container{
                width: 100%;
                height: 25vh;
                color:#1ed760;
                display:flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
              }
    
              .title-container h1{
                animation: .6s aparecer;
                font-size: 5rem;
                font-weight:700;
              }

              @keyframes aparecer{
                from{
                  opacity:0;
                }
                to{
                  opacity:1;
                }
              }

              @media (max-width: 600px){
                .title-container{
                  width: 100%;
                  color: white;
                }

                .title-container h1{
                  font-size: 4rem;
                  
                }
              }
          
          `;
    this.appendChild(style);
  }
}

customElements.define("custom-title", CustomTitle);
