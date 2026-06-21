// ==========================================
// VORTEX GAMES - APPLICATION LOGIC
// ==========================================

// --- GAME CATALOG DATA ---
const GAMES_CATALOG = [
  {
    id: "g1",
    title: "NEON HORIZON 2088",
    price: 29.99,
    originalPrice: 59.99,
    rating: 4.8,
    popularity: 98,
    genres: ["RPG", "Action", "Cyberpunk"],
    developer: "Retrowave Studios",
    description: "Dive deep into the glowing cyberpunk underbelly of Neo-Detroit in this critically acclaimed open-world action RPG. Hack cybernetic implants, upgrade neon weaponry, and decide the fate of megacorporations in a branching storyline featuring a futuristic synthwave soundtrack.",
    specs: {
      os: "Windows 10/11 64-bit",
      cpu: "Intel Core i7-9700K / AMD Ryzen 5 3600",
      ram: "16 GB RAM",
      gpu: "NVIDIA GeForce RTX 3060 / AMD Radeon RX 6600 XT",
      storage: "50 GB SSD available space"
    },
    reviews: [
      { user: "CyberDeck_42", stars: 5, comment: "Hands down the best cyberpunk RPG of the decade. The city styling is gorgeous, and the lighting is unreal!" },
      { user: "SynthWaver", stars: 4, comment: "Amazing soundtrack and fluid gunplay. Had a few minor sandbox glitches, but the depth is unmatched." }
    ],
    coverStyle: "cyberpunk"
  },
  {
    id: "g2",
    title: "SHADOW ODYSSEY",
    price: 19.99,
    originalPrice: 39.99,
    rating: 4.6,
    popularity: 87,
    genres: ["Adventure", "Action", "RPG"],
    developer: "Moonlight Interactive",
    description: "Embark on a dark fantasy journey through shattered cosmic dimensions. As the Last Sentinel, navigate atmospheric medieval ruins, battle terrifying void behemoths, and retrieve the eternal embers to light the celestial heart.",
    specs: {
      os: "Windows 10 64-bit",
      cpu: "Intel Core i5-8400 / AMD Ryzen 5 2600",
      ram: "8 GB RAM",
      gpu: "NVIDIA GeForce GTX 1660 / AMD Radeon RX 590",
      storage: "30 GB available space"
    },
    reviews: [
      { user: "DarkSoulsFan", stars: 5, comment: "Atmosphere is incredibly dense. Combat is punishing but extremely fair and rewarding!" },
      { user: "GamerDad", stars: 4, comment: "Beautiful art direction. Wish the fast travel system was slightly faster, but the visual world is wonderful." }
    ],
    coverStyle: "dark-fantasy"
  },
  {
    id: "g3",
    title: "CHRONO RIFT",
    price: 0.00, // FREE
    originalPrice: 0.00,
    rating: 4.5,
    popularity: 92,
    genres: ["Strategy", "Indie"],
    developer: "Paradox Loop",
    description: "A mind-bending tactical time-manipulation game where your previous turns run parallel to your enemies. Plan actions down to the millisecond, record clones of your timeline, and outsmart complex defense nodes in this highly acclaimed sci-fi puzzle shooter.",
    specs: {
      os: "Windows 7/10/11 64-bit",
      cpu: "Intel Core i5-4460 / AMD FX-6300",
      ram: "8 GB RAM",
      gpu: "NVIDIA GeForce GTX 1050 / AMD Radeon RX 560",
      storage: "12 GB available space"
    },
    reviews: [
      { user: "TimeSplitter", stars: 5, comment: "Insanely clever gameplay loop! Plotting moves alongside your own past actions is brilliant." },
      { user: "IndieLover", stars: 4, comment: "Short but incredibly dense with genius mechanics. And it is completely free to play!" }
    ],
    coverStyle: "time-rift"
  },
  {
    id: "g4",
    title: "STARMINER INFINITE",
    price: 14.99,
    originalPrice: 24.99,
    rating: 4.3,
    popularity: 76,
    genres: ["Strategy", "Simulation", "Indie"],
    developer: "AstroForge Corp",
    description: "Automate massive galactic mining space stations, optimize hyperlane conveyor grids, and defend your drill rings from aggressive alien pirate swarms in a fully procedurally generated asteroid belt universe. Scale production to dominate the system economy.",
    specs: {
      os: "Windows 10 64-bit",
      cpu: "Intel Core i5-7600K / AMD Ryzen 3 3100",
      ram: "12 GB RAM",
      gpu: "NVIDIA GeForce GTX 1060 / AMD Radeon RX 580",
      storage: "15 GB available space"
    },
    reviews: [
      { user: "FactoryFix", stars: 5, comment: "If you love games like Factorio and space simulations, this is pure digital crack. Highly addictive." },
      { user: "SpacePirate", stars: 4, comment: "Automation systems work beautifully. Combat could be slightly deeper, but expansion mechanics are stellar." }
    ],
    coverStyle: "space-industry"
  },
  {
    id: "g5",
    title: "TACTICAL BREACH: ZERO",
    price: 9.99,
    originalPrice: 19.99,
    rating: 4.7,
    popularity: 91,
    genres: ["Shooter", "Action"],
    developer: "Ironclad Games",
    description: "A high-stakes tactical first-person shooter where every sound count. Design breach plans, set charge lines, execute room clears, and defuse critical nodes. Play solo with advanced AI squads or coordinate with friends in intense multiplayer operations.",
    specs: {
      os: "Windows 10/11 64-bit",
      cpu: "Intel Core i7-6700K / AMD Ryzen 5 1600",
      ram: "16 GB RAM",
      gpu: "NVIDIA GeForce GTX 1070 / AMD Radeon RX Vega 56",
      storage: "40 GB available space"
    },
    reviews: [
      { user: "BreachMaster", stars: 5, comment: "Slow, methodical, tense, and absolutely brilliant. Communication is key to win." },
      { user: "NoobShooter", stars: 4, comment: "Tough learning curve, but once you learn how to lean, slice the pie, and coordinate breaches, it is unbeatable." }
    ],
    coverStyle: "tactical"
  },
  {
    id: "g6",
    title: "ROGUE CELL",
    price: 12.99,
    originalPrice: 12.99,
    rating: 4.4,
    popularity: 81,
    genres: ["Indie", "Action", "RPG"],
    developer: "NanoPixel Studio",
    description: "Fight through ever-shifting synthwave dungeons in this rogue-like hack-and-slash. Hack genetic structures to upgrade your mutation modules with every death, collect pixelated relics, and battle bio-mechanical cellular guards.",
    specs: {
      os: "Windows 7/10/11",
      cpu: "Dual Core 2.0 GHz",
      ram: "8 GB RAM",
      gpu: "Integrated Graphics compatible with Shader Model 4.0",
      storage: "5 GB available space"
    },
    reviews: [
      { user: "RogueRunner", stars: 5, comment: "Insanely fast pacing, high difficulty, and a mind-blowing synthwave aesthetic. Runs on a potato!" },
      { user: "CellGamer", stars: 4, comment: "Very tight controls and cool mutation builds. Highly recommend for quick gaming sessions." }
    ],
    coverStyle: "rogue-cell"
  },
  {
    id: "g7",
    title: "EXO-COLONY: MARS",
    price: 24.99,
    originalPrice: 49.99,
    rating: 4.2,
    popularity: 79,
    genres: ["Strategy", "Simulation"],
    developer: "RedPlanet Labs",
    description: "Establish the first self-sustaining human colony on Mars. Manage complex atmospheric generators, water recycling grids, greenhouse crop arrays, and defense structures against Martian dust storms. Balance resource quotas with citizen sanity.",
    specs: {
      os: "Windows 10 64-bit",
      cpu: "Intel Core i7-8700 / AMD Ryzen 5 3600X",
      ram: "16 GB RAM",
      gpu: "NVIDIA GeForce RTX 2060 / AMD Radeon RX 5700",
      storage: "25 GB available space"
    },
    reviews: [
      { user: "MartianMan", stars: 4, comment: "Extremely detailed management system. Hard difficulty spikes during dust storms, but rewarding colony growth." }
    ],
    coverStyle: "mars-colony"
  },
  {
    id: "g8",
    title: "AERO RACER NEO",
    price: 4.99,
    originalPrice: 14.99,
    rating: 4.5,
    popularity: 85,
    genres: ["Action", "Indie"],
    developer: "Velocity Labs",
    description: "Defy gravity in high-velocity anti-grav crafts racing across supersonic sky tracks at breakneck speeds. Evade laser traps, weaponize energy boosts, and dominate global leaderboards in this glowing futuristic retro racer.",
    specs: {
      os: "Windows 10/11",
      cpu: "Intel Core i5-6500 / AMD Ryzen 3 1200",
      ram: "8 GB RAM",
      gpu: "NVIDIA GeForce GTX 1060 / AMD Radeon RX 470",
      storage: "10 GB available space"
    },
    reviews: [
      { user: "SpeedDemon", stars: 5, comment: "Felt like Wipeout combined with modern cyberpunk. Adrenaline rush from start to finish!" }
    ],
    coverStyle: "aero-racer"
  }
];

