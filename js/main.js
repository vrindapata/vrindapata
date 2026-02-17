/**
 * VrindaPata Microgreens - Interactive JavaScript
 * Sacred Greens for Modern Life
 */

// ==================== State Management ====================
const state = {
  cart: [],
  cartCount: 0,
  currentProduct: null
};

// ==================== Product Data ====================
const products = {
  'sunflower': {
    name: 'Sunflower Microgreens',
    price: 149,
    oldPrice: 179,
    description: 'Nutty, crunchy shoots packed with protein and sunshine goodness. Perfect for salads and sandwiches.',
    tagline: 'Nutty, crunchy shoots packed with protein and sunshine goodness',
    images: [
      'images/sunflower_microgreens_1768911822379.png',
      'images/hero_microgreens_1768911796072.png',
      'images/behind_scenes_1768911893085.png'
    ],
    badges: ['Harvested on Order'],
    features: ['100% Chemical-Free', '7-10 Day Growth Cycle', 'Living Product', 'Same-Day Delivery'],
    tabs: {
      howGrown: `
        <h3>Our Growing Process</h3>
        <p>At VrindaPata, we grow our sunflower microgreens with the same love and care you'd give to plants in your own home. Each tray begins with premium organic sunflower seeds, carefully selected for sprouting.</p>
        <p>The seeds are soaked overnight to activate their natural enzymes, then spread evenly on organic coconut coir growing medium. For the first few days, they're kept in darkness to encourage strong root development—just like nature intended.</p>
        <p>Once the shoots emerge, they're moved to natural light near our windows. We water them gently twice daily with filtered water. <strong>No chemicals, no pesticides, no shortcuts.</strong> Just pure, patient growing.</p>
        <p>After 7-10 days, when the first true leaves appear and the shoots reach 4-6 inches tall, they're ready for harvest. We cut them fresh on the day of your order and deliver them with roots intact—so you receive a truly living product.</p>
      `,
      nutrition: `
        <h3>Nutritional Powerhouse</h3>
        <p>Sunflower microgreens are among the most nutrient-dense foods you can eat. These tiny shoots pack up to <strong>40 times more nutrients</strong> than mature sunflower plants.</p>
        <div class="benefits-grid">
           <div class="benefit-card"><h4>Protein Rich</h4><p>20-25% protein content with a complete amino acid profile.</p></div>
           <div class="benefit-card"><h4>Vitamin E</h4><p>Exceptional source of antioxidant Vitamin E for skin and immune health.</p></div>
           <div class="benefit-card"><h4>B Vitamins</h4><p>Rich in B1, B2, B3, and B6 for energy.</p></div>
           <div class="benefit-card"><h4>Zinc & Selenium</h4><p>Essential minerals for immune support.</p></div>
           <div class="benefit-card"><h4>Healthy Fats</h4><p>Contains beneficial omega-6 fatty acids.</p></div>
           <div class="benefit-card"><h4>Fiber Content</h4><p>Good source of dietary fiber.</p></div>
        </div>
      `,
      usage: `
        <h3>How to Enjoy Your Microgreens</h3>
        <p>Sunflower microgreens have a delicious nutty, slightly sweet flavor with a satisfying crunch.</p>
        <div class="usage-list">
          <div class="usage-item"><div class="usage-icon">🥗</div><div><h4>Salads & Bowls</h4><p>Add a generous handful as a base or topping.</p></div></div>
          <div class="usage-item"><div class="usage-icon">🥪</div><div><h4>Sandwiches & Wraps</h4><p>Layer them for extra crunch and nutrition.</p></div></div>
          <div class="usage-item"><div class="usage-icon">🍳</div><div><h4>Breakfast</h4><p>Scatter over eggs or avocado toast.</p></div></div>
          <div class="usage-item"><div class="usage-icon">🥤</div><div><h4>Smoothies</h4><p>Blend into green smoothies.</p></div></div>
        </div>
      `
    }
  },
  'pea': {
    name: 'Pea Shoots',
    price: 129,
    oldPrice: 159,
    description: 'Sweet, delicate tendrils bursting with fresh pea flavor. Great for garnishing and salads.',
    tagline: 'Sweet, delicate tendrils bursting with fresh pea flavor',
    images: [
      'images/pea_shoots_1768911843242.png',
      'images/hero_microgreens_1768911796072.png',
      'images/behind_scenes_1768911893085.png'
    ],
    badges: ['Harvested on Order'],
    features: ['100% Chemical-Free', '10-14 Day Growth Cycle', 'Living Product', 'Same-Day Delivery'],
    tabs: {
      howGrown: `<h3>Our Growing Process</h3><p>Our Pea Shoots are grown from organic speckled peas. They require a longer growth cycle of 10-14 days to develop their signature tendrils and sweet flavor. Kept in the dark initially for strong stems, then exposed to light for vibrant green leaves.</p>`,
      nutrition: `
        <h3>Nutritional Powerhouse</h3>
        <p>Pea shoots are rich in beta-carotene, Vitamin C, folate, and fiber.</p>
        <div class="benefits-grid">
           <div class="benefit-card"><h4>Vitamin C</h4><p>Boosts immune system and skin health.</p></div>
           <div class="benefit-card"><h4>Vitamin A</h4><p>Essential for vision and immune function.</p></div>
           <div class="benefit-card"><h4>Folic Acid</h4><p>Important for cell division and DNA synthesis.</p></div>
           <div class="benefit-card"><h4>Antioxidants</h4><p>High levels of antioxidants to fight free radicals.</p></div>
        </div>
      `,
      usage: `
        <h3>How to Enjoy</h3>
        <p>Pea shoots are versatile and can be eaten raw or lightly cooked.</p>
        <div class="usage-list">
          <div class="usage-item"><div class="usage-icon">🥗</div><div><h4>Salads</h4><p>Use as a salad base for a sweet crunch.</p></div></div>
          <div class="usage-item"><div class="usage-icon">🍜</div><div><h4>Stir-fries</h4><p>Add at the very end of cooking to wilt slightly.</p></div></div>
          <div class="usage-item"><div class="usage-icon">🍽️</div><div><h4>Garnish</h4><p>Beautiful tendrils make any dish look gourmet.</p></div></div>
        </div>
      `
    }
  },
  'radish': {
    name: 'Radish Microgreens',
    price: 119,
    oldPrice: 149,
    description: 'Peppery kick with beautiful purple stems. Adds color and spice to any dish.',
    tagline: 'Peppery kick with beautiful purple stems',
    images: [
      'images/radish_microgreens_1768911874438.png',
      'images/hero_microgreens_1768911796072.png',
      'images/behind_scenes_1768911893085.png'
    ],
    badges: ['Harvested on Order'],
    features: ['100% Chemical-Free', '5-7 Day Growth Cycle', 'Living Product', 'Same-Day Delivery'],
    tabs: {
      howGrown: `<h3>Our Growing Process</h3><p>Radish microgreens are our fastest growers, ready in just 5-7 days. We use organic radish seeds that burst into life with colorful purple and green stems. They are harvested at the peak of freshness to ensure that signature peppery bite.</p>`,
      nutrition: `
        <h3>Nutritional Powerhouse</h3>
        <p>Radish microgreens are packed with Vitamin E and C.</p>
        <div class="benefits-grid">
           <div class="benefit-card"><h4>Vitamin E</h4><p>Great for skin health.</p></div>
           <div class="benefit-card"><h4>Vitamin C</h4><p>Boosts immunity.</p></div>
           <div class="benefit-card"><h4>Essential Oils</h4><p>Contains natural essential oils that aid digestion.</p></div>
        </div>
      `,
      usage: `
        <h3>How to Enjoy</h3>
        <p>Use sparingly to add a spicy kick!</p>
        <div class="usage-list">
          <div class="usage-item"><div class="usage-icon">🌮</div><div><h4>Tacos & Wraps</h4><p>A perfect spicy crunch topping.</p></div></div>
          <div class="usage-item"><div class="usage-icon">🥪</div><div><h4>Sandwiches</h4><p>Replaces mustard or adds extra heat.</p></div></div>
          <div class="usage-item"><div class="usage-icon">🥗</div><div><h4>Salads</h4><p>Mix with mild greens for a balanced flavor.</p></div></div>
        </div>
      `
    }
  },
  'broccoli': {
    name: 'Broccoli Microgreens',
    price: 139,
    oldPrice: 169,
    description: 'Mild, fresh flavor with up to 40x more nutrients than mature broccoli.',
    tagline: 'Mild, fresh flavor with incredible nutritional density',
    images: [
      'images/broccoli_microgreens_1768911925208.png',
      'images/hero_microgreens_1768911796072.png',
      'images/behind_scenes_1768911893085.png'
    ],
    badges: ['Superfood'],
    features: ['100% Chemical-Free', '7-10 Day Growth Cycle', 'Sulforaphane Rich', 'Same-Day Delivery'],
    tabs: {
      howGrown: `<h3>Our Growing Process</h3><p>Grown from non-GMO broccoli seeds, these microgreens are harvested just as the first true leaves begin to form. This ensures the highest concentration of sulforaphane, a powerful compound found in broccoli.</p>`,
      nutrition: `
        <h3>Nutritional Powerhouse</h3>
        <p>Famous for high levels of Sulforaphane.</p>
        <div class="benefits-grid">
           <div class="benefit-card"><h4>Sulforaphane</h4><p>Powerful compound known for anti-cancer properties.</p></div>
           <div class="benefit-card"><h4>Vitamin C</h4><p>More Vitamin C than mature broccoli.</p></div>
           <div class="benefit-card"><h4>Vitamin K</h4><p>Essential for bone health.</p></div>
        </div>
      `,
      usage: `
        <h3>How to Enjoy</h3>
        <p>Mild flavor makes them easy to hide in any meal for picky eaters.</p>
        <div class="usage-list">
          <div class="usage-item"><div class="usage-icon">🥤</div><div><h4>Smoothies</h4><p>Blend without altering the taste significantly.</p></div></div>
          <div class="usage-item"><div class="usage-icon">🍳</div><div><h4>Omelets</h4><p>Fold into eggs for a nutrient boost.</p></div></div>
          <div class="usage-item"><div class="usage-icon">🥗</div><div><h4>Salads</h4><p>A mild base for any salad dressing.</p></div></div>
        </div>
      `
    }
  },
  'mix': {
    name: 'Mix & Match Tray',
    price: 249,
    oldPrice: 299,
    description: 'A vibrant variety of our best sellers. Perfect for trying everything!',
    tagline: 'A vibrant variety of our best sellers',
    images: [
      'images/hero_microgreens_1768911796072.png',
      'images/sunflower_microgreens_1768911822379.png',
      'images/radish_microgreens_1768911874438.png'
    ],
    badges: ['Best Value'],
    features: ['Variety of Flavors', 'Best Value', 'Fresh Harvest', 'Perfect Sampler'],
    tabs: {
      howGrown: `<h3>Our Growing Process</h3><p>We grow each variety in its own section or tray to ensure they all reach peak maturity at the same time. You get a beautiful mosaic of Sunflower, Pea, Radish, and Broccoli greens.</p>`,
      nutrition: `
        <h3>Nutritional Powerhouse</h3>
        <p>Get the best of everything! A wide range of vitamins, minerals, and antioxidants from different plant families.</p>
      `,
      usage: `
        <h3>How to Enjoy</h3>
        <p>The ultimate culinary playground. Mix flavors to create complex salads or use specific greens for specific dishes.</p>
      `
    }
  },
  'subscription': {
    name: 'Weekly Subscription Box',
    price: 449,
    oldPrice: 499,
    description: 'Fresh microgreens delivered weekly. Never run out of your greens!',
    tagline: 'Fresh microgreens delivered weekly to your door',
    images: [
      'images/behind_scenes_1768911893085.png',
      'images/hero_microgreens_1768911796072.png',
      'images/sunflower_microgreens_1768911822379.png'
    ],
    badges: ['Most Popular', 'Free Delivery'],
    features: ['Curated Weekly Mix', 'Free Home Delivery', 'Modify Anytime', 'Cancel Anytime'],
    tabs: {
      howGrown: `<h3>Our Service</h3><p>We plan our planting schedule around your subscription. Your greens are sown specifically for you, ensuring they are ready exactly when you need them.</p>`,
      nutrition: `
        <h3>Consistent Nutrition</h3>
        <p>Regular consumption of microgreens ensures a steady supply of vital nutrients, supporting long-term health and wellness.</p>
      `,
      usage: `
        <h3>How to Enjoy</h3>
        <p>With a weekly supply, you can incorporate greens into every meal. Breakfast smoothies, lunch salads, and dinner garnishes!</p>
      `
    }
  }
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
  if (document.querySelector('.pdp-section')) {
    initProductPage();
  }
  initSmoothScroll();
  initAnimations();
});

