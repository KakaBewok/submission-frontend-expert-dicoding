class FooterElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
                    <footer tabindex="0">
                      <p tabindex="0">Noprizal | 2022</p>
                    </footer>
                    `;
  }
}

customElements.define('footer-element', FooterElement);