// --- APP STATE ---
let cart = [];
let activeGenres = new Set();
let maxPriceLimit = 100;
let searchQueryStr = "";
let currentSort = "popularity";
let currentTab = "store";
let purchasedLibrary = [];
let appliedPromoCode = null;

// Valid mock promo codes
const PROMO_CODES = {
  "VORTEX50": { discountPercent: 50, msg: "50% VORTEX SPECIAL APPLIED!" },
  "CYBER20": { discountPercent: 20, msg: "20% CYBERPUNK DISCOUNT APPLIED!" },
  "FREEPLAY": { discountValue: 10, msg: "$10.00 CASH DISCOUNT APPLIED!" }
};

// ==========================================
// --- INITIALIZATION ---
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  // Load data from localStorage (Simulating user account persistence)
  loadStateFromStorage();

  // Draw initial catalog
  renderCatalog();
  updateCartUI();

  // Register Navigation Handlers
  setupNavigation();

  // Register Search & Filter Handlers
  setupFilters();

  // Register Drawer Handlers
  setupCartDrawer();

  // Register Modals Handlers
  setupModals();

  // Setup Newsletter toast sandbox trigger
  setupMiscTriggers();
});

// ==========================================
// --- LOCALSTORAGE PERSISTENCE ---
// ==========================================
function loadStateFromStorage() {
  try {
    const savedCart = localStorage.getItem("vortex_cart");
    if (savedCart) {
      cart = JSON.parse(savedCart);
    }
    const savedLib = localStorage.getItem("vortex_library");
    if (savedLib) {
      purchasedLibrary = JSON.parse(savedLib);
    }
  } catch (err) {
    console.error("Local storage read failed, using empty states.", err);
  }
}

function saveStateToStorage() {
  try {
    localStorage.setItem("vortex_cart", JSON.stringify(cart));
    localStorage.setItem("vortex_library", JSON.stringify(purchasedLibrary));
  } catch (err) {
    console.error("Local storage save failed.", err);
  }
}

