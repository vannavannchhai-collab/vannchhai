/* ══════════════════════════════════════════════════════
   VITSTORE — app
   ══════════════════════════════════════════════════════ */
(function () {
  "use strict";

  const CFG = window.VITSTORE_CONFIG || {};
  const PRODUCTS = window.VITSTORE_PRODUCTS || [];
  const CATS = window.VITSTORE_CATEGORIES || [];
  const LS_CART = "vitstore_cart_v1";
  const LS_SET = "vitstore_settings_v1";
  const LS_BUYER = "vitstore_buyer_v1";

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* ── state ─────────────────────────────────────────── */
  let settings = Object.assign({}, CFG);
  let cart = [];
  let buyer = { name: "", phone: "", address: "", note: "" };
  let filter = "all";
  let visible = PRODUCTS.slice();
  let current = null;             // product open in modal
  let sel = { size: "", color: 0, qty: 1 };
  let lastFocus = null;
  let dragMoved = false;
  const fileCache = new Map();

  /* ── storage ───────────────────────────────────────── */
  const read = (k, fb) => { try { const v = JSON.parse(localStorage.getItem(k)); return v == null ? fb : v; } catch (e) { return fb; } };
  const write = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} };

  /* ── money ─────────────────────────────────────────── */
  const usd = (n) => "$" + n.toFixed(2);
  const khr = (n) => {
    const rate = Number(settings.usdToKhr) || 4100;
    const v = Math.round((n * rate) / 100) * 100;
    return v.toLocaleString("en-US");
  };
  const catLabel = (k) => (CATS.find((c) => c.key === k) || {}).label || k;
  const product = (id) => PRODUCTS.find((p) => p.id === id);

  /* ── telegram ──────────────────────────────────────── */
  const tgHandle = () => String(settings.telegram || "").trim().replace(/^@/, "");
  const tgBase = () => "https://t.me/" + tgHandle().replace(/[\s()-]/g, "");
  const tgLink = (text) => (text ? tgBase() + "?text=" + encodeURIComponent(text) : tgBase());

  function updateTelegramLinks() {
    $$("[data-telegram]").forEach((el) => {
      el.setAttribute("href", tgLink(""));
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener");
    });
    const tgText = $("#contactTg");
    if (tgText) tgText.textContent = "@" + (String(settings.telegram || "").replace(/^@/, "") || "vitstore");
    const phoneEl = $("#contactPhone");
    if (phoneEl) phoneEl.textContent = settings.phone || "";
    const card = $("#contactPhoneCard");
    if (card) card.setAttribute("href", "tel:" + String(settings.phone || "").replace(/[^\d+]/g, ""));
    const addr = $("#contactAddr");
    if (addr) addr.textContent = settings.address || "";
    $$(".js-hours").forEach((el) => (el.textContent = settings.hours || ""));
    $$(".js-days").forEach((el) => (el.textContent = settings.openDays || ""));
  }

  const isNumericHandle = () => /^[+]?[\d\s()-]+$/.test(tgHandle());

  function openTelegram(text) {
    // t.me/<username>?text= prefills the chat box; t.me/<phone> does not,
    // so for phone handles we put the order on the clipboard first.
    if (text && isNumericHandle()) copyText(text);
    const url = tgLink(text && !isNumericHandle() ? text : "");
    const win = window.open(url, "_blank", "noopener");
    if (!win) location.href = url;
    return win;
  }

  function copyText(text) {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).catch(() => {});
        return true;
      }
    } catch (e) {}
    return false;
  }

  /* ── message builder ───────────────────────────────── */
  function orderRef() {
    const d = new Date();
    const p = (n) => String(n).padStart(2, "0");
    return "VS" + String(d.getFullYear()).slice(2) + p(d.getMonth() + 1) + p(d.getDate()) + "-" + p(d.getHours()) + p(d.getMinutes());
  }

  function lineTotal(it) {
    const p = product(it.id);
    return p ? p.price * it.qty : 0;
  }
  function cartTotal() { return cart.reduce((s, it) => s + lineTotal(it), 0); }
  function cartCount() { return cart.reduce((s, it) => s + it.qty, 0); }

  function buildMessage(items, kind) {
    const total = items.reduce((s, it) => s + lineTotal(it), 0);
    const L = [];
    L.push("🛍️ កម្មង់ថ្មី — VITSTORE");
    L.push("លេខកម្មង់: " + orderRef());
    L.push("──────────────────");
    items.forEach((it, i) => {
      const p = product(it.id);
      if (!p) return;
      L.push((i + 1) + ". " + p.name);
      L.push("     លេខម៉ូដែល: " + p.code + " · " + catLabel(p.cat));
      L.push("     ទំហំ: " + it.size + " · ពណ៌: " + it.color);
      L.push("     ចំនួន: " + it.qty + " · " + usd(lineTotal(it)));
    });
    L.push("──────────────────");
    L.push("សរុប: " + usd(total) + "  (≈ " + khr(total) + "៛)");
    L.push("ដឹកជញ្ជូន: " + (settings.freeShipNote || ""));
    if (kind !== "single") {
      const f = [];
      if (buyer.name) f.push("ឈ្មោះ: " + buyer.name);
      if (buyer.phone) f.push("ទូរស័ព្ទ/Telegram: " + buyer.phone);
      if (buyer.address) f.push("អាសយដ្ឋាន: " + buyer.address);
      if (buyer.note) f.push("ចំណាំ: " + buyer.note);
      if (f.length) { L.push("──────────────────"); L.push(...f); }
    }
    L.push("──────────────────");
    L.push("ផ្ញើពីគេហទំព័រ vitstore 🌐");
    return L.join("\n");
  }

  /* ── toast ─────────────────────────────────────────── */
  let toastTimer = null;
  function toast(msg) {
    const el = $("#toast");
    if (!el) return;
    el.innerHTML = '<svg class="ico"><use href="#i-check"></use></svg><span>' + esc(msg) + "</span>";
    el.hidden = false;
    el.style.animation = "none";
    void el.offsetWidth;
    el.style.animation = "";
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => (el.hidden = true), 3200);
  }

  /* ══════════════════════════════════════════════════
     RAIL
     ══════════════════════════════════════════════════ */
  const vp = $("#railViewport");
  const track = $("#railTrack");

  function hangerSVG() {
    return (
      '<svg viewBox="0 0 74 44" fill="none" aria-hidden="true">' +
      '<path d="M37 6c0-3 2-4.4 4.4-4.4S46 3 46 5.6c0 3.2-4.3 4.3-4.3 8.4v2.6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>' +
      '<path d="M41.7 16.6 10.3 33.4c-2.5 1.4-1.5 5.1 1.4 5.1h50.6c2.9 0 3.9-3.7 1.4-5.1L41.7 16.6Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>' +
      "</svg>"
    );
  }

  function cardHTML(p, i) {
    const badge = p.badge
      ? '<span class="card__badge' + (p.stock <= 0 ? " card__badge--out" : "") + '">' + esc(p.badge) + "</span>"
      : "";
    const sizeRange = p.sizes.length > 1 ? p.sizes[0] + " — " + p.sizes[p.sizes.length - 1] : p.sizes[0];
    return (
      '<article class="card" style="--i:' + i + '" data-id="' + esc(p.id) + '">' +
        '<span class="card__hanger">' + hangerSVG() + "</span>" +
        '<div class="card__inner">' +
          '<div class="card__media">' +
            badge +
            '<span class="card__code">' + esc(p.code) + "</span>" +
            '<img src="' + esc(p.image) + '" alt="' + esc(p.name) + '" loading="' + (i < 4 ? "eager" : "lazy") + '" decoding="async" draggable="false">' +
            '<span class="card__hover">មើលតម្លៃ &amp; កម្មង់ <svg class="ico"><use href="#i-right"></use></svg></span>' +
          "</div>" +
          '<div class="card__body">' +
            '<span class="card__cat">' + esc(catLabel(p.cat)) + "</span>" +
            '<h3 class="card__name">' + esc(p.name) + "</h3>" +
            '<span class="card__en">' + esc(p.en) + "</span>" +
            '<div class="card__foot">' +
              '<span class="card__price">' + usd(p.price) +
                (p.oldPrice ? '<span class="card__old">' + usd(p.oldPrice) + "</span>" : "") +
                '<small>≈ ' + khr(p.price) + "៛</small></span>" +
              '<span class="card__colors">' + p.colors.map((c) => '<i style="background:' + esc(c.hex) + '"></i>').join("") + "</span>" +
            "</div>" +
            '<span class="card__sizes">ទំហំ ' + esc(sizeRange) + "</span>" +
          "</div>" +
        "</div>" +
        '<button class="card__open" type="button" aria-label="មើល ' + esc(p.name) + " — " + usd(p.price) + '"></button>' +
      "</article>"
    );
  }

  function renderRail() {
    track.innerHTML = visible.map(cardHTML).join("");
    requestAnimationFrame(() => {
      vp.scrollLeft = 0;
      updateRailUI();
    });
  }

  function renderFilters() {
    const box = $("#filters");
    box.innerHTML = CATS.map((c) => {
      const n = c.key === "all" ? PRODUCTS.length : PRODUCTS.filter((p) => p.cat === c.key).length;
      return '<button class="chip' + (c.key === filter ? " is-active" : "") + '" data-filter="' + c.key + '" type="button">' +
        esc(c.label) + "<span>" + String(n).padStart(2, "0") + "</span></button>";
    }).join("");
  }

  function cardStep() {
    const cards = $$(".card", track);
    if (cards.length < 2) return cards[0] ? cards[0].offsetWidth : vp.clientWidth;
    return cards[1].offsetLeft - cards[0].offsetLeft;
  }

  function activeIndex() {
    const cards = $$(".card", track);
    if (!cards.length) return 0;
    let best = 0, bestD = Infinity;
    cards.forEach((c, i) => {
      const d = Math.abs(c.offsetLeft - vp.scrollLeft);
      if (d < bestD) { bestD = d; best = i; }
    });
    return best;
  }

  function scrollToIndex(i, smooth = true) {
    const cards = $$(".card", track);
    if (!cards.length) return;
    const idx = clamp(i, 0, cards.length - 1);
    vp.scrollTo({ left: cards[idx].offsetLeft, behavior: smooth ? "smooth" : "auto" });
  }

  let railTicking = false;
  function updateRailUI() {
    const cards = $$(".card", track);
    const total = cards.length;
    const i = activeIndex();
    $("#railCount").textContent = total ? String(i + 1).padStart(2, "0") + " / " + String(total).padStart(2, "0") : "00 / 00";

    const max = vp.scrollWidth - vp.clientWidth;
    const prog = $("#railProgress");
    if (prog) {
      const wPct = max <= 1 ? 100 : clamp((vp.clientWidth / vp.scrollWidth) * 100, 6, 100);
      const ratio = max <= 1 ? 0 : clamp(vp.scrollLeft / max, 0, 1);
      prog.style.width = wPct + "%";
      prog.style.transform = "translateX(" + (ratio * (100 - wPct) / wPct) * 100 + "%)";
    }
    $("#railPrev").disabled = vp.scrollLeft < 4;
    $("#railNext").disabled = vp.scrollLeft > max - 4;
  }

  function onRailScroll() {
    if (railTicking) return;
    railTicking = true;
    requestAnimationFrame(() => { updateRailUI(); railTicking = false; });
  }

  vp.addEventListener("scroll", onRailScroll, { passive: true });
  window.addEventListener("resize", () => requestAnimationFrame(updateRailUI));

  /* arrows */
  $("#railPrev").addEventListener("click", () => scrollToIndex(activeIndex() - 1));
  $("#railNext").addEventListener("click", () => scrollToIndex(activeIndex() + 1));

  /* keyboard */
  vp.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") { e.preventDefault(); scrollToIndex(activeIndex() + 1); }
    if (e.key === "ArrowLeft") { e.preventDefault(); scrollToIndex(activeIndex() - 1); }
  });

  /* mouse / pen drag-to-scroll (touch uses native scrolling) */
  let down = false, startX = 0, startScroll = 0, moved = false, lastX = 0, lastT = 0, vx = 0, dragId = null;

  vp.addEventListener("pointerdown", (e) => {
    if (e.pointerType === "touch") return;
    if (e.button !== 0) return;
    down = true; moved = false;
    startX = e.clientX; startScroll = vp.scrollLeft;
    lastX = e.clientX; lastT = performance.now(); vx = 0;
    dragId = e.pointerId;
  });

  vp.addEventListener("pointermove", (e) => {
    if (!down || e.pointerId !== dragId) return;
    const dx = e.clientX - startX;
    if (!moved && Math.abs(dx) > 5) {
      moved = true;
      dragMoved = true;
      vp.classList.add("is-dragging");
      try { vp.setPointerCapture(e.pointerId); } catch (err) {}
    }
    if (!moved) return;
    e.preventDefault();
    vp.scrollLeft = startScroll - dx;
    const now = performance.now();
    const dt = now - lastT;
    if (dt > 0) { vx = (e.clientX - lastX) / dt; lastX = e.clientX; lastT = now; }
    updateRailUI();
  }, { passive: false });

  function endDrag(e) {
    if (!down) return;
    down = false;
    if (!moved) { dragId = null; return; }
    vp.classList.remove("is-dragging");
    // fling then snap
    const fling = clamp(vx * 220, -vp.clientWidth * 0.7, vp.clientWidth * 0.7);
    const target = vp.scrollLeft - fling;
    const cards = $$(".card", track);
    let best = 0, bestD = Infinity;
    cards.forEach((c, i) => { const d = Math.abs(c.offsetLeft - target); if (d < bestD) { bestD = d; best = i; } });
    scrollToIndex(best);
    dragId = null;
    setTimeout(() => { dragMoved = false; }, 60);
  }
  vp.addEventListener("pointerup", endDrag);
  vp.addEventListener("pointercancel", endDrag);
  vp.addEventListener("pointerleave", (e) => { if (down && moved) endDrag(e); });

  /* suppress click right after a drag */
  vp.addEventListener("click", (e) => {
    if (!dragMoved) return;
    e.preventDefault();
    e.stopPropagation();
  }, true);

  /* open product */
  track.addEventListener("click", (e) => {
    const opener = e.target.closest(".card__open");
    if (!opener) return;
    const card = opener.closest(".card");
    if (!card) return;
    const p = product(card.dataset.id);
    if (p) openProduct(p, opener);
  });

  /* filters */
  $("#filters").addEventListener("click", (e) => {
    const chip = e.target.closest("[data-filter]");
    if (!chip) return;
    filter = chip.dataset.filter;
    $$("#filters .chip").forEach((c) => c.classList.toggle("is-active", c === chip));
    visible = filter === "all" ? PRODUCTS.slice() : PRODUCTS.filter((p) => p.cat === filter);
    renderRail();
  });

  /* ══════════════════════════════════════════════════
     PRODUCT MODAL
     ══════════════════════════════════════════════════ */
  const pModal = $("#productModal");

  function openProduct(p, opener) {
    current = p;
    lastFocus = opener || document.activeElement;
    sel = { size: p.sizes[0], color: 0, qty: 1 };

    $("#pmImage").src = p.image;
    $("#pmImage").alt = p.name;
    $("#pmCat").textContent = catLabel(p.cat) + " · " + p.code;
    $("#pmTitle").textContent = p.name;
    $("#pmEn").textContent = p.en;
    $("#pmPrice").textContent = usd(p.price);
    const old = $("#pmOld");
    old.hidden = !p.oldPrice;
    if (p.oldPrice) old.textContent = usd(p.oldPrice);
    $("#pmRiel").textContent = "≈ " + khr(p.price) + "៛ · ក្នុងមួយ";
    $("#pmDesc").textContent = p.desc;
    $("#pmMeta").textContent = p.material;

    const tag = $("#pmTag");
    tag.hidden = !p.badge;
    if (p.badge) tag.textContent = p.badge;

    const stock = $("#pmStock");
    stock.classList.toggle("is-out", p.stock <= 0);
    stock.innerHTML = "<i></i>" + (p.stock > 0 ? "មានទំនិញ " + p.stock + " ដុំ" : "អស់ស្តុក");

    renderOptions();
    $("#pmQty").textContent = "1";
    $("#pmQtyVal").textContent = "១ ដុំ";

    pModal.hidden = false;
    document.body.classList.add("is-sheet-open");
    lockBody(true);
    requestAnimationFrame(() => {
      pModal.classList.add("is-open");
      $("#pmTitle").focus?.();
      const close = pModal.querySelector(".modal__close");
      if (close) close.focus({ preventScroll: true });
    });
  }

  function renderOptions() {
    if (!current) return;
    const sizeBox = $("#pmSizes");
    sizeBox.innerHTML = current.sizes.map((s) =>
      '<button class="size-btn' + (s === sel.size ? " is-active" : "") + '" data-size="' + esc(s) + '" type="button">' + esc(s) + "</button>"
    ).join("");
    $("#pmSizeVal").textContent = sel.size;

    const colorBox = $("#pmColors");
    colorBox.innerHTML = current.colors.map((c, i) =>
      '<button class="color-btn' + (i === sel.color ? " is-active" : "") + '" data-color="' + i + '" type="button">' +
        '<i style="background:' + esc(c.hex) + '"></i>' + esc(c.name) + "</button>"
    ).join("");
    $("#pmColorVal").textContent = current.colors[sel.color] ? current.colors[sel.color].name : "";

    $("#pmQty").textContent = String(sel.qty);
    $("#pmQtyVal").textContent = sel.qty + " ដុំ";
  }

  $("#pmSizes").addEventListener("click", (e) => {
    const b = e.target.closest("[data-size]");
    if (!b) return;
    sel.size = b.dataset.size;
    renderOptions();
  });
  $("#pmColors").addEventListener("click", (e) => {
    const b = e.target.closest("[data-color]");
    if (!b) return;
    sel.color = Number(b.dataset.color);
    renderOptions();
  });
  $('[data-qty="modal"]').addEventListener("click", (e) => {
    const b = e.target.closest("[data-step]");
    if (!b) return;
    sel.qty = clamp(sel.qty + Number(b.dataset.step), 1, 20);
    renderOptions();
  });

  function closeProduct() {
    pModal.hidden = true;
    document.body.classList.remove("is-sheet-open");
    pModal.classList.remove("is-open");
    current = null;
    if (!isAnyOverlayOpen()) lockBody(false);
    if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
  }

  $$("[data-close-product]").forEach((el) => el.addEventListener("click", closeProduct));

  function orderLine(p, size, colorName, qty) {
    return { id: p.id, size: size, color: colorName, qty: qty };
  }

  $("#pmOrder").addEventListener("click", () => {
    if (!current) return;
    const it = orderLine(current, sel.size, current.colors[sel.color].name, sel.qty);
    const msg = buildMessage([it], "single");
    openTelegram(msg);
    toast("កំពុងបើក Telegram — ចុច Send ដើម្បីផ្ញើកម្មង់");
    closeProduct();
  });

  $("#pmAdd").addEventListener("click", () => {
    if (!current) return;
    addToCart(current, sel.size, current.colors[sel.color].name, sel.qty);
    closeProduct();
    openCart();
    highlightLastItem();
  });

  /* ══════════════════════════════════════════════════
     CART
     ══════════════════════════════════════════════════ */
  const drawer = $("#cartDrawer");

  function saveCart() { write(LS_CART, cart); updateBadge(); }

  function addToCart(p, size, color, qty) {
    const found = cart.find((it) => it.id === p.id && it.size === size && it.color === color);
    if (found) found.qty = clamp(found.qty + qty, 1, 30);
    else cart.push({ id: p.id, size: size, color: color, qty: qty });
    saveCart();
    renderCart();
    const btn = $("#cartBtn");
    btn.classList.remove("is-bumped");
    void btn.offsetWidth;
    btn.classList.add("is-bumped");
  }

  function updateBadge() {
    const n = cartCount();
    const el = $("#cartCount");
    el.textContent = String(n);
    el.hidden = n === 0;
  }

  function itemHTML(it, i) {
    const p = product(it.id);
    if (!p) return "";
    return (
      '<div class="cart-item" data-idx="' + i + '">' +
        '<img class="cart-item__img" src="' + esc(p.image) + '" alt="' + esc(p.name) + '" loading="lazy">' +
        "<div>" +
          '<div class="cart-item__name">' + esc(p.name) + "</div>" +
          '<div class="cart-item__opt">' + esc(p.code) + " · ទំហំ " + esc(it.size) + " · " + esc(it.color) + "</div>" +
          '<div class="cart-item__price">' + usd(lineTotal(it)) + "</div>" +
          '<div class="qty qty--sm" data-cart-qty="' + i + '">' +
            '<button type="button" data-d="-1" aria-label="បន្ថយ"><svg class="ico"><use href="#i-minus"></use></svg></button>' +
            "<span>" + it.qty + "</span>" +
            '<button type="button" data-d="1" aria-label="បន្ថែម"><svg class="ico"><use href="#i-plus"></use></svg></button>' +
          "</div>" +
        "</div>" +
        '<div class="cart-item__side">' +
          '<button class="cart-item__rm" data-rm="' + i + '" aria-label="ដកចេញ"><svg class="ico"><use href="#i-close"></use></svg></button>' +
        "</div>" +
      "</div>"
    );
  }

  function renderCart() {
    const empty = $("#cartEmpty");
    const items = $("#cartItems");
    const foot = $("#cartFoot");
    const form = $("#cartForm");
    const total = cartTotal();

    items.innerHTML = cart.map(itemHTML).join("");
    const isEmpty = cart.length === 0;
    empty.hidden = !isEmpty;
    items.hidden = isEmpty;
    foot.hidden = isEmpty;
    form.hidden = isEmpty;

    $("#cartTotal").textContent = usd(total);
    $("#cartRiel").textContent = "≈ " + khr(total) + "៛";
    $("#cartSub").textContent = isEmpty ? "រើសខោអាវដែលអ្នកចង់បាន" : cartCount() + " ដុំ · " + cart.length + " ម៉ូដែល";
    updateBadge();
  }

  function highlightLastItem() {
    const nodes = $$(".cart-item", $("#cartItems"));
    const el = nodes[nodes.length - 1];
    if (!el) return;
    el.classList.add("cart-item--new");
    setTimeout(() => el.classList.remove("cart-item--new"), 1800);
  }

  $("#cartItems").addEventListener("click", (e) => {
    const rm = e.target.closest("[data-rm]");
    if (rm) {
      const i = Number(rm.dataset.rm);
      const removed = cart[i];
      cart.splice(i, 1);
      saveCart(); renderCart();
      if (removed) toast("ដកចេញពីកន្ត្រក");
      return;
    }
    const step = e.target.closest("[data-d]");
    if (step) {
      const wrap = step.closest("[data-cart-qty]");
      if (!wrap) return;
      const i = Number(wrap.dataset.cartQty);
      cart[i].qty = clamp(cart[i].qty + Number(step.dataset.d), 1, 30);
      saveCart(); renderCart();
    }
  });

  function openCart() {
    lastFocus = document.activeElement;
    renderCart();
    drawer.hidden = false;
    document.body.classList.add("is-drawer-open");
    lockBody(true);
    const close = drawer.querySelector("[data-close-cart]");
    if (close) setTimeout(() => close.focus({ preventScroll: true }), 60);
  }
  function closeCart() {
    drawer.hidden = true;
    document.body.classList.remove("is-drawer-open");
    if (!isAnyOverlayOpen()) lockBody(false);
    if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
  }

  $("#cartBtn").addEventListener("click", openCart);
  $$("[data-close-cart]").forEach((el) => el.addEventListener("click", closeCart));
  $("#emptyShopBtn").addEventListener("click", () => {
    closeCart();
    $("#shop").scrollIntoView({ behavior: "smooth", block: "start" });
  });
  $("#clearCart").addEventListener("click", () => {
    if (!cart.length) return;
    cart = [];
    saveCart(); renderCart();
    toast("សម្អាតកន្ត្រករួចរាល់");
  });

  /* buyer form */
  const fields = { cName: "name", cPhone: "phone", cAddr: "address", cNote: "note" };
  Object.keys(fields).forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.value = buyer[fields[id]] || "";
    el.addEventListener("input", () => {
      buyer[fields[id]] = el.value.trim();
      write(LS_BUYER, buyer);
    });
  });

  /* send order */
  function sendOrder(share) {
    if (!cart.length) return;
    const msg = buildMessage(cart, "cart");
    write(LS_BUYER, buyer);
    if (!share) {
      openTelegram(msg);
      toast("កំពុងបើក Telegram — ចុច Send ដើម្បីផ្ញើ");
      return;
    }
    // share with images (mobile) — falls back to text message
    shareWithImages(msg);
  }

  async function getFile(p) {
    if (fileCache.has(p.id)) return fileCache.get(p.id);
    const res = await fetch(p.image);
    const blob = await res.blob();
    const name = p.id + ".jpg";
    const f = new File([blob], name, { type: blob.type || "image/jpeg" });
    fileCache.set(p.id, f);
    return f;
  }

  async function shareWithImages(msg) {
    try {
      const files = await Promise.all(cart.map((it) => getFile(product(it.id))));
      const payload = { files: files.slice(0, 10), text: msg };
      if (navigator.canShare && navigator.canShare({ files: payload.files })) {
        await navigator.share(payload);
        toast("ចែករំលែករួចរាល់ — រើស Telegram");
        return;
      }
    } catch (err) {
      /* cancelled or unsupported */
      if (err && err.name === "AbortError") return;
    }
    try {
      await navigator.clipboard.writeText(msg);
      toast("ចម្លងសារ — សូមភ្ជាប់រូបភាពក្នុង Telegram");
    } catch (e) {
      toast("ឧបករណ៍មិនគាំទ្រការផ្ញើរូបភាព — សូមចម្លងសារ");
    }
    openTelegram("");
  }

  $("#sendTelegram").addEventListener("click", () => sendOrder(false));
  $("#shareImages").addEventListener("click", () => sendOrder(true));
  $("#copyMsg").addEventListener("click", async () => {
    if (!cart.length) return;
    const msg = buildMessage(cart, "cart");
    try {
      await navigator.clipboard.writeText(msg);
      toast("ចម្លងសារកម្មង់រួចរាល់");
    } catch (e) {
      const ta = document.createElement("textarea");
      ta.value = msg; document.body.appendChild(ta); ta.select();
      try { document.execCommand("copy"); toast("ចម្លងសារកម្មង់រួចរាល់"); }
      catch (e2) { toast("មិនអាចចម្លងបានទេ"); }
      ta.remove();
    }
  });

  /* ══════════════════════════════════════════════════
     SETTINGS
     ══════════════════════════════════════════════════ */
  const setModal = $("#settingsModal");

  function openSettings() {
    lastFocus = document.activeElement;
    $("#setUsername").value = String(settings.telegram || "");
    $("#setPhone").value = String(settings.phone || "");
    setModal.hidden = false;
    lockBody(true);
    setTimeout(() => $("#setUsername").focus({ preventScroll: true }), 80);
  }
  function closeSettings() {
    setModal.hidden = true;
    if (!isAnyOverlayOpen()) lockBody(false);
    if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
  }
  $("#settingsBtn").addEventListener("click", openSettings);
  $$("[data-close-settings]").forEach((el) => el.addEventListener("click", closeSettings));

  $("#saveSettings").addEventListener("click", () => {
    const raw = $("#setUsername").value.trim().replace(/\s+/g, "");
    const u = raw.replace(/^@/, "").replace(/^https?:\/\/(t\.me|telegram\.me)\//i, "");
    const ph = $("#setPhone").value.trim();
    if (!u) { toast("សូមដាក់ Telegram username"); return; }
    if (!/^(\+?\d{8,15}|[a-zA-Z][a-zA-Z0-9_]{3,31})$/.test(u)) {
      toast("username មិនត្រឹមត្រូវ — ឧ. vitstore ឬ +85512345678");
      return;
    }
    settings.telegram = u;
    if (ph) settings.phone = ph;
    write(LS_SET, { telegram: settings.telegram, phone: settings.phone });
    updateTelegramLinks();
    closeSettings();
    toast("រក្សាទុកការកំណត់រួចរាល់");
  });

  $("#resetSettings").addEventListener("click", () => {
    try { localStorage.removeItem(LS_SET); } catch (e) {}
    settings = Object.assign({}, CFG);
    updateTelegramLinks();
    $("#setUsername").value = settings.telegram;
    $("#setPhone").value = settings.phone;
    toast("ត្រឡប់ទៅការកំណត់ដើម");
  });

  /* ══════════════════════════════════════════════════
     GLOBAL UI
     ══════════════════════════════════════════════════ */
  function isAnyOverlayOpen() {
    return !pModal.hidden || !drawer.hidden || !setModal.hidden;
  }
  function lockBody(on) {
    document.body.classList.toggle("is-locked", on);
  }

  const FOCUSABLE = 'a[href],button:not([disabled]),input,textarea,select,[tabindex]:not([tabindex="-1"])';
  document.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
      const panel = !pModal.hidden ? pModal.querySelector(".modal__panel")
        : !drawer.hidden ? drawer.querySelector(".drawer__panel")
        : !setModal.hidden ? setModal.querySelector(".modal__panel") : null;
      if (!panel) return;
      const items = $$(FOCUSABLE, panel).filter((el) => el.offsetParent !== null);
      if (!items.length) return;
      const first = items[0], last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      return;
    }
    if (e.key !== "Escape") return;
    if (!pModal.hidden) { closeProduct(); return; }
    if (!setModal.hidden) { closeSettings(); return; }
    if (!drawer.hidden) { closeCart(); return; }
  });

  /* mobile menu */
  const menuBtn = $("#menuBtn");
  const mobileMenu = $("#mobileMenu");
  menuBtn.addEventListener("click", () => {
    const open = mobileMenu.hidden;
    mobileMenu.hidden = !open;
    menuBtn.setAttribute("aria-expanded", String(open));
  });
  mobileMenu.addEventListener("click", (e) => {
    if (e.target.closest("a")) {
      mobileMenu.hidden = true;
      menuBtn.setAttribute("aria-expanded", "false");
    }
  });

  /* sticky header shadow */
  const topbar = $("#topbar");
  const onScroll = () => topbar.classList.toggle("is-stuck", window.scrollY > 12);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* reveal on scroll */
  function initReveal() {
    const targets = $$(".section-head, .step, .how__cta, .about__figure, .about__body, .contact-card, .contact__cta, .rail-bar");
    targets.forEach((el, i) => {
      el.classList.add("reveal");
      el.style.transitionDelay = Math.min(i % 6, 5) * 70 + "ms";
    });
    if (!("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    targets.forEach((el) => io.observe(el));
  }

  /* ticker duplicate for seamless loop */
  function initTicker() {
    const t = $("#tickerTrack");
    if (!t) return;
    t.innerHTML += t.innerHTML;
  }

  /* ── boot ──────────────────────────────────────────── */
  function boot() {
    const savedSet = read(LS_SET, null);
    if (savedSet) settings = Object.assign(settings, savedSet);
    cart = read(LS_CART, []).filter((it) => product(it.id) && it.qty > 0);
    buyer = Object.assign({ name: "", phone: "", address: "", note: "" }, read(LS_BUYER, {}));

    updateTelegramLinks();
    renderFilters();
    renderRail();
    renderCart();
    initReveal();
    initTicker();

    $("#year").textContent = new Date().getFullYear();
    updateBadge();

    // preload shared images when cart opens (so share stays inside user gesture window)
    $("#cartBtn").addEventListener("click", () => {
      cart.slice(0, 10).forEach((it) => {
        const p = product(it.id);
        if (p) getFile(p).catch(() => {});
      });
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
