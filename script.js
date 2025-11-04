document.addEventListener('DOMContentLoaded', function() {
    // Initialize carousel
    initCarousel();
    
    // Set up scroll event for navbar
    setupNavbarScroll();
    
    // Initialize mini preview click handlers
    setupMiniPreviews();
    
    // Initialize stacked cards hover effects
    setupStackedCards();
});

function initCarousel() {
    const carousel = document.getElementById('hero-carousel');
    const indicators = document.querySelectorAll('.carousel-indicator');
    const images = [
        'http://static.photos/architecture/1920x1080/1',
        'http://static.photos/architecture/1920x1080/2',
        'http://static.photos/architecture/1920x1080/3',
        'http://static.photos/architecture/1920x1080/4',
        'http://static.photos/architecture/1920x1080/5'
    ];
    
    // Create carousel items
    images.forEach((img, index) => {
        const div = document.createElement('div');
        div.className = 'w-full h-full flex-shrink-0';
        div.innerHTML = `<img src="${img}" alt="Tensile Structure ${index + 1}" class="w-full h-full object-cover">`;
        carousel.appendChild(div);
    });
    
    let currentIndex = 0;
    const totalItems = images.length;
    
    // Set first indicator as active
    indicators[0].classList.add('active');
    
    // Auto rotate carousel
    const rotateCarousel = () => {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    };
    
    // Update carousel position and active indicator
    const updateCarousel = () => {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        indicators.forEach((indicator, index) => {
            if (index === currentIndex) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    };
    
    // Add click handlers for indicators
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
    });
    
    // Start auto rotation
    let carouselInterval = setInterval(rotateCarousel, 5000);
    
    // Pause on hover
    carousel.addEventListener('mouseenter', () => {
        clearInterval(carouselInterval);
    });
    
    carousel.addEventListener('mouseleave', () => {
        carouselInterval = setInterval(rotateCarousel, 5000);
    });
}

function setupNavbarScroll() {
    const navbar = document.querySelector('custom-navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

function setupMiniPreviews() {
    const miniPreviews = document.querySelectorAll('.mini-preview');
    const carouselItems = document.querySelectorAll('#hero-carousel > div');
    
    miniPreviews.forEach((preview, index) => {
        preview.addEventListener('click', () => {
            // Scroll to hero section
            document.querySelector('section').scrollIntoView({ behavior: 'smooth' });
            
            // Update carousel to corresponding image
            const carousel = document.getElementById('hero-carousel');
            carousel.style.transform = `translateX(-${index * 100}%)`;
            
            // Update indicators
            document.querySelectorAll('.carousel-indicator').forEach((indicator, i) => {
                if (i === index) {
                    indicator.classList.add('active');
                } else {
                    indicator.classList.remove('active');
                }
            });
        });
    });
}

function setupStackedCards() {
    const stackedCards = document.querySelectorAll('.stacked-card');
    
    stackedCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.zIndex = '50';
        });
        
        card.addEventListener('mouseleave', () => {
            if (card.classList.contains('stacked-card')) {
                if (card.style.left === '0px') {
                    card.style.zIndex = '30';
                } else if (card.style.left === '32px') {
                    card.style.zIndex = '20';
                } else {
                    card.style.zIndex = '10';
                }
            }
        });
    });
}