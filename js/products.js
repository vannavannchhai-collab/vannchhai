/* ══════════════════════════════════════════════════════
   VITSTORE — catalogue  (កែ / បន្ថែមទំនិញនៅទីនេះ)
   cat: shirt | pants | outer | acc
   ══════════════════════════════════════════════════════ */
window.VITSTORE_PRODUCTS = [
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
    desc: "អាវដៃវែងក្រណាត់ Batik លំនាំ Paisley ពណ៌ខៀវចាស់ និងមាស។ កាត់ត្រង់ស្អាត ពាក់បានទាំងទៅធ្វើការ និងចេញលេងពេលល្ងាច។",
    material: "កប្បាស Batik ១០០% · ដៃវែង · កអាវប៊ូតុង",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "ខៀវចាស់", hex: "#22344f" },
      { name: "ខ្មៅ", hex: "#141416" },
      { name: "ត្នោត", hex: "#4a3527" }
    ],
    stock: 7
  },
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
    desc: "ខោយីនជើងធំ ធុនក្រាស់ ពណ៌ប្រផេះលាងទឹក។ ចង្កេះខ្ពស់ល្មម និងជើងធ្លាក់ស្អាត ស័ក្ដិសមនឹងស្ទីលស្នួលបំផុត។",
    material: "យីន ១២oz · ជើងធំ · ចង្កេះមានខ្សែក្រវាត់",
    sizes: ["28", "30", "32", "34", "36"],
    colors: [
      { name: "ប្រផេះលាង", hex: "#5b5852" },
      { name: "ខ្មៅ", hex: "#1c1b1a" },
      { name: "ខៀវចាស់", hex: "#2b3a4e" }
    ],
    stock: 5
  },
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
    desc: "មួកប៉ាក់ក្រាស់ ពណ៌ក្រហមឥដ្ឋ រុំបានទាំងបែបធម្មតា និងបែប slouchy។ កក់ក្ដៅ និងស័ក្ដិសមគ្រប់ឈុត។",
    material: "អំបោះប៉ាក់ទន់ · One Size · យឺតល្មម",
    sizes: ["One Size"],
    colors: [
      { name: "ក្រហមឥដ្ឋ", hex: "#8f4436" },
      { name: "ខ្មៅ", hex: "#161514" },
      { name: "ប្រផេះ", hex: "#6d6a63" }
    ],
    stock: 12
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
    desc: "អាវករបត់ដៃខ្លី លំនាំរុក្ខជាតិពណ៌បៃតងជាង។ កាត់ត្រង់ទូលាយ ខ្យល់ចេញចូលល្អ ពាក់បានពេលក្ដៅខ្លាំង។",
    material: "Viscose ស្រាល · ដៃខ្លី · ករបត់",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "បៃតងជាង", hex: "#1f4a3c" },
      { name: "ខ្មៅ", hex: "#191a19" },
      { name: "ស្លាទ្បូ", hex: "#6b6250" }
    ],
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
    desc: "អាវយឺតក្រាស់ ២៤០gsm កាត់ត្រង់ Boxy ស្មាធ្លាក់។ ពណ៌បន្លាលឿង ស្រួលរៀបជាមួយខោយីន ឬខោ Cargo។",
    material: "កប្បាស ២៤០gsm · ស្មាធ្លាក់ · Boxy fit",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "បន្លាលឿង", hex: "#cdb794" },
      { name: "ស", hex: "#e9e5dc" },
      { name: "ខ្មៅ", hex: "#151514" }
    ],
    stock: 15
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
    desc: "ខោ Cargo ពណ៌បៃតងអូលីវ មានហោប៉ៅធំៗ និងខ្សែដេរលម្អ។ កាត់ត្រង់ Relaxed ស្រួលពាក់ពេលធ្វើដំណើរ។",
    material: "កប្បាស Twill ក្រាស់ · ហោប៉ៅ Cargo ៦",
    sizes: ["28", "30", "32", "34", "36"],
    colors: [
      { name: "អូលីវ", hex: "#4d5236" },
      { name: "ខ្មៅ", hex: "#1b1b19" },
      { name: "បន្លាលឿង", hex: "#8d7d5e" }
    ],
    stock: 9
  },
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
    desc: "អាវស្បែក Biker ពណ៌ខ្មៅលាង ដៃខ្លីកាត់ Boxy និងខ្សែរ៉ូតធំ។ ជាឈុតសំខាន់សម្រាប់រដូវត្រជាក់។",
    material: "ស្បែក PU គុណភាពខ្ពស់ · មានស្រទាប់",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "ខ្មៅ", hex: "#131313" },
      { name: "ត្នោត", hex: "#3f2b1e" }
    ],
    stock: 3
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
    desc: "ខោ Track ជើងធំ ក្រណាត់ Satin-twill ពណ៌ត្នោតខ្មៅ។ ចង្កេះយឺត និងមានខ្សែរឹត ស្រួលពាក់ពេលធ្វើដំណើរ ឬសម្រាក។",
    material: "Satin-twill ស្រាល · ចង្កេះយឺត · ជើងធំ",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "ត្នោតខ្មៅ", hex: "#3a2d24" },
      { name: "ខ្មៅ", hex: "#171614" },
      { name: "ប្រផេះ", hex: "#5f5b55" }
    ],
    stock: 8
  }
];

/* category labels for the filter chips */
window.VITSTORE_CATEGORIES = [
  { key: "all", label: "ទាំងអស់" },
  { key: "shirt", label: "អាវ" },
  { key: "pants", label: "ខោ" },
  { key: "outer", label: "អាវក្រៅ" },
  { key: "acc", label: "គ្រឿងបន្ថែម" }
];
