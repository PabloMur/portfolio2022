class CustomMenu extends HTMLElement {
  shadow: ShadowRoot;
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.click();
  }
  render() {
    const style = document.createElement("style");
    this.shadow.innerHTML = `
            <div class="menu-container">
                <div class="menu-logo">
                    <h3 class="logo-name"><a class="nav-list-link" href="/">Pablo Murillo</a></h3>
                </div>
                <nav class="menu-nav">
                    <ul class="nav-list">
                        <li><a class="nav-list-link" href="/stack">Stack</a></li>
                        <li><a class="nav-list-link" href="/proyects">Proyects</a></li>
                        <li><a class="nav-list-link" href="/about">About Me</a></li>
                        <li><a class="nav-list-link" href="/contact">Contact</a></li>
                    </ul>
                    
                </nav>
                <button class="nav-burger-logo">
                  <div class="lineOne"></div>
                  <div class="lineTwo"></div>
                  <div class="lineThree"></div>
                </button>
            </div>
        `;
    style.innerHTML = `
        .menu-container{
            height: 11vh;
            width:100%;
            background:black;
            margin-top:0;
            display:flex;
            justify-content: space-between;
            align-items:center;
            color:white;
            padding:10px;
            position:fixed;
            z-index:10;
        }
        @media (max-width: 600px){
          .menu-container{
            justify-content: center;
          }
          .menu-nav{
            position: absolute;
            top: 13vh;
            width:100%;
            background: black;
            height: 87vh;
            overflow:hidden;
            display: none;
            justify-content: center;
            align-items:center;
          }
        }
        .nav-list{
            display:flex;
            width:400px;
            justify-content: space-between;    
            align-items: center;
            padding-right: 30px;
        }
        
        @media (max-width: 600px) {
          .nav-list {
            background: orange;
            width: 100%;
            height: 60vh;
            flex-direction: column;
            padding: 0;
          }

          a{
            font-weight: bolder;
          }
        }

        li{
            list-style:none;
            height: 12vh;
            min-width: 6.1vw;
            display: flex;
            justify-content: center;
            align-items:center;
        }
        @media (max-width: 600px){
          li{
            background:red;
            width: 100%;
          }
        }
        .logo-name{
            font-size: 30px;
            letter-spacing: 2px;
            margin-left: 30px;
        }

        @media (max-width: 600px){
          .logo-name{
            font-size: 2rem;
            margin-left:0;
          }
        }
        .nav-list-link{
            color: white;
            text-decoration: none;
        }
        .nav-list-link:hover{
            color:orange;
        }

        .nav-burger-logo{
          display: none;
          height: 30px;
          width:31px;
        }
        
    `;
    this.shadow.appendChild(style);
  }
  click() {
    this.render();
    let burger = this.shadow.querySelector(".nav-burger-logo") as any;
    let lista = this.shadow.querySelector(".nav-list") as any;
    burger.addEventListener("click", () => (lista.style.display = "flex"));
  }
}

customElements.define("custom-menu", CustomMenu);
