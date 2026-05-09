/** @type {"bg" | "en"} */
let currentLang = "bg";

const MOTION_MODULE = "https://cdn.jsdelivr.net/npm/motion@12/+esm";

const TRANSLATIONS = {
  bg: {
    "doc.title": "Bar & Dinner 88 — бул. Витоша, София",
    "doc.description":
      "Bar & Dinner 88 — премиален ресторант и бар на бул. „Витоша“ 12, София. Закуска, обяд, вечеря, коктейли и онлайн резервации.",
    "doc.keywords":
      "Bar & Dinner 88, ресторант София, Витоша 12, бар Витоша, fine dining София, коктейли, онлайн резервация, Vitosha restaurant Sofia",
    "nav.menu": "Меню",
    "nav.booking": "Резервация",
    "nav.gallery": "Галерия",
    "nav.contact": "Контакти",
    "aria.lang": "Език на сайта",
    "aria.openMenu": "Отвори менюто",
    "aria.closeMenu": "Затвори менюто",
    "hero.eyebrow": "бул. Витоша · София",
    "hero.title": "Bar & Dinner 88",
    "hero.sub":
      "Премиална кухня и атмосфера в сърцето на София — закуска, обяд, вечеря и коктейли на едно място.",
    "hero.cta": "Резервирай маса",
    "menu.sectionTitle": "Динамично меню",
    "menu.sectionLead":
      "Закуска, обяд, вечеря и напитки — изберете категория без презареждане на страницата.",
    "menu.cat.breakfast": "Закуска",
    "menu.cat.lunch": "Обяд",
    "menu.cat.dinner": "Вечеря",
    "menu.cat.drinks": "Напитки",
    "menu.bf1.name": "Софийска сутрешна чиния",
    "menu.bf1.price": "18,90 лв",
    "menu.bf1.desc":
      "Яйца, местно сирене, авокадо, квасен хляб и печени чери домати.",
    "menu.bf2.name": "Гранола купа „Витоша“",
    "menu.bf2.price": "14,50 лв",
    "menu.bf2.desc": "Гръцко кисело мляко, мед, сезонни плодове и препечени ядки.",
    "menu.lu1.name": "Цезар „Булевард“",
    "menu.lu1.price": "22,00 лв",
    "menu.lu1.desc": "Романо, пармезан чипс, дресинг с аншоа и чесън, пилешко на скара.",
    "menu.lu2.name": "Талиатели с трюфел",
    "menu.lu2.price": "28,50 лв",
    "menu.lu2.desc": "Домашна паста, черен трюфелено масло, пекорино и черен пипер.",
    "menu.dn1.name": "Рибай суха зреене",
    "menu.dn1.price": "48,00 лв",
    "menu.dn1.desc": "300 г рибай, конфитиран чесън, червен винен сос и печен праз.",
    "menu.dn2.name": "Черна треска с мисо",
    "menu.dn2.price": "42,00 лв",
    "menu.dn2.desc": "Треска с мисо глазура, бейби бок чой, сусам и цитрусова емулсия.",
    "menu.dr1.name": "Спритц „Gold 88“",
    "menu.dr1.price": "16,00 лв",
    "menu.dr1.desc": "Просеко, горчив портокал, розмарин и игрива газираност.",
    "menu.dr2.name": "Негрони „Обсидиан“",
    "menu.dr2.price": "15,50 лв",
    "menu.dr2.desc": "Джин от бъчва, вермут, амаро и портокалови масла.",
    "booking.title": "Резервации",
    "booking.lead": "Онлайн резервация на маса — чрез Tablein.",
    "booking.badge": "Tablein",
    "booking.note":
      "Заменете src на iframe с точния адрес от Tablein → Widget Integration → HTML Code.",
    "booking.iframeTitle": "Онлайн резервации — Tablein",
    "gallery.title": "Галерия",
    "gallery.lead":
      "Интериор, бар и подписни ястия — лек паралакс при скрол (изключен при „намали движение“).",
    "gallery.cap1": "Главна зала за вечеря",
    "gallery.cap2": "Бар и коктейли",
    "gallery.cap3": "Аранжировка на чинии",
    "gallery.cap4": "Вечерна атмосфера",
    "gallery.img1.alt": "Интериор на ресторант с маси и осветление",
    "gallery.img2.alt": "Бар с бутилки и чаши",
    "gallery.img3.alt": "Сервирано ястие на маса",
    "gallery.img4.alt": "Ресторант с топла светлина",
    "contact.title": "Контакти",
    "contact.lead": "Посетете ни на бул. Витоша — адрес и карта по-долу.",
    "contact.labelVisit": "Посещение",
    "contact.venue": "Bar & Dinner 88",
    "contact.addressLine1": "бул. „Витоша“ 12",
    "contact.addressLine2": "1000 София, България",
    "contact.openMaps": "Отвори в Google Maps",
    "contact.mapTitle": "Google Maps — Bar & Dinner 88, бул. Витоша 12, София",
  },
  en: {
    "doc.title": "Bar & Dinner 88 — Vitosha Boulevard, Sofia",
    "doc.description":
      "Bar & Dinner 88 — premium restaurant and cocktail bar on Vitosha Boulevard 12, Sofia. Breakfast, lunch, dinner, drinks, and online reservations.",
    "doc.keywords":
      "Bar & Dinner 88, restaurant Sofia, Vitosha Boulevard 12, fine dining Sofia, cocktail bar Sofia, Vitosha dining, online booking, Bulgarian restaurant",
    "nav.menu": "Menu",
    "nav.booking": "Book",
    "nav.gallery": "Gallery",
    "nav.contact": "Contact",
    "aria.lang": "Site language",
    "aria.openMenu": "Open menu",
    "aria.closeMenu": "Close menu",
    "hero.eyebrow": "Vitosha Boulevard · Sofia",
    "hero.title": "Bar & Dinner 88",
    "hero.sub":
      "Premium dining in the heart of Sofia — breakfast, lunch, dinner, and cocktails on Vitosha.",
    "hero.cta": "Book a Table",
    "menu.sectionTitle": "Dynamic Menu",
    "menu.sectionLead": "Breakfast, lunch, dinner & drinks — browse by category without reloading.",
    "menu.cat.breakfast": "Breakfast",
    "menu.cat.lunch": "Lunch",
    "menu.cat.dinner": "Dinner",
    "menu.cat.drinks": "Drinks",
    "menu.bf1.name": "Sofia Sunrise Plate",
    "menu.bf1.price": "BGN 18.90",
    "menu.bf1.desc": "Eggs, local feta, avocado, sourdough, and roasted cherry tomatoes.",
    "menu.bf2.name": "Vitosha Granola Bowl",
    "menu.bf2.price": "BGN 14.50",
    "menu.bf2.desc": "Greek yogurt, honey, seasonal fruit, and toasted nuts.",
    "menu.lu1.name": "Boulevard Caesar",
    "menu.lu1.price": "BGN 22.00",
    "menu.lu1.desc": "Romaine, parmesan crisp, anchovy-garlic dressing, grilled chicken.",
    "menu.lu2.name": "Truffle Tagliatelle",
    "menu.lu2.price": "BGN 28.50",
    "menu.lu2.desc": "House pasta, black truffle butter, pecorino, and cracked pepper.",
    "menu.dn1.name": "Dry-Aged Ribeye",
    "menu.dn1.price": "BGN 48.00",
    "menu.dn1.desc": "300g ribeye, confit garlic, red wine jus, and charred leeks.",
    "menu.dn2.name": "Black Cod Miso",
    "menu.dn2.price": "BGN 42.00",
    "menu.dn2.desc": "Miso-glazed cod, baby bok choy, sesame, and citrus emulsion.",
    "menu.dr1.name": "Gold 88 Spritz",
    "menu.dr1.price": "BGN 16.00",
    "menu.dr1.desc": "Prosecco, bitter orange, rosemary, and sparkling finish.",
    "menu.dr2.name": "Obsidian Negroni",
    "menu.dr2.price": "BGN 15.50",
    "menu.dr2.desc": "Barrel-aged gin, vermouth, amaro, and orange oils.",
    "booking.title": "Reservations",
    "booking.lead": "Book a table online — powered by Tablein.",
    "booking.badge": "Tablein",
    "booking.note":
      "Replace the iframe src with the exact URL from Tablein → Widget Integration → HTML Code.",
    "booking.iframeTitle": "Tablein online reservations",
    "gallery.title": "Gallery",
    "gallery.lead":
      "Interior, bar, and plated dishes — subtle scroll parallax (off when “reduce motion” is on).",
    "gallery.cap1": "Main dining room",
    "gallery.cap2": "Bar & cocktails",
    "gallery.cap3": "Signature plating",
    "gallery.cap4": "Evening ambiance",
    "gallery.img1.alt": "Restaurant interior with tables and lighting",
    "gallery.img2.alt": "Bar back wall with bottles and glassware",
    "gallery.img3.alt": "Plated dish on a dining table",
    "gallery.img4.alt": "Warm restaurant interior at night",
    "contact.title": "Contact",
    "contact.lead": "Visit us on Vitosha — address and map below.",
    "contact.labelVisit": "Visit",
    "contact.venue": "Bar & Dinner 88",
    "contact.addressLine1": "Bulevard Vitosha 12",
    "contact.addressLine2": "1000 Sofia, Bulgaria",
    "contact.openMaps": "Open in Google Maps",
    "contact.mapTitle": "Google Maps — Bar & Dinner 88, Vitosha Blvd 12, Sofia",
  },
};

