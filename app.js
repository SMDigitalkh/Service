document.addEventListener("DOMContentLoaded", () => {

  // ============================================
  // PRODUCTS DATA 
  // ============================================
  const PRODUCTS = {
    "capcut_pro": {
      "name": "CapCut Pro",
      "images": ["p9.jpg", "92.jpg", "93.jpg"],
      "benefits": [
        "ដោះសោ Effects និង Filters កម្រិត Premium ធ្វើអោយវីដេអូស្អាតឡើងភ្លាមៗ",
        "មាន Template Ready-made ជាច្រើន អាចប្រើបានភ្លាមៗ មិនបាច់កែច្រើន",
        "អាច Export វីដេអូគុណភាពខ្ពស់ 2K និង 4K ដោយគ្មាន Watermark",
        "មុខងារ Auto Caption បង្កើតអក្សរដោយស្វ័យប្រវត្តិ សន្សំពេលវេលា",
        "Text to Speech បំលែងអក្សរជាសំឡេងបានងាយស្រួល",
        "AI Remove Background កាត់ផ្ទៃខាងក្រោយបានយ៉ាងរហ័ស មិនចាំបាច់ Green Screen",
        "មាន Music និង Sound Effects Premium ប្រើបានដោយសេរី",
        "Multi-layer Editing កែវីដេអូបានជាន់ច្រើនស្រួល និងអាជីព",
        "Color Grading និង LUTs ធ្វើអោយវីដេអូមានស្ទាយដូចភាពយន្ត",
        "Cloud Storage រក្សាទុក Project បានសុវត្ថិភាព និង Sync ឆាប់រហ័ស",
        "អាចប្រើបានទាំងទូរស័ព្ទ និងកុំព្យូទ័រ ដោយដំណើរការលឿន",
        "សាកសមសម្រាប់អ្នកបង្កើត Content TikTok YouTube និង Social Media"
      ],
    },
    "youtube_premium": {
      "name": "YouTube Premium",
      "images": ["p4.jpg", "42.jpg", "43.jpg"],
      "benefits": [
        "មើលវីដេអូគ្មានពាណិជ្ជកម្ម រំខានអារម្មណ៍ទៀតទេ",
        "អាចបិទអេក្រង់ស្ដាប់វីដេអូបាន សមស្របសម្រាប់ស្តាប់ចម្រៀង",
        "Download វីដេអូទុកមើលក្រៅអ៊ីនធឺណិតបានគ្រប់ពេល",
        "ល្បឿនលឿន មើលវីដេអូរលូន មិនបាច់រង់ចាំយូរ",
        "មាន YouTube Music Premium ស្តាប់ចម្រៀងគ្មាន Ads",
        "អាចស្ដាប់ចម្រៀងនៅ Background ខណៈប្រើ App ផ្សេង",
        "គុណភាពវីដេអូខ្ពស់ មើលបានច្បាស់ Full HD និង 4K",
        "មើលវីដេអូបានដោយគ្មានការរំខានពី Pop-up",
        "រក្សាទុក Playlist និង Video ចូលចិត្តបានងាយស្រួល",
        "អាចប្រើបានទាំងទូរស័ព្ទ Tablet និងកុំព្យូទ័រ",
        "បទពិសោធន៍ប្រើប្រាស់ល្អប្រសើរ ដូចជាកម្មវិធី Premium ពិតប្រាកដ",
        "សាកសមសម្រាប់អ្នកស្រលាញ់ការមើលវីដេអូ និងស្តាប់ចម្រៀងរៀងរាល់ថ្ងៃ"
      ],
    },
    "gemini": {
      "name": "Gemini Pro",
      "images": ["p7.jpg", "72.jpg", "73.jpg"],
      "benefits": [
        "ប្រើលើគណនីផ្ទាល់ខ្លួន ថែមជូន 5ពាន់ជីកាបៃ Cloud Storage ដើម្បីរក្សាទុកឯកសាររបស់អ្នក",
        "ជួយសរសេរអត្ថបទ បង្កើត Content និងកែសម្រួលអក្សរបានយ៉ាងអាជីព",
        "អាចសង្ខេបឯកសារ ឬអត្ថបទវែងៗអោយខ្លី និងងាយយល់",
        "ជួយបកប្រែភាសាបានច្រើនភាសា ដោយមានភាពត្រឹមត្រូវខ្ពស់",
        "គាំទ្រការសរសេរកូដ និងពន្យល់ Programming បានយ៉ាងច្បាស់",
        "អាចជួយគិតគំនិតថ្មីៗ សម្រាប់ Business Marketing និង Content Creation",
        "ឆ្លើយតបបានធម្មជាតិ ដូចជាការជជែកជាមួយមនុស្សពិត",
        "អាចប្រើសម្រាប់សិក្សា ស្រាវជ្រាវ និងធ្វើការងារប្រចាំថ្ងៃ",
        "មានសមត្ថភាពវិភាគ និងដោះស្រាយបញ្ហាបានល្អ",
        "ប្រើបានលើទូរស័ព្ទ និងកុំព្យូទ័រ ងាយស្រួលគ្រប់ទីកន្លែង",
        "សន្សំពេលវេលា និងបង្កើនប្រសិទ្ធភាពការងាររបស់អ្នក",
        "សាកសមសម្រាប់សិស្ស និស្សិត និងអ្នកធ្វើការឌីជីថល"
      ],
    },
    "canva_pro": {
      "name": "Canva Pro",
      "images": ["p1.jpg", "12.jpg", "13.jpg"],
      "benefits": [
        "ដោះសោ Template Premium ជាច្រើន សម្រាប់ Poster Logo និង Social Media",
        "មាន Stock Photo Video និង Element គុណភាពខ្ពស់ ប្រើបានដោយសេរី",
        "Remove Background ដោយ AI កាត់រូបបានលឿន និងស្អាត",
        "Magic Resize បម្លែងទំហំ Design បានភ្លាមៗ សមស្របគ្រប់ Platform",
        "Brand Kit រក្សាទុក Logo Font និងពណ៌ សម្រាប់ប្រើជាប់ៗគ្នា",
        "Export គុណភាពខ្ពស់ PNG JPG និង PDF មិនបាត់គុណភាព",
        "មាន Font Premium និង Effect អក្សរធ្វើអោយ Design ទាក់ទាញ",
        "Cloud Storage រក្សាទុកការងារបានសុវត្ថិភាព និង Sync លឿន",
        "អាចធ្វើការជាក្រុម Share និង Edit Design ជាមួយគ្នាបាន",
        "មាន Animation និង Video Editing សម្រាប់បង្កើត Content មានចលនា",
        "ប្រើបានលើទូរស័ព្ទ និងកុំព្យូទ័រ ងាយស្រួលគ្រប់ពេល",
        "សាកសមសម្រាប់ Designer Content Creator និងអ្នកលក់អនឡាញ"
      ],
    },
    "chatgpt_plus": {
      "name": "ChatGPT Plus",
      "images": ["p2.jpg", "22.jpg", "23.jpg"],
      "benefits": [
        "ប្រើម៉ូឌែល AI កម្រិតខ្ពស់ ឆ្លាតជាង និងឆ្លើយតបបានត្រឹមត្រូវជាងមុន",
        "ល្បឿនឆ្លើយតបលឿន និងមានអាទិភាពប្រើប្រាស់នៅពេលម៉ាស៊ីនរវល់",
        "អាច Upload រូបភាព ឯកសារ និងទទួលបានការវិភាគពី AI ដោយផ្ទាល់",
        "គាំទ្រការប្រើប្រាស់ Tools កម្រិតខ្ពស់ សម្រាប់ Data Analysis និង Coding",
        "អាចបង្កើត និងកែសម្រួលរូបភាពដោយ AI បានយ៉ាងងាយស្រួល",
        "មាន Memory រក្សាទុកព័ត៌មានសំខាន់ៗ ដើម្បីឆ្លើយតបបានត្រឹមត្រូវជាងមុន",
        "អាចប្រើ Custom GPTs បង្កើត AI ផ្ទាល់ខ្លួនសម្រាប់ការងារផ្សេងៗ",
        "គាំទ្រការសរសេរ និងបង្កើត Content កម្រិតអាជីព សម្រាប់សិក្សា និងការងារ",
        "អាចប្រើ Voice Chat ជជែកជាមួយ AI ដូចជាមនុស្សពិត",
        "ប្រើបានលើ Web និង Mobile ដោយមានបទពិសោធន៍ល្អ និងស្ថេរភាពខ្ពស់",
        "អាប់ដេតមុខងារថ្មីៗជាបន្តបន្ទាប់ មុនអ្នកប្រើប្រាស់ទូទៅ",
        "សន្សំពេលវេលា និងបង្កើនប្រសិទ្ធភាពការងារបានយ៉ាងច្រើន"
      ],
    },
    "windows_11_pro": {
      "name": "Windows 11 Pro",
      "images": ["p3.jpg", "32.jpg", "33.jpg"],
      "benefits": [
        "មាន BitLocker Encryption ការពារទិន្នន័យឲ្យមានសុវត្ថិភាពខ្ពស់",
        "Remote Desktop អាចចូលប្រើកុំព្យូទ័រពីចម្ងាយបានងាយស្រួល",
        "Hyper V សម្រាប់បង្កើត Virtual Machine ប្រើបានសម្រាប់ Developer",
        "Windows Sandbox សាកល្បងកម្មវិធីដោយសុវត្ថិភាព មិនប៉ះពាល់ប្រព័ន្ធមេ",
        "Group Policy Management គ្រប់គ្រងការកំណត់ប្រព័ន្ធបានលម្អិត",
        "Join Domain និង Azure AD សមស្របសម្រាប់ក្រុមហ៊ុន និងអាជីវកម្ម",
        "Microsoft Store និង App Support ពេញលេញ ប្រើកម្មវិធីបានច្រើន",
        "Performance ល្អ និងដំណើរការលឿន ជាងជំនាន់ចាស់",
        "Security Update ជាបន្តបន្ទាប់ ការពារពីមេរោគ និង Hacker",
        "Snap Layouts និង Multitasking ជួយធ្វើការងារបានលឿនជាងមុន",
        "គាំទ្រ Touch Screen និង Pen សម្រាប់ឧបករណ៍ទំនើប",
        "ប្រើបានលើ Laptop និង Desktop សម្រាប់ការងារ និងអាជីវកម្ម"
      ],
    },
    "netflix_premium": {
      "name": "Netflix Premium",
      "images": ["p5.jpg", "52.jpg", "53.jpg"],
      "benefits": [
        "មើលភាពយន្ត និងស៊េរីល្បីៗជាច្រើនគ្មានពាណិជ្ជកម្ម",
        "មាន Netflix Originals ផ្ទាល់ខ្លួន ដែលមានគុណភាពខ្ពស់",
        "គាំទ្រការមើលគុណភាព HD Full HD និង 4K Ultra HD",
        "អាច Download មើលក្រៅអ៊ីនធឺណិតបានគ្រប់ពេល",
        "មាន Profile ផ្ទាល់ខ្លួន សម្រាប់សមាជិកគ្រួសារ",
        "AI Recommendation ណែនាំភាពយន្តតាមចំណូលចិត្តអ្នក",
        "គាំទ្រច្រើនភាសា ទាំង Subtitle និង Audio",
        "មើលបានលើទូរស័ព្ទ Tablet Smart TV និងកុំព្យូទ័រ",
        "អាចមើលជាមួយមនុស្សច្រើនតាមគម្រោង Family Plan",
        "Interface ងាយប្រើ ស្វែងរកភាពយន្តបានលឿន",
        "មាន Content ថ្មីៗអាប់ដេតជាបន្តបន្ទាប់",
        "សាកសមសម្រាប់អ្នកស្រលាញ់ភាពយន្ត និងកម្សាន្តប្រចាំថ្ងៃ"
      ],
    },
    "microsoft_office": {
      "name": "Microsoft Office 365",
      "images": ["p8.jpg", "82.jpg", "83.jpg"],
      "benefits": [
        "ប្រើ Word Excel PowerPoint និង Outlook កំណែថ្មីៗជានិច្ច",
        "មាន OneDrive Cloud Storage ផ្ទុកឯកសារអនឡាញបានសុវត្ថិភាព",
        "Sync ឯកសារទៅគ្រប់ឧបករណ៍ បើកប្រើបានគ្រប់ទីកន្លែង",
        "អាចធ្វើការជាក្រុម Share និង Edit ឯកសារជាមួយគ្នាបានភ្លាមៗ",
        "មាន AI Copilot ជួយសរសេរ វិភាគ និងបង្កើត Content ឆ្លាតវៃ",
        "គាំទ្រ Email អាជីពតាម Outlook មានស្ថេរភាពខ្ពស់",
        "មាន Template និង Design Ready-made សម្រាប់ការងារ",
        "Export និង Save ឯកសារបានច្រើន Format មិនបាត់គុណភាព",
        "Security ខ្ពស់ ការពារទិន្នន័យ និងការចូលប្រើដោយសុវត្ថិភាព",
        "អាប់ដេតកម្មវិធីថ្មីៗជាបន្តបន្ទាប់ មិនចាំបាច់ទិញម្ដងៗ",
        "ប្រើបានលើ Windows Mac Android និង iOS",
        "សាកសមសម្រាប់សិស្ស និស្សិត និងអាជីវកម្ម"
      ],
    },
    "telegram_premium": {
      "name": "Telegram Premium",
      "images": ["p10.jpg", "102.jpg", "103.jpg"],
      "benefits": [
        "ល្បឿន Download ឯកសារលឿនជាងមុន ដោយគ្មានកំណត់ល្បឿន",
        "ផ្ញើឯកសារទំហំធំបានរហូតដល់ 4GB ក្នុងមួយឯកសារ",
        "Cloud Storage មិនកំណត់ រក្សាទុកឯកសារបានគ្រប់ពេល",
        "Upload និង Download ឯកសារលឿន សមស្របសម្រាប់អ្នកប្រើធ្ងន់",
        "គាំទ្រ Stickers និង Emoji Premium មានចលនា និងពិសេស",
        "អាច Customize App Icon និង Theme បានប្លែកៗ",
        "Voice to Text បំលែងសំឡេងទៅជាអក្សរដោយស្វ័យប្រវត្តិ",
        "គ្មាន Sponsored Ads នៅក្នុង Channel ធ្វើអោយប្រើស្អាតជាងមុន",
        "Chat Management កម្រិតខ្ពស់ សម្រាប់គ្រប់គ្រងសារ និង Channel",
        "អាច Follow Channel និង Join Group បានច្រើនជាងគណនីធម្មតា",
        "Profile Badge Premium បង្ហាញភាពពិសេស និងភាពជាអ្នកប្រើ Pro",
        "បទពិសោធន៍ប្រើប្រាស់លឿន ស្អាត និងមានស្ថេរភាពខ្ពស់"
      ],
    },
    
    // បន្ថែមទិន្នន័យសម្រាប់ សេវាកម្ម (Service)
    "service_poster": {
      "name": "សេវាកម្មឌីហ្សាញ Poster",
      "images": ["poster.jpg", "poster2.jpg", "poster3.jpg"],
      "benefits": [
        "ឌីហ្សាញបែបទំនើប ទាក់ទាញ និងត្រូវតាមចំណូលចិត្តអតិថិជន",
        "ប្រើប្រាស់ពណ៌និងរចនាបថត្រូវតាមអត្តសញ្ញាណអាជីវកម្ម (Brand Identity)",
        "ប្រគល់ File ជាទម្រង់ដើម និងរូបភាពគុណភាពខ្ពស់ (HQ រួចរាល់សម្រាប់ការផុស)",
        "ចំណាយពេលលឿន បញ្ចប់ការងារទាន់ពេលវេលា"
      ],
    },
    "service_logo": {
      "name": "សេវាកម្មឌីហ្សាញ Logo",
      "images": ["logo_design.jpg", "logo2.jpg", "logo3.jpg"],
      "benefits": [
        "ឌីហ្សាញ Logo ប្រកបដោយអត្ថន័យ និងភាពច្នៃប្រឌិតខ្ពស់",
        "ផ្តល់ជូនជម្រើសច្រើនដើម្បីឲ្យអតិថិជនជ្រើសរើស",
        "ប្រគល់ File គ្រប់ទម្រង់ (PNG, JPG, Vector/AI) សម្រាប់យកទៅប្រើប្រាស់បន្ត",
        "អាចស្នើសុំការកែសម្រួលរហូតដល់ពេញចិត្ត (តាមលក្ខខណ្ឌកំណត់)"
      ],
    },

    // បន្ថែមទិន្នន័យសម្រាប់ អាជីវកម្ម (Business)
    "biz_tiktok": {
      "name": "គណនី TikTok",
      "images": ["tiktok.jpg", "tiktok_2.jpg", "tiktok_3.jpg"],
      "benefits": [
        "គណនីមានចំនួនអ្នក Follow ពិតប្រាកដ និងសកម្ម",
        "មិនមានជាប់ប្រវត្តិល្មើសច្បាប់ (No Violation) ធានាសុវត្ថិភាពខ្ពស់",
        "ស័ក្តិសមបំផុតសម្រាប់ចាប់ផ្តើមអាជីវកម្ម ឬការលក់អនឡាញភ្លាមៗ",
        "ជួយផ្តល់ការណែនាំពីរបៀបប្តូរឈ្មោះ និងការពារគណនីក្រោយពេលទិញ"
      ],
    },
    "biz_facebook": {
      "name": "Facebook Page",
      "images": ["fb.jpg", "fb_2.jpg", "fb_3.jpg"],
      "benefits": [
        "ផេកមានសកម្មភាព (Engagement) និងមានអ្នក Like/Follow ពិតប្រាកដ",
        "អាចប្តូរឈ្មោះ និង Link URL បានយ៉ាងងាយស្រួល",
        "ផេកស្អាត មិនជាប់បញ្ហា Policy ឬការរឹតត្បិតណាមួយឡើយ",
        "ស័ក្តិសមសម្រាប់បន្តការលក់ដូរ និងការធ្វើទីផ្សារតាមប្រព័ន្ធឌីជីថល"
      ],
    },
    "biz_telegram": {
      "name": "Telegram Group",
      "images": ["tg.jpg", "tg_2.jpg", "tg_3.jpg"],
      "benefits": [
        "គ្រុបមានសមាជិក (Members) សកម្មពិតប្រាកដ",
        "ស័ក្តិសមសម្រាប់ធ្វើសហគមន៍អតិថិជន ឬផ្សព្វផ្សាយផលិតផល",
        "ផ្ទេរសិទ្ធិ (Ownership) ពេញលេញ ១០០% ទៅឲ្យអ្នកទិញ",
        "ធានាសុវត្ថិភាព និងទំនុកចិត្តក្នុងប្រតិបត្តិការ"
      ],
    }
  };

  // ============================================
  // CATEGORY FILTER LOGIC 
  // ============================================
  const tabBtns = document.querySelectorAll('.tab-btn');
  const storeItems = document.querySelectorAll('.box .item');
  const storeTitleText = document.getElementById('storeTitleText');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // ផ្លាស់ប្តូរពណ៌ប៊ូតុងពេលចុច (Active)
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const targetCategory = btn.dataset.target;

      // ប្តូរអក្សរចំណងជើងតាមប្រភេទ
      if (targetCategory === 'license') {
        storeTitleText.textContent = "សេវាកម្មឡាយសិនកម្មវិធី";
      } else if (targetCategory === 'service') {
        storeTitleText.textContent = "សេវាកម្មឌីហ្សាញ";
      } else if (targetCategory === 'business') {
        storeTitleText.textContent = "សេវាកម្មអាជីវកម្ម និងគណនី";
      }

      // លាក់ និងបង្ហាញទំនិញ
      storeItems.forEach(item => {
        if (item.dataset.category === targetCategory) {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // ============================================
  // PRODUCT MODAL SHEET
  // ============================================
  const productModal = document.getElementById("productModal");
  const pmContent = document.getElementById("pmContent");
  const storeBox = document.querySelector("#store .box");

  function renderProduct(productId) {
    const p = PRODUCTS[productId];
    if (!pmContent || !p) return;

    const imagesHtml = (p.images || []).map(imgSrc => `
      <img class="cover-gallery" src="${imgSrc}" alt="Product gallery image">
    `).join("");

    const benefits = (p.benefits || []).map(li => `<li>${li}</li>`).join("");

    pmContent.innerHTML = `
      <div class="pm-images-container">
        ${imagesHtml}
      </div>
      <p>អត្ថប្រយោជន៍ និងលក្ខណៈពិសេស៖</p>
      <ul class="fix-list">
        ${benefits}
      </ul>
      <button class="btn-store-info" type="button" id="pmBuyBtn">ទិញឥឡូវនេះ</button>
    `;

    const buyBtn = document.getElementById("pmBuyBtn");
    if (buyBtn) {
      // រៀបចំសារស្វ័យប្រវត្តិ ផ្អែកតាមឈ្មោះទំនិញ
      const productName = p.name || "នេះ";
      const message = `សួស្តី! ខ្ញុំចង់ទិញទំនិញ ${productName} តើនៅមានស្តុកទេ? សូមផ្ញើព័ត៌មានបន្ថែម។`;
      
      // បម្លែងសារឲ្យទៅជាទម្រង់ដែលអាចភ្ជាប់ក្នុង URL បាន
      const telegramUrl = `https://t.me/smservicekh?text=${encodeURIComponent(message)}`;
      
      buyBtn.onclick = () => window.open(telegramUrl, "_blank", "noopener");
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

      // ធ្វើការ Reset Scroll មកលើគេបង្អស់ពេលបើក
      if (dialog) {
        dialog.scrollTop = 0;
      }

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