document.addEventListener('DOMContentLoaded', function() {
    // Initialize project filtering
    initProjectFilters();
    
    // Initialize project modals
    initProjectModals();
    
    // Initialize back to top button
    initBackToTop();
    
    // Initialize navbar toggle (reusing from main script)
    initNavToggle();
  });
  
  // Project Filtering
  function initProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    if (!filterButtons.length || !projectCards.length) return;
    
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Get filter value
        const filter = this.getAttribute('data-filter');
        
        // Filter projects
        projectCards.forEach(card => {
          if (filter === 'all' || card.getAttribute('data-category') === filter) {
            card.style.display = 'block';
            setTimeout(() => {
              card.style.opacity = '1';
            }, 50);
          } else {
            card.style.opacity = '0.3';
            setTimeout(() => {
              card.style.display = 'none';
            }, 300);
          }
        });
      });
    });
  }
  
  // Project Modals
  function initProjectModals() {
    const detailsLinks = document.querySelectorAll('.btn-details');
    const modals = document.querySelectorAll('.project-modal');
    const closeButtons = document.querySelectorAll('.close-modal');
    
    if (!detailsLinks.length || !modals.length) return;
    
    // Open modal
    detailsLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const modalId = this.getAttribute('href');
        const modal = document.querySelector(modalId);
        
        if (modal) {
          modal.classList.add('active');
          document.body.style.overflow = 'hidden';
        }
      });
    });
    
    // Close modal with button
    closeButtons.forEach(button => {
      button.addEventListener('click', function() {
        const modal = this.closest('.project-modal');
        modal.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
    
    // Close modal with click outside
    modals.forEach(modal => {
      modal.addEventListener('click', function(e) {
        if (e.target === this) {
          this.classList.remove('active');
          document.body.style.overflow = '';
        }
      });
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        modals.forEach(modal => {
          if (modal.classList.contains('active')) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
          }
        });
      }
    });
  }
  
  // Back to Top Button
  function initBackToTop() {
    const backToTopButton = document.getElementById('back-to-top');
    
    if (!backToTopButton) return;
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
      } else {
        backToTopButton.classList.remove('visible');
      }
    });
    
    // Scroll to top when clicked
    backToTopButton.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
  
  // Initialize navbar toggle (reusing functionality from main script)
  function initNavToggle() {
    const navToggle = document.getElementById('nav-toggle');
    const navbar = document.getElementById('navbar');
    
    if (!navToggle || !navbar) return;
    
    navToggle.addEventListener('click', function() {
      navbar.classList.toggle('active');
      
      if (navbar.classList.contains('active')) {
        navToggle.innerHTML = '<i class="bi bi-caret-right-fill"></i>';
      } else {
        navToggle.innerHTML = '<i class="bi bi-caret-left-fill"></i>';
      }
    });
  }
  

  // Initialize hero section effects
function initHeroEffects() {
    // Create dot grid background
    createDotGrid();
    
    // Add subtle parallax effect
    initParallax();
    
    // Fix cursor visibility issues
    fixCursorIssues();
  }
  
  // Create dynamic dot grid
  function createDotGrid() {
    const dotGrid = document.querySelector('.dot-grid');
    if (!dotGrid) return;
    
    // The grid is created using CSS background, no need for JS generation
  }
  
  // Simple parallax effect
  function initParallax() {
    const heroSection = document.querySelector('.portfolio-hero');
    const heroContent = document.querySelector('.hero-content');
    
    if (!heroSection || !heroContent) return;
    
    window.addEventListener('scroll', function() {
      const scrollPosition = window.pageYOffset;
      if (scrollPosition <= heroSection.offsetHeight) {
        // Move content slightly up as user scrolls down
        heroContent.style.transform = `translateY(${scrollPosition * 0.2}px)`;
        
        // Increase opacity of background as user scrolls
        const dotGrid = document.querySelector('.dot-grid');
        if (dotGrid) {
          const opacity = 0.1 + (scrollPosition / heroSection.offsetHeight) * 0.1;
          dotGrid.style.opacity = opacity;
        }
      }
    });
  }
  
  // Fix cursor visibility issues
  function fixCursorIssues() {
    // Ensure all interactive elements have proper cursor
    const interactiveElements = document.querySelectorAll('a, button, .btn-primary, .btn-secondary');
    
    interactiveElements.forEach(element => {
      element.style.cursor = 'pointer';
      
      // Add hover state to ensure cursor is visible
      element.addEventListener('mouseenter', function() {
        this.style.cursor = 'pointer';
      });
    });
    
    // Set default cursor for non-interactive elements
    const nonInteractiveElements = document.querySelectorAll('.hero-title, .subtitle, .stat-item');
    
    nonInteractiveElements.forEach(element => {
      element.style.cursor = 'default';
    });
    
    // Remove any custom cursor if it's causing issues
    document.body.classList.remove('custom-cursor');
    
    // Ensure body has default cursor
    document.body.style.cursor = 'default';
  }
  
  // Call the initialization function when DOM is loaded
  document.addEventListener('DOMContentLoaded', function() {
    // Other initializations...
    
    // Initialize hero section effects
    initHeroEffects();
  });
  
