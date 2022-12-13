class NavbarElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <header id="navbar">
                <div class="container">
                    <div class="brand">
                        <a href="#">FoodFinder/></a>
                    </div>
                    <div class="hamburger-menu">
                        <button
                            id="hamburger"
                            name="hamburger"
                            type="button"
                            aria-label="open hamburger menu"
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        <nav id="nav-menu" class="hidden">
                            <ul>
                                <li><a href="#/home" class="home">Home</a></li>
                                <li><a href="#" class="favorite">Favorite</a></li>
                                <li>
                                    <a
                                    href="https://www.linkedin.com/in/noprizal"
                                    target="_blank"
                                    class="aboutus"
                                    rel="noreferrer noopener"
                                    >About Us</a
                                    >
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
                      `;
  }
}

customElements.define('navbar-element', NavbarElement);