// ==================== Product Page Logic ====================
function initProductPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id') || 'sunflower'; // Default to sunflower

  loadProductDetails(productId);
  initQuantitySelector();
  initTabs();
  initProductGallery(); // Re-init gallery after DOM updates if needed
}

function loadProductDetails(productId) {
  const product = products[productId];

  if (!product) {
    // Handle product not found - could redirect or show error
    window.location.href = 'index.html';
    return;
  }

  state.currentProduct = product;

  // Update Page Title
  document.title = `${product.name} | VrindaPata`;

  // Update Meta Tags (Basic)
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.content = product.description;

  // Update Content
  safeSetText('.pdp-title', product.name);
  safeSetText('.pdp-tagline', product.tagline);
  safeSetText('.pdp-price', `₹${product.price} `);

  // Update Old Price if exists
  const priceEl = document.querySelector('.pdp-price');
  if (priceEl && product.oldPrice) {
    const span = document.createElement('span');
    span.textContent = `₹${product.oldPrice}`;
    priceEl.appendChild(span);
  }

  // Update Breadcrumb
  const breadcrumbSpan = document.querySelector('.pdp-breadcrumb span:last-child');
  if (breadcrumbSpan) breadcrumbSpan.textContent = product.name;

  // Update Badges
  const badgeContainer = document.querySelector('.pdp-badge');
  if (badgeContainer && product.badges.length) {
    badgeContainer.innerHTML = `
      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
      </svg>
      ${product.badges[0]}
    `;
    // Add additional badges if needed logic
  }

  // Update Images
  const mainImage = document.getElementById('mainImage');
  if (mainImage && product.images.length) {
    mainImage.src = product.images[0];
    mainImage.alt = product.name;

    // Update Thumbnails
    const thumbsContainer = document.querySelector('.pdp-thumbnails');
    if (thumbsContainer) {
      thumbsContainer.innerHTML = product.images.map((img, index) => `
        <button class="pdp-thumbnail ${index === 0 ? 'active' : ''}" data-image="${img}">
          <img src="${img}" alt="${product.name} View ${index + 1}">
        </button>
      `).join('');
    }
  }

  // Update Features
  const featuresContainer = document.querySelector('.pdp-features');
  if (featuresContainer && product.features) {
    // Maintain the icons but update text - simplified here to rebuild
    // For now we'll just update the text of existing features or rebuild if structure allows
    // Let's rebuild for flexibility
    featuresContainer.innerHTML = product.features.map(feature => `
        <div class="pdp-feature">
            <div class="pdp-feature-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-green-primary)" stroke-width="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
            </div>
            ${feature}
        </div>
    `).join('');
  }

  // Update Tabs
  const howGrownTab = document.getElementById('how-grown');
  const nutritionTab = document.getElementById('nutrition');
  const usageTab = document.getElementById('usage');

  if (howGrownTab) howGrownTab.innerHTML = product.tabs.howGrown;
  if (nutritionTab) nutritionTab.innerHTML = product.tabs.nutrition;
  if (usageTab) usageTab.innerHTML = product.tabs.usage;

  // Render Related Products
  renderRelatedProducts(productId);
}

