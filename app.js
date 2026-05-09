/** @type {"bg" | "en"} */
let currentLang = "bg";

const TRANSLATIONS = {
  bg: {
    "doc.title": "Bar & Dinner 88 — бул. Витоша, София",
    "doc.description":
      "Bar & Dinner 88 — кинематографичен ресторант на бул. „Витоша“ 12, София. Резервации, дегустационни менюта, коктейли.",
    "doc.keywords":
      "Bar & Dinner 88, ресторант София, Витоша 12, fine dining, коктейли, резервация, chef menu Sofia",
    "preloader.mark": "88",
    "preloader.sub": "Bar & Dinner",
    "mobile.tagline": "бул. Витоша · София",
    "nav.story": "История",
    "nav.menu": "Меню",
    "nav.gallery": "Галерия",
    "nav.booking": "Резервация",
    "nav.contact": "Контакти",
    "aria.lang": "Език на сайта",
    "aria.openMenu": "Отвори менюто",
    "aria.closeMenu": "Затвори менюто",
    "hero.bgAlt": "Кинематографична сцена в ресторант с топла светлина",
    "hero.eyebrow": "бул. Витоша · София",
    "hero.title": "Bar & Dinner 88",
    "hero.tagline":
      "Кинематографична трапезария на Витоша — плочи целунати от огън, прецизни коктейли и вечери, които остават.",
    "hero.sub": "Шеф менюта, приглушена светлина и шумът на София зад вратата.",
    "hero.cta": "Резервирай маса",
    "hero.cta2": "Виж менюто",
    "brand.kicker": "Нашата история",
    "brand.title": "Създадено за нощите на Витоша",
    "brand.story":
      "Bar & Dinner 88 е сцена за сезонни български продукти, европейска техника и електричеството на центъра — интимно, кинематографично, с намерение.",
    "brand.chefKicker": "Шеф",
    "brand.chefName": "Александър Маринов",
    "brand.chefBio":
      "Кухня на инстинкт и сдържане — сосове, редуцирани бавно, риба докосната от дим, десерти като финал на филм.",
    "brand.philoKicker": "Философия",
    "brand.philo": "Честни съставки, дисциплиниран сервиз и трапезария, където всяка чиния заслужава светлината.",
    "brand.sigKicker": "Подпис",
    "brand.sig":
      "Меса на жар, риба от брега и коктейли, построени като пирамида на аромати — база, сърце, финал.",
    "brand.quote1": "„Стаята ухае на кадифе и пламък. Не искахме нощта да свърши.“",
    "brand.quote1by": "— дневник на гост, 2026",
    "brand.quote2": "„Прецизно без претенция — София най-после има булевард ресторант с душа.“",
    "brand.quote2by": "— местен критик",
    "brand.quote3": "„Дегустацията с вина е безумна. Поръчайте я, дори да сте се клели, че няма.“",
    "brand.quote3by": "— гост сомелиер",
    "menu.kicker": "Меню",
    "menu.sectionTitle": "Дегустация на вечерта",
    "menu.sectionLead":
      "Четири настроения — закуска, обяд, вечеря, напитки — без презареждане. Задръжте курсора върху чинията.",
    "menu.cat.breakfast": "Закуска",
    "menu.cat.lunch": "Обяд",
    "menu.cat.dinner": "Вечеря",
    "menu.cat.drinks": "Напитки",
    "menu.sharedAlt": "Премиално сервирано ястие — топла цветокорекция",
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
    "gallery.kicker": "Атмосфера",
    "gallery.title": "Галерия",
    "gallery.lead": "Интериор, огън и стъкло — скролът движи кадрите с вас.",
    "gallery.cap1": "Главна зала",
    "gallery.cap2": "Бар и коктейли",
    "gallery.cap3": "Подписни чинии",
    "gallery.cap4": "Вечерна светлина",
    "gallery.img1.alt": "Интериор на ресторант с маси и осветление",
    "gallery.img2.alt": "Бар с бутилки и чаши",
    "gallery.img3.alt": "Сервирано ястие на маса",
    "gallery.img4.alt": "Топъл интериор на ресторант",
    "booking.kicker": "Резервации",
    "booking.title": "Запази масата",
    "booking.lead": "Мигновени потвърждения чрез Tablein — в тона на залата.",
    "booking.badge": "Tablein",
    "booking.note":
      "Заменете src на iframe с кода от Tablein → Widget Integration → HTML Code.",
    "booking.iframeTitle": "Онлайн резервации — Tablein",
    "contact.kicker": "Посещение",
    "contact.title": "Контакти",
    "contact.lead": "Часове, запитвания и карта — преди да влезете в дима и кадифето.",
    "contact.labelVisit": "Адрес",
    "contact.venue": "Bar & Dinner 88",
    "contact.addressLine1": "бул. „Витоша“ 12",
    "contact.addressLine2": "1000 София, България",
    "contact.hoursKicker": "Работно време",
    "contact.hours1d": "Вт — Чт",
    "contact.hours1t": "12:00 — 23:00",
    "contact.hours2d": "Пт — Сб",
    "contact.hours2t": "12:00 — 01:00",
    "contact.hours3d": "Нд — Пн",
    "contact.hours3t": "12:00 — 22:00",
    "contact.openMaps": "Отвори в Google Maps",
    "contact.mapTitle": "Google Maps — Bar & Dinner 88, бул. Витоша 12",
    "form.kicker": "Бележка към екипа",
    "form.lead":
      "Алергии, годишнини или заявка за плоча — четем всяко съобщение преди сервиз.",
    "form.name": "Пълно име",
    "form.email": "Имейл",
    "form.phone": "Телефон",
    "form.date": "Дата",
    "form.time": "Час",
    "form.guests": "Гости",
    "form.message": "Съобщение",
    "form.submit": "Изпрати запитване",
    "form.ok": "Изпратено локално — свържете се и с Tablein за потвърждение.",
    "form.err": "Моля, попълнете коректно полетата.",
    "form.emailErr": "Невалиден имейл.",
    "footer.copy": "© 2026 · Създадено на бул. Витоша",
  },
  en: {
    "doc.title": "Bar & Dinner 88 — Vitosha Boulevard, Sofia",
    "doc.description":
      "Bar & Dinner 88 — cinematic dining on Vitosha Boulevard 12, Sofia. Reservations, tasting menus, cocktails.",
    "doc.keywords":
      "Bar & Dinner 88, fine dining Sofia, Vitosha restaurant, Vitosha Blvd 12, cocktail bar, reservations, chef menu",
    "preloader.mark": "88",
    "preloader.sub": "Bar & Dinner",
    "mobile.tagline": "Vitosha Boulevard · Sofia",
    "nav.story": "Story",
    "nav.menu": "Menu",
    "nav.gallery": "Gallery",
    "nav.booking": "Reserve",
    "nav.contact": "Contact",
    "aria.lang": "Site language",
    "aria.openMenu": "Open menu",
    "aria.closeMenu": "Close menu",
    "hero.bgAlt": "Cinematic restaurant scene with warm lighting",
    "hero.eyebrow": "Vitosha Boulevard · Sofia",
    "hero.title": "Bar & Dinner 88",
    "hero.tagline":
      "A cinematic dining room on Vitosha — fire-kissed plates, precise cocktails, and nights that stay with you.",
    "hero.sub": "Chef-led menus, low-lit luxury, and the hum of Sofia outside the door.",
    "hero.cta": "Reserve a table",
    "hero.cta2": "View the menu",
    "brand.kicker": "Our story",
    "brand.title": "Crafted for Vitosha nights",
    "brand.story":
      "We built Bar & Dinner 88 as a stage for seasonal Bulgarian produce, European technique, and the electricity of downtown Sofia — intimate, cinematic, intentional.",
    "brand.chefKicker": "Chef",
    "brand.chefName": "Alexandar Marinov",
    "brand.chefBio":
      "A kitchen driven by instinct and restraint — sauces reduced slowly, fish kissed by smoke, desserts that feel like the last scene of a film.",
    "brand.philoKicker": "Philosophy",
    "brand.philo": "Honest ingredients, disciplined service, and a dining room where every plate earns its spotlight.",
    "brand.sigKicker": "Signature",
    "brand.sig":
      "Ember-roasted meats, coastal fish, and a cocktail program built like a perfume pyramid — base, heart, finish.",
    "brand.quote1": "“The room feels like velvet and flame. We did not want the night to end.”",
    "brand.quote1by": "— Guest journal, 2026",
    "brand.quote2": "“Precise without being precious — Sofia finally has a boulevard restaurant with soul.”",
    "brand.quote2by": "— Local critic",
    "brand.quote3": "“The pairing flight was outrageous. Order it even if you swore you would not.”",
    "brand.quote3by": "— Sommelier guest",
    "menu.kicker": "Menu",
    "menu.sectionTitle": "Tasting the evening",
    "menu.sectionLead":
      "Four moods — breakfast, lunch, dinner, drinks — switch without reloading. Hover each plate to feel the kitchen breathe.",
    "menu.cat.breakfast": "Breakfast",
    "menu.cat.lunch": "Lunch",
    "menu.cat.dinner": "Dinner",
    "menu.cat.drinks": "Drinks",
    "menu.sharedAlt": "Premium plated dish — warm colour grade",
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
    "gallery.kicker": "Atmosphere",
    "gallery.title": "Gallery",
    "gallery.lead": "Interiors, fire, and glass — scroll slowly, the frames move with you.",
    "gallery.cap1": "Main dining room",
    "gallery.cap2": "Bar & cocktails",
    "gallery.cap3": "Signature plating",
    "gallery.cap4": "Evening ambiance",
    "gallery.img1.alt": "Restaurant interior with tables and lighting",
    "gallery.img2.alt": "Bar back wall with bottles and glassware",
    "gallery.img3.alt": "Plated dish on a dining table",
    "gallery.img4.alt": "Warm restaurant interior at night",
    "booking.kicker": "Reservations",
    "booking.title": "Hold your table",
    "booking.lead": "Instant confirmations via Tablein — styled to match our room.",
    "booking.badge": "Tablein",
    "booking.note": "Replace iframe src with your Tablein Widget Integration HTML.",
    "booking.iframeTitle": "Tablein online reservations",
    "contact.kicker": "Visit",
    "contact.title": "Contact",
    "contact.lead": "Hours, reservations, and the map — everything you need before you arrive in velvet and smoke.",
    "contact.labelVisit": "Address",
    "contact.venue": "Bar & Dinner 88",
    "contact.addressLine1": "Bulevard Vitosha 12",
    "contact.addressLine2": "1000 Sofia, Bulgaria",
    "contact.hoursKicker": "Opening hours",
    "contact.hours1d": "Tue — Thu",
    "contact.hours1t": "12:00 — 23:00",
    "contact.hours2d": "Fri — Sat",
    "contact.hours2t": "12:00 — 01:00",
    "contact.hours3d": "Sun — Mon",
    "contact.hours3t": "12:00 — 22:00",
    "contact.openMaps": "Open in Google Maps",
    "contact.mapTitle": "Google Maps — Bar & Dinner 88, Vitosha Blvd 12",
    "form.kicker": "Concierge note",
    "form.lead": "Share allergies, anniversaries, or vinyl requests — we read every message before service.",
    "form.name": "Full name",
    "form.email": "Email",
    "form.phone": "Phone",
    "form.date": "Date",
    "form.time": "Time",
    "form.guests": "Guests",
    "form.message": "Message",
    "form.submit": "Send request",
    "form.ok": "Saved locally — please also confirm via Tablein.",
    "form.err": "Please complete the fields correctly.",
    "form.emailErr": "Invalid email address.",
    "footer.copy": "© 2026 · Crafted on Vitosha Boulevard",
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
    btn.classList.toggle("bg-primary/15", active);
    btn.classList.toggle("text-cream", active);
    btn.classList.toggle("shadow-sm", active);
    btn.classList.toggle("text-mist/70", !active);
  });

  syncMobileMenuToggleAria();
}

