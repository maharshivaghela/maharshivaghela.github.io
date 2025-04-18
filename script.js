const primaryColor = '#333';
const secondaryColor = '#fff';

// JavaScript to handle loader and content transition
document.addEventListener('DOMContentLoaded', function() {
    // Get references to elements
    const loader = document.getElementById('loader');
    const contentWrapper = document.getElementById('content-wrapper');
    
    // Function to handle the transition
    function handleTransition() {
        // Step 1: Make content wrapper visible but still transparent
        contentWrapper.classList.remove('hidden');
        
        // Step 2: After a delay, fade out the loader
        setTimeout(function() {
            loader.classList.add('fade-out');
            
            // Step 3: After loader starts fading, start fading in content
            setTimeout(function() {
                contentWrapper.classList.add('visible');
                
                // Step 4: After loader is fully faded out, remove it from DOM
                setTimeout(function() {
                    loader.style.display = 'none';
                }, 400); // Slightly less than the loader transition time
            }, 100); // Start content fade-in shortly after loader starts fading
        }, 1000); // Time to show loader
    }
    
    // Start transition when everything is loaded
    window.addEventListener('load', handleTransition);
});

// Navbar functionality
document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger-menu');
    const navRight = document.querySelector('.nav-right');
    const menuOverlay = document.querySelector('.menu-overlay');
    const navLinks = document.querySelectorAll('.nav-right ul li a');
    const navRightUl = document.querySelector('.nav-right ul');
    
    function adjustMenu() {
        if (window.innerWidth <= 768) {
            // Mobile view
            if (!navRight.classList.contains('active')) {
                navRightUl.style.display = 'none';
            }
        } else {
            // Desktop view
            navRightUl.style.display = 'flex';
        }
    }
    
    // Run on load
    adjustMenu();
    
    // Run on resize
    window.addEventListener('resize', adjustMenu);
    
    // Fix for horizontal scrolling
    document.body.style.overflowX = 'hidden';
    document.documentElement.style.overflowX = 'hidden';
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navRight.classList.toggle('active');
        menuOverlay.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });
    
    // Close menu when clicking overlay
    menuOverlay.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navRight.classList.remove('active');
        menuOverlay.classList.remove('active');
        document.body.classList.remove('menu-open');
    });
    
    // Close menu when clicking a nav link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navRight.classList.remove('active');
            menuOverlay.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });
    
    // Change navbar on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 10) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});

// Update the goToSection function to account for fixed header
function goToSection(section, isFromArrow) {
    const headerHeight = document.querySelector('header').offsetHeight;
    const targetElement = document.getElementById(section);
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
    
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
    
    if (!isFromArrow && window.innerWidth <= 768) {
        document.getElementById('nav-toggle').click();
    }
}

// Add this to your existing DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', function() {
    // Existing code...
    
    // Typing Animation
    const typingText = document.querySelector('.typing-text');
    const phrases = [
        'Software Engineer',
        'Web Designer',
        'Full Stack Developer',
        'Freelance Developer'
    ];
    
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function typeEffect() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            // Remove a character
            typingText.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50; // Faster when deleting
        } else {
            // Add a character
            typingText.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 150; // Slower when typing
        }
        
        // If word is complete
        if (!isDeleting && charIndex === currentPhrase.length) {
            // Pause at the end
            isDeleting = true;
            typingSpeed = 1500; // Wait before deleting
        } 
        // If deletion is complete
        else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            // Move to next phrase
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 500; // Pause before typing next word
        }
        
        setTimeout(typeEffect, typingSpeed);
    }
    
    // Start the typing animation
    setTimeout(typeEffect, 1000);

    // Ensure highlight items animate in sequence
    const highlightItems = document.querySelectorAll('.highlight-item');
    highlightItems.forEach((item, index) => {
        item.style.setProperty('--i', index + 1);
    });
});


