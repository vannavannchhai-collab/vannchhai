/* ══════════════════════════════════════════════════════
   VITSTORE — catalogue  (កែ / បន្ថែមទំនិញនៅទីនេះ)
   cat: shirt | pants | outer | acc
   ══════════════════════════════════════════════════════ */
window.VITSTORE_PRODUCTS = [
  /* ── SHIRTS ────────────────────────────────────────── */
  {
    id: "paisley-shirt",
    code: "VS-01",
    cat: "shirt",
    name: "អាវ Batik Paisley",
    en: "Navy Paisley Long Sleeve",
    price: 18.5,
    oldPrice: 24,
    image: "assets/products/paisley-shirt.jpg",
    badge: "ថ្មី",
    tags: ["ពេញនិយម"],
    desc: "អាវដៃវែងក្រណាត់ Batik លំនាំ Paisley ពណ៌ខៀវចាស់ និងមាស។ កាត់ត្រង់ស្អាត ពាក់បានទាំងទៅធ្វើការ និងចេញលេងពេលល្ងាច។",
    details: [
      "ក្រណាត់ Batik ក្រាស់ មិនស្រួយ មិនរលាស់ពណ៌",
      "កអាវប៊ូតុង ដៃវែង មានក្រវិលដៃ",
      "កាត់ត្រង់ Regular fit ស័ក្ដិសមគ្រប់រាង",
      "លាងដោយដៃ ឬម៉ាស៊ីន ទឹកត្រជាក់"
    ],
    material: "កប្បាស Batik ១០០% · ដៃវែង · កអាវប៊ូតុង",
    sizes: ["S", "M", "L", "XL", "XXL"],
    sizeGuide: { S: "ដងខ្លួន ១០០ស.ម · បណ្ដោយ ៧០ស.ម", M: "ដងខ្លួន ១០៦ស.ម · បណ្ដោយ ៧២ស.ម", L: "ដងខ្លួន ១១២ស.ម · បណ្ដោយ ៧៤ស.ម", XL: "ដងខ្លួន ១១៨ស.ម · បណ្ដោយ ៧៦ស.ម", XXL: "ដងខ្លួន ១២៤ស.ម · បណ្ដោយ ៧៨ស.ម" },
    colors: [
      { name: "ខៀវចាស់", hex: "#22344f" },
      { name: "ខ្មៅ", hex: "#141416" },
      { name: "ត្នោត", hex: "#4a3527" }
    ],
    sold: 186,
    stock: 7
  },
  {
    id: "floral-shirt",
    code: "VS-04",
    cat: "shirt",
    name: "អាវផ្កា Camp Collar",
    en: "Emerald Botanic Camp Shirt",
    price: 16,
    oldPrice: 21,
    image: "assets/products/floral-shirt.jpg",
    badge: "ថ្មី",
    tags: ["រដូវក្ដៅ"],
    desc: "អាវករបត់ដៃខ្លី លំនាំរុក្ខជាតិពណ៌បៃតងជាង។ កាត់ត្រង់ទូលាយ ខ្យល់ចេញចូលល្អ ពាក់បានពេលក្ដៅខ្លាំង។",
    details: [
      "ក្រណាត់ Viscose ស្រាល ត្រជាក់លើស្បែក",
      "ករបត់ (Camp collar) ដៃខ្លី",
      "កាត់ធំ Oversized ស្រួលពាក់",
      "លំនាំរុក្ខជាតិ មិនចេះចាស់សម័យ"
    ],
    material: "Viscose ស្រាល · ដៃខ្លី · ករបត់",
    sizes: ["S", "M", "L", "XL"],
    sizeGuide: { S: "ដងខ្លួន ១០៤ស.ម · បណ្ដោយ ៦៨ស.ម", M: "ដងខ្លួន ១១០ស.ម · បណ្ដោយ ៧០ស.ម", L: "ដងខ្លួន ១១៦ស.ម · បណ្ដោយ ៧២ស.ម", XL: "ដងខ្លួន ១២២ស.ម · បណ្ដោយ ៧៤ស.ម" },
    colors: [
      { name: "បៃតងជាង", hex: "#1f4a3c" },
      { name: "ខ្មៅ", hex: "#191a19" },
      { name: "ស្លាទ្បូ", hex: "#6b6250" }
    ],
    sold: 132,
    stock: 4
  },
  {
    id: "oversized-tee",
    code: "VS-05",
    cat: "shirt",
    name: "អាវយឺត Oversized",
    en: "Sand Heavyweight Boxy Tee",
    price: 11.5,
    oldPrice: 15,
    image: "assets/products/oversized-tee.jpg",
    badge: "ពេញនិយម",
    tags: ["ថោកបំផុត"],
    desc: "អាវយឺតក្រាស់ ២៤០gsm កាត់ត្រង់ Boxy ស្មាធ្លាក់។ ពណ៌បន្លាលឿង ស្រួលរៀបជាមួយខោយីន ឬខោ Cargo។",
    details: [
      "កប្បាស ២៤០gsm ក្រាស់ មិនស្ដើងថ្លាស់",
      "ស្មាធ្លាក់ Boxy fit តាមស្ទីលប្រចាំថ្ងៃ",
      "កអាវយឺតក្រាស់ មិនធូរលឿន",
      "មានគ្រប់ទំហំ ពី S ដល់ XXL"
    ],
    material: "កប្បាស ២៤០gsm · ស្មាធ្លាក់ · Boxy fit",
    sizes: ["S", "M", "L", "XL", "XXL"],
    sizeGuide: { S: "ដងខ្លួន ១០២ស.ម · បណ្ដោយ ៦៨ស.ម", M: "ដងខ្លួន ១០៨ស.ម · បណ្ដោយ ៧០ស.ម", L: "ដងខ្លួន ១១៤ស.ម · បណ្ដោយ ៧២ស.ម", XL: "ដងខ្លួន ១២០ស.ម · បណ្ដោយ ៧៤ស.ម", XXL: "ដងខ្លួន ១២៦ស.ម · បណ្ដោយ ៧៦ស.ម" },
    colors: [
      { name: "បន្លាលឿង", hex: "#cdb794" },
      { name: "ស", hex: "#e9e5dc" },
      { name: "ខ្មៅ", hex: "#151514" }
    ],
    sold: 240,
    stock: 15
  },
  {
    id: "linen-shirt",
    code: "VS-09",
    cat: "shirt",
    name: "អាវ Linen Camp",
    en: "Oat Linen Camp Shirt",
    price: 15.5,
    oldPrice: 19,
    image: "assets/products/linen-shirt.jpg",
    badge: "",
    tags: ["រដូវក្ដៅ"],
    desc: "អាវ Linen ធម្មជាតិ ពណ៌ស្មៅស្រូវ ករបត់ដៃខ្លី។ ស្រាល ត្រជាក់ និងកាន់តែស្អាតពេលពាក់ញឹកញាប់។",
    details: [
      "Linen ១០០% ស្រាល និងខ្យល់ចេញល្អ",
      "ករបត់ ដៃខ្លី មានហោប៉ៅទ្រូង",
      "កាត់ទូលាយ Relaxed fit",
      "ពណ៌ស្មៅស្រូវ ស័ក្ដិសមគ្រប់ពណ៌ស្បែក"
    ],
    material: "Linen ១០០% · ដៃខ្លី · ករបត់",
    sizes: ["S", "M", "L", "XL", "XXL"],
    sizeGuide: { S: "ដងខ្លួន ១០៤ស.ម · បណ្ដោយ ៦៩ស.ម", M: "ដងខ្លួន ១១០ស.ម · បណ្ដោយ ៧១ស.ម", L: "ដងខ្លួន ១១៦ស.ម · បណ្ដោយ ៧៣ស.ម", XL: "ដងខ្លួន ១២២ស.ម · បណ្ដោយ ៧៥ស.ម", XXL: "ដងខ្លួន ១២៨ស.ម · បណ្ដោយ ៧៧ស.ម" },
    colors: [
      { name: "ស្មៅស្រូវ", hex: "#cbb896" },
      { name: "ស", hex: "#eae6dd" },
      { name: "ខ្មៅ", hex: "#171615" }
    ],
    sold: 88,
    stock: 11
  },
  {
    id: "ribbed-sweater",
    code: "VS-12",
    cat: "shirt",
    name: "អាវរងា Ribbed Knit",
    en: "Bone Merino Ribbed Sweater",
    price: 24,
    oldPrice: 30,
    image: "assets/products/ribbed-sweater.jpg",
    badge: "",
    tags: ["រដូវត្រជាក់"],
    desc: "អាវរងាប៉ាក់ក្រាស់ ពណ៌សឆ្អឹង កអាវធំ ស្មាធ្លាក់។ ទន់ កក់ក្ដៅ និងឡើងថ្លៃគ្រប់ឈុត។",
    details: [
      "Merino wool លាយ acrylic ទន់មិនរមាស់",
      "ប៉ាក់ឆ្នូតក្រាស់ កអាវធំ",
      "ស្មាធ្លាក់ Oversized",
      "លាងដោយដៃ សម្ងួតលើផ្ទៃរាបស្មើ"
    ],
    material: "Merino blend · ប៉ាក់ឆ្នូត · កអាវធំ",
    sizes: ["S", "M", "L", "XL"],
    sizeGuide: { S: "ដងខ្លួន ១០៦ស.ម · បណ្ដោយ ៦៦ស.ម", M: "ដងខ្លួន ១១២ស.ម · បណ្ដោយ ៦៨ស.ម", L: "ដងខ្លួន ១១៨ស.ម · បណ្ដោយ ៧០ស.ម", XL: "ដងខ្លួន ១២៤ស.ម · បណ្ដោយ ៧២ស.ម" },
    colors: [
      { name: "សឆ្អឹង", hex: "#ddd4c2" },
      { name: "ខ្មៅ", hex: "#1a1918" },
      { name: "ក្រហមឥដ្ឋ", hex: "#8f4436" }
    ],
    sold: 74,
    stock: 6
  },

  /* ── PANTS ─────────────────────────────────────────── */
  {
    id: "baggy-denim",
    code: "VS-02",
    cat: "pants",
    name: "ខោយីន Baggy Wide-Leg",
    en: "Washed Grey Baggy Denim",
    price: 22,
    oldPrice: 28,
    image: "assets/products/baggy-denim.jpg",
    badge: "ពេញនិយម",
    tags: ["លក់ដាច់បំផុត"],
    desc: "ខោយីនជើងធំ ធុនក្រាស់ ពណ៌ប្រផេះលាងទឹក។ ចង្កេះខ្ពស់ល្មម និងជើងធ្លាក់ស្អាត ស័ក្ដិសមនឹងស្ទីលប្រចាំថ្ងៃបំផុត។",
    details: [
      "យីន ១២oz ក្រាស់ មិនរួញខ្លាំង",
      "ជើងធំ Wide-leg ធ្លាក់ស្អាត",
      "ចង្កេះកណ្ដាល មានរង្វិលខ្សែក្រវាត់",
      "លាងបានដោយម៉ាស៊ីន (បត់ក្នុង)"
    ],
    material: "យីន ១២oz · ជើងធំ · ចង្កេះមានខ្សែក្រវាត់",
    sizes: ["28", "30", "32", "34", "36"],
    sizeGuide: { "28": "ចង្កេះ ៧១ស.ម · បណ្ដោយ ១០០ស.ម", "30": "ចង្កេះ ៧៦ស.ម · បណ្ដោយ ១០២ស.ម", "32": "ចង្កេះ ៨១ស.ម · បណ្ដោយ ១០៤ស.ម", "34": "ចង្កេះ ៨៦ស.ម · បណ្ដោយ ១០៦ស.ម", "36": "ចង្កេះ ៩១ស.ម · បណ្ដោយ ១០៨ស.ម" },
    colors: [
      { name: "ប្រផេះលាង", hex: "#5b5852" },
      { name: "ខ្មៅ", hex: "#1c1b1a" },
      { name: "ខៀវចាស់", hex: "#2b3a4e" }
    ],
    sold: 315,
    stock: 5
  },
  {
    id: "cargo-pants",
    code: "VS-06",
    cat: "pants",
    name: "ខោ Cargo Utility",
    en: "Olive Relaxed Cargo Pants",
    price: 20,
    oldPrice: 26,
    image: "assets/products/cargo-pants.jpg",
    badge: "",
    tags: ["ធន់"],
    desc: "ខោ Cargo ពណ៌បៃតងអូលីវ មានហោប៉ៅធំៗ និងខ្សែដេរលម្អ។ កាត់ត្រង់ Relaxed ស្រួលពាក់ពេលធ្វើដំណើរ។",
    details: [
      "កប្បាស Twill ក្រាស់ មិនចេះរហែកលឿន",
      "ហោប៉ៅ Cargo ៦ (មានគម្រប)",
      "កាត់ Relaxed ចង្កេះកណ្ដាល",
      "ជើងអាចរឹតខ្សែបាន"
    ],
    material: "កប្បាស Twill ក្រាស់ · ហោប៉ៅ Cargo ៦",
    sizes: ["28", "30", "32", "34", "36"],
    sizeGuide: { "28": "ចង្កេះ ៧២ស.ម · បណ្ដោយ ១០១ស.ម", "30": "ចង្កេះ ៧៧ស.ម · បណ្ដោយ ១០៣ស.ម", "32": "ចង្កេះ ៨២ស.ម · បណ្ដោយ ១០៥ស.ម", "34": "ចង្កេះ ៨៧ស.ម · បណ្ដោយ ១០៧ស.ម", "36": "ចង្កេះ ៩២ស.ម · បណ្ដោយ ១០៩ស.ម" },
    colors: [
      { name: "អូលីវ", hex: "#4d5236" },
      { name: "ខ្មៅ", hex: "#1b1b19" },
      { name: "បន្លាលឿង", hex: "#8d7d5e" }
    ],
    sold: 203,
    stock: 9
  },
  {
    id: "track-pants",
    code: "VS-08",
    cat: "pants",
    name: "ខោ Track Wide-Leg",
    en: "Espresso Wide Track Pants",
    price: 17,
    oldPrice: 22,
    image: "assets/products/track-pants.jpg",
    badge: "",
    tags: ["ស្រួលពាក់"],
    desc: "ខោ Track ជើងធំ ក្រណាត់ Satin-twill ពណ៌ត្នោតខ្មៅ។ ចង្កេះយឺត និងមានខ្សែរឹត ស្រួលពាក់ពេលធ្វើដំណើរ ឬសម្រាក។",
    details: [
      "Satin-twill ស្រាល ធ្លាក់ស្អាត",
      "ចង្កេះយឺត មានខ្សែរឹត",
      "ជើងធំ Wide-leg",
      "មានហោប៉ៅពីរ សម្រាប់ទូរស័ព្ទ"
    ],
    material: "Satin-twill ស្រាល · ចង្កេះយឺត · ជើងធំ",
    sizes: ["S", "M", "L", "XL"],
    sizeGuide: { S: "ចង្កេះ ៧០–៨០ស.ម · បណ្ដោយ ១០០ស.ម", M: "ចង្កេះ ៧៤–៨៦ស.ម · បណ្ដោយ ១០២ស.ម", L: "ចង្កេះ ៧៨–៩២ស.ម · បណ្ដោយ ១០៤ស.ម", XL: "ចង្កេះ ៨២–៩៨ស.ម · បណ្ដោយ ១០៦ស.ម" },
    colors: [
      { name: "ត្នោតខ្មៅ", hex: "#3a2d24" },
      { name: "ខ្មៅ", hex: "#171614" },
      { name: "ប្រផេះ", hex: "#5f5b55" }
    ],
    sold: 158,
    stock: 8
  },
  {
    id: "pleated-trousers",
    code: "VS-10",
    cat: "pants",
    name: "ខោ Pleated Trousers",
    en: "Charcoal Pleated Trousers",
    price: 21,
    oldPrice: 27,
    image: "assets/products/pleated-trousers.jpg",
    badge: "ថ្មី",
    tags: ["ឡើងថ្លៃ"],
    desc: "ខោជើងធំ មានផ្នត់ខាងមុខ និងខ្សែកាត់ស្រួច។ ពណ៌ប្រផេះធ្យូង ស័ក្ដិសមពាក់ទៅធ្វើការ ឬពិធីផ្សេងៗ។",
    details: [
      "ក្រណាត់ Poly-viscose ធ្លាក់ស្អាត",
      "ផ្នត់ខាងមុខពីរ (Double pleat)",
      "ចង្កេះខ្ពស់ មានខ្សែក្រវាត់",
      "ជើងធំ Wide-leg មានខ្សែកាត់"
    ],
    material: "Poly-viscose · Double pleat · High waist",
    sizes: ["28", "30", "32", "34", "36"],
    sizeGuide: { "28": "ចង្កេះ ៧២ស.ម · បណ្ដោយ ១០២ស.ម", "30": "ចង្កេះ ៧៧ស.ម · បណ្ដោយ ១០៤ស.ម", "32": "ចង្កេះ ៨២ស.ម · បណ្ដោយ ១០៦ស.ម", "34": "ចង្កេះ ៨៧ស.ម · បណ្ដោយ ១០៨ស.ម", "36": "ចង្កេះ ៩២ស.ម · បណ្ដោយ ១១០ស.ម" },
    colors: [
      { name: "ប្រផេះធ្យូង", hex: "#43413d" },
      { name: "ខ្មៅ", hex: "#171716" },
      { name: "ត្នោតចាស់", hex: "#4b3a2c" }
    ],
    sold: 46,
    stock: 10
  },

  /* ── OUTERWEAR ─────────────────────────────────────── */
  {
    id: "leather-jacket",
    code: "VS-07",
    cat: "outer",
    name: "អាវស្បែក Biker",
    en: "Washed Black Leather Biker",
    price: 45,
    oldPrice: 58,
    image: "assets/products/leather-jacket.jpg",
    badge: "កំណត់ចំនួន",
    tags: ["Premium"],
    desc: "អាវស្បែក Biker ពណ៌ខ្មៅលាង ដៃខ្លីកាត់ Boxy និងខ្សែរ៉ូតធំ។ ជាឈុតសំខាន់សម្រាប់រដូវត្រជាក់។",
    details: [
      "ស្បែក PU គុណភាពខ្ពស់ មានស្រទាប់ក្នុង",
      "ខ្សែរ៉ូតធំ និងហោប៉ៅពីរ",
      "កាត់ Boxy ដៃខ្លី",
      "ជូតសម្អាតដោយក្រណាត់សើម"
    ],
    material: "ស្បែក PU គុណភាពខ្ពស់ · មានស្រទាប់",
    sizes: ["S", "M", "L", "XL"],
    sizeGuide: { S: "ដងខ្លួន ១០៦ស.ម · បណ្ដោយ ៦២ស.ម", M: "ដងខ្លួន ១១២ស.ម · បណ្ដោយ ៦៤ស.ម", L: "ដងខ្លួន ១១៨ស.ម · បណ្ដោយ ៦៦ស.ម", XL: "ដងខ្លួន ១២៤ស.ម · បណ្ដោយ ៦៨ស.ម" },
    colors: [
      { name: "ខ្មៅ", hex: "#131313" },
      { name: "ត្នោត", hex: "#3f2b1e" }
    ],
    sold: 32,
    stock: 3
  },
  {
    id: "denim-jacket",
    code: "VS-11",
    cat: "outer",
    name: "អាវយីន Trucker",
    en: "Washed Indigo Denim Jacket",
    price: 26,
    oldPrice: 33,
    image: "assets/products/denim-jacket.jpg",
    badge: "",
    tags: ["Unisex"],
    desc: "អាវយីន Trucker ពណ៌ខៀវលាង កាត់ខ្លី Boxy មានប៊ូតុងស្ពាន់។ ពាក់បានគ្រប់រដូវ និងគ្រប់ភេទ។",
    details: [
      "យីន ១១oz លាងទឹករួច",
      "ប៊ូតុងស្ពាន់ ហោប៉ៅទ្រូងពីរ",
      "កាត់ខ្លី Boxy ស្មាធ្លាក់",
      "Unisex — ពាក់បានទាំងប្រុសទាំងស្រី"
    ],
    material: "យីន ១១oz · ប៊ូតុងស្ពាន់ · Boxy",
    sizes: ["S", "M", "L", "XL", "XXL"],
    sizeGuide: { S: "ដងខ្លួន ១០៨ស.ម · បណ្ដោយ ៦៣ស.ម", M: "ដងខ្លួន ១១៤ស.ម · បណ្ដោយ ៦៥ស.ម", L: "ដងខ្លួន ១២០ស.ម · បណ្ដោយ ៦៧ស.ម", XL: "ដងខ្លួន ១២៦ស.ម · បណ្ដោយ ៦៩ស.ម", XXL: "ដងខ្លួន ១៣២ស.ម · បណ្ដោយ ៧១ស.ម" },
    colors: [
      { name: "ខៀវលាង", hex: "#4a6178" },
      { name: "ខ្មៅ", hex: "#1b1b1b" },
      { name: "ស", hex: "#dcd8cd" }
    ],
    sold: 121,
    stock: 7
  },
  {
    id: "bomber-jacket",
    code: "VS-13",
    cat: "outer",
    name: "អាវ Bomber MA-1",
    en: "Black Nylon MA-1 Bomber",
    price: 32,
    oldPrice: 40,
    image: "assets/products/bomber-jacket.jpg",
    badge: "",
    tags: ["កក់ក្ដៅ"],
    desc: "អាវ Bomber នីឡុង ពណ៌ខ្មៅម៉ាត់ ករឹត និងហោប៉ៅដៃ។ ស្រាល ការពារខ្យល់ និងស័ក្ដិសមពេលធ្វើដំណើរ។",
    details: [
      "នីឡុងការពារខ្យល់ និងទឹកស្រាលៗ",
      "ករឹត និងចុងដៃរឹត",
      "ហោប៉ៅដៃ (Utility pocket)",
      "មានស្រទាប់ក្នុងកក់ក្ដៅល្មម"
    ],
    material: "នីឡុង · ហោប៉ៅដៃ · Ribbed hem",
    sizes: ["S", "M", "L", "XL"],
    sizeGuide: { S: "ដងខ្លួន ១០៨ស.ម · បណ្ដោយ ៦៤ស.ម", M: "ដងខ្លួន ១១៤ស.ម · បណ្ដោយ ៦៦ស.ម", L: "ដងខ្លួន ១២០ស.ម · បណ្ដោយ ៦៨ស.ម", XL: "ដងខ្លួន ១២៦ស.ម · បណ្ដោយ ៧០ស.ម" },
    colors: [
      { name: "ខ្មៅ", hex: "#161616" },
      { name: "អូលីវ", hex: "#4b4f39" },
      { name: "ប្រផេះ", hex: "#5d5b57" }
    ],
    sold: 67,
    stock: 5
  },
  {
    id: "heavy-hoodie",
    code: "VS-14",
    cat: "outer",
    name: "អាវ Hoodie ក្រាស់",
    en: "Washed Black Heavy Hoodie",
    price: 25,
    oldPrice: 32,
    image: "assets/products/heavy-hoodie.jpg",
    badge: "ពេញនិយម",
    tags: ["ស្រួលពាក់"],
    desc: "អាវ Hoodie ក្រាស់ ៤០០gsm ពណ៌ខ្មៅលាង កាត់ Boxy ស្មាធ្លាក់។ កក់ក្ដៅ និងធន់ណាស់។",
    details: [
      "កប្បាស Fleece ៤០០gsm ក្រាស់",
      "កាត់ Boxy ស្មាធ្លាក់",
      "ហោប៉ៅ Kangaroo និងមួកពីរជាន់",
      "ចុងដៃ និងចង្កេះរឹតក្រាស់"
    ],
    material: "Cotton fleece ៤០០gsm · Boxy · មួកពីរជាន់",
    sizes: ["S", "M", "L", "XL", "XXL"],
    sizeGuide: { S: "ដងខ្លួន ១០៦ស.ម · បណ្ដោយ ៦៦ស.ម", M: "ដងខ្លួន ១១២ស.ម · បណ្ដោយ ៦៨ស.ម", L: "ដងខ្លួន ១១៨ស.ម · បណ្ដោយ ៧០ស.ម", XL: "ដងខ្លួន ១២៤ស.ម · បណ្ដោយ ៧២ស.ម", XXL: "ដងខ្លួន ១៣០ស.ម · បណ្ដោយ ៧៤ស.ម" },
    colors: [
      { name: "ខ្មៅលាង", hex: "#2a2927" },
      { name: "ប្រផេះ", hex: "#6a6763" },
      { name: "បន្លាលឿង", hex: "#c7b394" }
    ],
    sold: 174,
    stock: 12
  },

  /* ── ACCESSORIES ───────────────────────────────────── */
  {
    id: "knit-beanie",
    code: "VS-03",
    cat: "acc",
    name: "មួកប៉ាក់ Rust Beanie",
    en: "Rust Ribbed Knit Beanie",
    price: 6.5,
    oldPrice: 9,
    image: "assets/products/knit-beanie.jpg",
    badge: "",
    tags: ["ថោកបំផុត"],
    desc: "មួកប៉ាក់ក្រាស់ ពណ៌ក្រហមឥដ្ឋ រុំបានទាំងបែបធម្មតា និងបែប slouchy។ កក់ក្ដៅ និងស័ក្ដិសមគ្រប់ឈុត។",
    details: [
      "អំបោះប៉ាក់ទន់ មិនរមាស់",
      "One size យឺតល្មម",
      "រុំបាន ២ បែប",
      "លាងដោយដៃ សម្ងួតក្នុងម្លប់"
    ],
    material: "អំបោះប៉ាក់ទន់ · One Size · យឺតល្មម",
    sizes: ["One Size"],
    sizeGuide: { "One Size": "រង្វង់ក្បាល ៥៤–៦០ស.ម" },
    colors: [
      { name: "ក្រហមឥដ្ឋ", hex: "#8f4436" },
      { name: "ខ្មៅ", hex: "#161514" },
      { name: "ប្រផេះ", hex: "#6d6a63" }
    ],
    sold: 289,
    stock: 12
  },
  {
    id: "sun-glasses",
    code: "VS-15",
    cat: "acc",
    name: "វ៉ែនតា Tortoise",
    en: "Tortoise Rectangular Sunglasses",
    price: 13,
    oldPrice: 18,
    image: "assets/products/sun-glasses.jpg",
    badge: "ថ្មី",
    tags: ["ឡើងថ្លៃ"],
    desc: "វ៉ែនតាស្រមោលស៊ុមក្រាស់ លំនាំ Tortoise កញ្ចក់បៃតងចាស់។ បន្ថែមភាពឡើងថ្លៃឱ្យឈុតភ្លាម។",
    details: [
      "ស៊ុម Acetate ក្រាស់ មិនស្រួយ",
      "កញ្ចក់ការពារ UV400",
      "មកជាមួយប្រអប់ និងក្រណាត់ជូត",
      "Unisex ស័ក្ដិសមគ្រប់មុខ"
    ],
    material: "Acetate · UV400 · មានប្រអប់",
    sizes: ["One Size"],
    sizeGuide: { "One Size": "ទទឹងកញ្ចក់ ៥២ម.ម · ស្ពាន ២០ម.ម" },
    colors: [
      { name: "Tortoise", hex: "#7a4a26" },
      { name: "ខ្មៅ", hex: "#141414" }
    ],
    sold: 96,
    stock: 9
  },
  {
    id: "canvas-bag",
    code: "VS-16",
    cat: "acc",
    name: "កាបូប Canvas Tote",
    en: "Sand Canvas Leather-Trim Tote",
    price: 19,
    oldPrice: 25,
    image: "assets/products/canvas-bag.jpg",
    badge: "",
    tags: ["ធន់"],
    desc: "កាបូប Tote ក្រណាត់ Canvas ក្រាស់ ដៃស្បែកត្នោត និងមានហោប៉ៅក្នុង។ ដាក់ឡាប់ថប និងសៀវភៅបានស្រួល។",
    details: [
      "Canvas ១៦oz ក្រាស់ ធន់",
      "ដៃស្បែកត្នោតពិត",
      "ហោប៉ៅក្នុង ២",
      "ស័ក្ដិសមធ្វើដំណើរ និងទៅរៀន"
    ],
    material: "Canvas ១៦oz · ដៃស្បែក · ហោប៉ៅក្នុង",
    sizes: ["One Size"],
    sizeGuide: { "One Size": "៣៨ × ៤០ × ១២ ស.ម" },
    colors: [
      { name: "ស្មៅស្រូវ", hex: "#c9b593" },
      { name: "ខ្មៅ", hex: "#1b1a19" },
      { name: "អូលីវ", hex: "#575b40" }
    ],
    sold: 73,
    stock: 6
  },
  {
    id: "silk-scarf",
    code: "VS-17",
    cat: "acc",
    name: "កន្សែង Silk Paisley",
    en: "Emerald Silk Paisley Scarf",
    price: 9,
    oldPrice: 13,
    image: "assets/products/silk-scarf.jpg",
    badge: "",
    tags: ["កំណត់ចំនួន"],
    desc: "កន្សែងសូត្រ លំនាំ Paisley បៃតង-មាស។ ចងក ឬរុំកាបូប បន្ថែមពណ៌ឱ្យឈុតភ្លាម។",
    details: [
      "សូត្រ Poly រលោង មិនរួញ",
      "លំនាំ Paisley ពីរជ្រុង",
      "ទំហំ ៩០ × ៩០ ស.ម",
      "លាងដោយដៃតែប៉ុណ្ណោះ"
    ],
    material: "Poly-silk រលោង · ៩០×៩០ស.ម",
    sizes: ["One Size"],
    sizeGuide: { "One Size": "៩០ × ៩០ ស.ម" },
    colors: [
      { name: "បៃតង-មាស", hex: "#1f4a3c" },
      { name: "ក្រហមឥដ្ឋ", hex: "#8a4536" }
    ],
    sold: 41,
    stock: 14
  },
  {
    id: "leather-belt",
    code: "VS-18",
    cat: "acc",
    name: "ខ្សែក្រវាត់ Leather",
    en: "Black Leather Belt",
    price: 12,
    oldPrice: 16,
    image: "assets/products/leather-belt.jpg",
    badge: "",
    tags: ["ធន់"],
    desc: "ខ្សែក្រវាត់ស្បែកពិត ពណ៌ខ្មៅ ក្បាលដែកម៉ាត់។ ធន់ និងស័ក្ដិសមនឹងខោគ្រប់ប្រភេទ។",
    details: [
      "ស្បែកគោពិត ក្រាស់ ៣.៥ម.ម",
      "ក្បាលដែកម៉ាត់ មិនចេះរលោង",
      "កាត់បានតាមទំហំ",
      "មកជាមួយប្រអប់"
    ],
    material: "ស្បែកគោពិត · ក្បាលដែកម៉ាត់",
    sizes: ["30", "32", "34", "36"],
    sizeGuide: { "30": "បណ្ដោយ ៨៥ស.ម", "32": "បណ្ដោយ ៩០ស.ម", "34": "បណ្ដោយ ៩៥ស.ម", "36": "បណ្ដោយ ១០០ស.ម" },
    colors: [
      { name: "ខ្មៅ", hex: "#171615" },
      { name: "ត្នោត", hex: "#4a3524" }
    ],
    sold: 104,
    stock: 8
  }
];

