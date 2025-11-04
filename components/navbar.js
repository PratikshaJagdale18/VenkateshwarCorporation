class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 1000;
                    padding: 1.5rem 0;
                    background-color: transparent;
                    transition: all 0.3s ease;
                }
                
                :host(.scrolled) {
                    background-color: rgba(255, 255, 255, 0.95);
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    padding-top: 0.5rem;
                    padding-bottom: 0.5rem;
                }
                
                .navbar-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 1.5rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                
                .logo {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: white;
                    text-decoration: none;
                }
                
                :host(.scrolled) .logo {
                    color: #f97316;
                }
                
                .nav-links {
                    display: flex;
                    gap: 2rem;
                }
                
                .nav-link {
                    color: white;
                    text-decoration: none;
                    font-weight: 500;
                    position: relative;
                    transition: color 0.3s ease;
                }
                
                :host(.scrolled) .nav-link {
                    color: #333;
                }
                
                .nav-link:hover {
                    color: #f97316;
                }
                
                .nav-link::after {
                    content: '';
                    position: absolute;
                    width: 0;
                    height: 2px;
                    bottom: -2px;
                    left: 0;
                    background-color: #f97316;
                    transition: width 0.3s ease;
                }
                
                .nav-link:hover::after {
                    width: 100%;
                }
                
                .mobile-menu-btn {
                    display: none;
                    background: none;
                    border: none;
                    color: white;
                    cursor: pointer;
                }
                
                :host(.scrolled) .mobile-menu-btn {
                    color: #333;
                }
                
                @media (max-width: 768px) {
                    .nav-links {
                        display: none;
                    }
                    
                    .mobile-menu-btn {
                        display: block;
                    }
                }
            </style>
            
            <div class="navbar-container">
                <a href="#" class="logo">TensileTango</a>
                <div class="nav-links">
                    <a href="#" class="nav-link">Home</a>
                    <a href="#products" class="nav-link">Products</a>
                    <a href="#" class="nav-link">Projects</a>
                    <a href="#" class="nav-link">About</a>
                    <a href="#" class="nav-link">Contact</a>
                </div>
                <button class="mobile-menu-btn">
                    <i data-feather="menu"></i>
                </button>
            </div>
        `;
    }
}

customElements.define('custom-navbar', CustomNavbar);