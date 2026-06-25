// ==========================================
// VORTEX GAMES - APPLICATION LOGIC
// ==========================================

// --- GAME CATALOG DATA ---
const GAMES_CATALOG = [
  {
    id: "g1",
    title: "GRAND THEFT AUTO V",
    price: 950,
    originalPrice: 1999,
    rating: 4.8,
    popularity: 99,
    genres: ["Action", "Adventure"],
    developer: "Rockstar Games",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/271590/header.jpg",
    description: "When a young street hustler, a retired bank robber and a terrifying psychopath find themselves entangled with some of the most frightening and deranged elements of the underworld, the U.S. government and the entertainment industry, they must pull off a series of dangerous heists to survive in a ruthless city in which they can trust nobody, least of all each other.",
    specs: {
      os: "Windows 10 64-bit",
      cpu: "Intel Core i5 3470 / AMD FX 8350",
      ram: "8 GB RAM",
      gpu: "NVIDIA GTX 660 2GB / AMD HD 7870 2GB",
      storage: "90 GB available space"
    },
    reviews: [
      { user: "LosSantosBiker", stars: 5, comment: "Over a decade old and still one of the best open world games ever made." },
      { user: "HeistMaster", stars: 4, comment: "Single player story is excellent. Online is fun but a bit grindy." }
    ],
    coverStyle: "aero-racer"
  },
  {
    id: "g2",
    title: "RED DEAD REDEMPTION 2",
    price: 1055,
    originalPrice: 3199,
    rating: 4.9,
    popularity: 98,
    genres: ["Action", "Adventure"],
    developer: "Rockstar Games",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1174180/header.jpg",
    description: "Winner of over 175 Game of the Year Awards and recipient of over 250 perfect scores, Red Dead Redemption 2 is an epic tale of honor and loyalty at the dawn of the modern age.",
    specs: {
      os: "Windows 10",
      cpu: "Intel Core i7-4770K / AMD Ryzen 5 1500X",
      ram: "12 GB RAM",
      gpu: "NVIDIA GeForce GTX 1060 6GB / AMD Radeon RX 480 4GB",
      storage: "150 GB available space"
    },
    reviews: [
      { user: "OutlawArthur", stars: 5, comment: "A masterpiece of storytelling and immersion. The world feels completely alive." }
    ],
    coverStyle: "mars-colony"
  },
  {
    id: "g3",
    title: "CYBERPUNK 2077",
    price: 1499,
    originalPrice: 2999,
    rating: 4.7,
    popularity: 97,
    genres: ["RPG", "Action", "Adventure"],
    developer: "CD PROJEKT RED",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1091500/header.jpg",
    description: "Cyberpunk 2077 is an open-world, action-adventure RPG set in the megalopolis of Night City, where you play as a cyberpunk mercenary wrapped up in a do-or-die fight for survival.",
    specs: {
      os: "Windows 10/11 64-bit",
      cpu: "Intel Core i7-9700K / AMD Ryzen 5 3600",
      ram: "16 GB RAM",
      gpu: "NVIDIA GeForce RTX 2060 / AMD Radeon RX 5700 XT",
      storage: "70 GB SSD available space"
    },
    reviews: [
      { user: "Chooh2_Sniffer", stars: 5, comment: "Night City is the absolute pinnacle of virtual world design. Fully fixed and runs beautifully now." }
    ],
    coverStyle: "cyberpunk"
  },
  {
    id: "g4",
    title: "THE WITCHER 3: WILD HUNT",
    price: 399,
    originalPrice: 999,
    rating: 4.9,
    popularity: 96,
    genres: ["RPG", "Adventure"],
    developer: "CD PROJEKT RED",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/292030/header.jpg",
    description: "You are Geralt of Rivia, mercenary monster slayer. Before you stands a war-torn, monster-infested continent you can explore at will. Your current contract? Tracking down Ciri — the Child of Prophecy, a living weapon that can alter the shape of the world.",
    specs: {
      os: "Windows 10 64-bit",
      cpu: "Intel Core i5-2500K / AMD Phenom II X4 940",
      ram: "8 GB RAM",
      gpu: "NVIDIA GTX 770 / AMD Radeon R9 290",
      storage: "50 GB available space"
    },
    reviews: [
      { user: "WhiteWolf", stars: 5, comment: "The quest writing in this game sets the bar for every RPG ever made." }
    ],
    coverStyle: "dark-fantasy"
  },
  {
    id: "g5",
    title: "ELDEN RING",
    price: 1499,
    originalPrice: 2499,
    rating: 4.9,
    popularity: 98,
    genres: ["RPG", "Action"],
    developer: "FromSoftware",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1245620/header.jpg",
    description: "Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.",
    specs: {
      os: "Windows 10",
      cpu: "Intel Core i5-8400 / AMD Ryzen 3 3300X",
      ram: "12 GB RAM",
      gpu: "NVIDIA GeForce GTX 1060 3GB / AMD Radeon RX 580 4GB",
      storage: "60 GB available space"
    },
    reviews: [
      { user: "TarnishedOne", stars: 5, comment: "One of the greatest open world exploration experiences ever designed. Outstanding boss designs." }
    ],
    coverStyle: "dark-fantasy"
  },
  {
    id: "g6",
    title: "GOD OF WAR RAGNARÖK",
    price: 2999,
    originalPrice: 3999,
    rating: 4.8,
    popularity: 95,
    genres: ["Action", "Adventure"],
    developer: "Santa Monica Studio",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/2322010/header.jpg",
    description: "Kratos and Atreus must journey to each of the Nine Realms in search of answers as Asgardian forces prepare for a prophesied battle that will end the world.",
    specs: {
      os: "Windows 10 64-bit",
      cpu: "Intel Core i5-4670K / AMD Ryzen 5 1600X",
      ram: "16 GB RAM",
      gpu: "NVIDIA GTX 1060 6GB / AMD RX 580 8GB",
      storage: "190 GB SSD available space"
    },
    reviews: [
      { user: "BoyMimir", stars: 5, comment: "Incredibly polished combat mechanics, stellar narrative pacing, and father-son character arcs." }
    ],
    coverStyle: "dark-fantasy"
  },
  {
    id: "g7",
    title: "MARVEL'S SPIDER-MAN 2",
    price: 3299,
    originalPrice: 3999,
    rating: 4.8,
    popularity: 94,
    genres: ["Action", "Adventure"],
    developer: "Insomniac Games",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1817070/header.jpg",
    description: "Spider-Men Peter Parker and Miles Morales face the ultimate test of strength inside and outside the mask as they fight to save the city, each other and the ones they love from the monstrous Venom.",
    specs: {
      os: "Windows 10/11 64-bit",
      cpu: "Intel Core i5-8600K / AMD Ryzen 5 3600",
      ram: "16 GB RAM",
      gpu: "NVIDIA RTX 2060 / AMD RX 5700",
      storage: "85 GB SSD available space"
    },
    reviews: [
      { user: "WebSlinger", stars: 5, comment: "Web wings make traversal extremely fast. Story hits hard!" }
    ],
    coverStyle: "aero-racer"
  },
  {
    id: "g8",
    title: "HORIZON FORBIDDEN WEST",
    price: 2399,
    originalPrice: 3999,
    rating: 4.7,
    popularity: 91,
    genres: ["Action", "RPG", "Adventure"],
    developer: "Guerrilla",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/2109440/header.jpg",
    description: "Explore distant lands, fight bigger and more awe-inspiring machines, and encounter astonishing new tribes as you return to the far-future, post-apocalyptic world of Horizon.",
    specs: {
      os: "Windows 10 64-bit",
      cpu: "Intel Core i5-2500K / AMD FX-8350",
      ram: "16 GB RAM",
      gpu: "NVIDIA GeForce GTX 1650 4GB / AMD Radeon RX 5500 XT 4GB",
      storage: "150 GB available space"
    },
    reviews: [
      { user: "MachineHunter", stars: 4, comment: "Visuals are next-level. Combat system is expanded and very tactical." }
    ],
    coverStyle: "mars-colony"
  },
  {
    id: "g9",
    title: "STARFIELD",
    price: 1999,
    originalPrice: 3999,
    rating: 4.0,
    popularity: 82,
    genres: ["RPG", "Adventure"],
    developer: "Bethesda Game Studios",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1716740/header.jpg",
    description: "In this next-generation role-playing game set amongst the stars, create any character you want and explore with unparalleled freedom as you embark on an epic journey to answer humanity’s greatest mystery.",
    specs: {
      os: "Windows 10/11 64-bit",
      cpu: "Intel Core i7-6800K / AMD Ryzen 5 2600X",
      ram: "16 GB RAM",
      gpu: "NVIDIA GeForce RTX 2080 / AMD Radeon RX 6800 XT",
      storage: "125 GB SSD available space"
    },
    reviews: [
      { user: "ConstellationX", stars: 4, comment: "Ship building is amazing. Loading screens are a bit frequent, but scale is massive." }
    ],
    coverStyle: "space-industry"
  },
  {
    id: "g10",
    title: "ASSASSIN'S CREED SHADOWS",
    price: 4799,
    originalPrice: 4799,
    rating: 4.4,
    popularity: 90,
    genres: ["Action", "RPG", "Adventure"],
    developer: "Ubisoft",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/2208920/header.jpg",
    description: "Live the intertwined stories of Naoe, an adept shinobi Assassin from Iga Province, and Yasuke, the powerful samurai of historical legend, in late Sengoku-period Japan.",
    specs: {
      os: "Windows 10/11 64-bit",
      cpu: "Intel Core i7-8700K / AMD Ryzen 5 3600",
      ram: "16 GB RAM",
      gpu: "NVIDIA GeForce RTX 3060 / AMD Radeon RX 6600 XT",
      storage: "100 GB SSD available space"
    },
    reviews: [
      { user: "ShinobiYasuke", stars: 4, comment: "Playing Yasuke is very brutal, while Naoe stealth is fantastic. Great combo." }
    ],
    coverStyle: "tactical"
  },
  {
    id: "g11",
    title: "CALL OF DUTY: BLACK OPS 6",
    price: 5599,
    originalPrice: 5599,
    rating: 4.6,
    popularity: 95,
    genres: ["Action", "Shooter"],
    developer: "Treyarch, Raven Software",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/2933620/header.jpg",
    description: "Forced to go rogue. Hunted from within. Developed by Treyarch and Raven, Black Ops 6 is a spy action thriller set in the early 90s, featuring a mind-bending Campaign, class-leading Multiplayer, and the return of Round-Based Zombies.",
    specs: {
      os: "Windows 10/11 64-bit",
      cpu: "Intel Core i7-6700K / AMD Ryzen 5 1600X",
      ram: "16 GB RAM",
      gpu: "NVIDIA GeForce GTX 1080 / AMD Radeon RX 5700 XT",
      storage: "102 GB SSD available space"
    },
    reviews: [
      { user: "PrestigeMaster", stars: 5, comment: "Omnimovement is a game changer! Best multiplayer gameplay in years." }
    ],
    coverStyle: "tactical"
  },
  {
    id: "g12",
    title: "BATTLEFIELD 2042",
    price: 359,
    originalPrice: 2999,
    rating: 3.8,
    popularity: 78,
    genres: ["Action", "Shooter"],
    developer: "DICE",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1517290/header.jpg",
    description: "Battlefield 2042 is a first-person shooter that marks the return to the iconic all-out warfare of the franchise. In a near-future world transformed by disorder, adapt and overcome dynamically-changing battlegrounds with the help of your squad.",
    specs: {
      os: "Windows 10 64-bit",
      cpu: "Intel Core i5 6600K / AMD Ryzen 5 1600",
      ram: "8 GB RAM",
      gpu: "NVIDIA GeForce GTX 1050 Ti / AMD Radeon RX 560",
      storage: "100 GB available space"
    },
    reviews: [
      { user: "BFVeteran", stars: 3, comment: "Much better now than launch, but still missing some classic class structures. Gunplay is decent." }
    ],
    coverStyle: "tactical"
  },
  {
    id: "g13",
    title: "HALO INFINITE",
    price: 0,
    originalPrice: 0,
    rating: 4.2,
    popularity: 84,
    genres: ["Action", "Shooter"],
    developer: "343 Industries",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1240440/header.jpg",
    description: "When all hope is lost and humanity's fate hangs in the balance, the Master Chief is ready to confront the most ruthless foe he's ever faced. Step inside the armor of humanity's greatest hero to experience an epic adventure.",
    specs: {
      os: "Windows 10 64-bit",
      cpu: "Intel Core i5-4440 / AMD Ryzen 5 1600",
      ram: "8 GB RAM",
      gpu: "NVIDIA GTX 1050 Ti / AMD RX 570",
      storage: "50 GB available space"
    },
    reviews: [
      { user: "MasterChief117", stars: 4, comment: "Multiplayer is fast-paced, classic arena action. Grappleshot is amazing!" }
    ],
    coverStyle: "space-industry"
  },
  {
    id: "g14",
    title: "FORZA HORIZON 5",
    price: 1749,
    originalPrice: 3499,
    rating: 4.8,
    popularity: 93,
    genres: ["Action", "Adventure"],
    developer: "Playground Games",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1551360/header.jpg",
    description: "Your Ultimate Horizon Adventure awaits! Explore the vibrant and ever-evolving open world landscapes of Mexico with limitless, fun driving action in hundreds of the world’s greatest cars.",
    specs: {
      os: "Windows 10 64-bit",
      cpu: "Intel Core i5-4460 / AMD Ryzen 3 1200",
      ram: "8 GB RAM",
      gpu: "NVIDIA GTX 1060 3GB / AMD RX 470 4GB",
      storage: "110 GB available space"
    },
    reviews: [
      { user: "V8Gamer", stars: 5, comment: "Stunning graphics, incredible sound design, and a massive car selection." }
    ],
    coverStyle: "aero-racer"
  },
  {
    id: "g15",
    title: "FINAL FANTASY XVI",
    price: 3999,
    originalPrice: 3999,
    rating: 4.6,
    popularity: 89,
    genres: ["RPG", "Action"],
    developer: "Square Enix",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/2737340/header.jpg",
    description: "An epic dark fantasy world where the fate of the land is decided by the mighty Eikons and the Dominants who wield them. This is the story of Clive Rosfield, a warrior granted the title 'First Shield of Rosaria'.",
    specs: {
      os: "Windows 10/11 64-bit",
      cpu: "Intel Core i7-8700 / AMD Ryzen 7 5700X",
      ram: "16 GB RAM",
      gpu: "NVIDIA RTX 2060 / AMD Radeon RX 5700",
      storage: "170 GB SSD available space"
    },
    reviews: [
      { user: "EikonBattler", stars: 5, comment: "Visual spectacles in boss fights are jaw-dropping. Combat feels very fluid." }
    ],
    coverStyle: "rogue-cell"
  },
  {
    id: "g16",
    title: "RESIDENT EVIL 4",
    price: 2099,
    originalPrice: 2999,
    rating: 4.9,
    popularity: 94,
    genres: ["Action", "Adventure"],
    developer: "CAPCOM Co., Ltd.",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/2050650/header.jpg",
    description: "Survival is just the beginning. Six years have passed since the biological disaster in Raccoon City. Leon S. Kennedy, one of the survivors, has been sent to rescue the president's kidnapped daughter.",
    specs: {
      os: "Windows 10/11 64-bit",
      cpu: "Intel Core i5-7500 / AMD Ryzen 3 1200",
      ram: "8 GB RAM",
      gpu: "NVIDIA GeForce GTX 1060 6GB / AMD Radeon RX 560 4GB",
      storage: "60 GB available space"
    },
    reviews: [
      { user: "RE4Fanatic", stars: 5, comment: "Perfect remake. Retains everything good about the original while modernizing the controls and graphics." }
    ],
    coverStyle: "dark-fantasy"
  },
  {
    id: "g17",
    title: "DEAD SPACE",
    price: 1049,
    originalPrice: 3499,
    rating: 4.8,
    popularity: 88,
    genres: ["Action", "Adventure", "Shooter"],
    developer: "Motive",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1693980/header.jpg",
    description: "The sci-fi survival-horror classic returns, completely rebuilt from the ground up to offer a deeper, more immersive experience — including visual, audio, and gameplay improvements.",
    specs: {
      os: "Windows 10 64-bit",
      cpu: "Intel Core i5-8600K / AMD Ryzen 5 2600x",
      ram: "16 GB RAM",
      gpu: "NVIDIA GTX 1070 / AMD RX 5700",
      storage: "50 GB SSD available space"
    },
    reviews: [
      { user: "IsaacPlasma", stars: 5, comment: "Atmosphere is terrifying. The sound design is top tier!" }
    ],
    coverStyle: "space-industry"
  },
  {
    id: "g18",
    title: "DRAGON'S DOGMA 2",
    price: 3359,
    originalPrice: 4799,
    rating: 4.1,
    popularity: 86,
    genres: ["RPG", "Action", "Adventure"],
    developer: "CAPCOM Co., Ltd.",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/2054970/header.jpg",
    description: "Dragon's Dogma 2 is a single-player, narrative driven action-RPG that challenges the players to choose their own experience — from the appearance of their Arisen, their vocation, their party, how to approach different situations and more.",
    specs: {
      os: "Windows 10/11 64-bit",
      cpu: "Intel Core i5-10600 / AMD Ryzen 5 3600",
      ram: "16 GB RAM",
      gpu: "NVIDIA GeForce GTX 1070 / AMD Radeon RX 5280",
      storage: "100 GB SSD available space"
    },
    reviews: [
      { user: "PawnCommander", stars: 4, comment: "Incredible physics and pawn mechanics. Performance can be rough in cities, but combat is amazing." }
    ],
    coverStyle: "dark-fantasy"
  },
  {
    id: "g19",
    title: "GHOST OF TSUSHIMA",
    price: 3199,
    originalPrice: 3999,
    rating: 4.9,
    popularity: 96,
    genres: ["Action", "Adventure"],
    developer: "Sucker Punch Productions",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/2215430/header.jpg",
    description: "In late 13th century, the Mongol empire has laid waste to entire nations along their campaign to conquer the East. Tsushima Island is all that stands between mainland Japan and a massive Mongol invasion fleet.",
    specs: {
      os: "Windows 10 64-bit",
      cpu: "Intel Core i5-2500K / AMD FX-8320",
      ram: "16 GB RAM",
      gpu: "NVIDIA GeForce GTX 1060 6GB / AMD Radeon RX 580 8GB",
      storage: "75 GB SSD available space"
    },
    reviews: [
      { user: "SamuraiJin", stars: 5, comment: "Sensational combat, gorgeous wind-guided exploration, and a moving story." }
    ],
    coverStyle: "tactical"
  },
  {
    id: "g20",
    title: "DEATH STRANDING 2: ON THE BEACH",
    price: 3999,
    originalPrice: 3999,
    rating: 4.8,
    popularity: 92,
    genres: ["Action", "Adventure"],
    developer: "KOJIMA PRODUCTIONS",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1850570/header.jpg",
    description: "Embark on an inspiring mission of human connection beyond the UCA. Sam and his companions set out on a new journey to save humanity from extinction. Explore a world ravaged by otherworldly enemies.",
    specs: {
      os: "Windows 10/11 64-bit",
      cpu: "Intel Core i7-7700K / AMD Ryzen 5 2600",
      ram: "16 GB RAM",
      gpu: "NVIDIA GeForce RTX 2060 / AMD Radeon RX 5700 XT",
      storage: "150 GB SSD available space"
    },
    reviews: [
      { user: "KojimaIsGod", stars: 5, comment: "Cinema quality storytelling. Traversal mechanics are even more engaging this time!" }
    ],
    coverStyle: "time-rift"
  }
];