/* category labels + icons for the filter chips */
window.VITSTORE_CATEGORIES = [
  { key: "all", label: "ទាំងអស់" },
  { key: "shirt", label: "អាវ" },
  { key: "pants", label: "ខោ" },
  { key: "outer", label: "អាវក្រៅ" },
  { key: "acc", label: "គ្រឿងបន្ថែម" }
];

/* curated bundles shown in the "ឈុតណែនាំ" section */
window.VITSTORE_LOOKS = [
  {
    id: "look-street",
    name: "ឈុតប្រចាំថ្ងៃ",
    subtitle: "Rue Snuol Street",
    note: "អាវ Batik + ខោ Baggy + មួកប៉ាក់ — ឈុតប្រចាំថ្ងៃដែលមិនចេះចាស់",
    items: ["paisley-shirt", "baggy-denim", "knit-beanie"],
    image: "assets/store-bg.jpg"
  },
  {
    id: "look-summer",
    name: "ឈុតរដូវក្ដៅ",
    subtitle: "Dry Season Ease",
    note: "អាវ Linen + ខោ Track — ស្រាល ត្រជាក់ និងស្រួលពាក់ពេលក្ដៅ",
    items: ["linen-shirt", "track-pants", "sun-glasses"],
    image: "assets/products/linen-shirt.jpg"
  },
  {
    id: "look-night",
    name: "ឈុតពេលល្ងាច",
    subtitle: "After Hours",
    note: "អាវស្បែក + ខោ Pleated — ឈុតឡើងថ្លៃសម្រាប់ចេញលេងពេលយប់",
    items: ["leather-jacket", "pleated-trousers", "leather-belt"],
    image: "assets/products/leather-jacket.jpg"
  }
];
