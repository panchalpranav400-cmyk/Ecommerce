// app.js
// DRIPIO Storefront Client Engine

// 1. PRODUCT CATALOG DATA
const PRODUCTS_DATA = [
  {
    id: 1,
    name: 'Cyberpunk Oversized Hoodie',
    price: 85.00,
    category: 'Tops',
    tag: 'BEST SELLER',
    rating: 4.9,
    image: 'assets/hoodie.png',
    styleVibe: 'cyberpunk',
    desc: 'Heavy-weight 450GSM cotton hoodie with dropped shoulders and raw edge seams. Features reflective cybernetic circuit designs printed with violet glow-in-the-dark inks on the sleeves and chest. Engineered for night aesthetics.'
  },
  {
    id: 2,
    name: 'Neon Acid Baggy Cargos',
    price: 95.00,
    category: 'Bottoms',
    tag: 'NEW',
    rating: 4.8,
    image: 'assets/cargos.png',
    styleVibe: 'streetwear',
    desc: 'Oversized utility cargo pants made from ripstop canvas. Equipped with neon acid-lime nylon strap systems, metal clip rings, and 8 individual pockets. Elastic drawcords at the ankles allow for customizable styling.'
  },
  {
    id: 3,
    name: 'Y2K Chrome Graphic Tee',
    price: 45.00,
    category: 'Tops',
    tag: 'TRENDING',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=800',
    styleVibe: 'y2k',
    desc: 'Vintage washed cotton tee in off-white featuring a high-definition liquid-chrome tribal design and heavy metal typeface detailing. Pre-shrunk and relaxed fit for an authentic late 90s aesthetic.'
  },
  {
    id: 4,
    name: 'Silver Metallic Puffer Jacket',
    price: 140.00,
    category: 'Tops',
    tag: 'LIMITED',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1544923246-77307dd654cb?auto=format&fit=crop&q=80&w=800',
    styleVibe: 'y2k',
    desc: 'Cropped puffer jacket featuring a hyper-reflective silver metallic outer shell. Packed with synthetic thermal down, adjustable toggle hem, and a fleece-lined high collar. Windproof and water-resistant.'
  },
  {
    id: 5,
    name: 'Wraparound Chrome Sunglasses',
    price: 35.00,
    category: 'Drip',
    tag: 'GRAIL',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=800',
    styleVibe: 'cyberpunk',
    desc: 'Y2K retro-futuristic wraparound sunglasses with lightweight chrome frames. Features reflective neon blue polarized lenses offering full UV400 protection. Perfect for festivals, raves, or low-light styling.'
  },
  {
    id: 6,
    name: 'Utility Canvas Sling Bag',
    price: 50.00,
    category: 'Drip',
    tag: 'ESSENTIAL',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800',
    styleVibe: 'streetwear',
    desc: 'Heavy-duty black canvas cross-body tactical bag. Accented with neon orange webbing, quick-release plastic buckles, and compression cord locks. Features multi-compartment zip storage for daily essentials.'
  }
];

// 2. CLIENT APPLICATION STATE
let state = {
  cart: [],
  activeCategory: 'all',
  searchQuery: '',
  sortBy: 'default',
  vibeQuizAnswers: { q1: '', q2: '', q3: '' },
  vibeResult: '',
  promoCode: '',
  discountPercent: 0,
  freeShippingApplied: false,
  theme: 'dark'
};

// 3. APPLICATION INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
  // Load Cart from LocalStorage
  try {
    const savedCart = localStorage.getItem('dripio_cart');
    if (savedCart) {
      state.cart = JSON.parse(savedCart);
    }
  } catch (e) {
    console.error('Could not load cart data', e);
  }

  // Load Theme Preference
  try {
    const savedTheme = localStorage.getItem('dripio_theme') || 'dark';
    state.theme = savedTheme;
    document.documentElement.setAttribute('data-theme', savedTheme);
    syncThemeUI();
  } catch (e) {}

  // Initialize Lucide Icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Set Year in Footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Run Tickers and Core UI renders
  initDropCountdown();
  renderProducts();
  updateCartUI();
  setupGlobalEventListeners();
});

