class HeroElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
         <section id="hero">
            <div class="container">
                <div class="hero-image">
                <img
                    tabindex="0"
                    src="images/heros/hero-image_1.jpg"
                    alt="hero image"
                />
                </div>
            </div>
        </section>
                        `;
  }
}

customElements.define('hero-element', HeroElement);
