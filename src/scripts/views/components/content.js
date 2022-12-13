class ContentElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <section id="cards">
            <div class="container">
                <h2 class="cards-title" tabindex="0">Explore Restaurant</h2>
                <div class="cards-wrapper" id="cards-wrapper"></div>
            </div>
        </section>
                        `;
  }
}

customElements.define('content-element', ContentElement);
