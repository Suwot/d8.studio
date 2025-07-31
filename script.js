// D8 Studio - Minimal JavaScript

// Smooth scrolling
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// Mobile menu toggle
function toggleMobileMenu() {
  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.mobile-menu-toggle');
  
  nav.classList.toggle('active');
  toggle.classList.toggle('active');
}

// Parallax effect for hero
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const heroImage = document.querySelector('.hero-image');
  
  if (heroImage && scrolled < window.innerHeight) {
    heroImage.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});

// Gallery functionality
let currentImages = [];
let currentImageIndex = 0;

function initializeGallery() {
  const tabs = document.querySelectorAll('.gallery-tab');
  const galleryItems = document.querySelectorAll('.gallery-item');
  
  // Tab switching
  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      const category = this.dataset.category;
      
      tabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      
      filterGallery(category);
    });
  });
  
  // Image click handlers
  galleryItems.forEach((item, index) => {
    const img = item.querySelector('.gallery-image');
    if (img) {
      img.addEventListener('click', function() {
        openLightbox(index);
      });
    }
  });
  
  updateCurrentImages();
}

function filterGallery(category) {
  const galleryItems = document.querySelectorAll('.gallery-item');
  
  galleryItems.forEach(item => {
    if (category === 'all' || item.dataset.category === category) {
      item.classList.remove('hidden');
    } else {
      item.classList.add('hidden');
    }
  });
  
  updateCurrentImages();
}

function updateCurrentImages() {
  const visibleItems = document.querySelectorAll('.gallery-item:not(.hidden)');
  currentImages = Array.from(visibleItems).map(item => {
    const img = item.querySelector('.gallery-image');
    const overlay = item.querySelector('.gallery-overlay');
    const title = overlay ? overlay.querySelector('h4')?.textContent || '' : '';
    const description = overlay ? overlay.querySelector('p')?.textContent || '' : '';
    
    return {
      src: img.dataset.src || img.src,
      alt: img.alt,
      title: title,
      description: description
    };
  });
}

// Booking functionality (placeholder for YClients)
function initializeBooking() {
  const bookingButtons = document.querySelectorAll('.booking-btn');
  bookingButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Replace with actual YClients widget integration
      alert('YClients booking widget will be integrated here');
    });
  });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initializeBooking();
  
  // Initialize gallery if it exists
  if (document.querySelector('.gallery-grid')) {
    initializeGallery();
  }
});