document.addEventListener("DOMContentLoaded", () => {
  // ============================================
  // FEATURED APPS DATA
  // ============================================
  const FEATURED_APPS = [
    { id: "capcut_pro", name: "SM Digital", logo: "SMdigital.jpg", category: "video" },
    { id: "capcut_pro", name: "Design", logo: "pixkh.jpg", category: "video" },
    { id: "adobe_creative", name: "PNG Stock", logo: "pngstock.jpg", category: "design" },
    { id: "chatgpt_plus", name: "Developer", logo: "khmerdeveloper.jpg", category: "ai" },
    { id: "windows_11_pro", name: "Software", logo: "khmersoftware.jpg", category: "software" },
    { id: "windows_11_pro", name: "Lan Khala", logo: "lankhala.jpg", category: "software" },
    { id: "windows_11_pro", name: "បណ្ណាល័យ", logo: "digitallibrary.jpg", category: "software" },
    { id: "font_download", name: "Font", logo: "fontdownload.jpg", category: "font" },
  ];

  // ============================================
  // PRODUCTS DATA
  // ============================================
  const PRODUCTS = {
    "capcut_pro": {
      "cover": "p9.jpg",
      "benefits": [
        "Template និង Effect ពិសេស (Pro)",
        "Export វីដេអូគ្មាន Watermark",
        "គាំទ្រ 4K / HD Quality",
        "Transition ស្អាត និង Smooth"
      ],
    },

    "telegram": {
      "cover": "p4.jpg",
      "benefits": [
        "ផ្ញើឯកសារបានធំរហូតដល់ 4GB",
        "ល្បឿនទាញយកឯកសារលឿនបំផុត",
        "ប្តូរសំឡេងនិយាយទៅជាអត្ថបទ",
        "ស្ទីកឃ័រ និងរូបអារម្មណ៍ពិសេសៗ",
        "គ្រប់គ្រង Chat និងដាក់ Folder បន្ថែម",
        "សញ្ញា Badge ផ្កាយលើ Profile",
        "រូបភាព Profile មានចលនា (Video)",
        "បិទការរំខានពីផ្ទាំងពាណិជ្ជកម្ម"
      ],
    },

    "gemini": {
      "cover": "p7.jpg",
      "benefits": [
        "ប្រើម៉ូឌែល Gemini Pro កម្រិតខ្ពស់បំផុត",
        "ឆ្លើយតបលឿនបំផុត និងសួរបានមិនកំណត់",
        "ជំនាញវិភាគឯកសារ និងសរសេរកូដស៊ីជម្រៅ",
        "បង្កើតរូបភាព និងអត្ថបទបានស្អាតឥតខ្ចោះ",
        "ភ្ជាប់ជំនួយការ AI ក្នុង Gmail និង Google Docs",
        "សមត្ថភាពចងចាំ និងយល់ដឹងច្រើនជាងមុន"
      ],
    },
    "canva_pro": {
      "cover": "p1.jpg",
      "benefits": [
        "Canva Pro Gmail ផ្ទាល់ខ្លួន",
        "ទាំងមុខងារ Education Plan",
        "ប្រើក្នុង Pro Affinity Plan",
        "៥ឧបករណ៍ក្នុងពេលតែមួយ",
        "ប្រើពុម្ពអក្សរខ្មែរច្រើនជាង 500+",
        "គម្រូមកស្រាប់រាប់លាន"
      ],
    },
    "chatgpt_plus": {
      "cover": "p2.jpg",
      "benefits": [
        "គណនីផ្តល់ជូនឯកជន ប្រើ៤ឧបករណ៍",
        "អាចប្រើមុខងារទាំងអស់ក្នុង Plus",
        "Ai GPTs គ្រប់ Model",
        "GPT-5 (thinking, fast, auto)",
        "ល្បឿនធ្វើការលឿនជាងធម្មតា x3ដង",
        "ប្រើលើទូរស័ព្ទ ឬកុំព្យូទ័រ"
      ],
    },
    "windows_11_pro": {
      "cover": "p3.jpg",
      "benefits": [
        "Activate Windows 11 Pro ស្របច្បាប់",
        "ប្រើ Pro Features ពេញចលនា",
        "Support បើមានបញ្ហា activate"
      ],
    },
    "netflix_premium": {
      "cover": "p5.jpg",
      "benefits": [
        "មើល Movies/Series គុណភាព HD/4K",
        "ប្រើបានលើទូរស័ព្ទ/TV/PC",
        "Support តាម Telegram"
      ],
    },
    "youtube_premium": {
      "cover": "p6.jpg",
      "benefits": [
        "មើលគ្មាន Ads",
        "Background Play និង Download",
        "YouTube Music Premium"
      ],
    },
    "microsoft_office": {
      "cover": "p8.jpg",
      "benefits": [
        "Word / Excel / PowerPoint",
        "សម្រាប់ការងារក្រុមហ៊ុន និងសាលា"
      ],
    },
    "express_vpn": {
      "cover": "p10.jpg",
      "benefits": [
        "ល្បឿនលឿន និងស្ថេរ",
        "ការការពារលម្អិត",
        "គាំទ្រលើឧបករណ៍ច្រើន"
      ],
    }
  };

  // ============================================
  // PANEL SWITCHING (ប្តូរភ្លាមៗ រហ័សបំផុត)
  // ============================================
  const buttons = document.querySelectorAll(".tool-btn");
  const panels = document.querySelectorAll(".panel");

  function showPanel(panelId) {
    if (!panelId || !document.getElementById(panelId)) return;

    const currentPanel = document.querySelector(".panel.active");
    if (currentPanel && currentPanel.id === panelId) return;

    // ប្តូរភ្លាមៗ (ស្វាប់ + បង្ហាញ)
    panels.forEach((panel) => {
      panel.classList.toggle("active", panel.id === panelId);
    });

    buttons.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.panel === panelId);
    });

    sessionStorage.setItem("lastPanel", panelId);
    sessionStorage.setItem("lastScroll", window.scrollY);
  }

  window.showPanel = showPanel;

  // Button click listeners
  buttons.forEach((btn) => {
    const panelId = btn.dataset.panel;
    if (!panelId) return;
    btn.addEventListener("click", () => showPanel(panelId));
  });

  // Data-go-panel links
  document.querySelectorAll("[data-go-panel]").forEach((el) => {
    el.addEventListener("click", () => {
      const target = el.getAttribute("data-go-panel");
      const scrollSel = el.getAttribute("data-scroll");

      showPanel(target);
      window.scrollTo(0, 0);

      if (scrollSel) {
        setTimeout(() => {
          const node = document.querySelector(scrollSel);
          if (node) node.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 120);
      }
    });
  });

  // Keyboard navigation
  document.querySelectorAll(".home-card-link[role='button']").forEach((card) => {
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        card.click();
      }
    });
  });

  // Restore last panel
  const lastPanel = sessionStorage.getItem("lastPanel");
  const lastScroll = sessionStorage.getItem("lastScroll");

  if (lastPanel && document.getElementById(lastPanel)) {
    showPanel(lastPanel);
    if (lastScroll) {
      setTimeout(() => {
        window.scrollTo(0, parseInt(lastScroll, 10));
      }, 100);
    }
  } else {
    showPanel("home");
  }

  // ============================================
  // FEATURED APPS RENDERING
  // ============================================
  function renderFeaturedApps() {
    const grid = document.getElementById("featuredAppsGrid");
    if (!grid) return;

    grid.innerHTML = FEATURED_APPS.map(app => `
      <div class="featured-app-card" data-app-id="${app.id}" role="button" tabindex="0">
        <div class="featured-app-logo">
          <img src="${app.logo}" alt="${app.name}" loading="lazy">
        </div>
        <h4>${app.name}</h4>
      </div>
    `).join("");

    attachFeaturedAppListeners();
  }

  function attachFeaturedAppListeners() {
    const grid = document.getElementById("featuredAppsGrid");
    if (!grid) return;

    grid.querySelectorAll(".featured-app-card").forEach(card => {
      card.addEventListener("click", () => {
        const appId = card.dataset.appId;
        showPanel("store");
        setTimeout(() => {
          openSheet(appId);
        }, 50);
      });

      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          card.click();
        }
      });
    });
  }

  renderFeaturedApps();

  // ============================================
  // SEARCH FUNCTIONALITY
  // ============================================
  function performSearch(query) {
    if (!query.trim()) {
      renderFeaturedApps();
      return;
    }

    const grid = document.getElementById("featuredAppsGrid");
    if (!grid) return;

    const filteredApps = FEATURED_APPS.filter(app => 
      app.name.toLowerCase().includes(query.toLowerCase()) ||
      app.category.toLowerCase().includes(query.toLowerCase())
    );

    if (filteredApps.length === 0) {
      grid.innerHTML = '<p class="no-results">មិនមានលទ្ធផលដែលត្រូវគ្នា</p>';
      return;
    }

    grid.innerHTML = filteredApps.map(app => `
      <div class="featured-app-card" data-app-id="${app.id}" role="button" tabindex="0">
        <div class="featured-app-logo">
          <img src="${app.logo}" alt="${app.name}" loading="lazy">
        </div>
        <h4>${app.name}</h4>
      </div>
    `).join("");

    attachFeaturedAppListeners();
  }

  const searchInput = document.getElementById("homeSearchInput");
  const searchBtn = document.getElementById("homeSearchBtn");

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      performSearch(e.target.value);
    });

    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        performSearch(searchInput.value);
      }
    });
  }

  if (searchBtn) {
    searchBtn.addEventListener("click", () => {
      performSearch(searchInput.value);
    });
  }

  // ============================================
  // RANDOM BANNER
  // ============================================
  const bannerImg = document.getElementById("randomBanner");
  if (bannerImg) {
    const bannerList = ["banner1.jpg", "banner2.jpg", "banner3.jpg"];
    const randomIndex = Math.floor(Math.random() * bannerList.length);
    bannerImg.src = bannerList[randomIndex];
  }

  // ============================================
  // PRODUCT MODAL
  // ============================================
  const productModal = document.getElementById("productModal");
  const pmContent = document.getElementById("pmContent");
  const storeBox = document.querySelector("#store .box");
  const headerEl = document.querySelector("header");

  function setHeaderH() {
    const h = headerEl ? headerEl.offsetHeight : 50;
    document.documentElement.style.setProperty("--header-h", `${h}px`);
  }

  setHeaderH();
  window.addEventListener("resize", setHeaderH);

  function renderProduct(productId) {
    const p = PRODUCTS[productId] || PRODUCTS["capcut_pro"];
    if (!pmContent || !p) return;

    const benefits = (p.benefits || []).map(li => `<li>${li}</li>`).join("");

    pmContent.innerHTML = `
      <img class="cover" src="${p.cover}" alt="${p.name_km}">
      
      <p>អត្ថប្រយោជន៍ និងការប្រើប្រាស់</p>
      <ul class="fix-list">
        ${benefits}
      </ul>

      <button class="btn-store-info" type="button" id="pmBuyBtn">ទិញឥឡូវនេះ</button>
    `;

    const buyBtn = document.getElementById("pmBuyBtn");
    if (buyBtn) {
      buyBtn.onclick = () => window.open("https://t.me/smservicekh", "_blank", "noopener");
    }
  }

  if (productModal && storeBox) {
    const dialog = productModal.querySelector(".pm-dialog");
    const closeBtn = productModal.querySelector(".pm-close");
    const backdrop = productModal.querySelector(".pm-backdrop");

    let isClosing = false;

    function openSheet(productId) {
      if (isClosing) return;

      renderProduct(productId);
      productModal.dataset.product = productId || "";

      productModal.classList.add("is-visible");
      productModal.setAttribute("aria-hidden", "false");
      document.body.classList.add("sheet-open");

      requestAnimationFrame(() => {
        productModal.classList.add("is-open");
        if (closeBtn) closeBtn.focus();
      });
    }

    window.openSheet = openSheet;

    function closeSheet() {
      if (!productModal.classList.contains("is-open") || isClosing) return;

      isClosing = true;
      productModal.classList.remove("is-open");

      const finish = () => {
        productModal.classList.remove("is-visible");
        productModal.setAttribute("aria-hidden", "true");
        document.body.classList.remove("sheet-open");
        isClosing = false;
      };

      if (!dialog) {
        finish();
        return;
      }

      const onEnd = (e) => {
        if (e && e.target === dialog) finish();
      };
      dialog.addEventListener("transitionend", onEnd, { once: true });

      setTimeout(finish, 450);
    }

    storeBox.addEventListener("click", (e) => {
      const card = e.target.closest(".item.product-open");
      if (!card) return;
      openSheet(card.dataset.product || "");
    });

    storeBox.addEventListener("keydown", (e) => {
      const card = e.target.closest(".item.product-open");
      if (!card) return;
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openSheet(card.dataset.product || "");
      }
    });

    if (closeBtn) closeBtn.addEventListener("click", closeSheet);
    if (backdrop) backdrop.addEventListener("click", closeSheet);

    document.addEventListener("keydown", (e) => {
      if (!productModal.classList.contains("is-visible")) return;
      if (e.key === "Escape") closeSheet();
    });
  }

  // ============================================
  // DARK / LIGHT MODE
  // ============================================
  const modeBtn = document.getElementById('modeToggle');

  function applyMode(mode, save = true) {
    const isDark = mode === 'dark';
    document.body.classList.toggle('dark', isDark);
    document.documentElement.setAttribute('data-color-scheme', isDark ? 'dark' : 'light');
    if (save) localStorage.setItem('uiMode', isDark ? 'dark' : 'light');
  }

  let transitionTimeout = null;
  function toggleMode() {
    document.documentElement.classList.add('color-transition');
    void document.documentElement.offsetWidth;

    const current = localStorage.getItem('uiMode') || (document.body.classList.contains('dark') ? 'dark' : 'light');
    const next = current === 'dark' ? 'light' : 'dark';
    applyMode(next, true);

    if (transitionTimeout) clearTimeout(transitionTimeout);
    transitionTimeout = setTimeout(() => {
      document.documentElement.classList.remove('color-transition');
      transitionTimeout = null;
    }, 420);
  }

  const saved = localStorage.getItem('uiMode');
  if (saved === 'dark' || saved === 'light') {
    applyMode(saved, false);
  }

  if (modeBtn) {
    modeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      toggleMode();
    });
    modeBtn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleMode();
      }
    });
  }

  // ============================================
  // SCROLL TO TOP
  // ============================================
  const scrollBtn = document.querySelector(".scroll-to-top");
  if (scrollBtn) {
    window.addEventListener("scroll", () => {
      scrollBtn.style.display = window.scrollY > 300 ? "flex" : "none";
    });

    scrollBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});















