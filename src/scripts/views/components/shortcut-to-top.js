class ShortcutToTopElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <div id="to-top" tabindex="0">
                <a href="#" tabindex="0">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-arrow-up-circle"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#64748b"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="12" cy="12" r="9" />
                    <line x1="12" y1="8" x2="8" y2="12" />
                    <line x1="12" y1="8" x2="12" y2="16" />
                    <line x1="16" y1="12" x2="12" y2="8" />
                </svg>
                </a>
            </div>
                        `;
  }
}

customElements.define('shortcut-to-top-element', ShortcutToTopElement);
