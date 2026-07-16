document.addEventListener("DOMContentLoaded", () => {

  // ============================================
  // PRODUCTS DATA (ឡាយសិន Only) 
  // ============================================
  const PRODUCTS = {
    "capcut_pro": {
      "cover": "p9.jpg",
      "benefits": [
        "ដោះសោមុខងារកម្រិត Pro ទាំងអស់ដូចជា Effects Filters និង Transitions",
        "មុខងារបញ្ញាសិប្បនិម្មិតឆ្លាតវៃរួមមានការដាក់អក្សរស្វ័យប្រវត្តិនិងការលុបផ្ទៃខាងក្រោយ",
        "បញ្ចេញវីដេអូកម្រិត 4K ក្នុងល្បឿន 60fps ដោយគ្មានជាប់ឡូហ្គោកម្មវិធី",
        "កន្លែងផ្ទុកឯកសារលើ Cloud ផ្ទាល់ខ្លួនសម្រាប់រក្សាទុកគម្រោងបានយ៉ាងសុវត្ថិភាព",
        "អាចប្រើប្រាស់បានយ៉ាងរលូនទាំងលើទូរស័ព្ទនិងកុំព្យូទ័រ"
      ],
    },
    "youtube_premium": {
      "cover": "p4.jpg",
      "benefits": [
        "ទស្សនាវីដេអូរាប់លានដោយគ្មានពាណិជ្ជកម្មរំខានទាល់តែសោះ",
        "មុខងារចាក់សំឡេងជាបន្តបន្ទាប់ទោះបីជាអ្នកបិទអេក្រង់ឬចេញក្រៅកម្មវិធីក៏ដោយ",
        "ទាញយកវីដេអូក្នុងគុណភាពខ្ពស់ទុកទស្សនាពេលគ្មានប្រព័ន្ធអ៊ីនធឺណិត",
        "អាចប្រើប្រាស់កម្មវិធីស្តាប់ចម្រៀង YouTube Music Premium ដោយឥតគិតថ្លៃ",
        "គុណភាពវីដេអូច្បាស់កម្រិតខ្ពស់ពិសេស 1080p Premium Enhanced"
      ],
    },
    "gemini": {
      "cover": "p7.jpg",
      "benefits": [
        "ប្រើប្រាស់ម៉ូឌែល Gemini 1.5 Pro ចុងក្រោយបង្អស់ពីក្រុមហ៊ុន Google",
        "សមត្ថភាពវិភាគទិន្នន័យ ឯកសារ និងសរសេរកូដបានយ៉ាងសុក្រឹត",
        "ទំហំនៃការចងចាំធំទូលាយអាចចងចាំប្រវត្តិសន្ទនាបានវែងឆ្ងាយ",
        "បង្កើតរូបភាពកម្រិតខ្ពស់បានលឿននិងស្រស់ស្អាតឥតខ្ចោះ",
        "ភ្ជាប់និងធ្វើការជាមួយកម្មវិធីនានារបស់ Google យ៉ាងរលូន"
      ],
    },
    "canva_pro": {
      "cover": "p1.jpg",
      "benefits": [
        "ដោះសោរាល់គម្រូឌីហ្សាញ រូបភាព និងវត្ថុតុបតែងរាប់លានប្រភេទ",
        "មុខងារ Magic Studio ដែលជាជំនួយការបញ្ញាសិប្បនិម្មិតសម្រាប់ការឌីហ្សាញ",
        "លុបផ្ទៃខាងក្រោយរូបភាពនិងវីដេអូបានយ៉ាងស្អាតដោយគ្រាន់តែចុចតែម្តង",
        "អាចគ្រប់គ្រង Logo ពណ៌ និងពុម្ពអក្សរផ្ទាល់ខ្លួនយ៉ាងងាយស្រួល",
        "អាចប្រើបានប្រាំឧបករណ៍ក្នុងពេលតែមួយនិងដំណើរការជាមួយពុម្ពអក្សរខ្មែរបានយ៉ាងល្អ"
      ],
    },
    "chatgpt_plus": {
      "cover": "p2.jpg",
      "benefits": [
        "ដំណើរការដោយ GPT ជំនាន់ 4o ចុងក្រោយបង្អស់ដែលឆ្លាតនិងលឿនបំផុត",
        "មុខងារ DALL E 3 សម្រាប់បង្កើតរូបភាពដ៏រស់រវើកនិងស្រស់ស្អាត",
        "ចូលប្រើប្រាស់ Custom GPTs ជាងរាប់លានប្រភេទតាមតម្រូវការ",
        "សមត្ថភាពអានវេបសាយនិងវិភាគទិន្នន័យស៊ីជម្រៅ",
        "មិនមានការរអាក់រអួលទោះបីស្ថិតក្នុងម៉ោងមមាញឹក"
      ],
    },
    "windows_11_pro": {
      "cover": "p3.jpg",
      "benefits": [
        "ឡាយសិនដើមមានលេខកូដស្របច្បាប់ពីក្រុមហ៊ុន Microsoft",
        "ប្រើប្រាស់បានមួយជីវិតនិងទទួលបានការអាប់ដេតប្រព័ន្ធសុវត្ថិភាពជាប់ជានិច្ច",
        "មុខងារសុវត្ថិភាពខ្ពស់ BitLocker សម្រាប់ចាក់សោការពារទិន្នន័យ",
        "គាំទ្រមុខងារតភ្ជាប់ពីចម្ងាយនិងការសាកល្បងកម្មវិធីដោយសុវត្ថិភាព",
        "ធានាការប្រើប្រាស់បានពេញលេញនិងមានសេវាកម្មជួយដោះស្រាយបញ្ហា"
      ],
    },
    "netflix_premium": {
      "cover": "p5.jpg",
      "benefits": [
        "ទស្សនាភាពយន្តកម្រិត 4K Ultra HD និង HDR ច្បាស់ត្រជាក់ភ្នែក",
        "ប្រព័ន្ធសំឡេង Spatial Audio បង្កើតអារម្មណ៍ដូចកំពុងទស្សនាក្នុងរោងកុន",
        "អាចទស្សនាបានបួនឧបករណ៍ក្នុងពេលតែមួយ",
        "ទាញយកភាពយន្តទុកមើលពេលគ្មានប្រព័ន្ធអ៊ីនធឺណិតលើគ្រប់ឧបករណ៍",
        "គណនីមានសុវត្ថិភាពមិនដាច់និងមានការធានាពេញមួយខែ"
      ],
    },
    "microsoft_office": {
      "cover": "p8.jpg",
      "benefits": [
        "កញ្ចប់កម្មវិធី Microsoft 365 Premium ពេញលេញរួមមាន Word Excel និង PowerPoint",
        "ទទួលបានទំហំផ្ទុក Cloud ចំនួន 1TB លើកម្មវិធី OneDrive ដោយសុវត្ថិភាពខ្ពស់",
        "មុខងាររក្សាទុកឯកសារស្វ័យប្រវត្តិមិនបារម្ភរឿងបាត់បង់ទិន្នន័យពេលដាច់ភ្លើង",
        "ប្រើប្រាស់បានលើប្រាំឧបករណ៍ក្នុងពេលតែមួយ",
        "ទទួលបានការអាប់ដេតមុខងារនិងប្រព័ន្ធសុវត្ថិភាពថ្មីៗដោយស្វ័យប្រវត្តិ"
      ],
    },
    "telegram_premium": {
      "cover": "p10.jpg",
      "benefits": [
        "អាចផ្ញើឯកសារមានទំហំធំរហូតដល់បួនជីហ្គាបៃយ៉ាងលឿនបំផុត",
        "ទទួលបានល្បឿនទាញយកឯកសារលឿនជាងគណនីធម្មតាទ្វេដង",
        "បំប្លែងសារជាសំឡេងទៅជាអត្ថបទដោយស្វ័យប្រវត្តិនិងមានភាពសុក្រឹតខ្ពស់",
        "ទទួលបានសញ្ញាផ្កាយបញ្ជាក់ពីគណនីពិសេសនិងស្ទីកឃ័រមានចលនាផ្តាច់មុខ",
        "គ្មានការរំខានពីផ្ទាំងពាណិជ្ជកម្មនៅលើប៉ុស្តិ៍នានាទាំងស្រុង"
      ],
    }
  };

  // ============================================
  // PRODUCT MODAL SHEET
  // ============================================
  const productModal = document.getElementById("productModal");
  const pmContent = document.getElementById("pmContent");
  const storeBox = document.querySelector("#store .box");

  function renderProduct(productId) {
    const p = PRODUCTS[productId];
    if (!pmContent || !p) return;

    const benefits = (p.benefits || []).map(li => `<li>${li}</li>`).join("");

    pmContent.innerHTML = `
      <img class="cover" src="${p.cover}" alt="Product image">
      <p>អត្ថប្រយោជន៍ និងលក្ខណៈពិសេស៖</p>
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
});