function initLucide() {
  try {
    if (typeof lucide !== "undefined" && lucide.createIcons) {
      lucide.createIcons();
    }
  } catch {
    /* ignore missing icons / lucide */
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
  const drawer = document.getElementById("mobile-drawer");
  if (!toggle || !drawer) return;
  mobileToggleEl = toggle;

  const setOpen = (open) => {
    mobileNavOpen = open;
    drawer.hidden = !open;
    drawer.classList.toggle("hidden", !open);
    drawer.setAttribute("aria-hidden", String(!open));
    toggle.setAttribute("aria-expanded", String(open));
    toggle.classList.toggle("is-open", open);
    document.documentElement.classList.toggle("overflow-hidden", open);
    syncMobileMenuToggleAria();
    initLucide();
  };

  toggle.addEventListener("click", () => {
    setOpen(drawer.hidden);
  });

  drawer.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => setOpen(false));
  });
}

function setActiveMenuTab(selectedTab) {
  const tabs = document.querySelectorAll("[data-menu-filter]");
  tabs.forEach((tab) => {
    const isActive = tab === selectedTab;
    tab.setAttribute("aria-selected", String(isActive));
    tab.classList.toggle("border-primary/35", isActive);
    tab.classList.toggle("bg-primary/10", isActive);
    tab.classList.toggle("text-cream", isActive);
    tab.classList.toggle("border-white/10", !isActive);
    tab.classList.toggle("bg-white/[0.03]", !isActive);
    tab.classList.toggle("text-mist/80", !isActive);
  });
}