// ==========================================
// --- DYNAMIC GRAPHICS GENERATOR ENGINE ---
// ==========================================
// Since the image model is exhausted, this procedural engine creates distinct,
// highly beautiful and vibrant cyberpunk/scifi SVG layouts dynamically to cover games.
function createCardCoverVisual(styleType, title) {
  let innerSVG = "";
  
  if (styleType === "cyberpunk") {
    innerSVG = `
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#ff007f;stop-opacity:1" />
            <stop offset="60%" style="stop-color:#8a2be2;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#0b071e;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grad1)" />
        <circle cx="50%" cy="40%" r="55" fill="none" stroke="#00f0ff" stroke-width="2" stroke-dasharray="5,5" opacity="0.6"/>
        <line x1="0" y1="180" x2="300" y2="180" stroke="#00f0ff" stroke-width="1" opacity="0.4" />
        <line x1="0" y1="190" x2="300" y2="190" stroke="#ff007f" stroke-width="2" opacity="0.8" />
        <text x="50%" y="45%" dominant-baseline="middle" text-anchor="middle" font-family="Outfit" font-size="34" font-weight="900" fill="#ffffff" opacity="0.15">2088</text>
        <path d="M 30,130 L 270,130 L 250,170 L 50,170 Z" fill="rgba(6, 4, 13, 0.7)" stroke="#00f0ff" stroke-width="1"/>
        <text x="50%" y="152%" dominant-baseline="middle" text-anchor="middle" font-family="Outfit" font-size="10" font-weight="700" fill="#00f0ff" letter-spacing="4">SYSTEM REBOOT</text>
      </svg>
    `;
  } else if (styleType === "dark-fantasy") {
    innerSVG = `
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#4a154b;stop-opacity:1" />
            <stop offset="50%" style="stop-color:#120c1f;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#020005;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grad2)" />
        <polygon points="150,30 220,130 80,130" fill="none" stroke="#ffb700" stroke-width="1.5" opacity="0.6"/>
        <circle cx="150" cy="85" r="25" fill="none" stroke="#ff007f" stroke-width="1" opacity="0.5"/>
        <path d="M10,200 L290,200" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
        <path d="M150,130 L150,180" stroke="#ffb700" stroke-width="2" opacity="0.7"/>
        <text x="50%" y="45%" dominant-baseline="middle" text-anchor="middle" font-family="Outfit" font-size="30" font-weight="800" fill="#ffffff" opacity="0.08">VOID</text>
      </svg>
    `;
  } else if (styleType === "time-rift") {
    innerSVG = `
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad3" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#00f0ff;stop-opacity:1" />
            <stop offset="50%" style="stop-color:#0b071e;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#8a2be2;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grad3)" />
        <circle cx="50%" cy="45%" r="45" fill="none" stroke="#00f0ff" stroke-width="3" opacity="0.8"/>
        <line x1="150" y1="45" x2="150" y2="20" stroke="#ff007f" stroke-width="3" />
        <line x1="150" y1="45" x2="180" y2="45" stroke="#ff007f" stroke-width="3" />
        <path d="M 20,200 L 280,100" stroke="rgba(255, 0, 127, 0.3)" stroke-width="1.5"/>
        <path d="M 20,100 L 280,200" stroke="rgba(0, 240, 255, 0.3)" stroke-width="1.5"/>
        <text x="50%" y="85%" dominant-baseline="middle" text-anchor="middle" font-family="Outfit" font-size="10" font-weight="700" fill="#ffffff" letter-spacing="3">TIMELINE: ZERO</text>
      </svg>
    `;
  } else if (styleType === "space-industry") {
    innerSVG = `
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad4" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#ffb700;stop-opacity:1" />
            <stop offset="70%" style="stop-color:#4a121a;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#0b071e;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grad4)" />
        <circle cx="80" cy="70" r="30" fill="#ffb700" opacity="0.7"/>
        <line x1="80" y1="70" x2="220" y2="150" stroke="#ffffff" stroke-width="1.5" stroke-dasharray="4,4" opacity="0.6"/>
        <rect x="180" y="120" width="50" height="50" rx="8" fill="none" stroke="#00f0ff" stroke-width="2"/>
        <text x="50%" y="82%" dominant-baseline="middle" text-anchor="middle" font-family="Outfit" font-size="11" font-weight="700" fill="#ffb700" letter-spacing="2">EXTRACTING METALS</text>
      </svg>
    `;
  } else if (styleType === "tactical") {
    innerSVG = `
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad5" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#2a3a2a;stop-opacity:1" />
            <stop offset="60%" style="stop-color:#0e170e;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#020502;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grad5)" />
        <path d="M 50,50 L 250,50 L 250,150 L 50,150 Z" fill="none" stroke="#00ff66" stroke-width="1" opacity="0.3"/>
        <line x1="150" y1="20" x2="150" y2="180" stroke="#ff007f" stroke-dasharray="2,2" stroke-width="1.5" />
        <circle cx="150" cy="100" r="25" fill="none" stroke="#00ff66" stroke-width="2" />
        <line x1="120" y1="100" x2="180" y2="100" stroke="#00ff66" stroke-width="2" />
        <text x="50%" y="80%" dominant-baseline="middle" text-anchor="middle" font-family="Outfit" font-size="10" font-weight="700" fill="#00ff66" letter-spacing="4">BREACH ACTIVE</text>
      </svg>
    `;
  } else if (styleType === "rogue-cell") {
    innerSVG = `
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad6" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#ff007f;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#ffb700;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grad6)" />
        <polygon points="150,40 190,80 170,130 130,130 110,80" fill="none" stroke="#ffffff" stroke-width="2" opacity="0.8"/>
        <line x1="150" y1="40" x2="150" y2="130" stroke="#ffffff" opacity="0.4"/>
        <circle cx="150" cy="85" r="10" fill="#ffffff" />
        <text x="50%" y="82%" dominant-baseline="middle" text-anchor="middle" font-family="Outfit" font-size="10" font-weight="700" fill="#ffffff" letter-spacing="3">MUTATION MOD</text>
      </svg>
    `;
  } else if (styleType === "mars-colony") {
    innerSVG = `
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad7" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#e65c00;stop-opacity:1" />
            <stop offset="60%" style="stop-color:#7f2200;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#1a0700;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grad7)" />
        <path d="M30,150 Q150,80 270,150" fill="rgba(0, 240, 255, 0.1)" stroke="#00f0ff" stroke-width="2"/>
        <circle cx="150" cy="120" r="15" fill="none" stroke="#00f0ff" stroke-width="1.5" />
        <circle cx="120" cy="140" r="8" fill="none" stroke="#00f0ff" stroke-width="1" />
        <circle cx="180" cy="140" r="8" fill="none" stroke="#00f0ff" stroke-width="1" />
        <text x="50%" y="30%" dominant-baseline="middle" text-anchor="middle" font-family="Outfit" font-size="28" font-weight="800" fill="#ffb700" opacity="0.12">MARS</text>
      </svg>
    `;
  } else { // aero-racer
    innerSVG = `
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad8" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#00f0ff;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#ff007f;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grad8)" />
        <path d="M 60,140 L 150,40 L 240,140 Z" fill="rgba(6, 4, 13, 0.8)" stroke="#ffffff" stroke-width="2"/>
        <line x1="30" y1="160" x2="270" y2="160" stroke="#00f0ff" stroke-width="3" />
        <line x1="30" y1="170" x2="270" y2="170" stroke="#ff007f" stroke-width="1" />
        <text x="50%" y="82%" dominant-baseline="middle" text-anchor="middle" font-family="Outfit" font-size="11" font-weight="900" fill="#00f0ff" letter-spacing="4">BOOST ACTIVATED</text>
      </svg>
    `;
  }
  
  return `
    <div class="card-visual-gen">${innerSVG}</div>
    <div style="position:absolute; inset:0; background:linear-gradient(to top, rgba(6,4,13,0.9) 0%, rgba(6,4,13,0.2) 60%, transparent 100%); z-index:1;"></div>
    <div style="position:absolute; bottom:1rem; left:1rem; right:1rem; z-index:2; text-shadow:0 2px 4px rgba(0,0,0,0.8);">
      <div style="font-family:Outfit; font-size:1.15rem; font-weight:800; color:white; line-height:1.2; text-transform:uppercase;">${title}</div>
    </div>
  `;
}

// ==========================================
// --- CATALOG RENDERING & LOGIC ---
// ==========================================
function renderCatalog() {
  const gridContainer = document.getElementById("gameCardGrid");
  const countText = document.getElementById("catalogCountText");
  const emptyAlert = document.getElementById("emptyCatalogAlert");

  if (!gridContainer) return;

  // Filter Catalog
  let filteredGames = GAMES_CATALOG.filter(game => {
    // Search match (title or tags)
    const matchesSearch = searchQueryStr.trim() === "" || 
      game.title.toLowerCase().includes(searchQueryStr.toLowerCase()) ||
      game.developer.toLowerCase().includes(searchQueryStr.toLowerCase()) ||
      game.genres.some(genre => genre.toLowerCase().includes(searchQueryStr.toLowerCase()));

    // Genre checkbox match
    const matchesGenre = activeGenres.size === 0 || 
      game.genres.some(genre => activeGenres.has(genre));

    // Price range match
    const matchesPrice = game.price <= maxPriceLimit;

    return matchesSearch && matchesGenre && matchesPrice;
  });

  // Sort Catalog
  filteredGames.sort((a, b) => {
    if (currentSort === "price-low") {
      return a.price - b.price;
    } else if (currentSort === "price-high") {
      return b.price - a.price;
    } else if (currentSort === "rating") {
      return b.rating - a.rating;
    } else { // default: popularity
      return b.popularity - a.popularity;
    }
  });

  // Set Count Text
  countText.textContent = filteredGames.length;

  // Clear Grid
  gridContainer.innerHTML = "";

  if (filteredGames.length === 0) {
    gridContainer.style.display = "none";
    emptyAlert.style.display = "flex";
    return;
  }

  gridContainer.style.display = "grid";
  emptyAlert.style.display = "none";

  // Build Game Cards
  filteredGames.forEach(game => {
    const cardEl = document.createElement("div");
    cardEl.className = "game-card glass-panel";
    
    // Check if in cart
    const isAlreadyInCart = cart.some(item => item.id === game.id);
    const inCartClass = isAlreadyInCart ? "in-cart" : "";
    const inCartIcon = isAlreadyInCart ? "fa-solid fa-cart-check" : "fa-solid fa-cart-plus";

    // Discount percentage
    let discountBadge = "";
    if (game.originalPrice > game.price) {
      const discountPct = Math.round(((game.originalPrice - game.price) / game.originalPrice) * 100);
      discountBadge = `<div class="card-discount">-${discountPct}%</div>`;
    }

    // Price tags text
    let priceHTML = "";
    if (game.price === 0) {
      priceHTML = `<span class="current-price free-price">FREE</span>`;
    } else {
      const originalHTML = game.originalPrice > game.price ? 
        `<span class="original-price">$${game.originalPrice.toFixed(2)}</span>` : "";
      priceHTML = `
        ${originalHTML}
        <span class="current-price">$${game.price.toFixed(2)}</span>
      `;
    }

    // Genre items pills
    const genresHTML = game.genres.map(g => `<span>${g}</span>`).join("");

    // Setup cover element visual
    const coverArtHTML = createCardCoverVisual(game.coverStyle, game.title);

    cardEl.innerHTML = `
      <div class="card-img-wrapper">
        <div class="card-img-placeholder">
          <i class="fa-solid fa-gamepad"></i>
          ${coverArtHTML}
        </div>
        <div class="card-tag">${game.developer}</div>
        ${discountBadge}
      </div>
      <div class="card-body">
        <div class="card-details">
          <div class="card-rating">
            <i class="fa-solid fa-star"></i>
            <span>${game.rating.toFixed(1)} / 5.0</span>
          </div>
          <h3 class="card-title">${game.title}</h3>
          <div class="card-genres">
            ${genresHTML}
          </div>
        </div>
        <div class="card-footer">
          <div class="card-price-container">
            ${priceHTML}
          </div>
          <button class="card-buy-btn ${inCartClass}" data-id="${game.id}" aria-label="Add to cart">
            <i class="${inCartIcon}"></i>
          </button>
        </div>
      </div>
    `;

    // Event listener: clicking the card anywhere (except the Buy button) opens detail modal
    cardEl.addEventListener("click", (e) => {
      if (e.target.closest(".card-buy-btn")) {
        // Intercept add to cart
        e.stopPropagation();
        toggleCartItem(game.id);
      } else {
        openDetailModal(game.id);
      }
    });

    gridContainer.appendChild(cardEl);
  });
}

