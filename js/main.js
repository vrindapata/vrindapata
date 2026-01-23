/**
 * VrindaPata Microgreens - Interactive JavaScript
 * Sacred Greens for Modern Life
 */

// ==================== State Management ====================
const state = {
  cart: [],
  cartCount: 0
};

// ==================== DOM Elements ====================
const elements = {
  navbar: document.getElementById('navbar'),
  navToggle: document.getElementById('navToggle'),
  navLinks: document.getElementById('navLinks'),
  cartCount: document.getElementById('cartCount'),
  cartBtn: document.getElementById('cartBtn')
};

// ==================== Initialize ====================
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initCart();
  initProductGallery();
  initQuantitySelector();
  initTabs();
  initSmoothScroll();
  initAnimations();
});

// ==================== Navbar ====================
function initNavbar() {
  // Scroll effect
  let lastScroll = 0;
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add scrolled class for shadow
    if (currentScroll > 50) {
      elements.navbar.classList.add('scrolled');
    } else {
      elements.navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
  });
  
  // Mobile toggle
  if (elements.navToggle) {
    elements.navToggle.addEventListener('click', () => {
      elements.navLinks.classList.toggle('active');
      elements.navToggle.classList.toggle('active');
    });
  }
  
  // Close mobile menu on link click
  if (elements.navLinks) {
    elements.navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        elements.navLinks.classList.remove('active');
        elements.navToggle?.classList.remove('active');
      });
    });
  }
}

// ==================== Cart ====================
function initCart() {
  // Load cart from localStorage
  const savedCart = localStorage.getItem('vrindapata_cart');
  if (savedCart) {
    state.cart = JSON.parse(savedCart);
    updateCartCount();
  }
  
  // Add to cart buttons
  document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const name = btn.dataset.name;
      const price = parseInt(btn.dataset.price);
      addToCart(name, price);
      
      // Button animation
      const originalText = btn.textContent;
      btn.textContent = '✓ Added!';
      btn.style.background = 'var(--color-gold)';
      
      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
      }, 1500);
    });
  });
  
  // PDP Add to Cart
  const addToCartBtn = document.getElementById('addToCartBtn');
  if (addToCartBtn) {
    addToCartBtn.addEventListener('click', () => {
      const quantity = parseInt(document.getElementById('quantityInput')?.value || 1);
      for (let i = 0; i < quantity; i++) {
        addToCart('Sunflower Microgreens', 149);
      }
      showNotification(`Added ${quantity} item(s) to cart!`);
    });
  }
  
  // Buy Now button
  const buyNowBtn = document.getElementById('buyNowBtn');
  if (buyNowBtn) {
    buyNowBtn.addEventListener('click', () => {
      const quantity = parseInt(document.getElementById('quantityInput')?.value || 1);
      for (let i = 0; i < quantity; i++) {
        addToCart('Sunflower Microgreens', 149);
      }
      showNotification('Proceeding to checkout...');
      // In a real app, this would navigate to checkout
    });
  }
  
  // Sticky cart button (mobile)
  const stickyAddBtn = document.getElementById('stickyAddBtn');
  if (stickyAddBtn) {
    stickyAddBtn.addEventListener('click', () => {
      const quantity = parseInt(document.getElementById('quantityInput')?.value || 1);
      for (let i = 0; i < quantity; i++) {
        addToCart('Sunflower Microgreens', 149);
      }
      showNotification(`Added ${quantity} item(s) to cart!`);
    });
  }
  
  // Cart button click
  if (elements.cartBtn) {
    elements.cartBtn.addEventListener('click', () => {
      showCartModal();
    });
  }
}

function addToCart(name, price) {
  const existingItem = state.cart.find(item => item.name === name);
  
  if (existingItem) {
    existingItem.quantity++;
  } else {
    state.cart.push({ name, price, quantity: 1 });
  }
  
  state.cartCount++;
  updateCartCount();
  saveCart();
}

function updateCartCount() {
  if (elements.cartCount) {
    elements.cartCount.textContent = state.cartCount;
    elements.cartCount.style.transform = 'scale(1.3)';
    setTimeout(() => {
      elements.cartCount.style.transform = 'scale(1)';
    }, 200);
  }
}

function saveCart() {
  localStorage.setItem('vrindapata_cart', JSON.stringify(state.cart));
}

