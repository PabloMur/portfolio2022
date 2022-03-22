class CustomMenu extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    const style = document.createElement("style");
    this.innerHTML = `
            <div class="menu-container">
                <div class="menu-logo">
                    <h3 class="logo-name">Pablo Murillo</h3>
                </div>
                <nav class="menu-nav">
                    <ul class="nav-list">
                        <li>Proyects</li>
                        <li>Stack</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </div>
        `;
    style.innerHTML = `
        .menu-container{
            height: 12vh;
            width:100%;
            background:black;
            margin-top:0;
            display:flex;
            justify-content: space-between;
            align-items:center;
            color:white;
            padding:10px;
        }
        .nav-list{
            display:flex;    
        }
    `;
    this.appendChild(style);
  }
}

customElements.define("custom-menu", CustomMenu);