// ==========================================
// --- NAVIGATION CONTROLLER ---
// ==========================================
function setupNavigation() {
  const storeBtn = document.getElementById("navStoreBtn");
  const libraryBtn = document.getElementById("navLibraryBtn");
  
  const storePage = document.getElementById("storePage");
  const libraryPage = document.getElementById("libraryPage");

  const logoLink = document.getElementById("logoLink");
  const toStoreBtn = document.getElementById("libraryToStoreBtn");

  // Nav footer anchors
  const footerStore = document.querySelector(".footer-store-nav");
  const footerLibrary = document.querySelector(".footer-library-nav");

  function switchToTab(tabName) {
    currentTab = tabName;
    if (tabName === "store") {
      storeBtn.classList.add("active");
      libraryBtn.classList.remove("active");
      storePage.style.display = "block";
      libraryPage.classList.remove("active");
      renderCatalog();
    } else {
      storeBtn.classList.remove("active");
      libraryBtn.classList.add("active");
      storePage.style.display = "none";
      libraryPage.classList.add("active");
      renderLibrary();
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  storeBtn.addEventListener("click", () => switchToTab("store"));
  libraryBtn.addEventListener("click", () => switchToTab("library"));
  logoLink.addEventListener("click", (e) => {
    e.preventDefault();
    switchToTab("store");
  });
  toStoreBtn.addEventListener("click", () => switchToTab("store"));

  if (footerStore) {
    footerStore.addEventListener("click", (e) => {
      e.preventDefault();
      switchToTab("store");
    });
  }
  if (footerLibrary) {
    footerLibrary.addEventListener("click", (e) => {
      e.preventDefault();
      switchToTab("library");
    });
  }
}

// ==========================================
// --- FILTER CONTROLLER ---
// ==========================================
function setupFilters() {
  const searchInput = document.getElementById("searchInput");
  const priceSlider = document.getElementById("priceRangeSlider");
  const priceDisplay = document.getElementById("priceSliderVal");
  const sortSelect = document.getElementById("sortSelect");
  const clearBtn = document.getElementById("clearFiltersBtn");
  const emptyClearBtn = document.getElementById("emptyClearFiltersBtn");
  
  // Search text input
  searchInput.addEventListener("input", (e) => {
    searchQueryStr = e.target.value;
    renderCatalog();
    renderActiveFilterTags();
  });

  // Genre checkboxes
  const genreCheckboxes = document.querySelectorAll(".genre-filter-chk");
  genreCheckboxes.forEach(chk => {
    chk.addEventListener("change", () => {
      if (chk.checked) {
        activeGenres.add(chk.value);
      } else {
        activeGenres.delete(chk.value);
      }
      renderCatalog();
      renderActiveFilterTags();
    });
  });

  // Price range slider
  priceSlider.addEventListener("input", (e) => {
    maxPriceLimit = parseFloat(e.target.value);
    priceDisplay.textContent = `$${maxPriceLimit.toFixed(2)}`;
    renderCatalog();
    renderActiveFilterTags();
  });

  // Sort dropdown
  sortSelect.addEventListener("change", (e) => {
    currentSort = e.target.value;
    renderCatalog();
  });

  // Clear filters
  function resetAllFilters() {
    searchInput.value = "";
    searchQueryStr = "";
    
    activeGenres.clear();
    genreCheckboxes.forEach(chk => chk.checked = false);

    priceSlider.value = 100;
    maxPriceLimit = 100;
    priceDisplay.textContent = "$100.00";

    renderCatalog();
    renderActiveFilterTags();
    showToast("Filters successfully cleared", "success");
  }

  clearBtn.addEventListener("click", resetAllFilters);
  emptyClearBtn.addEventListener("click", resetAllFilters);
}

// Render the small descriptive tags showing what filters are active
function renderActiveFilterTags() {
  const container = document.getElementById("activeFiltersContainer");
  if (!container) return;

  container.innerHTML = "";
  let activeCount = 0;

  // Search text tag
  if (searchQueryStr.trim() !== "") {
    activeCount++;
    createFilterTag(container, `Search: "${searchQueryStr.substring(0, 10)}..."`, () => {
      document.getElementById("searchInput").value = "";
      searchQueryStr = "";
      renderCatalog();
      renderActiveFilterTags();
    });
  }

  // Genre tags
  activeGenres.forEach(genre => {
    activeCount++;
    createFilterTag(container, genre, () => {
      activeGenres.delete(genre);
      // Uncheck matching checkbox
      const chk = Array.from(document.querySelectorAll(".genre-filter-chk")).find(c => c.value === genre);
      if (chk) chk.checked = false;
      renderCatalog();
      renderActiveFilterTags();
    });
  });

  // Max price tag
  if (maxPriceLimit < 100) {
    activeCount++;
    createFilterTag(container, `Max: $${maxPriceLimit.toFixed(0)}`, () => {
      const priceSlider = document.getElementById("priceRangeSlider");
      priceSlider.value = 100;
      maxPriceLimit = 100;
      document.getElementById("priceSliderVal").textContent = "$100.00";
      renderCatalog();
      renderActiveFilterTags();
    });
  }

  if (activeCount === 0) {
    container.innerHTML = `<span class="filter-tag" style="border: none; padding: 0.25rem 0;">None</span>`;
  }
}

function createFilterTag(parent, text, onRemove) {
  const tag = document.createElement("span");
  tag.className = "filter-tag";
  tag.innerHTML = `${text} <i class="fa-solid fa-xmark"></i>`;
  tag.querySelector("i").addEventListener("click", onRemove);
  parent.appendChild(tag);
}

// ==========================================
// --- SHOPPING CART DRAWER CONTROLLER ---
// ==========================================
function setupCartDrawer() {
  const drawerOverlay = document.getElementById("cartDrawerOverlay");
  const toggleBtn = document.getElementById("cartToggleBtn");
  const closeBtn = document.getElementById("cartCloseBtn");
  const checkoutBtn = document.getElementById("checkoutBtn");

  const promoInput = document.getElementById("promoCodeInput");
  const applyPromoBtn = document.getElementById("applyPromoBtn");

  // Open / Close Drawer
  toggleBtn.addEventListener("click", () => {
    drawerOverlay.classList.add("open");
  });

  closeBtn.addEventListener("click", () => {
    drawerOverlay.classList.remove("open");
  });

  drawerOverlay.addEventListener("click", (e) => {
    if (e.target === drawerOverlay) {
      drawerOverlay.classList.remove("open");
    }
  });

  // Coupon promo activation
  applyPromoBtn.addEventListener("click", () => {
    const code = promoInput.value.trim().toUpperCase();
    if (PROMO_CODES[code]) {
      appliedPromoCode = code;
      showToast("Promo Code applied successfully!", "success");
      updateCartUI();
    } else {
      showToast("Invalid Promo Code entered", "error");
      appliedPromoCode = null;
      updateCartUI();
    }
  });

  // Checkout modal launch
  checkoutBtn.addEventListener("click", () => {
    if (cart.length === 0) {
      showToast("Your cart is empty!", "error");
      return;
    }
    drawerOverlay.classList.remove("open");
    openCheckoutWizard();
  });
}

function toggleCartItem(gameId) {
  const index = cart.findIndex(item => item.id === gameId);
  const game = GAMES_CATALOG.find(g => g.id === gameId);

  if (index > -1) {
    // Remove from cart
    cart.splice(index, 1);
    showToast(`Removed "${game.title}" from cart`, "success");
  } else {
    // Add to cart
    cart.push({
      id: game.id,
      title: game.title,
      price: game.price,
      genres: game.genres,
      coverStyle: game.coverStyle,
      qty: 1
    });
    showToast(`Added "${game.title}" to cart`, "success");
  }

  saveStateToStorage();
  updateCartUI();
  renderCatalog();
}

function updateCartUI() {
  const cartBadge = document.getElementById("cartBadgeCount");
  const cartList = document.getElementById("cartItemsContainer");
  const summaryContainer = document.getElementById("cartSummaryContainer");

  const subtotalEl = document.getElementById("cartSubtotal");
  const discountRow = document.getElementById("cartDiscountRow");
  const discountValEl = document.getElementById("cartDiscountVal");
  const totalEl = document.getElementById("cartTotal");
  const promoMsg = document.getElementById("promoMsgContainer");

  // Update Badge count
  const totalItemsCount = cart.reduce((sum, item) => sum + item.qty, 0);
  cartBadge.textContent = totalItemsCount;
  
  if (totalItemsCount > 0) {
    cartBadge.style.display = "flex";
  } else {
    cartBadge.style.display = "none";
  }

  // Clear Cart List
  cartList.innerHTML = "";

  if (cart.length === 0) {
    cartList.innerHTML = `
      <div class="cart-empty-state">
        <i class="fa-solid fa-basket-shopping"></i>
        <p>Your shopping basket is empty.</p>
      </div>
    `;
    summaryContainer.style.display = "none";
    return;
  }

  summaryContainer.style.display = "flex";

  // Build Cart List Items
  cart.forEach(item => {
    const itemEl = document.createElement("div");
    itemEl.className = "cart-item";

    const customVisual = createCardCoverVisual(item.coverStyle, "");

    itemEl.innerHTML = `
      <div class="cart-item-img">
        ${customVisual}
      </div>
      <div class="cart-item-details">
        <span class="cart-item-title">${item.title}</span>
        <span class="cart-item-genres">${item.genres.join(", ")}</span>
        <span class="cart-item-price">$${(item.price * item.qty).toFixed(2)}</span>
      </div>
      <div class="cart-item-actions">
        <button class="quantity-btn dec-qty" data-id="${item.id}">-</button>
        <span class="cart-item-qty">${item.qty}</span>
        <button class="quantity-btn inc-qty" data-id="${item.id}">+</button>
        <button class="cart-item-remove" data-id="${item.id}" aria-label="Remove item">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    `;

    // Quantity Handlers
    itemEl.querySelector(".dec-qty").addEventListener("click", () => {
      adjustItemQty(item.id, -1);
    });
    itemEl.querySelector(".inc-qty").addEventListener("click", () => {
      adjustItemQty(item.id, 1);
    });
    itemEl.querySelector(".cart-item-remove").addEventListener("click", () => {
      toggleCartItem(item.id);
    });

    cartList.appendChild(itemEl);
  });

  // Calculate pricing subtotals
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  let discount = 0;

  if (appliedPromoCode && PROMO_CODES[appliedPromoCode]) {
    const rule = PROMO_CODES[appliedPromoCode];
    if (rule.discountPercent) {
      discount = subtotal * (rule.discountPercent / 100);
    } else if (rule.discountValue) {
      discount = Math.min(rule.discountValue, subtotal);
    }
    
    // Apply message
    promoMsg.className = "promo-applied-msg";
    promoMsg.innerHTML = `<i class="fa-solid fa-check"></i> ${rule.msg}`;
    
    discountRow.style.display = "flex";
    discountValEl.textContent = `-$${discount.toFixed(2)}`;
  } else {
    promoMsg.innerHTML = "";
    discountRow.style.display = "none";
  }

  const grandTotal = Math.max(0, subtotal - discount);
  subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  totalEl.textContent = `$${grandTotal.toFixed(2)}`;
}

function adjustItemQty(gameId, delta) {
  const item = cart.find(item => item.id === gameId);
  if (!item) return;

  item.qty += delta;

  if (item.qty <= 0) {
    toggleCartItem(gameId);
  } else {
    saveStateToStorage();
    updateCartUI();
  }
}

// ==========================================
// --- PRODUCT DETAILS MODAL ---
// ==========================================
function setupModals() {
  const modalOverlay = document.getElementById("detailModalOverlay");
  const closeBtn = document.getElementById("detailCloseBtn");
  const addToCartBtn = document.getElementById("detailAddToCartBtn");

  closeBtn.addEventListener("click", () => {
    modalOverlay.classList.remove("open");
  });

  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      modalOverlay.classList.remove("open");
    }
  });

  // Tab controls inside details modal
  const tabBtns = document.querySelectorAll(".detail-tab-btn");
  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      // Toggle button active classes
      tabBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      // Show matching target content pane
      const targetTab = btn.getAttribute("data-tab");
      const panes = document.querySelectorAll(".detail-tab-pane");
      panes.forEach(pane => {
        pane.classList.remove("active");
      });
      document.getElementById(`tab-${targetTab}`).classList.add("active");
    });
  });
}

