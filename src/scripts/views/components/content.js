class ContentElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <section id="cards" tabindex="0">
            <div class="container" tabindex="0">
                <h2 class="cards-title" tabindex="0">Explore Restaurant</h2>
                <div class="cards-wrapper" id="cards-wrapper" tabindex="0"></div>
            </div>
        </section>
                        `;
  }
}

customElements.define('content-element', ContentElement);
