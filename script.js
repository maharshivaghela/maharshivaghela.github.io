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




// document.addEventListener('DOMContentLoaded', function() {
    //     const navToggle = document.getElementById('nav-toggle');
    //     const navbar = document.getElementById('navbar');
    
    //     navToggle.addEventListener('click', function() {
    //         navbar.classList.toggle('active');
    //         document.body.classList.toggle('menu-open');
    //         if (navbar.classList.contains('active')) {
    //             navToggle.innerHTML = '<i class="bi bi-caret-right-fill"></i>'; // Right arrow
    //             navToggle.style.color = primaryColor;
    //         } else {
    //             navToggle.innerHTML = '<i class="bi bi-caret-left-fill"></i>'; // Left arrow
    //             navToggle.style.color = secondaryColor;
    //         }
    //     });
    
    //     document.querySelector('.nav-toggle').addEventListener('click', function() {
    //         document.querySelector('nav').classList.toggle('nav-open');
    //     });   
        
    //     setTimeout()
    // });
