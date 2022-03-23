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
                        <li><a href="/stack">Stack</a></li>
                        <li><a href="/proyects">Proyects</a></li>
                        <li><a href="/about">About Me</a></li>
                        <li><a href="/contact">Contact</a></li>
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
            position:fixed;
            z-index:3;
        }
        .nav-list{
            display:flex;
            width:400px;
            justify-content: space-between;    
            align-items: center;
            padding-right: 30px;
        }

        li{
            list-style:none;
        }
        a{
            color: white;
            text-decoration: none;
        }
    `;
    this.appendChild(style);
  }
}

customElements.define("custom-menu", CustomMenu);
