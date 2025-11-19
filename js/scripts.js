// FoodForward SA - Interactive Features
document.addEventListener('DOMContentLoaded', function() {

    // 1. Interactive Donation Impact Calculator
    const donationCalculator = {
        init: function() {
            const amountInput = document.getElementById('donation-amount');
            const impactDisplay = document.getElementById('impact-result');

            if (amountInput && impactDisplay) {
                amountInput.addEventListener('input', this.calculateImpact.bind(this));
            }
        },

        calculateImpact: function(event) {
            const amount = parseFloat(event.target.value) || 0;
            const impactDisplay = document.getElementById('impact-result');

            if (amount > 0) {
                const meals = Math.floor(amount / 2.5); // R2.50 per meal
                const people = Math.floor(meals / 7); // 7 meals per person per week

                impactDisplay.innerHTML = `
                    <div class="impact-result">
                        <h4>Your R${amount} donation will provide:</h4>
                        <p>🍽️ <strong>${meals}</strong> meals</p>
                        <p>👥 <strong>${people}</strong> people fed for a week</p>
                    </div>
                `;
                impactDisplay.style.display = 'block';
            } else {
                impactDisplay.style.display = 'none';
            }
        }
    };

    // 2. Form Validation
    const formValidator = {
        init: function() {
            const forms = document.querySelectorAll('form');
            forms.forEach(form => {
                form.addEventListener('submit', this.validateForm.bind(this));
            });
        },

        validateForm: function(event) {
            const form = event.target;
            const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
            let isValid = true;

            inputs.forEach(input => {
                if (!input.value.trim()) {
                    this.showError(input, 'This field is required');
                    isValid = false;
                } else {
                    this.clearError(input);
                }

                // Email validation
                if (input.type === 'email' && input.value) {
                    if (!this.isValidEmail(input.value)) {
                        this.showError(input, 'Please enter a valid email address');
                        isValid = false;
                    }
                }
            });

            if (!isValid) {
                event.preventDefault();
                this.showNotification('Please fill in all required fields correctly.', 'error');
            } else {
                this.showNotification('Form submitted successfully!', 'success');
            }
        },

        isValidEmail: function(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        },

        showError: function(input, message) {
            this.clearError(input);
            input.style.borderColor = '#ff4444';
            const errorDiv = document.createElement('div');
            errorDiv.className = 'error-message';
            errorDiv.textContent = message;
            errorDiv.style.color = '#ff4444';
            errorDiv.style.fontSize = '0.8rem';
            errorDiv.style.marginTop = '5px';
            input.parentNode.appendChild(errorDiv);
        },

        clearError: function(input) {
            input.style.borderColor = '';
            const existingError = input.parentNode.querySelector('.error-message');
            if (existingError) {
                existingError.remove();
            }
        },

        showNotification: function(message, type) {
            const notification = document.createElement('div');
            notification.className = `notification ${type}`;
            notification.textContent = message;
            notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                padding: 15px 20px;
                border-radius: 5px;
                color: white;
                z-index: 10000;
                font-weight: bold;
                background-color: ${type === 'success' ? '#2E8B57' : '#ff4444'};
            `;

            document.body.appendChild(notification);

            setTimeout(() => {
                notification.remove();
            }, 5000);
        }
    };

    // 3. Smooth Scrolling for Navigation
    const smoothScroller = {
        init: function() {
            const navLinks = document.querySelectorAll('a[href^="#"]');
            navLinks.forEach(link => {
                link.addEventListener('click', this.smoothScroll.bind(this));
            });
        },

        smoothScroll: function(event) {
            event.preventDefault();
            const targetId = event.target.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    };

    // 4. Mobile Menu Toggle
    const mobileMenu = {
        init: function() {
            this.createMobileMenuButton();
        },

        createMobileMenuButton: function() {
            const nav = document.querySelector('.nav-links');
            if (window.innerWidth <= 768 && nav) {
                const menuButton = document.createElement('button');
                menuButton.innerHTML = '☰';
                menuButton.className = 'mobile-menu-button';
                menuButton.style.cssText = `
                    display: none;
                    background: none;
                    border: none;
                    color: white;
                    font-size: 1.5rem;
                    cursor: pointer;
                    padding: 0.5rem;
                `;

                const headerContent = document.querySelector('.header-content');
                headerContent.appendChild(menuButton);

                menuButton.addEventListener('click', () => {
                    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
                });

                // Show menu button on mobile
                if (window.innerWidth <= 768) {
                    menuButton.style.display = 'block';
                    nav.style.display = 'none';
                }
            }
        }
    };

    // 5. Image Gallery/Lightbox
    const imageGallery = {
        init: function() {
            this.createLightbox();
            const images = document.querySelectorAll('.gallery-image');
            images.forEach(img => {
                img.addEventListener('click', this.openLightbox.bind(this));
            });
        },

        createLightbox: function() {
            const lightbox = document.createElement('div');
            lightbox.id = 'lightbox';
            lightbox.style.cssText = `
                display: none;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.8);
                z-index: 1000;
                justify-content: center;
                align-items: center;
            `;

            lightbox.innerHTML = `
                <div class="lightbox-content">
                    <img src="" alt="">
                    <button class="lightbox-close">×</button>
                </div>
            `;

            document.body.appendChild(lightbox);

            // Close lightbox
            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox || e.target.classList.contains('lightbox-close')) {
                    lightbox.style.display = 'none';
                }
            });
        },

        openLightbox: function(event) {
            const lightbox = document.getElementById('lightbox');
            const lightboxImg = lightbox.querySelector('img');
            lightboxImg.src = event.target.src;
            lightboxImg.alt = event.target.alt;
            lightbox.style.display = 'flex';
        }
    };

    // 6. Dynamic Content Loading
    const contentLoader = {
        init: function() {
            // Load blog posts or news dynamically
            this.loadLatestNews();
        },

        loadLatestNews: function() {
            const newsContainer = document.getElementById('latest-news');
            if (newsContainer) {
                // Simulated API call - in real scenario, this would fetch from a CMS
                setTimeout(() => {
                    const news = [
                        {
                            title: "FoodForward SA Distributes 1 Million Meals",
                            date: "2025-01-15",
                            excerpt: "We've reached a major milestone in our mission to fight hunger."
                        },
                        {
                            title: "New Corporate Partnership Announced",
                            date: "2025-01-10",
                            excerpt: "Welcoming ABC Corporation as our newest food rescue partner."
                        }
                    ];

                    newsContainer.innerHTML = news.map(item => `
                        <div class="news-item">
                            <h4>${item.title}</h4>
                            <small>${item.date}</small>
                            <p>${item.excerpt}</p>
                        </div>
                    `).join('');
                }, 1000);
            }
        }
    };

    // 7. Google Maps Integration
    const mapIntegration = {
        init: function() {
            const mapContainer = document.getElementById('map-container');
            if (mapContainer) {
                this.loadGoogleMap();
            }
        },

        loadGoogleMap: function() {
            // This would integrate with Google Maps API
            const mapContainer = document.getElementById('map-container');
            mapContainer.innerHTML = `
                <div class="map-placeholder">
                    <h4>Our Locations</h4>
                    <p>📍 Cape Town Headquarters</p>
                    <p>📍 Johannesburg Distribution Center</p>
                    <p>📍 Durban Warehouse</p>
                    <p>📍 Pretoria Outreach Office</p>
                    <p><em>Interactive map would be implemented with Google Maps API</em></p>
                </div>
            `;
        }
    };

    // Initialize all functionality
    donationCalculator.init();
    formValidator.init();
    smoothScroller.init();
    mobileMenu.init();
    imageGallery.init();
    contentLoader.init();
    mapIntegration.init();

    // 8. Search Functionality
    const searchFunctionality = {
        init: function() {
            this.createSearchBar();
        },

        createSearchBar: function() {
            const searchBar = document.createElement('div');
            searchBar.innerHTML = `
                <input type="text" id="site-search" placeholder="Search our website...">
                <button id="search-button">Search</button>
            `;
            searchBar.style.cssText = `
                display: flex;
                gap: 10px;
                margin: 1rem 0;
            `;

            const mainContent = document.querySelector('.page-content');
            if (mainContent) {
                mainContent.insertBefore(searchBar, mainContent.firstChild);

                document.getElementById('search-button').addEventListener('click', this.performSearch.bind(this));
            }
        },

        performSearch: function() {
            const searchTerm = document.getElementById('site-search').value.toLowerCase();
            if (searchTerm) {
                // Simple search implementation
                const contentElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p');
                let found = false;

                contentElements.forEach(element => {
                    if (element.textContent.toLowerCase().includes(searchTerm)) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        element.style.backgroundColor = '#ffffcc';
                        setTimeout(() => {
                            element.style.backgroundColor = '';
                        }, 3000);
                        found = true;
                    }
                });

                if (!found) {
                    alert('No results found for: ' + searchTerm);
                }
            }
        }
    };

    searchFunctionality.init();
});