function openDetailModal(gameId) {
  const game = GAMES_CATALOG.find(g => g.id === gameId);
  if (!game) return;

  const modalOverlay = document.getElementById("detailModalOverlay");
  
  // Title & Developer
  document.getElementById("detailTitle").textContent = game.title;
  document.getElementById("detailDeveloperText").innerHTML = `Developer: <strong style="color:var(--text-main);">${game.developer}</strong>`;
  document.getElementById("detailRatingVal").textContent = game.rating.toFixed(1);

  // Cover image container custom rendering
  const visualContainer = document.getElementById("detailVisualContainer");
  visualContainer.innerHTML = createCardCoverVisual(game.coverStyle, game.title);

  // Genre tag pills
  const tagsContainer = document.getElementById("detailTags");
  tagsContainer.innerHTML = game.genres.map(g => `<span class="detail-genre-tag">${g}</span>`).join("");

  // Description text
  document.getElementById("detailDescText").textContent = game.description;

  // Requirements Specs
  document.getElementById("detailSpecOS").textContent = game.specs.os;
  document.getElementById("detailSpecCPU").textContent = game.specs.cpu;
  document.getElementById("detailSpecRAM").textContent = game.specs.ram;
  document.getElementById("detailSpecGPU").textContent = game.specs.gpu;
  document.getElementById("detailSpecStorage").textContent = game.specs.storage;

  // Review listings
  const reviewsContainer = document.getElementById("detailReviewsContainer");
  reviewsContainer.innerHTML = "";
  
  if (game.reviews && game.reviews.length > 0) {
    game.reviews.forEach(rev => {
      const revEl = document.createElement("div");
      revEl.className = "glass-panel";
      revEl.style.padding = "1rem";
      revEl.style.fontSize = "0.85rem";
      revEl.style.borderRadius = "8px";

      let starsHTML = "";
      for (let i = 1; i <= 5; i++) {
        const starColor = i <= rev.stars ? "color: var(--accent-amber);" : "color: var(--text-muted);";
        starsHTML += `<i class="fa-solid fa-star" style="${starColor}"></i> `;
      }

      revEl.innerHTML = `
        <div style="display:flex; justify-content:space-between; margin-bottom:0.5rem; font-weight:700;">
          <span style="color: var(--accent-cyan);">${rev.user}</span>
          <div>${starsHTML}</div>
        </div>
        <p style="color: var(--text-secondary); line-height:1.4;">${rev.comment}</p>
      `;
      reviewsContainer.appendChild(revEl);
    });
  } else {
    reviewsContainer.innerHTML = `<p style="color:var(--text-muted); font-size:0.85rem; font-style:italic;">No user logs reviewed yet.</p>`;
  }

  // Footer Price tag
  const originalEl = document.getElementById("detailOriginalPrice");
  const currentEl = document.getElementById("detailCurrentPrice");

  if (game.price === 0) {
    originalEl.style.display = "none";
    currentEl.textContent = "FREE";
    currentEl.className = "current free-price";
  } else {
    currentEl.className = "current";
    if (game.originalPrice > game.price) {
      originalEl.style.display = "inline";
      originalEl.textContent = `$${game.originalPrice.toFixed(2)}`;
    } else {
      originalEl.style.display = "none";
    }
    currentEl.textContent = `$${game.price.toFixed(2)}`;
  }

  // Buy Button status
  const buyBtn = document.getElementById("detailAddToCartBtn");
  const isAlreadyInCart = cart.some(item => item.id === game.id);
  
  if (isAlreadyInCart) {
    buyBtn.textContent = "In Cart (Remove)";
    buyBtn.classList.add("in-cart");
  } else {
    buyBtn.textContent = "Add to Cart";
    buyBtn.classList.remove("in-cart");
  }

  // Click listener for details buy button
  // Clean first to prevent stacking listeners
  const newBuyBtn = buyBtn.cloneNode(true);
  buyBtn.parentNode.replaceChild(newBuyBtn, buyBtn);

  newBuyBtn.addEventListener("click", () => {
    toggleCartItem(game.id);
    // Refresh details buy button visual state
    const isNowInCart = cart.some(item => item.id === game.id);
    if (isNowInCart) {
      newBuyBtn.textContent = "In Cart (Remove)";
      newBuyBtn.classList.add("in-cart");
    } else {
      newBuyBtn.textContent = "Add to Cart";
      newBuyBtn.classList.remove("in-cart");
    }
  });

  // Reset default Overview tab to active state
  document.querySelector(".detail-tab-btn[data-tab='overview']").click();

  // Open Modal overlay
  modalOverlay.classList.add("open");
}