// 4. EVENT LISTENERS SETUP
function setupGlobalEventListeners() {
  // Category tabs click handler
  const categoryContainer = document.getElementById('categoryFilters');
  if (categoryContainer) {
    categoryContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;
      
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.activeCategory = btn.dataset.category;
      renderProducts();
    });
  }

  // Search filter handler
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      renderProducts();
    });
  }

  // Sorting handler
  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      state.sortBy = e.target.value;
      renderProducts();
    });
  }

  // Header Actions - Drawer toggles
  document.getElementById('cartToggleBtn').addEventListener('click', toggleCartDrawer);
  document.getElementById('closeCartBtn').addEventListener('click', toggleCartDrawer);
  document.getElementById('cartOverlay').addEventListener('click', toggleCartDrawer);

  // Theme Toggler
  document.getElementById('themeToggleBtn').addEventListener('click', toggleTheme);

  // Search Modal
  const searchToggleBtn = document.getElementById('searchToggleBtn');
  const searchModal = document.getElementById('searchModal');
  const closeSearchBtn = document.getElementById('closeSearchBtn');
  const modalSearchInput = document.getElementById('modalSearchInput');

  if (searchToggleBtn && searchModal) {
    searchToggleBtn.addEventListener('click', () => {
      searchModal.classList.add('active');
      modalSearchInput.focus();
    });
  }
  if (closeSearchBtn && searchModal) {
    closeSearchBtn.addEventListener('click', () => {
      searchModal.classList.remove('active');
      modalSearchInput.value = '';
      document.getElementById('searchResultsContainer').innerHTML = '';
    });
  }

  if (modalSearchInput) {
    modalSearchInput.addEventListener('input', (e) => {
      handleModalSearch(e.target.value);
    });
  }

  // Promo Code Validation
  const promoBtn = document.getElementById('promoBtn');
  if (promoBtn) {
    promoBtn.addEventListener('click', applyPromoCode);
  }

  // Checkout trigger
  const checkoutBtn = document.getElementById('checkoutBtn');
  const checkoutModal = document.getElementById('checkoutModal');
  const closeCheckoutBtn = document.getElementById('closeCheckoutBtn');
  const cancelCheckoutBtn = document.getElementById('cancelCheckoutBtn');

  if (checkoutBtn && checkoutModal) {
    checkoutBtn.addEventListener('click', () => {
      toggleCartDrawer();
      checkoutModal.classList.add('active');
    });
  }
  
  const closeCheckoutFn = () => checkoutModal.classList.remove('active');
  if (closeCheckoutBtn) closeCheckoutBtn.addEventListener('click', closeCheckoutFn);
  if (cancelCheckoutBtn) cancelCheckoutBtn.addEventListener('click', closeCheckoutFn);

  // Checkout Form Submission
  const checkoutForm = document.getElementById('checkoutForm');
  if (checkoutForm) {
    checkoutForm.addEventListener('submit', (e) => {
      e.preventDefault();
      processSimulatedOrder();
    });
  }

  // Newsletter Form
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('🔒 EXCLUSIVE DROP ACCESS GRANTED. Welcome to the underground club.');
      newsletterForm.reset();
    });
  }

  // Chat Review Send message
  const chatInput = document.getElementById('chatInput');
  const sendChatBtn = document.getElementById('sendChatBtn');
  if (sendChatBtn && chatInput) {
    sendChatBtn.addEventListener('click', handleChatSendMessage);
    chatInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') handleChatSendMessage();
    });
  }

  // Quick View close
  const closeQvBtn = document.getElementById('closeQvBtn');
  const quickViewModal = document.getElementById('quickViewModal');
  if (closeQvBtn && quickViewModal) {
    closeQvBtn.addEventListener('click', () => {
      quickViewModal.classList.remove('active');
    });
  }
}

// 5. THEME SWITCHER
function toggleTheme() {
  const newTheme = state.theme === 'dark' ? 'light' : 'dark';
  state.theme = newTheme;
  document.documentElement.setAttribute('data-theme', newTheme);
  try {
    localStorage.setItem('dripio_theme', newTheme);
  } catch (e) {}
  syncThemeUI();
}

function syncThemeUI() {
  const sunIcon = document.getElementById('sun-icon');
  const moonIcon = document.getElementById('moon-icon');
  if (state.theme === 'dark') {
    sunIcon.style.display = 'block';
    moonIcon.style.display = 'none';
  } else {
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'block';
  }
}

