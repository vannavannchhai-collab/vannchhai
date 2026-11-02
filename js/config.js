/* ══════════════════════════════════════════════════════
   VITSTORE — store settings (Read-Only)
   ──────────────────────────────────────────────────────
   ► កែព័ត៌មានហាងនៅទីនេះតែម្ដង។ ឯកសារនេះត្រូវ freeze ដូច្នេះ
     គេមិនអាចកែតម្លៃវាពី Browser បានទេ។
     telegram: "vitstore"      → https://t.me/vitstore
     telegram: "+85512345678"  → https://t.me/+85512345678
     ឈ្មោះទីតាំងខ្លីៗ (topbar, hero, shop title) ដកចេញពី address
     ដោយស្វ័យប្រវត្តិ — ផ្នែកចុងក្រោយនៃអាសយដ្ឋាន។
   ══════════════════════════════════════════════════════ */
(function() {
  const config = {
    storeName: "Vitstore",
    telegram: "idgafidgaf3",
    phone: "+855967925615",
    address: "កោះកែវ, ល្វាឯម, កណ្ដាល",
    hours: "៨:០០ — ២០:០០",
    openDays: "រាល់ថ្ងៃ (ច័ន្ទ — អាទិត្យ)",
    usdToKhr: 4100,
    freeShipNote: "ដឹកជញ្ជូនឥតគិតថ្លៃ ក្នុងស្រុកល្វាឯម"
  };

  // ផ្ដល់ភាពសុវត្ថិភាពខ្ពស់ មិនឱ្យគេកែ ឬលុបក្នុង Browser 
  Object.freeze(config);

  Object.defineProperty(window, 'VITSTORE_CONFIG', {
    value: config,
    writable: false,      // មិនអាចដូរតម្លៃឱ្យទៅ object ផ្សេងបានទេ
    configurable: false,  // មិនអាចលុប ឬដកចេញពី window វិញបានទេ
    enumerable: true
  });
})();