function showCartModal() {
  const total = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  let cartHTML = '<div style="padding: 20px;">';
  cartHTML += '<h3 style="margin-bottom: 20px;">Your Cart 🛒</h3>';
  
  if (state.cart.length === 0) {
    cartHTML += '<p style="color: #666;">Your cart is empty. Start shopping!</p>';
  } else {
    state.cart.forEach(item => {
      cartHTML += `
        <div style="display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid #eee;">
          <span>${item.name} × ${item.quantity}</span>
          <span style="font-weight: 600;">₹${item.price * item.quantity}</span>
        </div>
      `;
    });
    cartHTML += `
      <div style="display: flex; justify-content: space-between; padding: 16px 0; font-size: 1.25rem; font-weight: 700;">
        <span>Total</span>
        <span style="color: var(--color-green-primary);">₹${total}</span>
      </div>
      <button onclick="alert('Checkout coming soon!')" style="width: 100%; padding: 16px; background: linear-gradient(135deg, #2D5A27, #7CB342); color: white; border: none; border-radius: 50px; font-size: 1rem; font-weight: 600; cursor: pointer;">
        Proceed to Checkout
      </button>
    `;
  }
  cartHTML += '</div>';
  
  // Simple modal
  const modal = document.createElement('div');
  modal.id = 'cartModal';
  modal.style.cssText = `
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000;
    animation: fadeIn 0.2s ease;
  `;
  modal.innerHTML = `
    <div style="background: white; border-radius: 20px; max-width: 400px; width: 90%; max-height: 80vh; overflow-y: auto; position: relative;">
      <button onclick="document.getElementById('cartModal').remove()" style="position: absolute; top: 12px; right: 12px; background: none; border: none; font-size: 24px; cursor: pointer; color: #666;">×</button>
      ${cartHTML}
    </div>
  `;
  
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.remove();
  });
  
  document.body.appendChild(modal);
}

function showNotification(message) {
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    bottom: 100px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--color-gray-900);
    color: white;
    padding: 16px 24px;
    border-radius: 50px;
    font-weight: 500;
    z-index: 10000;
    animation: slideUp 0.3s ease;
    box-shadow: 0 8px 24px rgba(0,0,0,0.2);
  `;
  notification.textContent = message;
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'fadeOut 0.3s ease forwards';
    setTimeout(() => notification.remove(), 300);
  }, 2000);
}

// ==================== Product Gallery (PDP) ====================
function initProductGallery() {
  const mainImage = document.getElementById('mainImage');
  const thumbnails = document.querySelectorAll('.pdp-thumbnail');
  
  if (!mainImage || thumbnails.length === 0) return;
  
  thumbnails.forEach(thumb => {
    thumb.addEventListener('click', () => {
      // Update main image
      const newSrc = thumb.dataset.image;
      mainImage.style.opacity = '0';
      
      setTimeout(() => {
        mainImage.src = newSrc;
        mainImage.style.opacity = '1';
      }, 200);
      
      // Update active state
      thumbnails.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
    });
  });
  
  // Add transition to main image
  mainImage.style.transition = 'opacity 0.2s ease';
}

// ==================== Quantity Selector (PDP) ====================
function initQuantitySelector() {
  const minusBtn = document.getElementById('quantityMinus');
  const plusBtn = document.getElementById('quantityPlus');
  const input = document.getElementById('quantityInput');
  const stickyPrice = document.querySelector('.sticky-cart-price');
  
  if (!minusBtn || !plusBtn || !input) return;
  
  const updatePrice = () => {
    const quantity = parseInt(input.value);
    const total = 149 * quantity;
    if (stickyPrice) {
      stickyPrice.textContent = `₹${total}`;
    }
  };
  
  minusBtn.addEventListener('click', () => {
    const current = parseInt(input.value);
    if (current > 1) {
      input.value = current - 1;
      updatePrice();
    }
  });
  
  plusBtn.addEventListener('click', () => {
    const current = parseInt(input.value);
    if (current < 10) {
      input.value = current + 1;
      updatePrice();
    }
  });
  
  input.addEventListener('change', () => {
    let value = parseInt(input.value);
    if (isNaN(value) || value < 1) value = 1;
    if (value > 10) value = 10;
    input.value = value;
    updatePrice();
  });
}

// ==================== Tabs (PDP) ====================
function initTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  
  if (tabBtns.length === 0) return;
  
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.dataset.tab;
      
      // Update buttons
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // Update content
      tabContents.forEach(content => {
        content.classList.remove('active');
        if (content.id === targetTab) {
          content.classList.add('active');
        }
      });
    });
  });
}

// ==================== Smooth Scroll ====================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// ==================== Scroll Animations ====================
function initAnimations() {
  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe elements
  document.querySelectorAll('.product-card, .testimonial-card, .trust-badge, .gallery-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
}

// Add fade-in styles
const style = document.createElement('style');
style.textContent = `
  .fade-in {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
  
  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateX(-50%) translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
  }
  
  @keyframes fadeOut {
    to {
      opacity: 0;
      transform: translateX(-50%) translateY(-10px);
    }
  }
`;
document.head.appendChild(style);
