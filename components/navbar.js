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
          cursor: pointer;
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

        /* Dropdown Styles */
        .dropdown {
          position: relative;
        }
        .dropdown-content {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          background: rgba(255,255,255,0.98);
          backdrop-filter: blur(15px);
          min-width: 280px;
          box-shadow: 0 15px 35px rgba(0,0,0,0.2);
          border-radius: 0.75rem;
          z-index: 10000;
          padding: 1rem 0;
          margin-top: 0.75rem;
          border: 1px solid rgba(245, 158, 11, 0.1);
          opacity: 0;
          transform: translateY(-10px);
          transition: all 0.3s ease;
        }
        .dropdown:hover .dropdown-content {
          display: block;
          opacity: 1;
          transform: translateY(0);
        }
        .dropdown-item {
          display: block;
          padding: 0.75rem 1.5rem;
          color: #222;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          border-left: 3px solid transparent;
        }
        .dropdown-item:hover {
          background: rgba(245, 158, 11, 0.1);
          color: #f59e0b;
          border-left-color: #f59e0b;
          padding-left: 2rem;
        }
        .dropdown-category {
          padding: 0.5rem 1.5rem 0.25rem;
          font-weight: 700;
          color: #f59e0b;
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          border-bottom: 1px solid rgba(245, 158, 11, 0.2);
          margin-bottom: 0.5rem;
        }
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
          .dropdown-content {
            position: static;
            display: none;
            box-shadow: none;
            background: rgba(255,255,255,0.9);
            margin-top: 0;
            border-radius: 0;
            padding: 0.5rem 0;
          }
          .dropdown:hover .dropdown-content {
            display: block;
          }
          .dropdown-item {
            padding: 0.5rem 1rem;
          }
          .dropdown-item:hover {
            padding-left: 1.5rem;
          }
        }
      </style>

      <div class="nav-container">
        <a href="index.html" class="logo">
          <img src="logo.jpg" alt="Logo">
        </a>
        <div class="nav-links">
          <a href="index.html" class="nav-link">Home</a>
          <a href="about.html" class="nav-link">About</a>
          <div class="dropdown">
            <span class="nav-link">Products ▼</span>
            <div class="dropdown-content">
              <div class="dropdown-category">Residential</div>
              <a href="balcony-shed.html" class="dropdown-item">Balcony Shed</a>
              <a href="tensile-structure.html" class="dropdown-item">Tensile Structure</a>
              <a href="terrace-shed.html" class="dropdown-item">Terrace Shed</a>
              <a href="retractable-awning.html" class="dropdown-item">Retractable Awning</a>
              <a href="entrance-canopy.html" class="dropdown-item">Entrance Canopy</a>

              <div class="dropdown-category">Industrial</div>
              <a href="industrial-shed.html" class="dropdown-item">Industrial Shed</a>
              <a href="fabrication-services.html" class="dropdown-item">Fabrication Services</a>
              <a href="civil-work.html" class="dropdown-item">Civil Work</a>
              <a href="roofing-structure.html" class="dropdown-item">Roofing Structure</a>
              <a href="cold-storage.html" class="dropdown-item">Cold Storage</a>

              <div class="dropdown-category">Car Parking</div>
              <a href="tensile-car-parking.html" class="dropdown-item">Tensile Car Parking</a>
              <a href="car-parking-awning.html" class="dropdown-item">Car Parking Awning</a>
              <a href="prefabricated-shed.html" class="dropdown-item">Prefabricated Shed</a>
              <a href="car-parking-shed.html" class="dropdown-item">Car Parking Shed</a>
              <a href="valet-parking.html" class="dropdown-item">Valet Parking</a>

              <div class="dropdown-category">Commercial</div>
              <a href="fabrication-shed.html" class="dropdown-item">Fabrication Shed</a>
              <a href="balcony-grill.html" class="dropdown-item">Balcony Grill</a>
              <a href="terrace-awning.html" class="dropdown-item">Terrace Awning</a>
              <a href="shade-awning.html" class="dropdown-item">Shade Awning</a>
              <a href="tile-flooring.html" class="dropdown-item">Tile Flooring</a>
            </div>
          </div>
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