// ==========================================
// --- CHECKOUT WIZARD FLOW SYSTEM ---
// ==========================================
let checkoutCurrentStep = 1;

function openCheckoutWizard() {
  const overlay = document.getElementById("checkoutModalOverlay");
  const backBtn = document.getElementById("checkoutBackBtn");
  const nextBtn = document.getElementById("checkoutNextBtn");
  const closeSuccessBtn = document.getElementById("checkoutCloseSuccessBtn");
  const closeBtn = document.getElementById("checkoutCloseBtn");

  // Reset Step states
  checkoutCurrentStep = 1;
  updateCheckoutStepUI();

  // Show Overlay
  overlay.classList.add("open");

  // Clean form values
  document.getElementById("checkoutForm").reset();

  // Configure back & close triggers
  closeBtn.style.display = "flex";
  closeSuccessBtn.style.display = "none";

  // Re-bind steps navigation
  const newNextBtn = nextBtn.cloneNode(true);
  nextBtn.parentNode.replaceChild(newNextBtn, nextBtn);
  newNextBtn.addEventListener("click", handleCheckoutNext);

  const newBackBtn = backBtn.cloneNode(true);
  backBtn.parentNode.replaceChild(newBackBtn, backBtn);
  newBackBtn.addEventListener("click", handleCheckoutBack);

  const newCloseBtn = closeSuccessBtn.cloneNode(true);
  closeSuccessBtn.parentNode.replaceChild(newCloseBtn, closeSuccessBtn);
  newCloseBtn.addEventListener("click", () => {
    overlay.classList.remove("open");
    // Switch to My Library tab directly so they can inspect their game key!
    document.getElementById("navLibraryBtn").click();
  });
}

function handleCheckoutNext() {
  if (checkoutCurrentStep === 1) {
    // Validate Step 1 Email Inputs
    const email = document.getElementById("checkoutEmail");
    const firstName = document.getElementById("checkoutFirstName");
    const lastName = document.getElementById("checkoutLastName");

    if (!email.checkValidity() || !firstName.value.trim() || !lastName.value.trim()) {
      showToast("Please fill all billing account fields correctly", "error");
      return;
    }
    checkoutCurrentStep = 2;
  } else if (checkoutCurrentStep === 2) {
    // Validate Step 2 Payment Inputs (Sandbox placeholder bypass check)
    const cardholder = document.getElementById("cardholderName");
    const cardNum = document.getElementById("cardNumber");
    const expiry = document.getElementById("cardExpiry");
    const cvv = document.getElementById("cardCvv");

    if (!cardholder.value.trim() || cardNum.value.trim().length < 12 || !expiry.value.trim() || cvv.value.trim().length < 3) {
      showToast("Please enter credit card info correctly", "error");
      return;
    }

    // Process sandbox payment order logs
    processSimulatedOrder();
    checkoutCurrentStep = 3;
  }
  updateCheckoutStepUI();
}

function handleCheckoutBack() {
  if (checkoutCurrentStep > 1) {
    checkoutCurrentStep--;
    updateCheckoutStepUI();
  }
}