let activeBtn = null;

function filterMenuByCategory(category) {
  document.querySelectorAll("[data-menu-item]").forEach((item) => {
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
      if (rect.bottom < 0 || rect.top > vh) return;

      const centerOffset = (rect.top + rect.height / 2 - vh / 2) / vh;
      const clamped = Math.max(-1, Math.min(1, centerOffset));
      const shift = clamped * 20;
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

function initHeaderScroll() {
  const header = document.getElementById("site-header");
  if (!header) return;

  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      const y = window.scrollY || 0;
      header.classList.toggle("is-scrolled", y > 32);
    });
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function initScrollProgress() {
  const bar = document.getElementById("scroll-progress");
  if (!bar) return;

  const onScroll = () => {
    const doc = document.documentElement;
    const max = doc.scrollHeight - doc.clientHeight;
    const p = max > 0 ? doc.scrollTop / max : 0;
    bar.style.transform = `scaleX(${Math.min(1, Math.max(0, p))})`;
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  onScroll();
}

function initScrollReveal() {
  const nodes = document.querySelectorAll("[data-scroll-reveal]");
  if (!nodes.length) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    nodes.forEach((el) => el.classList.add("is-inview"));
    return;
  }

  if (typeof IntersectionObserver === "undefined") {
    nodes.forEach((el) => el.classList.add("is-inview"));
    return;
  }

  try {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-inview");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );

    nodes.forEach((el) => io.observe(el));
  } catch {
    nodes.forEach((el) => el.classList.add("is-inview"));
  }
}

function initNavSpy() {
  const header = document.getElementById("site-header");
  const links = document.querySelectorAll("a[data-nav]");
  if (!links.length) return;

  const sectionIds = ["hero", "brand", "menu", "gallery", "booking", "contact"];
  const sections = sectionIds
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  let ticking = false;

  const update = () => {
    ticking = false;
    const offset = (header?.offsetHeight ?? 72) + 48;
    const pos = window.scrollY + offset;
    let current = "hero";

    for (const sec of sections) {
      const top = sec.offsetTop;
      if (top <= pos) current = sec.id;
    }

    links.forEach((a) => {
      const id = a.getAttribute("data-nav");
      a.classList.toggle("is-active", id === current);
    });
  };

  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  onScroll();
}

function initCustomCursor() {
  const el = document.getElementById("custom-cursor");
  if (!el) return;
  if (window.matchMedia("(pointer: coarse)").matches) return;

  let mx = 0;
  let my = 0;
  let ex = 0;
  let ey = 0;
  let raf = 0;

  const loop = () => {
    raf = 0;
    ex += (mx - ex) * 0.18;
    ey += (my - ey) * 0.18;
    el.style.transform = `translate3d(${ex}px, ${ey}px, 0) translate(-50%, -50%)`;
    if (Math.abs(mx - ex) > 0.2 || Math.abs(my - ey) > 0.2) {
      raf = requestAnimationFrame(loop);
    }
  };

  window.addEventListener(
    "pointermove",
    (e) => {
      mx = e.clientX;
      my = e.clientY;
      if (!raf) raf = requestAnimationFrame(loop);
    },
    { passive: true }
  );
}

function initReservationForm() {
  const form = document.getElementById("reservation-form");
  const status = document.getElementById("form-status");
  if (!form || !status) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    status.textContent = "";

    const fd = new FormData(form);
    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const phone = String(fd.get("phone") || "").trim();
    const date = String(fd.get("date") || "").trim();
    const time = String(fd.get("time") || "").trim();
    const guests = String(fd.get("guests") || "").trim();

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!name || !phone || !date || !time || !guests) {
      status.textContent = t("form.err");
      return;
    }
    if (!emailOk) {
      status.textContent = t("form.emailErr");
      return;
    }

    status.textContent = t("form.ok");
    form.reset();
  });
}

function forceHidePreloader() {
  document.documentElement.classList.remove("is-loading");
  document.documentElement.classList.add("is-loaded");
  const el = document.getElementById("site-preloader");
  if (el) {
    el.setAttribute("aria-busy", "false");
    el.style.opacity = "0";
    el.style.visibility = "hidden";
    el.style.pointerEvents = "none";
  }
}

function initPreloader() {
  let done = false;
  const finish = () => {
    if (done) return;
    done = true;
    forceHidePreloader();
  };

  window.addEventListener("load", finish, { once: true });
  setTimeout(finish, 700);
  setTimeout(finish, 4500);
}

function boot() {
  initPreloader();
  try {
    initMobileNav();
    initLangSwitch();
    initMenuFilter();
    initLucide();
    initHeaderScroll();
    initScrollProgress();
    initScrollReveal();
    initNavSpy();
    initGalleryParallax();
    initCustomCursor();
    initReservationForm();
  } catch (err) {
    console.error(err);
    forceHidePreloader();
  }
}

let appStarted = false;
function runApp() {
  if (appStarted) return;
  appStarted = true;
  boot();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", runApp, { once: true });
} else {
  setTimeout(runApp, 0);
}

setTimeout(function () {
  if (!appStarted) runApp();
}, 0);