// Animation for Education section
document.addEventListener('DOMContentLoaded', function() {
    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
    }
    
    // Function to animate education items when they come into view
    function animateEducationItems() {
        const educationItems = document.querySelectorAll('.education-item');
        
        educationItems.forEach(item => {
            if (isInViewport(item)) {
                item.classList.add('animate');
            }
        });
    }
    
    // Run on load
    animateEducationItems();
    
    // Run on scroll
    window.addEventListener('scroll', animateEducationItems);
    
    // Add hover effects for contact cards
    const contactCards = document.querySelectorAll('.contact-card');
    contactCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });
    
    // Add hover effects for social links
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
    
    // Animate highlight tags on hover
    const highlightTags = document.querySelectorAll('.highlight-tag');
    highlightTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
});


// Typing effect for contact intro
function typeContactIntro() {
    const contactIntro = document.querySelector('.contact-intro p');
    if (!contactIntro) return;
    
    const text = contactIntro.textContent;
    contactIntro.textContent = '';
    
    let i = 0;
    function type() {
        if (i < text.length) {
            contactIntro.textContent += text.charAt(i);
            i++;
            setTimeout(type, 30);
        }
    }
    
    // Start typing when the section comes into view
    function checkIfInView() {
        const rect = contactIntro.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.8 && rect.bottom >= 0) {
            type();
            window.removeEventListener('scroll', checkIfInView);
        }
    }
    
    window.addEventListener('scroll', checkIfInView);
    checkIfInView(); // Check on load
}

document.addEventListener('DOMContentLoaded', typeContactIntro);


// Portfolio filtering and animations
document.addEventListener('DOMContentLoaded', function() {
    // Set up portfolio item animations with staggered delay
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach((item, index) => {
        item.style.setProperty('--i', index + 1);
    });
    
    // Portfolio filtering functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioGrid = document.querySelector('.portfolio-grid');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter value
            const filterValue = this.getAttribute('data-filter');
            
            // Filter portfolio items
            portfolioItems.forEach(item => {
                const categories = item.getAttribute('data-category').split(',');
                
                // Reset animations
                item.style.animation = 'none';
                item.offsetHeight; // Trigger reflow
                
                if (filterValue === 'all' || categories.includes(filterValue)) {
                    item.style.display = 'flex';
                    // Re-apply animation with delay
                    setTimeout(() => {
                        item.style.animation = 'fadeInUp 0.6s forwards';
                    }, 10);
                } else {
                    item.style.display = 'none';
                }
            });
            
            // Optional: Smooth height transition for the grid
            portfolioGrid.style.minHeight = portfolioGrid.offsetHeight + 'px';
            setTimeout(() => {
                portfolioGrid.style.minHeight = '0';
            }, 600);
        });
    });
    
        // Add hover effects for portfolio items
        portfolioItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.querySelector('.portfolio-icon').style.transform = 'scale(1.1) rotate(10deg)';
            });
            
            item.addEventListener('mouseleave', function() {
                this.querySelector('.portfolio-icon').style.transform = '';
            });
            
            // Add hover effects for tech tags
            const techTags = item.querySelectorAll('.tech-tag');
            techTags.forEach(tag => {
                tag.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-3px)';
                    this.style.background = 'rgba(106, 245, 255, 0.2)';
                });
                
                tag.addEventListener('mouseleave', function() {
                    this.style.transform = '';
                    this.style.background = '';
                });
            });
            
            // Add hover effects for portfolio links
            const portfolioLinks = item.querySelectorAll('.portfolio-link');
            portfolioLinks.forEach(link => {
                link.addEventListener('mouseenter', function() {
                    this.style.background = 'var(--accent-color)';
                    this.style.color = 'var(--primary-color)';
                    this.style.transform = 'translateY(-3px)';
                });
                
                link.addEventListener('mouseleave', function() {
                    this.style.background = '';
                    this.style.color = '';
                    this.style.transform = '';
                });
            });
        });
        
        // Animate portfolio items when they come into view
        function isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
                rect.bottom >= 0
            );
        }
        
        function animatePortfolioItems() {
            portfolioItems.forEach((item, index) => {
                if (isInViewport(item) && !item.classList.contains('animated')) {
                    item.classList.add('animated');
                    item.style.animation = 'fadeInUp 0.6s forwards';
                    item.style.animationDelay = `${index * 0.1}s`;
                }
            });
        }
        
        // Run on load and scroll
        animatePortfolioItems();
        window.addEventListener('scroll', animatePortfolioItems);
        
        // Add smooth hover effect for the View All Projects button
        const portfolioCta = document.querySelector('.btn-portfolio');
        if (portfolioCta) {
            portfolioCta.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px)';
                this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
            });
            
            portfolioCta.addEventListener('mouseleave', function() {
                this.style.transform = '';
                this.style.boxShadow = '';
            });
        }
    });    


    // Add this to your script.js