function updateCheckoutStepUI() {
  // Update node colors
  for (let i = 1; i <= 3; i++) {
    const node = document.getElementById(`stepNode${i}`);
    if (i < checkoutCurrentStep) {
      node.className = "step-node completed";
      node.innerHTML = `<i class="fa-solid fa-check"></i>`;
    } else if (i === checkoutCurrentStep) {
      node.className = "step-node active";
      node.textContent = i;
    } else {
      node.className = "step-node";
      node.textContent = i;
    }
  }

  // Update line bar progress width
  const progressLine = document.getElementById("checkoutProgressLine");
  if (checkoutCurrentStep === 1) progressLine.style.width = "0%";
  if (checkoutCurrentStep === 2) progressLine.style.width = "50%";
  if (checkoutCurrentStep === 3) progressLine.style.width = "100%";

  // Toggle visible pane contents
  for (let i = 1; i <= 3; i++) {
    const pane = document.getElementById(`checkoutPane${i}`);
    if (i === checkoutCurrentStep) {
      pane.classList.add("active");
    } else {
      pane.classList.remove("active");
    }
  }

  // Configure navigation buttons
  const backBtn = document.getElementById("checkoutBackBtn");
  const nextBtn = document.getElementById("checkoutNextBtn");
  const closeSuccessBtn = document.getElementById("checkoutCloseSuccessBtn");
  const closeBtn = document.getElementById("checkoutCloseBtn");

  if (checkoutCurrentStep === 1) {
    backBtn.style.display = "none";
    nextBtn.style.display = "inline-flex";
    nextBtn.textContent = "Continue";
  } else if (checkoutCurrentStep === 2) {
    backBtn.style.display = "inline-flex";
    nextBtn.style.display = "inline-flex";
    nextBtn.textContent = "Confirm & Purchase";
  } else { // Step 3: Success Confirmation screen
    backBtn.style.display = "none";
    nextBtn.style.display = "none";
    closeBtn.style.display = "none";
    closeSuccessBtn.style.display = "inline-flex";
  }
}

function processSimulatedOrder() {
  const keysContainer = document.getElementById("checkoutKeysDeliveryList");
  keysContainer.innerHTML = "";

  cart.forEach(item => {
    // Generate activation code
    const key = generateRandomSerialKey();
    
    // Add game and key to User's Library
    purchasedLibrary.push({
      id: item.id,
      title: item.title,
      key: key,
      coverStyle: item.coverStyle,
      purchaseDate: new Date().toLocaleDateString()
    });

    // Create item display in confirmation modal
    const keyItem = document.createElement("div");
    keyItem.className = "purchased-game-key-item";
    keyItem.innerHTML = `
      <div class="key-title">${item.title}</div>
      <div class="key-code-row">
        <div class="key-code-display" id="key-${item.id}">${key}</div>
        <button type="button" class="btn-copy-key" data-target="key-${item.id}" aria-label="Copy key to clipboard">
          <i class="fa-solid fa-copy"></i>
        </button>
      </div>
    `;

    keyItem.querySelector(".btn-copy-key").addEventListener("click", () => {
      copyTextToClipboard(key);
    });

    keysContainer.appendChild(keyItem);
  });

  // Empty checkout cart store
  cart = [];
  appliedPromoCode = null;
  document.getElementById("promoCodeInput").value = "";

  saveStateToStorage();
  updateCartUI();
  renderCatalog();
  showToast("Order completed successfully!", "success");
}

function generateRandomSerialKey() {
  const segment = () => Math.random().toString(36).substring(2, 6).toUpperCase();
  return `VRTX-${segment()}-${segment()}-${segment()}`;
}

// ==========================================
// --- USER LIBRARY VIEW SYSTEM ---
// ==========================================
function renderLibrary() {
  const gridContainer = document.getElementById("libraryCardGrid");
  const emptyAlert = document.getElementById("emptyLibraryAlert");

  if (!gridContainer) return;

  gridContainer.innerHTML = "";

  if (purchasedLibrary.length === 0) {
    gridContainer.style.display = "none";
    emptyAlert.style.display = "flex";
    return;
  }

  gridContainer.style.display = "grid";
  emptyAlert.style.display = "none";

  purchasedLibrary.forEach(item => {
    const cardEl = document.createElement("div");
    cardEl.className = "library-card glass-panel";

    const customVisual = createCardCoverVisual(item.coverStyle, "");

    cardEl.innerHTML = `
      <div class="library-card-visual">
        ${customVisual}
      </div>
      <div class="library-card-body">
        <div class="library-card-info">
          <h3 class="library-card-title">${item.title}</h3>
          <span style="font-size:0.75rem; color:var(--text-muted);">Bought on: ${item.purchaseDate}</span>
        </div>

        <div class="library-key-copy">
          <span>${item.key}</span>
          <i class="fa-solid fa-copy" data-key="${item.key}" aria-label="Copy key"></i>
        </div>

        <div class="library-actions">
          <button class="btn btn-secondary install-btn" style="padding:0.6rem; font-size:0.9rem;">
            <i class="fa-solid fa-download"></i> Install
          </button>
          <button class="btn btn-primary play-btn" style="padding:0.6rem; font-size:0.9rem;">
            <i class="fa-solid fa-play"></i> Play Arcade
          </button>
        </div>
      </div>
    `;

    // Copy event key
    cardEl.querySelector(".library-key-copy i").addEventListener("click", () => {
      copyTextToClipboard(item.key);
    });

    // Install simulation triggers
    cardEl.querySelector(".install-btn").addEventListener("click", () => {
      showToast(`Initializing download client for ${item.title}...`, "success");
    });

    // Play retro arcade easter egg launcher
    cardEl.querySelector(".play-btn").addEventListener("click", () => {
      openArcadeSimulator(item.title);
    });

    gridContainer.appendChild(cardEl);
  });
}

function copyTextToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast("Activation key copied to clipboard!", "success");
  }).catch(() => {
    showToast("Failed to copy key automatically.", "error");
  });
}

// ==========================================
// --- RETRO ARCADE EASTER EGG GAME CONTROLLER ---
// ==========================================
let arcadeGameActive = false;
let arcadeAnimationId = null;

// Game canvas variables
let canvas, ctx;
let playerX = 250;
const playerY = 270;
const playerWidth = 36;
const playerHeight = 15;
let playerSpeed = 6;
let keysPressed = {};

let laserProjectiles = [];
let alienBubbles = [];
let alienSpawnTimer = 0;
let arcadeScore = 0;
let arcadeHighscore = 9999;

function openArcadeSimulator(gameTitle) {
  const overlay = document.getElementById("arcadeModalOverlay");
  const closeBtn = document.getElementById("arcadeCloseBtn");
  const gameTitleHeader = document.getElementById("arcadeGameTitle");

  gameTitleHeader.innerHTML = `ARCADE: <span class="gradient-text">${gameTitle}</span>`;
  overlay.classList.add("open");

  // Reset emulator panes
  document.getElementById("arcadeStartMenu").style.display = "flex";
  document.getElementById("arcadeGameOverMenu").style.display = "none";
  document.getElementById("arcadeCanvas").style.display = "none";

  // Re-bind click triggers
  const startBtn = document.getElementById("startArcadeGameBtn");
  const restartBtn = document.getElementById("restartArcadeGameBtn");

  startBtn.onclick = () => startArcadeGame();
  restartBtn.onclick = () => startArcadeGame();

  closeBtn.onclick = () => {
    stopArcadeGame();
    overlay.classList.remove("open");
  };
}

function startArcadeGame() {
  document.getElementById("arcadeStartMenu").style.display = "none";
  document.getElementById("arcadeGameOverMenu").style.display = "none";
  
  const canvasEl = document.getElementById("arcadeCanvas");
  canvasEl.style.display = "block";

  canvas = canvasEl;
  ctx = canvas.getContext("2d");

  // Reset stats
  playerX = canvas.width / 2 - playerWidth / 2;
  laserProjectiles = [];
  alienBubbles = [];
  alienSpawnTimer = 0;
  arcadeScore = 0;
  arcadeGameActive = true;

  // Bind Keyboard Inputs
  window.addEventListener("keydown", handleArcadeKeyDown);
  window.addEventListener("keyup", handleArcadeKeyUp);

  // Start loop
  if (arcadeAnimationId) cancelAnimationFrame(arcadeAnimationId);
  arcadeAnimationId = requestAnimationFrame(arcadeGameLoop);
  showToast("Use A/D or Arrow keys to move, SPACEBAR to shoot!", "success");
}