function t(key) {
  const table = TRANSLATIONS[currentLang] || TRANSLATIONS.bg;
  return table[key] ?? TRANSLATIONS.bg[key] ?? key;
}

function applyLanguage(lang) {
  if (lang !== "bg" && lang !== "en") return;
  currentLang = lang;

  document.documentElement.lang = lang === "en" ? "en" : "bg";
  document.documentElement.dataset.lang = lang;

  const title = t("doc.title");
  if (title) document.title = title;

  const desc = t("doc.description");
  const descMeta = document.querySelector('meta[name="description"]');
  if (descMeta && desc) descMeta.setAttribute("content", desc);
  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc && desc) ogDesc.setAttribute("content", desc);
  const twDesc = document.querySelector('meta[name="twitter:description"]');
  if (twDesc && desc) twDesc.setAttribute("content", desc);

  const keywords = t("doc.keywords");
  const kwMeta = document.querySelector('meta[name="keywords"]');
  if (kwMeta && keywords) kwMeta.setAttribute("content", keywords);

  const ogTitle = t("doc.title");
  const ogTitleMeta = document.querySelector('meta[property="og:title"]');
  if (ogTitleMeta && ogTitle) ogTitleMeta.setAttribute("content", ogTitle);
  const twTitleMeta = document.querySelector('meta[name="twitter:title"]');
  if (twTitleMeta && ogTitle) twTitleMeta.setAttribute("content", ogTitle);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (!key) return;
    const text = t(key);
    if (text != null) el.textContent = text;
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria");
    if (!key) return;
    const text = t(key);
    if (text != null) el.setAttribute("aria-label", text);
  });

  document.querySelectorAll("[data-i18n-title]").forEach((el) => {
    const key = el.getAttribute("data-i18n-title");
    if (!key) return;
    const text = t(key);
    if (text != null) el.setAttribute("title", text);
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    const key = el.getAttribute("data-i18n-alt");
    if (!key) return;
    const text = t(key);
    if (text != null) el.setAttribute("alt", text);
  });

  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    const active = btn.getAttribute("data-lang-btn") === lang;
    btn.setAttribute("aria-pressed", String(active));
    btn.classList.toggle("bg-gold/15", active);
    btn.classList.toggle("text-gold", active);
    btn.classList.toggle("shadow-sm", active);
    btn.classList.toggle("text-gold/70", !active);
  });

  syncMobileMenuToggleAria();
}

