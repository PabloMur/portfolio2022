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
                <div class="cicleOne"></div>
                <h1>Bienvenidos a mi site!</h1>
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
            width: 100%;
            height:88vh;
            padding: 20px;
            color:#1ed760;
            overflow: hidden;
            position:relative;
        }
        .cicleOne{
            position:absolute;
            height:300px;
            width:300px;
            background-color:#1ed760;
            border-radius:200px;
            top:-150px;
            right:-150px;
    
    `;
    this.appendChild(style);
  }
}
customElements.define("home-page", HomePage);