// --- APP STATE ---
let cart = [];
let activeGenres = new Set();
let maxPriceLimit = 6000;
let searchQueryStr = "";
let currentSort = "popularity";
let currentTab = "store";
let purchasedLibrary = [];
let appliedPromoCode = null;

// Valid mock promo codes
const PROMO_CODES = {
  "VORTEX50": { discountPercent: 50, msg: "50% VORTEX SPECIAL APPLIED!" },
  "CYBER20": { discountPercent: 20, msg: "20% CYBERPUNK DISCOUNT APPLIED!" },
  "FREEPLAY": { discountValue: 500, msg: "₹500.00 CASH DISCOUNT APPLIED!" }
};

// ==========================================
// --- INITIALIZATION ---
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  // Load data from localStorage (Simulating user account persistence)
  loadStateFromStorage();

  // Draw initial catalog
  renderCatalog();
  renderHero();
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
function createCardCoverVisual(styleType, title, imageUrl) {
  if (imageUrl) {
    return `
      <img src="${imageUrl}" style="width:100%; height:100%; object-fit:cover; position:absolute; inset:0; transition: var(--transition-smooth); z-index:0;" class="card-visual-img" alt="${title}">
      <div style="position:absolute; inset:0; background:linear-gradient(to top, rgba(6,4,13,0.9) 0%, rgba(6,4,13,0.2) 60%, transparent 100%); z-index:1;"></div>
      <div style="position:absolute; bottom:1rem; left:1rem; right:1rem; z-index:2; text-shadow:0 2px 4px rgba(0,0,0,0.8);">
        <div style="font-family:Outfit; font-size:1.15rem; font-weight:800; color:white; line-height:1.2; text-transform:uppercase;">${title}</div>
      </div>
    `;
  }

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
        `<span class="original-price">₹${game.originalPrice.toLocaleString('en-IN')}</span>` : "";
      priceHTML = `
        ${originalHTML}
        <span class="current-price">₹${game.price.toLocaleString('en-IN')}</span>
      `;
    }

    // Genre items pills
    const genresHTML = game.genres.map(g => `<span>${g}</span>`).join("");

    // Setup cover element visual
    const coverArtHTML = createCardCoverVisual(game.coverStyle, game.title, game.image);

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
  const filtersToggleBtn = document.getElementById("filtersToggleBtn");
  const filtersSidebar = document.getElementById("filtersSidebar");

  if (filtersToggleBtn && filtersSidebar) {
    filtersToggleBtn.addEventListener("click", () => {
      const isOpen = filtersSidebar.classList.toggle("open");
      filtersToggleBtn.classList.toggle("active", isOpen);
      filtersToggleBtn.setAttribute("aria-expanded", String(isOpen));
      filtersToggleBtn.querySelector("span").textContent = isOpen ? "Hide Filters" : "Show Filters";
    });
  }
  
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
    priceDisplay.textContent = `₹${maxPriceLimit.toLocaleString('en-IN')}`;
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

    priceSlider.value = 6000;
    maxPriceLimit = 6000;
    priceDisplay.textContent = "₹6,000";

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
  if (maxPriceLimit < 6000) {
    activeCount++;
    createFilterTag(container, `Max: ₹${maxPriceLimit.toLocaleString('en-IN')}`, () => {
      const priceSlider = document.getElementById("priceRangeSlider");
      priceSlider.value = 6000;
      maxPriceLimit = 6000;
      document.getElementById("priceSliderVal").textContent = "₹6,000";
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
      image: game.image,
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

    const customVisual = createCardCoverVisual(item.coverStyle, "", item.image);

    itemEl.innerHTML = `
      <div class="cart-item-img">
        ${customVisual}
      </div>
      <div class="cart-item-details">
        <span class="cart-item-title">${item.title}</span>
        <span class="cart-item-genres">${item.genres.join(", ")}</span>
        <span class="cart-item-price">₹${(item.price * item.qty).toLocaleString('en-IN')}</span>
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
    discountValEl.textContent = `-₹${discount.toLocaleString('en-IN')}`;
  } else {
    promoMsg.innerHTML = "";
    discountRow.style.display = "none";
  }

  const grandTotal = Math.max(0, subtotal - discount);
  subtotalEl.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
  totalEl.textContent = `₹${grandTotal.toLocaleString('en-IN')}`;
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
  visualContainer.innerHTML = createCardCoverVisual(game.coverStyle, game.title, game.image);

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
      originalEl.textContent = `₹${game.originalPrice.toLocaleString('en-IN')}`;
    } else {
      originalEl.style.display = "none";
    }
    currentEl.textContent = `₹${game.price.toLocaleString('en-IN')}`;
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
      image: item.image,
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

    const customVisual = createCardCoverVisual(item.coverStyle, "", item.image);

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

// ==========================================
// --- DYNAMIC HERO BANNER SYSTEM ---
// ==========================================
function renderHero() {
  // Cyberpunk 2077 (ID: g3) is our ideal featured banner release
  const heroGame = GAMES_CATALOG.find(g => g.id === "g3") || GAMES_CATALOG[0];
  if (!heroGame) return;

  const heroTitle = document.getElementById("heroTitle");
  const heroDesc = document.getElementById("heroDesc");
  const heroPrice = document.getElementById("heroPrice");
  const heroBuyBtn = document.getElementById("heroBuyBtn");
  const heroInfoBtn = document.getElementById("heroInfoBtn");

  if (heroTitle) heroTitle.textContent = heroGame.title;
  if (heroDesc) heroDesc.textContent = heroGame.description;
  if (heroPrice) {
    heroPrice.textContent = heroGame.price === 0 ? "FREE" : `₹${heroGame.price.toLocaleString('en-IN')}`;
  }

  const heroVisual = document.getElementById("heroVisual");
  if (heroVisual && heroGame.image) {
    heroVisual.style.backgroundImage = `linear-gradient(rgba(11, 7, 30, 0.25), rgba(11, 7, 30, 0.95)), url(${heroGame.image})`;
    heroVisual.style.backgroundSize = "cover";
    heroVisual.style.backgroundPosition = "center";
  }

  if (heroBuyBtn) {
    // Clone to remove previous listeners
    const newHeroBuyBtn = heroBuyBtn.cloneNode(true);
    heroBuyBtn.parentNode.replaceChild(newHeroBuyBtn, heroBuyBtn);
    newHeroBuyBtn.addEventListener("click", () => {
      toggleCartItem(heroGame.id);
    });
  }

  if (heroInfoBtn) {
    const newHeroInfoBtn = heroInfoBtn.cloneNode(true);
    heroInfoBtn.parentNode.replaceChild(newHeroInfoBtn, heroInfoBtn);
    newHeroInfoBtn.addEventListener("click", () => {
      openDetailModal(heroGame.id);
    });
  }
}