function initLucide() {
  if (typeof lucide !== "undefined" && lucide.createIcons) {
    lucide.createIcons();
  }
}

function initLangSwitch() {
  const root = document.getElementById("lang-switch");
  if (!root) return;

  root.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-lang-btn]");
    if (!btn) return;
    const lang = btn.getAttribute("data-lang-btn");
    if (lang !== "bg" && lang !== "en") return;
    applyLanguage(lang);
    initLucide();
  });

  applyLanguage(document.documentElement.dataset.lang || "bg");
}

let mobileNavOpen = false;
let mobileToggleEl = null;

function syncMobileMenuToggleAria() {
  if (!mobileToggleEl) return;
  const label = mobileNavOpen ? t("aria.closeMenu") : t("aria.openMenu");
  mobileToggleEl.setAttribute("aria-label", label);
}

function initMobileNav() {
  const toggle = document.getElementById("mobile-menu-btn");
  const panel = document.getElementById("mobile-nav");
  if (!toggle || !panel) return;
  mobileToggleEl = toggle;

  const setOpen = (open) => {
    mobileNavOpen = open;
    panel.hidden = !open;
    panel.classList.toggle("hidden", !open);
    toggle.setAttribute("aria-expanded", String(open));
    const icon = toggle.querySelector("[data-lucide]");
    if (icon) {
      icon.setAttribute("data-lucide", open ? "x" : "menu");
    }
    syncMobileMenuToggleAria();
    initLucide();
  };

  toggle.addEventListener("click", () => {
    setOpen(panel.hidden);
  });

  panel.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => setOpen(false));
  });
}

