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
