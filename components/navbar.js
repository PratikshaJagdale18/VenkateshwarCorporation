class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 9999;
          padding: 1.5rem 0;
          background: rgba(255,255,255,0.8);
          backdrop-filter: blur(12px);
          transition: all 0.4s ease;
          font-family: 'Inter', sans-serif;
        }
        :host(.scrolled) {
          padding: 0.75rem 0;
          background: rgba(255,255,255,0.95);
          box-shadow: 0 10px 30px rgba(0,0,0,0.12);
        }
        .nav-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #111;
          text-decoration: none;
          font-weight: 800;
          font-size: 1.5rem;
        }
        .logo img { height: 48px; filter: drop-shadow(0 4px 8px rgba(0,0,0,0.2)); }
        .nav-links { display: flex; gap: 2.5rem; }
        .nav-link {
          color: #222;
          text-decoration: none;
          font-weight: 600;
          position: relative;
          transition: color 0.3s;
        }
        .nav-link:hover { color: #f59e0b; }
        .nav-link::after {
          content: '';
          position: absolute;
          width: 0; height: 3px;
          bottom: -8px; left: 0;
          background: #f59e0b;
          transition: width 0.4s ease;
        }
        .nav-link:hover::after { width: 100%; }
        .call-button {
          background: #f59e0b;
          color: #111;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s;
        }
        .call-button:hover {
          background: #d97706;
          transform: scale(1.05);
        }
        @media (max-width: 768px) {
          .nav-links, .call-button { display: none; }
        }
      </style>

      <div class="nav-container">
        <a href="index.html" class="logo">
          <img src="logo.jpg" alt="Logo">
        </a>
        <div class="nav-links">
          <a href="index.html" class="nav-link">Home</a>
          <a href="about.html" class="nav-link">About</a>
          <a href="products.html" class="nav-link">Products</a>
          <a href="contact.html" class="nav-link">Contact</a>
        </div>
        <a href="tel:+918047693560" class="call-button">Call Now</a>
      </div>
    `;

    window.addEventListener('scroll', () => {
      this.shadowRoot.host.classList.toggle('scrolled', window.scrollY > 100);
    });
  }
}

customElements.define('custom-navbar', CustomNavbar);