function renderRelatedProducts(currentId) {
  const grid = document.getElementById('relatedProductsGrid');
  if (!grid) return;

  const allIds = Object.keys(products);
  const otherIds = allIds.filter(id => id !== currentId);

  // Shuffle array
  for (let i = otherIds.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [otherIds[i], otherIds[j]] = [otherIds[j], otherIds[i]];
  }

  // Take first 4
  const selectedIds = otherIds.slice(0, 4);

  grid.innerHTML = selectedIds.map(id => {
    const p = products[id];
    const badgeHtml = p.badges && p.badges.length > 0
      ? `<span class="product-card-badge badge ${p.badges[0].type === 'fresh' ? 'badge-fresh' : 'badge-gold'}">${p.badges[0].text}</span>`
      : '';

    // Use first image
    const image = p.images[0];

    return `
      <article class="product-card">
        <div class="product-card-image">
          <a href="product.html?id=${id}">
            <img src="${image}" alt="${p.name}">
          </a>
          ${badgeHtml}
        </div>
        <div class="product-card-body">
          <h3 class="product-card-title"><a href="product.html?id=${id}">${p.name}</a></h3>
          <p class="product-card-desc">${p.tagline}</p>
          <div class="product-card-footer">
            <div class="product-card-price">₹${p.price}</div>
            <button class="btn btn-primary btn-sm add-to-cart" 
              onclick="addToCart('${p.name}', ${p.price})"
              data-price="${p.price}" 
              data-name="${p.name}">Add</button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}


function safeSetText(selector, text) {
  const el = document.querySelector(selector);
  if (el) el.textContent = text;
}


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
      if (!state.currentProduct) return;

      const quantity = parseInt(document.getElementById('quantityInput')?.value || 1);
      for (let i = 0; i < quantity; i++) {
        addToCart(state.currentProduct.name, state.currentProduct.price);
      }
      showNotification(`Added ${quantity} ${state.currentProduct.name} to cart!`);
    });
  }

  // Buy Now button
  const buyNowBtn = document.getElementById('buyNowBtn');
  if (buyNowBtn) {
    buyNowBtn.addEventListener('click', () => {
      if (!state.currentProduct) return;

      const quantity = parseInt(document.getElementById('quantityInput')?.value || 1);
      for (let i = 0; i < quantity; i++) {
        addToCart(state.currentProduct.name, state.currentProduct.price);
      }
      showNotification('Proceeding to checkout...');
      // In a real app, this would navigate to checkout
    });
  }

  // Sticky cart button (mobile)
  const stickyAddBtn = document.getElementById('stickyAddBtn');
  if (stickyAddBtn) {
    stickyAddBtn.addEventListener('click', () => {
      if (!state.currentProduct) return;

      const quantity = parseInt(document.getElementById('quantityInput')?.value || 1);
      for (let i = 0; i < quantity; i++) {
        addToCart(state.currentProduct.name, state.currentProduct.price);
      }
      showNotification(`Added ${quantity} ${state.currentProduct.name} to cart!`);
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
    if (!state.currentProduct) return;

    const quantity = parseInt(input.value);
    const total = state.currentProduct.price * quantity;
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
    anchor.addEventListener('click', function (e) {
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
