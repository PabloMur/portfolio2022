class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    const style = document.createElement("style");
    this.innerHTML = `
        <div class="footer-container">
          <span> derechos 2022/2023</span>
        </div> 
        `;
    style.innerHTML = `
            .footer-container{
                background:black;
                width: 100%;
                height: 40vh;
                color:white;
                display:flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

            }
        
        `;
    this.appendChild(style);
  }
}

customElements.define("custom-footer", Footer);