function animateCounters() {
    const counters = document.querySelectorAll('.counter-number');
    const speed = 200; // The lower the faster
    
    counters.forEach(counter => {
        if (counter.classList.contains('counted')) return;
        
        const target = +counter.getAttribute('data-count');
        let count = 0;
        
        const updateCount = () => {
            const increment = target / speed;
            
            if (count < target) {
                count += increment;
                counter.textContent = Math.ceil(count);
                setTimeout(updateCount, 1);
            } else {
                counter.textContent = target;
                counter.classList.add('counted');
            }
        };
        
        // Only start counting when the element is in viewport
        const counterObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                updateCount();
                counterObserver.disconnect();
            }
        }, { threshold: 0.5 });
        
        counterObserver.observe(counter);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // ... existing code ...
    
    // Initialize counter animation
    animateCounters();
});



// Enhanced intro photo interactivity
document.addEventListener('DOMContentLoaded', function() {
    const photoContainer = document.querySelector('.photo-container');
    const profileImage = document.querySelector('.profile-image-wrapper');
    
    if (!photoContainer) return;
    
    // 3D tilt effect based on mouse position
    photoContainer.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left; // x position within the element
        const y = e.clientY - rect.top; // y position within the element
        
        // Calculate rotation based on mouse position
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateY = ((x - centerX) / centerX) * 10; // Max 10 degrees
        const rotateX = ((centerY - y) / centerY) * 10; // Max 10 degrees
        
        // Apply the rotation
        this.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
        
        // Move the profile image slightly for parallax effect
        profileImage.style.transform = `translateZ(20px) translateX(${rotateY * 0.5}px) translateY(${rotateX * 0.5}px)`;
        
        // Adjust lighting effect
        const techIcons = document.querySelectorAll('.tech-icon');
        techIcons.forEach(icon => {
            const iconRect = icon.getBoundingClientRect();
            const iconCenterX = iconRect.left + iconRect.width / 2 - rect.left;
            const iconCenterY = iconRect.top + iconRect.height / 2 - rect.top;
            
            const distanceX = x - iconCenterX;
            const distanceY = y - iconCenterY;
            const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
            
            // Make icons react to mouse proximity
            if (distance < 100) {
                icon.style.transform = `scale(1.2) translateZ(30px)`;
                icon.style.boxShadow = `0 10px 20px rgba(0, 0, 0, 0.3)`;
            } else {
                icon.style.transform = '';
                icon.style.boxShadow = '';
            }
        });
    });
    
    // Reset on mouse leave
    photoContainer.addEventListener('mouseleave', function() {
        this.style.transform = '';
        profileImage.style.transform = '';
        
        const techIcons = document.querySelectorAll('.tech-icon');
        techIcons.forEach(icon => {
            icon.style.transform = '';
            icon.style.boxShadow = '';
        });
    });
    
        // Touch support for mobile devices
        photoContainer.addEventListener('touchmove', function(e) {
            e.preventDefault();
            const touch = e.touches[0];
            const rect = this.getBoundingClientRect();
            const x = touch.clientX - rect.left;
            const y = touch.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateY = ((x - centerX) / centerX) * 5; // Reduced tilt for touch
            const rotateX = ((centerY - y) / centerY) * 5; // Reduced tilt for touch
            
            this.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
            profileImage.style.transform = `translateZ(10px) translateX(${rotateY * 0.3}px) translateY(${rotateX * 0.3}px)`;
        });
        
        photoContainer.addEventListener('touchend', function() {
            this.style.transform = '';
            profileImage.style.transform = '';
        });
        
        // Add random movement to tech icons when not hovering
        const techIcons = document.querySelectorAll('.tech-icon');
        
        function addRandomMovement() {
            techIcons.forEach(icon => {
                // Only apply if not currently being hovered
                if (!photoContainer.matches(':hover')) {
                    const randomX = (Math.random() - 0.5) * 10;
                    const randomY = (Math.random() - 0.5) * 10;
                    
                    icon.style.transform = `translate(${randomX}px, ${randomY}px)`;
                    
                    setTimeout(() => {
                        icon.style.transform = '';
                    }, 2000);
                }
            });
            
            // Call again after random interval
            setTimeout(addRandomMovement, 3000 + Math.random() * 2000);
        }
        
        // Start random movements after initial animations
        setTimeout(addRandomMovement, 4000);
        
        // Create particle effect in the background
        function createParticles() {
            const backgroundShapes = document.querySelector('.background-shapes');
            if (!backgroundShapes) return;
            
            for (let i = 0; i < 15; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                
                // Random size
                const size = Math.random() * 5 + 2;
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                
                // Random position
                particle.style.top = `${Math.random() * 100}%`;
                particle.style.left = `${Math.random() * 100}%`;
                
                // Random opacity
                particle.style.opacity = Math.random() * 0.5 + 0.1;
                
                // Random animation duration
                const duration = Math.random() * 20 + 10;
                particle.style.animation = `particleFloat ${duration}s linear infinite`;
                
                // Random animation delay
                particle.style.animationDelay = `${Math.random() * 10}s`;
                
                backgroundShapes.appendChild(particle);
            }
        }
        
        // Add CSS for particles
        const style = document.createElement('style');
        style.textContent = `
            .particle {
                position: absolute;
                background-color: var(--accent-color);
                border-radius: 50%;
                pointer-events: none;
            }
            
            @keyframes particleFloat {
                0% {
                    transform: translate(0, 0) rotate(0deg);
                    opacity: 0;
                }
                10% {
                    opacity: 0.5;
                }
                90% {
                    opacity: 0.5;
                }
                100% {
                    transform: translate(${Math.random() > 0.5 ? '' : '-'}${Math.random() * 100 + 50}px, 
                                        ${Math.random() > 0.5 ? '' : '-'}${Math.random() * 100 + 50}px) 
                                rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
        
        // Create particles
        createParticles();
        
        // Add click interaction
        photoContainer.addEventListener('click', function() {
            // Create ripple effect
            const ripple = document.createElement('div');
            ripple.classList.add('ripple');
            this.appendChild(ripple);
            
            // Animate and remove
            setTimeout(() => {
                ripple.remove();
            }, 1000);
            
            // Bounce animation on profile
            profileImage.style.animation = 'bounce 0.5s';
            setTimeout(() => {
                profileImage.style.animation = '';
            }, 500);
        });
        
        // Add ripple style
        const rippleStyle = document.createElement('style');
        rippleStyle.textContent = `
            .ripple {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 0;
                height: 0;
                border-radius: 50%;
                background: radial-gradient(circle, rgba(106, 245, 255, 0.8) 0%, rgba(106, 245, 255, 0) 70%);
                z-index: 5;
                animation: rippleEffect 1s ease-out;
            }
            
            @keyframes rippleEffect {
                0% {
                    width: 0;
                    height: 0;
                    opacity: 0.8;
                }
                100% {
                    width: 300px;
                    height: 300px;
                    opacity: 0;
                }
            }
            
            @keyframes bounce {
                0%, 100% {
                    transform: scale(1);
                }
                50% {
                    transform: scale(1.05);
                }
            }
        `;
        document.head.appendChild(rippleStyle);
    });
    


    // Add this to your existing script
function addCursorGlow() {
    const photoContainer = document.querySelector('.photo-container');
    if (!photoContainer) return;
    
    const cursorGlow = document.createElement('div');
    cursorGlow.classList.add('cursor-glow');
    photoContainer.appendChild(cursorGlow);
    
    photoContainer.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        cursorGlow.style.left = `${x}px`;
        cursorGlow.style.top = `${y}px`;
    });
    
    photoContainer.addEventListener('mouseleave', function() {
        cursorGlow.style.opacity = '0';
    });
    
    photoContainer.addEventListener('mouseenter', function() {
        cursorGlow.style.opacity = '1';
    });
}

document.addEventListener('DOMContentLoaded', addCursorGlow);


// Interactive Custom Cursor
document.addEventListener('DOMContentLoaded', function() {
    // Only initialize on non-touch devices
    if (!('ontouchstart' in window)) {
        initCustomCursor();
    }
    
    function initCustomCursor() {
        const cursorOuter = document.querySelector('.cursor-outer');
        const cursorInner = document.querySelector('.cursor-inner');
        const cursorDot = document.querySelector('.cursor-dot');
        
        if (!cursorOuter || !cursorInner || !cursorDot) return;
        
        let mouseX = 0;
        let mouseY = 0;
        let outerX = 0;
        let outerY = 0;
        let innerX = 0;
        let innerY = 0;
        let dotX = 0;
        let dotY = 0;
        let isMouseDown = false;
        let trailTimeout;
        
        // Mouse movement tracking
        document.addEventListener('mousemove', function(e) {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            // Create trail effect
            createTrailDot(e.clientX, e.clientY);
        });
        
        // Mouse events for click animation
        document.addEventListener('mousedown', function() {
            isMouseDown = true;
            document.body.classList.add('cursor-click');
        });
        
        document.addEventListener('mouseup', function() {
            isMouseDown = false;
            document.body.classList.remove('cursor-click');
        });
        
        // Handle cursor leaving/entering the window
        document.addEventListener('mouseleave', function() {
            document.body.classList.add('cursor-hidden');
        });
        
        document.addEventListener('mouseenter', function() {
            document.body.classList.remove('cursor-hidden');
        });
        
        // Interactive elements hover states
        const interactiveElements = document.querySelectorAll('a, button, .btn-portfolio, .portfolio-link, .social-link, .filter-btn, .tech-tag, input, textarea, [data-cursor="button"]');
        
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', function() {
                document.body.classList.add('cursor-hover');
                
                // Special cursor states based on element type
                if (this.tagName === 'A' || this.classList.contains('portfolio-link') || this.classList.contains('social-link')) {
                    document.body.classList.add('cursor-link');
                } else if (this.tagName === 'BUTTON' || this.classList.contains('btn-portfolio') || this.classList.contains('filter-btn') || this.getAttribute('data-cursor') === 'button') {
                    document.body.classList.add('cursor-button');
                }
                
                // Add subtle magnetic effect
                this.addEventListener('mousemove', magneticEffect);
            });
            
            el.addEventListener('mouseleave', function() {
                document.body.classList.remove('cursor-hover', 'cursor-link', 'cursor-button');
                
                // Remove magnetic effect
                this.removeEventListener('mousemove', magneticEffect);
                this.style.transform = '';
            });
        });
        
        // Text input elements
        const textElements = document.querySelectorAll('input[type="text"], input[type="email"], textarea');
        
        textElements.forEach(el => {
            el.addEventListener('mouseenter', function() {
                document.body.classList.add('cursor-text');
            });
            
            el.addEventListener('mouseleave', function() {
                document.body.classList.remove('cursor-text');
            });
        });
        
        // Magnetic effect for interactive elements
        function magneticEffect(e) {
            const rect = this.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            const distanceX = e.clientX - centerX;
            const distanceY = e.clientY - centerY;
            
            // Calculate distance from center
            const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
            const maxDistance = Math.max(rect.width, rect.height) / 2;
            
            if (distance < maxDistance * 1.5) {
                // Calculate magnetic pull (stronger when closer to center)
                const pull = 1 - distance / (maxDistance * 1.5);
                const moveX = distanceX * pull * 0.3;
                const moveY = distanceY * pull * 0.3;
                
                this.style.transform = `translate(${moveX}px, ${moveY}px)`;
            } else {
                this.style.transform = '';
            }
        }
        
        // Create trail dots
        function createTrailDot(x, y) {
            clearTimeout(trailTimeout);
            
            trailTimeout = setTimeout(() => {
                const trail = document.createElement('div');
                trail.className = 'cursor-trail';
                trail.style.left = x + 'px';
                trail.style.top = y + 'px';
                document.body.appendChild(trail);
                
                // Remove trail dot after animation completes
                setTimeout(() => {
                    if (trail && trail.parentNode) {
                        trail.parentNode.removeChild(trail);
                    }
                }, 1000);
            }, 50); // Create trail with slight delay for better performance
        }
        
        // Smooth cursor animation
        function animateCursor() {
            // Calculate smooth movement with easing
            outerX += (mouseX - outerX) * 0.15;
            outerY += (mouseY - outerY) * 0.15;
            
            innerX += (mouseX - innerX) * 0.22;
            innerY += (mouseY - innerY) * 0.22;
            
            dotX += (mouseX - dotX) * 0.35;
            dotY += (mouseY - dotY) * 0.35;
            
            // Apply positions
            cursorOuter.style.transform = `translate(${outerX}px, ${outerY}px)`;
            cursorInner.style.transform = `translate(${innerX}px, ${innerY}px)`;
            cursorDot.style.transform = `translate(${dotX}px, ${dotY}px)`;
            
            requestAnimationFrame(animateCursor);
        }
        
        // Start animation
        animateCursor();
    }
});


// Add these to your existing cursor initialization function
document.addEventListener('DOMContentLoaded', function() {
    // Only run on non-touch devices
    if (!('ontouchstart' in window)) {
        // Special cursor effects for different sections
        
        // Profile photo special effect
        const photoContainer = document.querySelector('.photo-container');
        if (photoContainer) {
            photoContainer.addEventListener('mouseenter', function() {
                document.body.classList.add('cursor-photo');
                
                // Add custom cursor content for photo section
                const cursorInner = document.querySelector('.cursor-inner');
                cursorInner.setAttribute('data-before-content', '👋');
                
                // Add ripple effect on cursor move
                this.addEventListener('mousemove', createPhotoRipple);
            });
            
            photoContainer.addEventListener('mouseleave', function() {
                document.body.classList.remove('cursor-photo');
                
                // Remove custom cursor content
                const cursorInner = document.querySelector('.cursor-inner');
                cursorInner.removeAttribute('data-before-content');
                
                // Remove ripple effect
                this.removeEventListener('mousemove', createPhotoRipple);
            });
        }
        
        // Skills section effect
        const skillsSection = document.getElementById('skills');
        if (skillsSection) {
            const skillItems = skillsSection.querySelectorAll('.skills-list li');
            
            skillItems.forEach(item => {
                item.addEventListener('mouseenter', function() {
                    document.body.classList.add('cursor-skill');
                    
                    // Get skill name from alt attribute
                    const skillName = this.querySelector('img').getAttribute('alt');
                    
                    // Add skill name to cursor
                    const cursorOuter = document.querySelector('.cursor-outer');
                    cursorOuter.setAttribute('data-content', skillName);
                });
                
                item.addEventListener('mouseleave', function() {
                    document.body.classList.remove('cursor-skill');
                    
                    // Remove skill name
                    const cursorOuter = document.querySelector('.cursor-outer');
                    cursorOuter.removeAttribute('data-content');
                });
            });
        }
        
        // Portfolio section effect
        const portfolioSection = document.getElementById('portfolio');
        if (portfolioSection) {
            const portfolioItems = portfolioSection.querySelectorAll('.portfolio-item');
            
            portfolioItems.forEach(item => {
                item.addEventListener('mouseenter', function() {
                    document.body.classList.add('cursor-view');
                    
                    // Add view text to cursor
                    const cursorOuter = document.querySelector('.cursor-outer');
                    cursorOuter.setAttribute('data-content', 'View');
                });
                
                item.addEventListener('mouseleave', function() {
                    document.body.classList.remove('cursor-view');
                    
                    // Remove view text
                    const cursorOuter = document.querySelector('.cursor-outer');
                    cursorOuter.removeAttribute('data-content');
                });
            });
        }
        
        // Contact section effect
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            const contactLinks = contactSection.querySelectorAll('a');
            
            contactLinks.forEach(link => {
                link.addEventListener('mouseenter', function() {
                    document.body.classList.add('cursor-contact');
                    
                    // Add connect text to cursor
                    const cursorOuter = document.querySelector('.cursor-outer');
                    cursorOuter.setAttribute('data-content', 'Connect');
                });
                
                link.addEventListener('mouseleave', function() {
                    document.body.classList.remove('cursor-contact');
                    
                    // Remove connect text
                    const cursorOuter = document.querySelector('.cursor-outer');
                    cursorOuter.removeAttribute('data-content');
                });
            });
        }
        
        // Create ripple effect for photo section
        function createPhotoRipple(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Only create ripple every few movements for performance
            if (Math.random() > 0.7) {
                const ripple = document.createElement('div');
                ripple.className = 'cursor-photo-ripple';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                this.appendChild(ripple);
                
                // Remove ripple after animation completes
                setTimeout(() => {
                    if (ripple && ripple.parentNode) {
                        ripple.parentNode.removeChild(ripple);
                    }
                }, 1000);
            }
        }
        
        // Add special cursor effects for scrolling
        let lastScrollTop = 0;
        let scrollDirection = 'none';
        
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > lastScrollTop) {
                scrollDirection = 'down';
                document.body.classList.add('cursor-scroll-down');
                document.body.classList.remove('cursor-scroll-up');
            } else if (scrollTop < lastScrollTop) {
                scrollDirection = 'up';
                document.body.classList.add('cursor-scroll-up');
                document.body.classList.remove('cursor-scroll-down');
            }
            
            lastScrollTop = scrollTop;
            
            // Remove scroll classes after a short delay
            clearTimeout(window.scrollCursorTimeout);
            window.scrollCursorTimeout = setTimeout(() => {
                document.body.classList.remove('cursor-scroll-up', 'cursor-scroll-down');
                scrollDirection = 'none';
            }, 100);
        });
        
        // Add cursor effects for headings
        const headings = document.querySelectorAll('h1, h2, h3');
        
        headings.forEach(heading => {
            heading.addEventListener('mouseenter', function() {
                document.body.classList.add('cursor-heading');
            });
            
            heading.addEventListener('mouseleave', function() {
                document.body.classList.remove('cursor-heading');
            });
        });
    }
});


// Add this to your cursor initialization function
function initElementInteractions() {
    // Add special cursor interaction with animated elements
    const animatedElements = document.querySelectorAll('.animated-button, .experience-item, .education-item, .portfolio-item, .skills-list li');
    
    animatedElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            // Create a subtle magnetic pull effect
            this.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                // Calculate distance from center
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                // Create a subtle highlight effect that follows the cursor
                const highlight = this.querySelector('.element-highlight') || document.createElement('div');
                if (!this.querySelector('.element-highlight')) {
                    highlight.classList.add('element-highlight');
                    this.appendChild(highlight);
                    this.style.overflow = 'hidden'; // Ensure highlight stays within element
                }
                
                highlight.style.left = `${x}px`;
                highlight.style.top = `${y}px`;
            });
        });
        
        element.addEventListener('mouseleave', function() {
            // Remove the highlight effect
            const highlight = this.querySelector('.element-highlight');
            if (highlight) {
                highlight.remove();
            }
            
            this.style.transform = '';
        });
    });
}

// Call this function in your cursor initialization
initElementInteractions();


// Add this to your cursor initialization function
function initTextInteraction() {
    // Add special cursor interaction with paragraphs
    const paragraphs = document.querySelectorAll('p:not(.element-highlight)');
    
    paragraphs.forEach(paragraph => {
        paragraph.addEventListener('mouseenter', function() {
            document.body.classList.add('cursor-text-hover');
        });
        
        paragraph.addEventListener('mouseleave', function() {
            document.body.classList.remove('cursor-text-hover');
        });
    });
}

// Call this function in your cursor initialization
initTextInteraction();


// Add this to optimize cursor performance
function optimizeCursorPerformance() {
    // Use requestAnimationFrame for smooth animation
    let cursorRaf;
    let isMoving = false;
    let moveTimeout;
    
    // Throttle mousemove events
    document.addEventListener('mousemove', function() {
        isMoving = true;
        
        clearTimeout(moveTimeout);
        moveTimeout = setTimeout(() => {
            isMoving = false;
        }, 100);
    });
    
    // Only update cursor position when necessary
    function updateCursorPosition() {
        if (isMoving) {
            // Your cursor position update code here
            // This will only run when the mouse is actually moving
        }
        
        cursorRaf = requestAnimationFrame(updateCursorPosition);
    }
    
    cursorRaf = requestAnimationFrame(updateCursorPosition);
    
    // Clean up on page unload
    window.addEventListener('beforeunload', () => {
        cancelAnimationFrame(cursorRaf);
    });
}

// Call this function in your cursor initialization
optimizeCursorPerformance();


// Featured Project Slider
document.addEventListener('DOMContentLoaded', function() {
    const sliderTrack = document.querySelector('.slider-track');
    const sliderItems = document.querySelectorAll('.slider-item');
    const prevButton = document.querySelector('.slider-arrow.prev');
    const nextButton = document.querySelector('.slider-arrow.next');
    const dotsContainer = document.querySelector('.slider-dots');
    
    if (!sliderTrack || sliderItems.length === 0) return;
    
    let currentIndex = 0;
    let startX, moveX, isDragging = false;
    
    // Create dots
    sliderItems.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.classList.add('slider-dot');
      if (index === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goToSlide(index));
      dotsContainer.appendChild(dot);
    });
    
    // Update dots
    function updateDots() {
      const dots = document.querySelectorAll('.slider-dot');
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
      });
    }
    
    // Go to specific slide
    function goToSlide(index) {
      currentIndex = index;
      sliderTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
      updateDots();
    }
    
    // Next slide
    function nextSlide() {
      currentIndex = (currentIndex + 1) % sliderItems.length;
      goToSlide(currentIndex);
    }
    
    // Previous slide
    function prevSlide() {
      currentIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
      goToSlide(currentIndex);
    }
    
    // Event listeners
    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);
    
    // Touch and mouse events for swipe
    sliderTrack.addEventListener('mousedown', startDrag);
    sliderTrack.addEventListener('touchstart', startDrag, { passive: true });
    
    window.addEventListener('mouseup', endDrag);
    window.addEventListener('touchend', endDrag);
    
    window.addEventListener('mousemove', drag);
    window.addEventListener('touchmove', drag, { passive: true });
    
    function startDrag(e) {
      isDragging = true;
      startX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
      sliderTrack.style.transition = 'none';
    }
    
    function drag(e) {
      if (!isDragging) return;
      
      e.preventDefault();
      moveX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
      const diff = moveX - startX;
      const trackWidth = sliderTrack.offsetWidth;
      const move = (diff / trackWidth) * 100;
      
      sliderTrack.style.transform = `translateX(calc(-${currentIndex * 100}% + ${move}px))`;
    }
    
    function endDrag() {
      if (!isDragging) return;
      
      isDragging = false;
      sliderTrack.style.transition = 'transform 0.6s cubic-bezier(0.65, 0, 0.35, 1)';
      
      if (moveX) {
        const diff = moveX - startX;
        if (diff < -50) {
            nextSlide();
          } else if (diff > 50) {
            prevSlide();
          } else {
            goToSlide(currentIndex);
          }
        }
        
        moveX = null;
      }
      
      // Auto-advance slides
      let slideInterval = setInterval(nextSlide, 5000);
      
      // Pause auto-advance on hover
      sliderTrack.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
      });
      
      sliderTrack.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, 5000);
      });
      
      // Initialize slider
      goToSlide(0);
    });

  
