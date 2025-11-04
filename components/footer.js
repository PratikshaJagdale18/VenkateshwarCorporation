class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    background-color: #1f2937;
                    color: white;
                    padding: 3rem 0 1rem;
                }

                .footer-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 1.5rem;
                }

                .footer-content {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 2rem;
                    margin-bottom: 2rem;
                }

                .footer-section h3 {
                    color: #f97316;
                    font-size: 1.25rem;
                    font-weight: 700;
                    margin-bottom: 1rem;
                }

                .footer-section p {
                    color: #9ca3af;
                    line-height: 1.6;
                    margin-bottom: 1rem;
                }

                .footer-links {
                    list-style: none;
                    padding: 0;
                }

                .footer-links li {
                    margin-bottom: 0.5rem;
                }

                .footer-links a {
                    color: #9ca3af;
                    text-decoration: none;
                    transition: color 0.3s ease;
                }

                .footer-links a:hover {
                    color: #f97316;
                }

                .social-links {
                    display: flex;
                    gap: 1rem;
                    margin-top: 1rem;
                }

                .social-links a {
                    color: #9ca3af;
                    transition: color 0.3s ease;
                }

                .social-links a:hover {
                    color: #f97316;
                }

                .footer-bottom {
                    border-top: 1px solid #374151;
                    padding-top: 1rem;
                    text-align: center;
                    color: #9ca3af;
                }

                @media (max-width: 768px) {
                    .footer-content {
                        grid-template-columns: 1fr;
                    }
                }
            </style>

            <div class="footer-container">
                <div class="footer-content">
                    <div class="footer-section">
                        <h3>TensileTango</h3>
                        <p>Redefining spaces with innovative tensile membrane solutions for architectural excellence and functional beauty.</p>
                        <div class="social-links">
                            <a href="#" aria-label="Facebook"><i data-feather="facebook"></i></a>
                            <a href="#" aria-label="Twitter"><i data-feather="twitter"></i></a>
                            <a href="#" aria-label="Instagram"><i data-feather="instagram"></i></a>
                            <a href="#" aria-label="LinkedIn"><i data-feather="linkedin"></i></a>
                        </div>
                    </div>

                    <div class="footer-section">
                        <h3>Quick Links</h3>
                        <ul class="footer-links">
                            <li><a href="#">Home</a></li>
                            <li><a href="#products">Products</a></li>
                            <li><a href="#">Projects</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>

                    <div class="footer-section">
                        <h3>Services</h3>
                        <ul class="footer-links">
                            <li><a href="#">Tensioned Membrane Roofs</a></li>
                            <li><a href="#">Canopy Systems</a></li>
                            <li><a href="#">Facade Systems</a></li>
                            <li><a href="#">Custom Solutions</a></li>
                            <li><a href="#">Consultation</a></li>
                        </ul>
                    </div>

                    <div class="footer-section">
                        <h3>Contact Info</h3>
                        <p><i data-feather="map-pin" class="inline w-4 h-4 mr-2"></i>123 Architecture Street<br>Design City, DC 12345</p>
                        <p><i data-feather="phone" class="inline w-4 h-4 mr-2"></i>+1 (555) 123-4567</p>
                        <p><i data-feather="mail" class="inline w-4 h-4 mr-2"></i>info@tensiletango.com</p>
                    </div>
                </div>

                <div class="footer-bottom">
                    <p>&copy; 2025 TensileTango. All rights reserved. | Developed by DW Innovations Pvt.Ltd.</p>
                </div>
            </div>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);