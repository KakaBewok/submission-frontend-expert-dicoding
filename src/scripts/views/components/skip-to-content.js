class SkipToContentElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <a href="#cards" id="skip" tabindex="0">
                Skip to Content
            </a>
                          `;
  }
}

customElements.define('skip-to-content', SkipToContentElement);
