class Card extends HTMLElement {
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
    const title = this.getAttribute("title");
    const description = this.getAttribute("description");
    const imagen = this.getAttribute("img");

    this.shadow.innerHTML = `
            <div class="card-elements-container">
                <img src=${imagen} alt="" class="card-imagen"/>
                <h3 class="card-title">Proyecto uno ${title}</h3>
                <p class="card-description">${description}</p>
                <div class="card-link">
                  <a class="card-link-a" href="#">view at github</a>
                </div>
            </div>
        `;

    style.innerHTML = `
			.card-elements-container{
				background:red;
        min-height: 60vh;
				width: 300px;
				border-radius: 25px;
        overflow: hidden;
				text-align: center;
				background:white;
        backdrop-filter: blur(80px);
				border: 1px solid white;
        box-shadow: 3px 3px 6px 0px #0e0e0eb0;
			}
      .card-imagen{
        background: red;
        height: 40vh;
        width: auto;
      }
      .card-title{
        color: purple;
      }
      .card-description{
        text-align: justify;
        padding: 0 15px;
        color:black;
        font-weight: bolder;
      }
      .card-link{
        padding: 10px;
        background: #1ed760;
      }
      .card-link-a{
        text-decoration:none;
        color: black;
        font-weight: bolder;
      }
		`;
    this.shadow.appendChild(style);
  }
}

customElements.define("custom-card", Card);