function setActiveMenuTab(selectedTab) {
  const tabs = document.querySelectorAll("[data-menu-filter]");
  tabs.forEach((tab) => {
    const isActive = tab === selectedTab;
    tab.setAttribute("aria-selected", String(isActive));
    tab.classList.toggle("border-gold/35", isActive);
    tab.classList.toggle("bg-gold/15", isActive);
    tab.classList.toggle("text-gold", isActive);
    tab.classList.toggle("border-gold/20", !isActive);
    tab.classList.toggle("text-gold/75", !isActive);
  });
}

let activeBtn = null;

function filterMenuByCategory(category) {
  const items = document.querySelectorAll("[data-menu-item]");
  items.forEach((item) => {
    const match = item.getAttribute("data-category") === category;
    item.classList.toggle("hidden", !match);
  });
}

function initMenuFilter() {
  const tabs = document.querySelectorAll("[data-menu-filter]");
  const panel = document.getElementById("menu-panel");
  if (!tabs.length) return;

  const activate = (btn) => {
    activeBtn = btn;
    const cat = btn.getAttribute("data-menu-filter");
    if (!cat) return;
    setActiveMenuTab(btn);
    filterMenuByCategory(cat);
    if (panel) panel.setAttribute("aria-labelledby", btn.id);
  };

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => activate(tab));
  });

  const initial =
    document.querySelector('[data-menu-filter][aria-selected="true"]') || tabs[0];
  activate(initial);
}

function initGalleryParallax() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const blocks = document.querySelectorAll("[data-gallery-parallax]");
  if (!blocks.length) return;

  let ticking = false;

  const update = () => {
    ticking = false;
    const vh = window.innerHeight || 1;

    blocks.forEach((block) => {
      const img = block.querySelector(".gallery-parallax-img");
      if (!img) return;

      const rect = block.getBoundingClientRect();
      const visible = rect.bottom > 0 && rect.top < vh;
      if (!visible) return;

      const centerOffset = (rect.top + rect.height / 2 - vh / 2) / vh;
      const clamped = Math.max(-1, Math.min(1, centerOffset));
      const shift = clamped * 22;
      img.style.transform = `translate3d(0, ${shift}px, 0) scale(1.06)`;
    });
  };

  const onScrollOrResize = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  };

  window.addEventListener("scroll", onScrollOrResize, { passive: true });
  window.addEventListener("resize", onScrollOrResize, { passive: true });
  onScrollOrResize();
}

function showRevealNodesInstantly() {
  document.querySelectorAll("[data-reveal]").forEach((el) => {
    el.style.opacity = "1";
    el.style.transform = "none";
    el.style.removeProperty("will-change");
  });
}

async function initRevealAnimations() {
  const nodes = Array.from(document.querySelectorAll("[data-reveal]"));
  if (!nodes.length) return;

  let animate;
  let stagger;
  try {
    ({ animate, stagger } = await import(MOTION_MODULE));
  } catch {
    showRevealNodesInstantly();
    return;
  }

  if (typeof animate !== "function" || typeof stagger !== "function") {
    showRevealNodesInstantly();
    return;
  }

  nodes.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(1.25rem)";
    el.style.willChange = "opacity, transform";
  });

  try {
    const controls = animate(
      nodes,
      { opacity: [0, 1], y: [20, 0] },
      {
        duration: 0.68,
        delay: stagger(0.06, { start: 0.04 }),
        easing: [0.16, 1, 0.3, 1],
      }
    );
    if (controls?.finished && typeof controls.finished.then === "function") {
      await controls.finished.catch(() => {});
    }
  } catch {
    showRevealNodesInstantly();
  } finally {
    nodes.forEach((el) => el.style.removeProperty("will-change"));
  }
}

async function boot() {
  initMobileNav();
  initLangSwitch();
  initMenuFilter();
  initLucide();
  await initRevealAnimations();
  initGalleryParallax();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    void boot();
  });
} else {
  void boot();
}
