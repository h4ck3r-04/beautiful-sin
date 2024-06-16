class SidebarLink extends HTMLElement {
  static get observedAttributes() {
    return ['href', 'title', 'icon-class'];
  }

  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  render() {
    const href = this.getAttribute('href') || '/';
    const title = this.getAttribute('title') || 'Home';
    const iconClass = this.getAttribute('icon-class') || 'bx bx-popsicle';

    this.innerHTML = `
      <li>
        <a href="${href}">
          <i class='${iconClass}'></i>
          <span class="links-name">${title}</span>
        </a>
        <span class="tooltip">${title}</span>
      </li>
    `;
  }
}

customElements.define('sidebar-link', SidebarLink);
