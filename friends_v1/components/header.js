class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="container navbar">
            <div class="logo">
                <a href="index.html"><img src="img/friends-logo.png"></a>
            </div>
            <div class="menu">
                <nav>
                    <ul>
                        <li><a href="chandler.html">Chandler</a></li>
                        <li><a href="joey.html">Joey</a></li>
                        <li><a href="monica.html">Monica</a></li>
                        <li><a href="phoebe.html">Phoebe</a></li>
                        <li><a href="rachel.html">Rachel</a></li>
                        <li><a href="ross.html">Ross</a></li>
                    </ul>
                </nav>
            </div>    
        </div>
        `
    }
}

customElements.define('header-component', Header);