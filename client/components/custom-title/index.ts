class CustomTitle extends HTMLElement {
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
                  color:#1ed760;
                  display:flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
              }
          
          `;
    this.appendChild(style);
  }
}

customElements.define("custom-title", CustomTitle);