function handleArcadeKeyDown(e) {
  keysPressed[e.code] = true;
  // Prevent browser window scrolling on arrow keys & spacebar
  if (["ArrowLeft", "ArrowRight", "Space", "KeyA", "KeyD"].includes(e.code)) {
    e.preventDefault();
  }
}

function handleArcadeKeyUp(e) {
  keysPressed[e.code] = false;
}

function stopArcadeGame() {
  arcadeGameActive = false;
  cancelAnimationFrame(arcadeAnimationId);
  window.removeEventListener("keydown", handleArcadeKeyDown);
  window.removeEventListener("keyup", handleArcadeKeyUp);
  keysPressed = {};
}

function triggerGameOver() {
  stopArcadeGame();
  document.getElementById("arcadeGameOverMenu").style.display = "flex";
  document.getElementById("arcadeCanvas").style.display = "none";
  document.getElementById("arcadeFinalScore").textContent = `Your Final Score: ${arcadeScore}`;
  
  if (arcadeScore > arcadeHighscore) {
    arcadeHighscore = arcadeScore;
    document.querySelector(".arcade-score").textContent = `HIGH SCORE: ${arcadeHighscore}`;
    showToast("NEW HIGH SCORE!", "success");
  }
}

function arcadeGameLoop() {
  if (!arcadeGameActive) return;

  // Clear Screen
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // 1. Move Player Craft
  if (keysPressed["ArrowLeft"] || keysPressed["KeyA"]) {
    playerX = Math.max(0, playerX - playerSpeed);
  }
  if (keysPressed["ArrowRight"] || keysPressed["KeyD"]) {
    playerX = Math.min(canvas.width - playerWidth, playerX + playerSpeed);
  }

  // Shoot lasers
  if (keysPressed["Space"]) {
    // Throttle fire rate
    if (laserProjectiles.length === 0 || laserProjectiles[laserProjectiles.length - 1].y < playerY - 40) {
      laserProjectiles.push({
        x: playerX + playerWidth / 2 - 2,
        y: playerY,
        width: 4,
        height: 10,
        speed: 8
      });
    }
  }

  // 2. Spawn Alien Bubbles
  alienSpawnTimer++;
  // Spawn rate scales up slightly as score gets higher
  const spawnInterval = Math.max(15, 60 - Math.floor(arcadeScore / 100) * 5);
  if (alienSpawnTimer >= spawnInterval) {
    alienSpawnTimer = 0;
    const size = Math.floor(Math.random() * 20) + 15; // 15 to 35 radius
    alienBubbles.push({
      x: Math.random() * (canvas.width - size * 2) + size,
      y: -size,
      radius: size / 2,
      speed: Math.random() * 1.5 + 1.2 + (arcadeScore / 150)
    });
  }

  // 3. Update Projectiles
  laserProjectiles.forEach((laser, idx) => {
    laser.y -= laser.speed;
    // Remove if off screen
    if (laser.y < 0) {
      laserProjectiles.splice(idx, 1);
    }
  });

  // 4. Update Aliens & check boundaries
  for (let i = alienBubbles.length - 1; i >= 0; i--) {
    const alien = alienBubbles[i];
    alien.y += alien.speed;

    // Check hit player boundary
    if (alien.y + alien.radius >= playerY) {
      triggerGameOver();
      return;
    }

    // Check laser hit collisions
    for (let j = laserProjectiles.length - 1; j >= 0; j--) {
      const laser = laserProjectiles[j];
      
      const dx = laser.x - alien.x;
      const dy = laser.y - alien.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < alien.radius + 4) {
        // Destroy alien & laser
        alienBubbles.splice(i, 1);
        laserProjectiles.splice(j, 1);
        arcadeScore += 10;
        break; // break laser loop, check next alien
      }
    }
  }

  // 5. Drawing elements
  // Draw Player Ship (Cyan Glowing Polygon)
  ctx.shadowColor = "#00f0ff";
  ctx.shadowBlur = 8;
  ctx.fillStyle = "#00f0ff";
  ctx.beginPath();
  ctx.moveTo(playerX + playerWidth / 2, playerY);
  ctx.lineTo(playerX + playerWidth, playerY + playerHeight);
  ctx.lineTo(playerX, playerY + playerHeight);
  ctx.closePath();
  ctx.fill();

  // Draw Lasers (Pink glows)
  ctx.shadowColor = "#ff007f";
  ctx.fillStyle = "#ff007f";
  laserProjectiles.forEach(laser => {
    ctx.fillRect(laser.x, laser.y, laser.width, laser.height);
  });

  // Draw Aliens (Glowing green orbs)
  ctx.shadowColor = "#00ff66";
  ctx.fillStyle = "#00ff66";
  alienBubbles.forEach(alien => {
    ctx.beginPath();
    ctx.arc(alien.x, alien.y, alien.radius, 0, Math.PI * 2);
    ctx.fill();
    // Inner pulse core details
    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.arc(alien.x - 2, alien.y - 2, alien.radius / 2.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#00ff66"; // Restore fill color style
  });

  // Reset shadow effects to prevent canvas slowdown
  ctx.shadowBlur = 0;

  // Draw Score panel overlay
  ctx.font = "bold 14px monospace";
  ctx.fillStyle = "#fff";
  ctx.fillText(`SCORE: ${arcadeScore}`, 15, 25);

  // Request Next Frame
  arcadeAnimationId = requestAnimationFrame(arcadeGameLoop);
}

// ==========================================
// --- TOAST NOTIFICATIONS SYSTEM ---
// ==========================================
function showToast(message, type = "success") {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  
  const icon = type === "success" ? 
    `<i class="fa-solid fa-circle-check toast-icon"></i>` : 
    `<i class="fa-solid fa-circle-exclamation toast-icon"></i>`;

  toast.innerHTML = `
    ${icon}
    <span>${message}</span>
  `;

  container.appendChild(toast);

  // Trigger browser transition trigger
  setTimeout(() => {
    toast.classList.add("show");
  }, 10);

  // Auto remove after 3.5 seconds
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3500);
}

// ==========================================
// --- DUMMY NEWSLETTER TRIGGERS ---
// ==========================================
function setupMiscTriggers() {
  const heroBuyBtn = document.getElementById("heroBuyBtn");
  const heroInfoBtn = document.getElementById("heroInfoBtn");

  // Connect Featured hero panel action links
  if (heroBuyBtn) {
    heroBuyBtn.addEventListener("click", () => {
      // Find NEON HORIZON 2088 game ID in data (g1)
      toggleCartItem("g1");
    });
  }

  if (heroInfoBtn) {
    heroInfoBtn.addEventListener("click", () => {
      openDetailModal("g1");
    });
  }

  // Setup Credit Card formatting helper triggers during typing in sandbox
  const ccInput = document.getElementById("cardNumber");
  if (ccInput) {
    ccInput.addEventListener("input", (e) => {
      let val = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
      let formatted = "";
      for (let i = 0; i < val.length; i++) {
        if (i > 0 && i % 4 === 0) {
          formatted += " ";
        }
        formatted += val[i];
      }
      e.target.value = formatted;
    });
  }

  const expiryInput = document.getElementById("cardExpiry");
  if (expiryInput) {
    expiryInput.addEventListener("input", (e) => {
      let val = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
      if (val.length >= 2) {
        e.target.value = val.substring(0, 2) + "/" + val.substring(2, 4);
      } else {
        e.target.value = val;
      }
    });
  }
}
