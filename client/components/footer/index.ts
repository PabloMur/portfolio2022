class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    const style = document.createElement("style");
    this.innerHTML = `
        <div class="footer-container">
        </div> 
        `;
    style.innerHTML = `
            .footer-container{
                background:black;
                width: 100%;
                height: 40vh;
            }
        
        `;
    this.appendChild(style);
  }
}

customElements.define("custom-footer", Footer);