// 6. COUNTDOWN DROP TIMER
function initDropCountdown() {
  // Generate a dynamic timestamp that is always active: 2 days, 14 hours, 5 minutes into the future
  let targetTime = Date.now() + (2 * 24 * 60 * 60 * 1000) + (14 * 60 * 60 * 1000) + (5 * 60 * 1000);
  
  // Try retrieving fixed time from storage so it ticks down continuously
  try {
    const storedTarget = localStorage.getItem('dripio_drop_target');
    if (storedTarget && parseInt(storedTarget) > Date.now()) {
      targetTime = parseInt(storedTarget);
    } else {
      localStorage.setItem('dripio_drop_target', targetTime.toString());
    }
  } catch (e) {}

  function updateTimer() {
    const now = Date.now();
    const difference = targetTime - now;

    if (difference <= 0) {
      document.getElementById('dropTimer').innerHTML = `<h3 style="color: var(--accent-color); font-size: 1.5rem; letter-spacing: 0.1em;">THE DROP IS LIVE!</h3>`;
      return;
    }

    const d = Math.floor(difference / (1000 * 60 * 60 * 24));
    const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = d.toString().padStart(2, '0');
    document.getElementById('hours').textContent = h.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = m.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = s.toString().padStart(2, '0');
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

// 7. CATALOG RENDER ENGINE (Search, Filter, Sort)
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  // Filter products
  let products = [...PRODUCTS_DATA];

  if (state.activeCategory !== 'all') {
    products = products.filter(p => p.category === state.activeCategory);
  }

  if (state.searchQuery.trim() !== '') {
    const query = state.searchQuery.toLowerCase().trim();
    products = products.filter(p => 
      p.name.toLowerCase().includes(query) || 
      p.category.toLowerCase().includes(query) ||
      p.styleVibe.toLowerCase().includes(query) ||
      p.tag.toLowerCase().includes(query)
    );
  }

  // Sort products
  if (state.sortBy === 'price-low') {
    products.sort((a, b) => a.price - b.price);
  } else if (state.sortBy === 'price-high') {
    products.sort((a, b) => b.price - a.price);
  } else if (state.sortBy === 'rating') {
    products.sort((a, b) => b.rating - a.rating);
  }

  if (products.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1.5rem; color: var(--text-muted);">
        <i data-lucide="alert-triangle" style="width: 48px; height: 48px; stroke-width: 1.5; margin-bottom: 1rem; color: var(--primary-color);"></i>
        <h3>NO FITS DETECTED</h3>
        <p>Try modifying your filters or search keywords.</p>
      </div>
    `;
    if (typeof lucide !== 'undefined') lucide.createIcons();
    return;
  }

  grid.innerHTML = products.map(product => {
    return `
      <div class="product-card" data-id="${product.id}" data-vibe="${product.styleVibe}">
        <div class="product-image-wrapper">
          <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
          ${product.tag ? `<span class="product-badge">${product.tag}</span>` : ''}
          <div class="add-to-cart-overlay">
            <div class="size-selector-grid" data-prod-id="${product.id}">
              <button class="size-btn active" onclick="selectCardSize(this, 'S')">S</button>
              <button class="size-btn" onclick="selectCardSize(this, 'M')">M</button>
              <button class="size-btn" onclick="selectCardSize(this, 'L')">L</button>
              <button class="size-btn" onclick="selectCardSize(this, 'XL')">XL</button>
            </div>
            <button class="add-cart-btn" onclick="triggerCardAddToCart(${product.id})">
              <i data-lucide="shopping-cart"></i> ADD TO BAG
            </button>
          </div>
        </div>
        <div class="product-info" onclick="openQuickView(${product.id})">
          <span class="product-category">${product.category}</span>
          <h3 class="product-name">${product.name}</h3>
          <div class="product-meta">
            <div class="product-rating">
              <i data-lucide="star" class="star-filled"></i>
              <span>${product.rating}</span>
            </div>
            <span class="product-price">$${product.price.toFixed(2)}</span>
          </div>
        </div>
      </div>
    `;
  }).join('');

  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

// 8. CARD ACTIONS INTERFACES
// Keep track of active sizes selected per card
const cardSelectedSizes = {};

window.selectCardSize = function(btn, size) {
  const parent = btn.parentElement;
  parent.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const prodId = parent.dataset.prodId;
  cardSelectedSizes[prodId] = size;
};

window.triggerCardAddToCart = function(productId) {
  const size = cardSelectedSizes[productId] || 'S';
  addToCart(productId, size);
};

// 9. CART SYSTEM OPERATIONS
function toggleCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');
  if (drawer && overlay) {
    drawer.classList.toggle('active');
    overlay.classList.toggle('active');
  }
}

window.closeCartDrawer = function() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');
  if (drawer) drawer.classList.remove('active');
  if (overlay) overlay.classList.remove('active');
};

window.addToCart = function(productId, size, event) {
  // If clicked inside lookbook tag, stop propagation
  if (event) {
    event.stopPropagation();
  }

  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const existing = state.cart.find(item => item.id === productId && item.size === size);
  if (existing) {
    existing.quantity += 1;
  } else {
    state.cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: size,
      quantity: 1
    });
  }

  // Run visual animations on cart badges
  const badge = document.getElementById('cartBadge');
  if (badge) {
    badge.classList.remove('bounce');
    void badge.offsetWidth; // Trigger reflow for re-run animation
    badge.classList.add('bounce');
  }

  updateCartUI();

  // Open cart drawer immediately for positive reinforcement
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');
  if (drawer && !drawer.classList.contains('active')) {
    drawer.classList.add('active');
    overlay.classList.add('active');
  }
};

window.adjustQuantity = function(productId, size, delta) {
  const item = state.cart.find(item => item.id === productId && item.size === size);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    state.cart = state.cart.filter(i => !(i.id === productId && i.size === size));
  }

  updateCartUI();
};

window.removeCartItem = function(productId, size) {
  state.cart = state.cart.filter(i => !(i.id === productId && i.size === size));
  updateCartUI();
};

function updateCartUI() {
  // Save to LocalStorage
  try {
    localStorage.setItem('dripio_cart', JSON.stringify(state.cart));
  } catch (e) {}

  // Update Counters
  const totalItemsCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById('cartBadge').textContent = totalItemsCount;
  document.getElementById('cartCount').textContent = totalItemsCount;

  const container = document.getElementById('cartItemsContainer');
  const checkoutBtn = document.getElementById('checkoutBtn');

  if (state.cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty-message">
        <i data-lucide="frown" style="width: 48px; height: 48px; opacity: 0.3; margin-bottom: 1rem; color: var(--primary-color);"></i>
        <p>Your shopping bag has zero items. No drip.</p>
        <a href="#shop" class="btn btn-primary btn-sm" style="margin-top: 1rem;" onclick="closeCartDrawer()">Shop Grails</a>
      </div>
    `;
    if (checkoutBtn) checkoutBtn.disabled = true;
    updateCostBreakdown(0);
    if (typeof lucide !== 'undefined') lucide.createIcons();
    return;
  }

  if (checkoutBtn) checkoutBtn.disabled = false;

  let subtotal = 0;

  container.innerHTML = state.cart.map(item => {
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;

    return `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="cart-item-image">
        <div class="cart-item-details">
          <h4 class="cart-item-name">${item.name}</h4>
          <p class="cart-item-size">SIZE: ${item.size}</p>
          <p class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</p>
          <div class="cart-item-quantity">
            <button class="qty-btn" onclick="adjustQuantity(${item.id}, '${item.size}', -1)">-</button>
            <span class="qty-val">${item.quantity}</span>
            <button class="qty-btn" onclick="adjustQuantity(${item.id}, '${item.size}', 1)">+</button>
          </div>
        </div>
        <button class="cart-item-remove" onclick="removeCartItem(${item.id}, '${item.size}')" aria-label="Remove item">
          <i data-lucide="trash-2"></i>
        </button>
      </div>
    `;
  }).join('');

  updateCostBreakdown(subtotal);

  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

function updateCostBreakdown(subtotal) {
  const discountAmount = subtotal * (state.discountPercent / 100);
  const taxableTotal = subtotal - discountAmount;
  
  // Free shipping over $75 or with free shipping promo code
  let shippingCost = 10.00;
  if (subtotal === 0) {
    shippingCost = 0.00;
  } else if (subtotal >= 75.00 || state.freeShippingApplied) {
    shippingCost = 0.00;
  }

  const finalTotal = taxableTotal + shippingCost;

  document.getElementById('cartSubtotal').textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById('discountPercentage').textContent = `${state.discountPercent}%`;
  document.getElementById('cartDiscount').textContent = `-$${discountAmount.toFixed(2)}`;
  document.getElementById('cartShipping').textContent = shippingCost === 0.00 ? 'FREE' : `$${shippingCost.toFixed(2)}`;
  document.getElementById('cartTotal').textContent = `$${finalTotal.toFixed(2)}`;
}

// 10. PROMO CODE ENGINE
function applyPromoCode() {
  const input = document.getElementById('promoInput').value.trim().toUpperCase();
  const feedback = document.getElementById('promoFeedback');
  
  if (!input) {
    feedback.className = 'promo-feedback promo-error';
    feedback.textContent = 'Enter a code first.';
    return;
  }

  if (input === 'BUSSIN30') {
    state.discountPercent = 30;
    state.promoCode = 'BUSSIN30';
    feedback.className = 'promo-feedback promo-success';
    feedback.textContent = 'W! 30% discount applied.';
  } else if (input === 'NOCAP') {
    state.freeShippingApplied = true;
    state.promoCode = 'NOCAP';
    feedback.className = 'promo-feedback promo-success';
    feedback.textContent = 'No Cap! Free shipping applied.';
  } else {
    feedback.className = 'promo-feedback promo-error';
    feedback.textContent = 'Invalid aesthetic code. L.';
  }

  // Refresh cart price listings
  updateCartUI();
}

// 11. QUICK VIEW MODAL
window.openQuickView = function(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const content = document.getElementById('qvModalContent');
  const modal = document.getElementById('quickViewModal');

  content.innerHTML = `
    <div class="qv-image-wrapper">
      <img src="${product.image}" alt="${product.name}" class="qv-img">
    </div>
    <div class="qv-details-pane">
      <span class="qv-category">${product.category}</span>
      <h2 class="qv-name">${product.name}</h2>
      
      <div class="qv-rating">
        ${Array.from({ length: 5 }).map((_, i) => `
          <i data-lucide="star" class="${i < Math.floor(product.rating) ? 'star-filled' : ''}"></i>
        `).join('')}
        <span style="margin-left: 0.5rem; color: var(--text-muted); font-size: 0.85rem;">(${product.rating} / 5.0)</span>
      </div>

      <span class="qv-price">$${product.price.toFixed(2)}</span>
      
      <p class="qv-desc">${product.desc}</p>
      
      <div class="qv-size-title">Select Size</div>
      <div class="size-selector-grid" style="justify-content: flex-start; margin-bottom: 2rem;" data-prod-id="qv-${product.id}">
        <button class="size-btn active" onclick="selectQvSize(this, 'S')">S</button>
        <button class="size-btn" onclick="selectQvSize(this, 'M')">M</button>
        <button class="size-btn" onclick="selectQvSize(this, 'L')">L</button>
        <button class="size-btn" onclick="selectQvSize(this, 'XL')">XL</button>
      </div>

      <div class="qv-actions">
        <button class="btn btn-primary qv-add-btn" onclick="triggerQvAddToCart(${product.id})">
          <i data-lucide="shopping-bag"></i> ADD TO BAG
        </button>
      </div>
    </div>
  `;

  // Track initial selected size for this product quickview
  cardSelectedSizes[`qv-${product.id}`] = 'S';

  modal.classList.add('active');
  
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
};

window.selectQvSize = function(btn, size) {
  const parent = btn.parentElement;
  parent.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const prodId = parent.dataset.prodId;
  cardSelectedSizes[prodId] = size;
};

window.triggerQvAddToCart = function(productId) {
  const size = cardSelectedSizes[`qv-${productId}`] || 'S';
  addToCart(productId, size);
  document.getElementById('quickViewModal').classList.remove('active');
};

// 12. SEARCH SYSTEM (Catalog searching modal)
function handleModalSearch(query) {
  const container = document.getElementById('searchResultsContainer');
  const q = query.toLowerCase().trim();

  if (!q) {
    container.innerHTML = '';
    return;
  }

  const filtered = PRODUCTS_DATA.filter(p => 
    p.name.toLowerCase().includes(q) || 
    p.category.toLowerCase().includes(q) ||
    p.styleVibe.toLowerCase().includes(q)
  );

  if (filtered.length === 0) {
    container.innerHTML = `<div style="padding: 1.5rem; color: var(--text-muted); text-align: center;">No matches found in drop 01.</div>`;
    return;
  }

  container.innerHTML = filtered.map(p => `
    <div class="search-result-item" onclick="onSearchResultClick(${p.id})">
      <img src="${p.image}" class="search-result-image">
      <div class="search-result-info">
        <h5>${p.name}</h5>
        <span>$${p.price.toFixed(2)}</span>
      </div>
    </div>
  `).join('');
}

window.onSearchResultClick = function(productId) {
  document.getElementById('searchModal').classList.remove('active');
  document.getElementById('modalSearchInput').value = '';
  document.getElementById('searchResultsContainer').innerHTML = '';
  
  // Highlight card
  const card = document.querySelector(`.product-card[data-id="${productId}"]`);
  if (card) {
    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    card.style.borderColor = 'var(--primary-color)';
    card.style.boxShadow = '0 0 15px var(--primary-glow)';
    setTimeout(() => {
      card.style.borderColor = 'var(--border-color)';
      card.style.boxShadow = 'none';
    }, 2500);
  }
};

// 13. STYLE QUIZ STATE MACHINE (Vibe Checker)
let quizStep = 0;
const quizVibes = [];

window.nextQuizStep = function(step) {
  quizStep = step;
  
  // Hide all slides
  document.querySelectorAll('.quiz-slide').forEach(s => s.classList.remove('active'));
  
  // Calculate percentage
  let progress = 25;
  let nextSlideId = 'slide-welcome';
  
  if (step === 1) {
    progress = 50;
    nextSlideId = 'slide-q1';
  } else if (step === 2) {
    progress = 75;
    nextSlideId = 'slide-q2';
  } else if (step === 3) {
    progress = 90;
    nextSlideId = 'slide-q3';
  } else if (step === 'result') {
    progress = 100;
    nextSlideId = 'slide-result';
    calculateQuizResult();
  }

  document.getElementById('quizProgress').style.width = `${progress}%`;
  document.getElementById(nextSlideId).classList.add('active');
};

window.selectQuizAnswer = function(question, vibeValue, nextStep) {
  state.vibeQuizAnswers[question] = vibeValue;
  nextQuizStep(nextStep);
};

function calculateQuizResult() {
  const answers = [state.vibeQuizAnswers.q1, state.vibeQuizAnswers.q2, state.vibeQuizAnswers.q3];
  
  // Find mode
  const frequencies = {};
  let maxVibe = 'streetwear';
  let maxCount = 0;
  
  answers.forEach(val => {
    if (!val) return;
    frequencies[val] = (frequencies[val] || 0) + 1;
    if (frequencies[val] > maxCount) {
      maxCount = frequencies[val];
      maxVibe = val;
    }
  });

  state.vibeResult = maxVibe;
  
  // Update Result Details
  const titleEl = document.getElementById('vibeResultTitle');
  const descEl = document.getElementById('vibeResultDesc');
  const containerEl = document.getElementById('recommendedProducts');

  if (maxVibe === 'cyberpunk') {
    titleEl.textContent = 'CYBERPUNK TECHWEAR';
    descEl.textContent = 'You thrive in high-contrast neon highlights, futuristic design layers, and heavy techwear accents. You are officially ahead of the curve.';
  } else if (maxVibe === 'y2k') {
    titleEl.textContent = 'Y2K RETRO FUTURISM';
    descEl.textContent = 'Your vibe is dominated by late 90s mall aesthetics, chrome designs, oversized puffers, and tinted wraparound lenses. Nostalgia meets futuristic drip.';
  } else if (maxVibe === 'minimalist') {
    titleEl.textContent = 'MINIMALIST / CLEAN AESTHETIC';
    descEl.textContent = 'You prefer structured lines, organic textures, muted Earth tones, and versatile layouts. Simple but extremely premium.';
  } else {
    titleEl.textContent = 'STREETWEAR CORE';
    descEl.textContent = 'Baggy silos, raw industrial straps, and skaters details define your style. Heavy graphic hoodies and loaded utility pants are your daily uniform.';
  }

  // Load recommendations
  const recommendedList = PRODUCTS_DATA.filter(p => p.styleVibe === maxVibe).slice(0, 2);
  
  containerEl.innerHTML = recommendedList.map(p => `
    <div class="recommended-item" onclick="openQuickView(${p.id})">
      <img src="${p.image}" class="rec-img">
      <div class="rec-info">
        <h5>${p.name}</h5>
        <span>$${p.price.toFixed(2)}</span>
      </div>
    </div>
  `).join('');
}

window.applyVibeFilter = function() {
  // Update main filter and search keywords to filter matching vibes in shop catalog
  state.activeCategory = 'all';
  state.searchQuery = state.vibeResult;
  
  // Highlight shop catalog active filter
  document.querySelectorAll('.filter-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.category === 'all');
  });

  document.getElementById('searchInput').value = state.vibeResult;
  renderProducts();

  // Scroll to shop
  document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
};

window.restartQuiz = function() {
  state.vibeQuizAnswers = { q1: '', q2: '', q3: '' };
  nextQuizStep(0);
};

// 14. CHAT LOOPS REVIEWS SIMULATOR
function handleChatSendMessage() {
  const input = document.getElementById('chatInput');
  const text = input.value.trim();
  if (!text) return;

  appendChatMessage('You', text, '#8b5cf6', 'dripper_client');
  input.value = '';

  // Mock bot replies
  const botReplies = [
    { name: '@grail_hunter', color: '#10b981', text: 'sheesh that fits insane! 🔥 drop 01 is clean' },
    { name: '@skate_hard', color: '#f59e0b', text: 'w fits. shipping took like 2 days for me' },
    { name: '@y2k_aesthetic', color: '#ec4899', text: 'cops items immediately no cap, best fabric ever' },
    { name: '@admin_drip', color: '#ef4444', text: 'Next Drop timer is ticking down, password for catalog 02 drops in club newsletter soon!' }
  ];

  const randomReply = botReplies[Math.floor(Math.random() * botReplies.length)];
  setTimeout(() => {
    appendChatMessage(randomReply.name, randomReply.text, randomReply.color);
  }, 1200);
}

function appendChatMessage(name, text, color, customClass = '') {
  const container = document.getElementById('chatMessages');
  const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  
  const msgHtml = `
    <div class="chat-msg ${customClass}">
      <div class="user-avatar" style="background-color: ${color};">${name.replace('@', '').slice(0, 2).toUpperCase()}</div>
      <div class="chat-msg-body">
        <div class="chat-msg-meta">
          <span class="username">${name}</span>
          <span class="time">Today at ${time}</span>
        </div>
        <p class="chat-text">${text}</p>
      </div>
    </div>
  `;

  container.insertAdjacentHTML('beforeend', msgHtml);
  container.scrollTop = container.scrollHeight;
}

// 15. CHECKOUT FLOW & EXPRESS TRANSACTIONS
window.simulateExpressPayment = function(method) {
  const name = method === 'Apple Pay' ? 'Simulated Apple User' : 'Simulated PayPal Client';
  alert(`⚡ Quick authentication via ${method} approved.`);
  finalizeSimulatedOrder(name, 'Express Checkout');
};

function processSimulatedOrder() {
  const fname = document.getElementById('bill-fname').value;
  const lname = document.getElementById('bill-lname').value;
  const cardNum = document.getElementById('card-num').value;
  
  const maskedCard = 'Visa ending in ' + cardNum.slice(-4);
  finalizeSimulatedOrder(fname + ' ' + lname, maskedCard);
}

function finalizeSimulatedOrder(customerName, paymentMethod) {
  const modal = document.getElementById('checkoutModal');
  const subtotal = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountAmount = subtotal * (state.discountPercent / 100);
  
  let shipping = 10.00;
  if (subtotal >= 75.00 || state.freeShippingApplied) shipping = 0.00;

  const total = subtotal - discountAmount + shipping;
  const orderId = 'DRP-' + Math.floor(100000 + Math.random() * 900000);

  // Change modal content to Order Success screen
  const modalBody = document.getElementById('checkoutModalBody');
  modalBody.innerHTML = `
    <div class="order-success-body">
      <div class="success-icon"><i data-lucide="check-circle-2"></i></div>
      <h2>FIT SECURED!</h2>
      <p>Your mock order was processed successfully. CONFETTI DEPLOYED!</p>
      
      <div class="order-details-summary">
        <div class="summary-row">
          <span>Order ID</span>
          <span style="font-family: monospace; font-weight:700; color:var(--accent-color);">${orderId}</span>
        </div>
        <div class="summary-row">
          <span>Customer</span>
          <span>${customerName}</span>
        </div>
        <div class="summary-row">
          <span>Billing Option</span>
          <span>${paymentMethod}</span>
        </div>
        <div class="summary-row">
          <span>Paid Total</span>
          <span style="color:var(--accent-color); font-weight:700;">$${total.toFixed(2)}</span>
        </div>
      </div>

      <button class="btn btn-primary btn-block" onclick="completeCheckoutSuccessFlow()">W FIT! CONTINUE SHOPPING</button>
    </div>
  `;

  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Trigger Confetti!
  triggerConfettiExplosion();
}

window.completeCheckoutSuccessFlow = function() {
  // Reset cart state
  state.cart = [];
  state.promoCode = '';
  state.discountPercent = 0;
  state.freeShippingApplied = false;

  // Save changes
  updateCartUI();

  // Reset form modal structure
  document.getElementById('checkoutModal').classList.remove('active');
  setTimeout(() => {
    // Re-render original checkout modal structure
    const modalBody = document.getElementById('checkoutModalBody');
    modalBody.innerHTML = `
      <form id="checkoutForm">
        <div class="form-section-title">Shipping Credentials</div>
        <div class="form-row">
          <div class="field-group">
            <label for="bill-fname">First Name</label>
            <input type="text" id="bill-fname" placeholder="John" required>
          </div>
          <div class="field-group">
            <label for="bill-lname">Last Name</label>
            <input type="text" id="bill-lname" placeholder="Doe" required>
          </div>
        </div>
        <div class="field-group">
          <label for="bill-address">Delivery Address</label>
          <input type="text" id="bill-address" placeholder="123 Streetwear Ave, Apt 3" required>
        </div>
        <div class="form-row">
          <div class="field-group">
            <label for="bill-city">City</label>
            <input type="text" id="bill-city" placeholder="Los Angeles" required>
          </div>
          <div class="field-group">
            <label for="bill-zip">ZIP / Postal Code</label>
            <input type="text" id="bill-zip" placeholder="90001" required>
          </div>
        </div>

        <div class="form-section-title">Payment Simulator</div>
        <div class="field-group">
          <label for="card-num">Card Number</label>
          <div class="input-icon-wrapper">
            <i data-lucide="credit-card"></i>
            <input type="text" id="card-num" placeholder="4111 2222 3333 4444" minlength="16" maxlength="19" required>
          </div>
        </div>
        <div class="form-row">
          <div class="field-group">
            <label for="card-expiry">Expiry Date</label>
            <input type="text" id="card-expiry" placeholder="MM/YY" maxlength="5" required>
          </div>
          <div class="field-group">
            <label for="card-cvv">CVV</label>
            <input type="text" id="card-cvv" placeholder="123" minlength="3" maxlength="4" required>
          </div>
        </div>

        <div class="express-payments">
          <span class="express-label">OR EXPRESS SIMULATED PAYMENT</span>
          <div class="express-row">
            <button type="button" class="btn express-btn apple-pay" onclick="simulateExpressPayment('Apple Pay')">
              <i data-lucide="smartphone"></i> Apple Pay
            </button>
            <button type="button" class="btn express-btn paypal" onclick="simulateExpressPayment('PayPal')">
              <i data-lucide="send"></i> PayPal
            </button>
          </div>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-outline" id="cancelCheckoutBtn">Cancel</button>
          <button type="submit" class="btn btn-primary" id="placeOrderBtn">PLACE SIMULATED ORDER</button>
        </div>
      </form>
    `;
    
    // Rebind listeners
    document.getElementById('checkoutForm').addEventListener('submit', (e) => {
      e.preventDefault();
      processSimulatedOrder();
    });
    document.getElementById('cancelCheckoutBtn').addEventListener('click', () => {
      document.getElementById('checkoutModal').classList.remove('active');
    });
    
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  }, 500);
};

// 16. CANVAS CONFETTI SYSTEM
let confettiActive = false;
let confettiPieces = [];
const confettiColors = ['#9d4edd', '#ccff00', '#00f0ff', '#ff007f', '#ffffff'];

function triggerConfettiExplosion() {
  const canvas = document.getElementById('confettiCanvas');
  const ctx = canvas.getContext('2d');
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.display = 'block';
  
  confettiPieces = [];
  confettiActive = true;

  // Populate pieces
  for (let i = 0; i < 150; i++) {
    confettiPieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * -canvas.height - 20,
      r: Math.random() * 6 + 4,
      d: Math.random() * canvas.height,
      color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
      tilt: Math.random() * 10 - 5,
      tiltAngleIncremental: Math.random() * 0.07 + 0.02,
      tiltAngle: 0
    });
  }

  function drawConfetti() {
    if (!confettiActive) return;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    let activePiecesLeft = false;

    confettiPieces.forEach(p => {
      p.tiltAngle += p.tiltAngleIncremental;
      p.y += (Math.cos(p.d) + 3 + p.r / 2) / 2;
      p.x += Math.sin(p.tiltAngle);
      p.tilt = Math.sin(p.tiltAngle - (p.r / 3)) * 15;

      if (p.y < canvas.height) {
        activePiecesLeft = true;
      }

      ctx.beginPath();
      ctx.lineWidth = p.r;
      ctx.strokeStyle = p.color;
      ctx.moveTo(p.x + p.tilt + p.r / 2, p.y);
      ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 2);
      ctx.stroke();
    });

    if (activePiecesLeft) {
      requestAnimationFrame(drawConfetti);
    } else {
      confettiActive = false;
      canvas.style.display = 'none';
    }
  }

  drawConfetti();
  
  // Disable confetti after 6 seconds to prevent performance leak
  setTimeout(() => {
    confettiActive = false;
    canvas.style.display = 'none';
  }, 6000);
}

// Window resize listener for canvas sizing
window.addEventListener('resize', () => {
  const canvas = document.getElementById('confettiCanvas');
  if (canvas && confettiActive) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
});
