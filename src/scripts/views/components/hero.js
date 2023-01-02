class HeroElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
         <section id="hero">
            <div class="container">
                <div class="hero-image">
                  <picture >
                      <source tabindex="0" media="(max-width: 600px)" type="image/webp" srcset="./images/heros/hero-image_1-small.webp">
                      <img src="./images/heros/hero-image_1-large.webp" alt="Hero">
                  </picture>
                </div>
            </div>
        </section>
                        `;
  }
}

customElements.define('hero-element', HeroElement);
