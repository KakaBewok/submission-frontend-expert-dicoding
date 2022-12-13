class FooterElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
                    <footer>
                      <p>All data from <a href="https://restaurant-api.dicoding.dev/" target="_blank" rel="noreferrer">API Restaurant Dicoding</a> - Noprizal</p>
                    </footer>
                    `;
  }
}

customElements.define('footer-element', FooterElement);
