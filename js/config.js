/* ══════════════════════════════════════════════════════
   VITSTORE — store settings (Read-Only)
   ──────────────────────────────────────────────────────
   ► កែ Telegram នៅទីនេះ ដើម្បីឱ្យកម្មង់ចូលឆាតហាងត្រូវ។
     telegram: "vitstore"      → https://t.me/vitstore
     telegram: "+85512345678"  → https://t.me/+85512345678
   ══════════════════════════════════════════════════════ */
(function () {
  const config = {
    storeName: "Vitstore",
    telegram: "idgafidgaf3",                    // ← username ឬលេខទូរស័ព្ទ Telegram របស់ហាង
    phone: "+855967925615",                     // ← លេខទូរស័ព្ទបង្ហាញលើគេហទំព័រ
    address: "កោះកែវ, ល្វាឯម, កណ្ដាល",
    hours: "៨:០០ — ២០:០០",
    openDays: "រាល់ថ្ងៃ (ច័ន្ទ — អាទិត្យ)",
    usdToKhr: 4100,                             // អត្រាប្ដូរប្រាក់ សម្រាប់បង្ហាញតម្លៃរៀល
    freeShipNote: "ដឹកជញ្ជូនឥតគិតថ្លៃ ក្នុងស្រុកល្វាឯម"
  };

  // ផ្ដល់ភាពសុវត្ថិភាពខ្ពស់ មិនឱ្យគេកែ ឬលុបក្នុង Browser
  Object.freeze(config);

  Object.defineProperty(window, "VITSTORE_CONFIG", {
    value: config,
    writable: false,      // មិនអាចដូរតម្លៃឱ្យទៅ object ផ្សេងបានទេ
    configurable: false,  // មិនអាចលុប ឬដកចេញពី window វិញបានទេ
    enumerable: true
  });
})();
